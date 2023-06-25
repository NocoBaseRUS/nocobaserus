import { SyncOutlined } from '@ant-design/icons';
import { css } from '@emotion/css';
import { useFieldSchema } from '@formily/react';
import { Loader } from '@googlemaps/js-api-loader';
import { useAPIClient, useCollection } from '@nocobase/client';
import { useMemoizedFn } from 'ahooks';
import { Alert, Button, Modal, Spin } from 'antd';
import React, { useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { defaultImage } from '../../constants';
import { useMapConfiguration } from '../../hooks';
import { useMapTranslation } from '../../locale';
import { MapEditorType } from '../../types';
import { getCurrentPosition } from '../../utils';
import { Search } from './Search';
import { getIcon } from './utils';

export type OverlayOptions = google.maps.PolygonOptions & google.maps.MarkerOptions & google.maps.PolylineOptions;

export const getDrawingMode = (type: MapEditorType) => {
  if (type === 'point') {
    return 'marker';
  } else if (type === 'lineString') {
    return 'polyline';
  }
  return type;
};

const methodMapping = {
  point: {
    propertyKey: 'position',
    overlay: 'Marker',
  },
  polygon: {
    propertyKey: 'paths',
    overlay: 'Polygon',
  },
  lineString: {
    propertyKey: 'path',
    overlay: 'Polyline',
  },
  circle: {
    transformOptions(value) {
      return {
        center: new google.maps.LatLng(value[1], value[0]),
        radius: value[2],
      } as google.maps.CircleOptions;
    },
    overlay: 'Circle',
  },
};

export interface GoogleMapsComponentProps {
  value?: any;
  onChange?: (value: number[]) => void;
  disabled?: boolean;
  mapType: string;
  /**
   * only ReadPretty
   */
  readonly: string;
  zoom: number;
  type: MapEditorType;
  style?: React.CSSProperties;
  overlayCommonOptions?: OverlayOptions;
  block?: boolean;
}

export interface GoogleMapForwardedRefProps {
  setOverlay: (t: MapEditorType, v: any, o?: OverlayOptions) => google.maps.MVCObject;
  getOverlay: (t: MapEditorType, v: any, o?: OverlayOptions) => google.maps.MVCObject;
  setFitView: (overlays: google.maps.MVCObject[]) => void;
  createDraw: (onlyCreate?: boolean, additionalOptions?: OverlayOptions) => any;
  map: google.maps.Map;
  overlay: google.maps.MVCObject;
  drawingManager: google.maps.drawing.DrawingManager;
}

export const GoogleMapsComponent = React.forwardRef<GoogleMapForwardedRefProps, GoogleMapsComponentProps>(
  (props, ref) => {
    const { value, onChange, block = false, readonly, disabled = block, zoom = 13, overlayCommonOptions } = props;
    const { accessKey } = useMapConfiguration(props.mapType) || {};
    const { t } = useMapTranslation();
    const { getField } = useCollection();
    const fieldSchema = useFieldSchema();
    const drawingManagerRef = useRef<google.maps.drawing.DrawingManager>();
    const map = useRef<google.maps.Map>();
    const overlayRef = useRef<google.maps.Marker | google.maps.Polygon | google.maps.Polyline | google.maps.Circle>();
    const [needUpdateFlag, forceUpdate] = useState([]);
    const [errMessage, setErrMessage] = useState('');
    const api = useAPIClient();

    const type = useMemo<MapEditorType>(() => {
      if (props.type) return props.type;
      const collectionField = getField(fieldSchema?.name);
      return collectionField?.interface;
    }, [props?.type, fieldSchema?.name]);

    const drawingMode = useRef(getDrawingMode(type) as google.maps.drawing.OverlayType);

    const [commonOptions] = useState<OverlayOptions>({
      strokeWeight: 5,
      strokeColor: '#4e9bff',
      fillColor: '#4e9bff',
      strokeOpacity: 1,
      editable: !disabled,
      draggable: !disabled,
      ...overlayCommonOptions,
    });

    const navigate = useNavigate();
    const mapContainerRef = useRef<HTMLDivElement>();
    const cleanupOverlayListenersRef = useRef<Set<() => void>>(new Set());

    const onAndOffListenOverlay = useMemoizedFn((target: typeof overlayRef.current) => {
      cleanupOverlayListenersRef.current.forEach((cb) => {
        cleanupOverlayListenersRef.current.delete(cb);
      });

      if ('getPath' in target) {
        const mvcArray = target.getPath();
        ['insert_at', 'remove_at', 'set_at'].forEach((event) => {
          cleanupOverlayListenersRef.current.add(
            mvcArray.addListener(event, () => {
              onMapChange(target, true);
            }).remove,
          );
        });
      } else if (target instanceof google.maps.Circle) {
        ['center_changed', 'radius_changed'].forEach((event) => {
          cleanupOverlayListenersRef.current.add(
            target.addListener(event, () => {
              onMapChange(target, true);
            }).remove,
          );
        });
      }
    });

    const toRemoveOverlay = useMemoizedFn(() => {
      if (overlayRef.current) {
        overlayRef.current.unbindAll();
        overlayRef.current.setMap(null);
      }
      if (type !== 'point') {
        drawingManagerRef.current?.setDrawingMode(null);
      }
    });

    const toCenter = useMemoizedFn((position) => {
      if (map.current) {
        map.current.setCenter(position);
        map.current.setZoom(zoom);
      }
    });

    const setupOverlay = useMemoizedFn((nextOverlay: typeof overlayRef.current) => {
      toRemoveOverlay();
      onAndOffListenOverlay(nextOverlay);
      overlayRef.current = nextOverlay;
    });

    const setFitView = useMemoizedFn((overlays: google.maps.MVCObject[]) => {
      const bounds = new google.maps.LatLngBounds();

      overlays.forEach((overlay) => {
        if (overlay instanceof google.maps.Marker) {
          bounds.extend(overlay.getPosition());
        } else if (overlay instanceof google.maps.Polyline || overlay instanceof google.maps.Polygon) {
          const path = overlay.getPath();
          for (let i = 0; i < path.getLength(); i++) {
            bounds.extend(path.getAt(i));
          }
        } else if (overlay instanceof google.maps.Circle) {
          bounds.union(overlay.getBounds());
        }
      });

      map.current.fitBounds(bounds);
      if (type === 'point') {
        requestAnimationFrame(() => {
          map.current.setZoom(zoom);
        });
      }
    });

    const onFocusOverlay = () => {
      if (overlayRef.current) {
        setFitView([overlayRef.current]);
      }
    };

    const onMapChange = useMemoizedFn((target: typeof overlayRef.current, onlyChange = false) => {
      let nextValue = null;

      if (type === 'point') {
        const { lat, lng } = (target as google.maps.Marker).getPosition();
        nextValue = [lng(), lat()];
      } else if (type === 'polygon' || type === 'lineString') {
        nextValue = (target as google.maps.Polyline)
          .getPath()
          .getArray()
          .map((item) => [item.lng(), item.lat()]);
        if (nextValue.length < 2) {
          return;
        }
      } else if (type === 'circle') {
        const center = (target as google.maps.Circle).getCenter();
        const radius = (target as google.maps.Circle).getRadius();
        nextValue = [center.lng(), center.lat(), radius];
      }

      if (!onlyChange) {
        setupOverlay(target);
      }
      onChange?.(nextValue);
    });

    const createDraw = useMemoizedFn((onlyCreate = false, additionalOptions?: OverlayOptions) => {
      const currentOptions = {
        ...commonOptions,
        ...additionalOptions,
        map: map.current,
      };
      drawingManagerRef.current = new google.maps.drawing.DrawingManager({
        drawingMode: drawingMode.current,
        drawingControl: false,
        markerOptions: { ...currentOptions, icon: getIcon(defaultImage) },
        polygonOptions: currentOptions,
        polylineOptions: currentOptions,
        circleOptions: currentOptions,
        map: map.current,
      });

      if (!onlyCreate) {
        drawingManagerRef.current.addListener('overlaycomplete', (event: { type: string; overlay: unknown }) => {
          const overlay = event.overlay as google.maps.Marker;
          onMapChange(overlay);
        });
      }
      return drawingManagerRef.current;
    });

    const getOverlay = useMemoizedFn((t = type, v = value, o?: OverlayOptions) => {
      const mapping = methodMapping[t];
      if (!mapping) {
        return;
      }
      const options = { ...commonOptions, icon: getIcon(defaultImage), ...o };

      if ('transformOptions' in mapping) {
        Object.assign(options, mapping.transformOptions(v));
      } else if ('propertyKey' in mapping) {
        options[mapping.propertyKey] = Array.isArray(v[0])
          ? v.map((item) => {
              return new google.maps.LatLng(item[1], item[0]);
            })
          : new google.maps.LatLng(v[1], v[0]);
      }

      const overlay = new google.maps[mapping.overlay](options);
      return overlay;
    });

    const setOverlay = useMemoizedFn((t = type, v = value, o?: OverlayOptions) => {
      if (!map.current) return;
      const nextOverlay = getOverlay(t, v, {
        ...o,
        map: map.current,
      }) as google.maps.Polyline;
      return nextOverlay;
    });

    // edit mode
    useEffect(() => {
      if (!map.current) return;
      if (!value || (!readonly && overlayRef.current)) {
        return;
      }
      const nextOverlay = setOverlay();
      setupOverlay(nextOverlay);
      // Focus on the overlay
      setFitView([nextOverlay]);
    }, [value, needUpdateFlag, type, disabled, readonly, setOverlay, setFitView, setupOverlay]);

    useEffect(() => {
      if (!accessKey || map.current || !mapContainerRef.current) return;

      const loader = new Loader({
        apiKey: accessKey,
        version: 'weekly',
        language: api.auth.getLocale(),
      });

      Promise.all([loader.importLibrary('drawing'), loader.importLibrary('core'), loader.importLibrary('geometry')])
        .then(async () => {
          const center = await getCurrentPosition();
          map.current = new google.maps.Map(mapContainerRef.current, {
            zoom,
            center,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            zoomControl: false,
            streetViewControl: false,
            panControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          });
          setErrMessage('');
          forceUpdate([]);
        })
        .catch((err) => {
          if (err instanceof Error) {
            setErrMessage(err.message);
            return;
          }
        });

      return () => {
        map.current?.unbindAll();
        map.current = null;
        drawingManagerRef.current?.unbindAll();
      };
    }, [accessKey, api.auth, type, zoom]);

    useEffect(() => {
      if (!map.current || !type || disabled || drawingManagerRef.current) return;
      createDraw();
    }, [createDraw, disabled, needUpdateFlag, type]);

    useImperativeHandle(ref, () => ({
      setOverlay,
      getOverlay,
      setFitView,
      createDraw,
      map: map.current,
      overlay: overlayRef.current,
      drawingManager: drawingManagerRef.current,
    }));

    const onReset = useMemoizedFn(() => {
      const ok = () => {
        toRemoveOverlay();
        drawingManagerRef.current.setDrawingMode(drawingMode.current);
        onChange?.(null);
      };
      Modal.confirm({
        title: t('Clear the canvas'),
        content: t('Are you sure to clear the canvas?'),
        okText: t('Confirm'),
        cancelText: t('Cancel'),
        onOk() {
          ok();
        },
      });
    });

    if (!accessKey || errMessage) {
      return (
        <Alert
          action={
            <Button type="primary" onClick={() => navigate('/admin/settings/map/configuration?tab=google')}>
              {t('Go to the configuration page')}
            </Button>
          }
          message={errMessage || t('Please configure the AccessKey and SecurityJsCode first')}
          type="error"
        />
      );
    }

    return (
      <div
        className={css`
          position: relative;
          height: 500px;
        `}
      >
        {!map.current && (
          <div
            className={css`
              position: absolute;
              inset: 0;
              display: flex;
              align-items: center;
              justify-content: center;
            `}
          >
            <Spin />
          </div>
        )}
        {!disabled ? (
          <>
            {map.current && <Search toCenter={toCenter} mapRef={map} />}
            <div
              className={css`
                position: absolute;
                bottom: 80px;
                right: 20px;
                z-index: 10;
              `}
            >
              <Button
                onClick={onFocusOverlay}
                disabled={!overlayRef.current}
                type="primary"
                shape="round"
                size="large"
                icon={<SyncOutlined />}
              ></Button>
            </div>
            {type === 'lineString' ? (
              <div
                className={css`
                  position: absolute;
                  bottom: 20px;
                  left: 10px;
                  z-index: 2;
                  pointer-events: none;
                `}
              >
                <Alert message={t('Connecting the end point to the start point ends the drawing')} type="info" />
              </div>
            ) : null}
            <div
              className={css`
                position: absolute;
                bottom: 20px;
                right: 20px;
                z-index: 2;
              `}
            >
              <Button
                disabled={!value}
                style={{
                  height: '40px',
                }}
                onClick={onReset}
                type="primary"
                danger
              >
                {t('Clear')}
              </Button>
            </div>
          </>
        ) : null}
        <div
          ref={mapContainerRef}
          className={css`
            width: 100%;
            height: 100%;
          `}
          style={props?.style}
        ></div>
      </div>
    );
  },
);
