import { DeleteOutlined, DownloadOutlined, InboxOutlined, LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { usePrefixCls } from '@formily/antd-v5/esm/__builtins__';
import { connect, mapProps, mapReadPretty } from '@formily/react';
import { Upload as AntdUpload, Button, Modal, Progress, Space, UploadFile } from 'antd';
import cls from 'classnames';
import { saveAs } from 'file-saver';
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import { ReadPretty } from './ReadPretty';
import { isImage, isPdf, toArr, toFileList, toItem, toValue, useUploadProps } from './shared';
import './style.less';
import type { ComposedUpload, DraggerProps, DraggerV2Props, UploadProps } from './type';

export const Upload: ComposedUpload = connect(
  (props: UploadProps) => {
    return <AntdUpload {...useUploadProps(props)} />;
  },
  mapProps({
    value: 'fileList',
  }),
  mapReadPretty(ReadPretty.Upload),
);

Upload.Attachment = connect((props: UploadProps) => {
  const { disabled, multiple, value, onChange } = props;
  const [fileList, setFileList] = useState([]);
  const [sync, setSync] = useState(true);
  const images = fileList;
  const [fileIndex, setFileIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [fileType, setFileType] = useState<'image' | 'pdf'>();
  const { t } = useTranslation();
  const internalFileList = useRef([]);

  function closeIFrameModal() {
    setVisible(false);
  }
  useEffect(() => {
    if (sync) {
      const fileList = toFileList(value);
      setFileList(fileList);
      internalFileList.current = fileList;
    }
  }, [value, sync]);
  const uploadProps = useUploadProps({ ...props });
  return (
    <div>
      <div className={cls('ant-upload-picture-card-wrapper nb-upload')}>
        <div className={'ant-upload-list ant-upload-list-picture-card'}>
          {fileList.map((file) => {
            const handleClick = (e) => {
              e.preventDefault();
              e.stopPropagation();
              const index = fileList.indexOf(file);
              if (isImage(file.extname)) {
                setFileType('image');
                setVisible(true);
                setFileIndex(index);
              } else if (isPdf(file.extname)) {
                setVisible(true);
                setFileIndex(index);
                setFileType('pdf');
              } else {
                saveAs(file.url, `${file.title}${file.extname}`);
              }
            };
            return (
              <div key={file.uid || file.id} className={'ant-upload-list-picture-card-container'}>
                <div className="ant-upload-list-item ant-upload-list-item-done ant-upload-list-item-list-type-picture-card">
                  <div className={'ant-upload-list-item-info'}>
                    <span className="ant-upload-span">
                      <a
                        className="ant-upload-list-item-thumbnail"
                        href={file.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleClick}
                      >
                        {file.imageUrl && (
                          <img src={file.imageUrl} alt={file.title} className="ant-upload-list-item-image" />
                        )}
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ant-upload-list-item-name"
                        title={file.title}
                        href={file.url}
                        onClick={handleClick}
                      >
                        {file.status === 'uploading' ? t('Uploading') : file.title}
                      </a>
                    </span>
                  </div>
                  <span className={'ant-upload-list-item-actions'}>
                    <Space size={3}>
                      <Button
                        size={'small'}
                        type={'text'}
                        icon={<DownloadOutlined />}
                        onClick={() => {
                          saveAs(file.url, `${file.title}${file.extname}`);
                        }}
                      />
                      {!disabled && (
                        <Button
                          size={'small'}
                          type={'text'}
                          icon={<DeleteOutlined />}
                          onClick={() => {
                            setSync(false);
                            setFileList((prevFileList) => {
                              if (!multiple) {
                                onChange(null);
                                return [];
                              }
                              const index = prevFileList.indexOf(file);
                              prevFileList.splice(index, 1);
                              internalFileList.current = internalFileList.current.filter(
                                (item) => item.uid !== file.uid,
                              );
                              onChange(toValue([...prevFileList]));
                              return [...prevFileList];
                            });
                          }}
                        />
                      )}
                    </Space>
                  </span>
                  {file.status === 'uploading' && (
                    <div className={'ant-upload-list-item-progress'}>
                      <Progress strokeWidth={2} type={'line'} showInfo={false} percent={file.percent} />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
          {!disabled && (multiple || toArr(value).length < 1) && (
            <div className={'ant-upload-list-picture-card-container'}>
              <AntdUpload
                {...uploadProps}
                disabled={disabled}
                multiple={multiple}
                listType={'picture-card'}
                fileList={fileList}
                onChange={(info) => {
                  // info.fileList 有 BUG，会导致上传状态一直是 uploading
                  // 所以这里仿照 antd 源码，自己维护一个 fileList
                  const list = updateFileList(info.file, internalFileList.current);
                  internalFileList.current = list;

                  setSync(false);
                  if (multiple) {
                    if (info.file.status === 'done') {
                      onChange(toValue(list));
                    }
                    setFileList(list.map(toItem));
                  } else {
                    if (info.file.status === 'done') {
                      // TODO(BUG): object 的联动有问题，不响应，折中的办法先置空再赋值
                      onChange(null);
                      onChange(info.file?.response?.data);
                    }
                    setFileList([toItem(info.file)]);
                  }
                }}
                showUploadList={false}
              >
                {!disabled && (multiple || toArr(value).length < 1) && (
                  <span>
                    <PlusOutlined />
                    <br /> {t('Upload')}
                  </span>
                )}
              </AntdUpload>
            </div>
          )}
        </div>
      </div>
      {/* 预览图片的弹框 */}
      {visible && fileType === 'image' && (
        <Lightbox
          // discourageDownloads={true}
          mainSrc={images[fileIndex]?.imageUrl}
          nextSrc={images[(fileIndex + 1) % images.length]?.imageUrl}
          prevSrc={images[(fileIndex + images.length - 1) % images.length]?.imageUrl}
          onCloseRequest={() => setVisible(false)}
          onMovePrevRequest={() => setFileIndex((fileIndex + images.length - 1) % images.length)}
          onMoveNextRequest={() => setFileIndex((fileIndex + 1) % images.length)}
          imageTitle={images[fileIndex]?.title}
          toolbarButtons={[
            <button
              style={{ fontSize: 22, background: 'none', lineHeight: 1 }}
              type="button"
              aria-label="Zoom in"
              title="Zoom in"
              className="ril-zoom-in ril__toolbarItemChild ril__builtinButton"
              onClick={(e) => {
                e.preventDefault();
                const file = images[fileIndex];
                saveAs(file.url, `${file.title}${file.extname}`);
              }}
            >
              <DownloadOutlined />
            </button>,
          ]}
        />
      )}

      {visible && fileType === 'pdf' && (
        <Modal
          open={visible}
          title={'PDF - ' + images[fileIndex].title}
          onCancel={closeIFrameModal}
          footer={[
            <Button
              style={{
                textTransform: 'capitalize',
              }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                const file = images[fileIndex];
                saveAs(file.url, `${file.title}${file.extname}`);
              }}
            >
              {t('download')}
            </Button>,
            <Button onClick={closeIFrameModal} style={{ textTransform: 'capitalize' }}>
              {t('close')}
            </Button>,
          ]}
          width={'85vw'}
          centered={true}
        >
          <div
            style={{
              padding: '8px',
              maxWidth: '100%',
              maxHeight: 'calc(100vh - 256px)',
              height: '90vh',
              width: '100%',
              background: 'white',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              overflowY: 'auto',
            }}
          >
            <iframe
              src={images[fileIndex].url}
              style={{
                width: '100%',
                maxHeight: '90vh',
                flex: '1 1 auto',
              }}
            ></iframe>
          </div>
        </Modal>
      )}
    </div>
  );
}, mapReadPretty(ReadPretty.File));

Upload.Dragger = connect(
  (props: DraggerProps) => {
    const { tipContent } = props;
    return (
      <div className={usePrefixCls('upload-dragger')}>
        <AntdUpload.Dragger {...useUploadProps(props)}>
          {tipContent}
          {props.children}
        </AntdUpload.Dragger>
      </div>
    );
  },
  mapProps({
    value: 'fileList',
  }),
);

Upload.DraggerV2 = connect(
  (props: DraggerV2Props) => {
    const { t } = useTranslation();
    const defaultTitle = t('Click or drag file to this area to upload');
    const defaultSubTitle = t('Support for a single or bulk upload, file size should not exceed') + ` 10MB`;
    const { title = defaultTitle, subTitle = defaultSubTitle, useProps } = props;
    const extraProps: Record<string, any> = useProps?.() || {};
    const [loading, setLoading] = useState(false);

    const handleChange = (fileList = []) => {
      const { onChange } = extraProps;
      onChange?.(fileList);

      if (fileList.some((file) => file.status === 'uploading')) {
        setLoading(true);
      } else {
        setLoading(false);
      }
    };

    return (
      <div className={usePrefixCls('upload-dragger')}>
        <AntdUpload.Dragger {...useUploadProps({ ...props, ...extraProps, onChange: handleChange })}>
          <p className="ant-upload-drag-icon">
            {loading ? <LoadingOutlined style={{ fontSize: 36 }} spin /> : <InboxOutlined />}
          </p>
          <p className="ant-upload-text">{title}</p>
          <p className="ant-upload-hint">{subTitle}</p>
        </AntdUpload.Dragger>
      </div>
    );
  },
  mapProps({
    value: 'fileList',
  }),
);

export default Upload;

function updateFileList(file: UploadFile, fileList: (UploadFile | Readonly<UploadFile>)[]) {
  const nextFileList = [...fileList];
  const fileIndex = nextFileList.findIndex(({ uid }) => uid === file.uid);
  if (fileIndex === -1) {
    nextFileList.push(file);
  } else {
    nextFileList[fileIndex] = file;
  }
  return nextFileList;
}
