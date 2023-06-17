import { CheckOutlined, EnvironmentOutlined, ExpandOutlined } from '@ant-design/icons';
import { css } from '@emotion/css';
import { RecursionField, Schema, useFieldSchema } from '@formily/react';
import {
  ActionContextProvider,
  RecordProvider,
  useCollection,
  useCompile,
  useFilterAPI,
  useProps,
} from '@nocobase/client';
import { useMemoizedFn } from 'ahooks';
import { Button, Space } from 'antd';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { defaultImage, selectedImage } from '../../constants';
import { useMapTranslation } from '../../locale';
import { MapComponent } from '../MapComponent';
import { GoogleMapForwardedRefProps, GoogleMapsComponent, OverlayOptions } from './Map';
import { getIcon } from './utils';

const OVERLAY_KEY = 'google-maps-overlay-id';
const OVERLAY_SELECtED = 'google-maps-overlay-selected';

export const GoogleMapsBlock = (props) => {
  const { fieldNames, dataSource = [], fixedBlock, zoom, setSelectedRecordKeys } = useProps(props);
  const { getField, getPrimaryKey } = useCollection();
  const field = getField(fieldNames?.field);
  const [isMapInitialization, setIsMapInitialization] = useState(false);
  const mapRef = useRef<GoogleMapForwardedRefProps>();
  // const geometryUtils: AMap.IGeometryUtil = mapRef.current?.aMap?.GeometryUtil;
  const [record, setRecord] = useState();
  const [selectingMode, setSelecting] = useState('');
  const { t } = useMapTranslation();
  const compile = useCompile();
  const { isConnected, doFilter } = useFilterAPI();
  const [, setPrevSelected] = useState(null);
  const selectingModeRef = useRef(selectingMode);
  const selectionOverlayRef = useRef<google.maps.Polygon>();
  const overlaysRef = useRef<google.maps.MVCObject[]>([]);
  selectingModeRef.current = selectingMode;

  const setOverlayOptions = (overlay: google.maps.MVCObject, state?: boolean) => {
    const selected = typeof state !== 'undefined' ? !state : overlay.get(OVERLAY_SELECtED);
    overlay.set(OVERLAY_SELECtED, !selected);
    (overlay as google.maps.Marker).setOptions({
      ...(selected
        ? {
            icon: getIcon(defaultImage),
            strokeColor: '#4e9bff',
            fillColor: '#4e9bff',
          }
        : {
            icon: getIcon(selectedImage),
            strokeColor: '#F18b62',
            fillColor: '#F18b62',
          }),
    } as OverlayOptions);
  };

  // selection
  useEffect(() => {
    if (selectingMode !== 'selection') {
      return;
    }
    if (!mapRef.current.drawingManager) {
      mapRef.current.drawingManager = mapRef.current.createDraw(true, {
        editable: true,
        draggable: true,
      });
    }
    const listenerSet = new Set<() => void>();
    mapRef.current.drawingManager.setDrawingMode(google.maps.drawing.OverlayType.POLYGON);
    mapRef.current.drawingManager.addListener('overlaycomplete', (event) => {
      const polygon = event.overlay as google.maps.Polygon;
      mapRef.current.drawingManager.setDrawingMode(null);
      selectionOverlayRef.current = polygon;
      const path = polygon.getPath();
      ['insert_at', 'remove_at', 'set_at'].forEach((key) => {
        listenerSet.add(path.addListener(key, () => {}).remove);
      });
    });
    return () => {
      listenerSet.forEach((i) => {
        i();
      });
      selectionOverlayRef.current?.unbindAll();
      selectionOverlayRef.current?.setMap(null);
      selectionOverlayRef.current = null;
      mapRef.current.drawingManager.setDrawingMode(null);
      mapRef.current.drawingManager.unbindAll();
    };
  }, [selectingMode]);

  useEffect(() => {
    if (selectingMode) {
      return () => {
        if (!selectingModeRef.current) {
          overlaysRef.current.forEach((o) => {
            setOverlayOptions(o, false);
          });
        }
      };
    }
  }, [selectingMode]);

  const onSelectingComplete = useMemoizedFn(() => {
    const overlay = selectionOverlayRef.current;
    const overlays = overlaysRef.current;
    const poly = google.maps.geometry.poly;
    const selectedOverlays = overlays.filter((o) => {
      if (o === overlay || o.get(OVERLAY_KEY) === undefined) return;
      if (o instanceof google.maps.Marker) {
        return poly.containsLocation(o.getPosition(), overlay);
      } else if (o instanceof google.maps.Circle) {
        return poly.containsLocation(o.getCenter(), overlay);
      } else {
        return (o as google.maps.Polygon)
          .getPath()
          .getArray()
          .some((position) => {
            return poly.containsLocation(position, overlay);
          });
      }
    });
    const ids = selectedOverlays.map((o) => {
      setOverlayOptions(o, true);
      return o.get(OVERLAY_KEY);
    });
    setSelectedRecordKeys((lastIds) => ids.concat(lastIds));
    overlay.unbindAll();
    overlay.setMap(null);
    mapRef.current.drawingManager.setDrawingMode(google.maps.drawing.OverlayType.POLYGON);
  });

  useEffect(() => {
    if (!field || !mapRef.current?.map) return;
    const overlays: google.maps.Polygon[] = dataSource
      .map((item) => {
        const data = item[fieldNames?.field];
        if (!data) return;
        const overlay = mapRef.current.setOverlay(field.type, data, {
          strokeColor: '#4e9bff',
          fillColor: '#4e9bff',
          cursor: 'pointer',
          label: {
            fontSize: '16px',
            fontWeight: 'bold',
            text: fieldNames?.marker ? compile(item[fieldNames.marker]) : undefined,
          } as google.maps.MarkerLabel,
        });
        overlay.set(OVERLAY_KEY, item[getPrimaryKey()]);
        return overlay;
      })
      .filter(Boolean);

    overlaysRef.current = overlays;
    mapRef.current.setFitView(overlays);

    const events = overlays.map((o: google.maps.MVCObject) => {
      const onClick = (overlay: google.maps.MVCObject, event) => {
        const id = overlay.get(OVERLAY_KEY);
        if (!id) return;

        const data = dataSource?.find((item) => {
          return id === item[getPrimaryKey()];
        });

        // 筛选区块模式
        if (isConnected) {
          setPrevSelected((prev) => {
            prev && clearSelected(prev);
            if (prev === o) {
              clearSelected(o);

              // 删除过滤参数
              doFilter(null);
              return null;
            } else {
              selectMarker(o);
              doFilter(data[getPrimaryKey()], (target) => target.field || getPrimaryKey(), '$eq');
            }
            return o;
          });

          return;
        }

        if (data) {
          setRecord(data);
        }
      };
      o.addListener('click', onClick.bind(null, o));
      return () => o.unbindAll();
    });

    return () => {
      overlays.forEach((ov) => {
        ov.setMap(null);
        ov.unbindAll();
      });
      events.forEach((e) => e());
    };
  }, [dataSource, isMapInitialization, fieldNames, field.type, isConnected]);

  useEffect(() => {
    setTimeout(() => {
      setSelectedRecordKeys([]);
    });
  }, [dataSource]);

  const mapRefCallback = (instance: GoogleMapForwardedRefProps) => {
    mapRef.current = instance;
    setIsMapInitialization(!!instance?.map);
  };

  return (
    <div
      className={css`
        position: relative;
        height: 100%;
      `}
    >
      {isMapInitialization && (
        <>
          <div
            className={css`
              position: absolute;
              left: 10px;
              top: 10px;
              z-index: 999;
            `}
          >
            <Space direction="vertical">
              <Button
                style={{
                  color: !selectingMode ? '#F18b62' : undefined,
                  borderColor: 'currentcolor',
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelecting('');
                }}
                icon={<EnvironmentOutlined />}
              ></Button>
              <Button
                style={{
                  color: selectingMode === 'selection' ? '#F18b62' : undefined,
                  borderColor: 'currentcolor',
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelecting('selection');
                }}
                icon={<ExpandOutlined />}
              ></Button>
              {selectingMode === 'selection' ? (
                <Button
                  type="primary"
                  icon={<CheckOutlined />}
                  title={t('Confirm selection')}
                  onClick={onSelectingComplete}
                ></Button>
              ) : null}
            </Space>
          </div>
          <MapBlockDrawer record={record} setVisible={setRecord} />
        </>
      )}
      <GoogleMapsComponent
        {...props}
        ref={mapRefCallback}
        style={{ height: fixedBlock ? '100%' : null }}
        zoom={zoom}
        disabled
        block
        overlayCommonOptions={{
          strokeColor: '#F18b62',
          fillColor: '#F18b62',
        }}
      ></GoogleMapsComponent>
    </div>
  );
};

