import { useContext } from 'react';
import { AxiosRequestConfig } from 'axios';
import { Options } from 'ahooks/lib/useRequest/src/types';
import { default as useReq } from 'ahooks/lib/useRequest';
import { APIClientContext } from '../context';

type FunctionService = (...args: any[]) => Promise<any>;

type ResourceActionOptions<P = any> = {
  resource?: string;
  resourceOf?: any;
  action?: string;
  params?: P;
};

export function useRequest<P>(
  service: AxiosRequestConfig<P> | ResourceActionOptions<P> | FunctionService,
  options?: Options<any, any>,
) {
  const api = useContext(APIClientContext);
  if (typeof service === 'function') {
    return useReq(service, options);
  }
  return useReq(async () => {
    const { url, resource, resourceOf, action, params } = service as any;
    if (url) {
      const response = await api.request(service);
      return response?.data;
    }
    if (resource) {
      const response = await api.resource(resource, resourceOf)[action](params);
      return response?.data?.data;
    }
    return;
  }, options);
}