const MapBlockDrawer = (props) => {
  const { setVisible, record } = props;
  const fieldSchema = useFieldSchema();
  const schema: Schema = useMemo(
    () =>
      fieldSchema.reduceProperties((buf, current) => {
        if (current.name === 'drawer') {
          return current;
        }
        return buf;
      }, null),
    [fieldSchema],
  );

  return (
    schema && (
      <ActionContextProvider value={{ visible: !!record, setVisible }}>
        <RecordProvider record={record}>
          <RecursionField schema={schema} name={schema.name} />
        </RecordProvider>
      </ActionContextProvider>
    )
  );
};

function clearSelected(marker: google.maps.MVCObject) {
  // if (marker instanceof google.maps.Marker) {
  //   marker
  // }
  // if ((marker as AMap.Marker).dom) {
  //   (marker as AMap.Marker).dom.style.filter = 'none';
  //   // AMap.Polygon | AMap.Polyline | AMap.Circle 都有 setOptions 方法
  // } else if ((marker as AMap.Polygon).setOptions) {
  //   (marker as AMap.Polygon).setOptions({
  //     strokeColor: '#4e9bff',
  //     fillColor: '#4e9bff',
  //   });
  // }
}

function selectMarker(marker: google.maps.MVCObject) {
  // if ((marker as AMap.Marker).dom) {
  //   (marker as AMap.Marker).dom.style.filter = 'brightness(1.2) contrast(1.2) hue-rotate(180deg)';
  //   // AMap.Polygon | AMap.Polyline | AMap.Circle 都有 setOptions 方法
  // } else if ((marker as AMap.Polygon).setOptions) {
  //   (marker as AMap.Polygon).setOptions({
  //     strokeColor: '#F18b62',
  //     fillColor: '#F18b62',
  //   });
  // }
}
