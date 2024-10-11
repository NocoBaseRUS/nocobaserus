/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

import { observable, autorun, reaction } from '@formily/reactive';
import { Channel } from '../../types';
import { getAPIClient } from '../utils';
import { merge } from '@nocobase/utils/client';
import { userIdObs } from './user';

export type ChannelStatus = 'all' | 'read' | 'unread';
export enum InappChannelStatusEnum {
  all = 'all',
  read = 'read',
  unread = 'unread',
}
export const channelMapObs = observable<{ value: Record<string, Channel> }>({ value: {} });
export const isFetchingChannelsObs = observable<{ value: boolean }>({ value: false });
export const channelCountObs = observable<{ value: number }>({ value: 0 });
export const channelStatusFilterObs = observable<{ value: ChannelStatus }>({ value: 'all' });
export const channelListObs = observable.computed(() => {
  const channels = Object.values(channelMapObs.value)
    .filter((channel) => channel.userId == String(userIdObs.value ?? ''))
    .filter((channel) => {
      if (channelStatusFilterObs.value === 'read') return channel.unreadMsgCnt === 0;
      else if (channelStatusFilterObs.value === 'unread') return channel.unreadMsgCnt > 0;
      else return true;
    })
    .sort((a, b) => (a.latestMsgReceiveTimestamp > b.latestMsgReceiveTimestamp ? -1 : 1));
  return channels;
}) as { value: Channel[] };

export const showChannelLoadingMoreObs = observable.computed(() => {
  if (channelListObs.value.length < channelCountObs.value) return true;
  else return false;
}) as { value: boolean };
export const selectedChannelIdObs = observable<{ value: string | null }>({ value: null });

export const fetchChannels = async (params: any) => {
  const apiClient = getAPIClient();
  isFetchingChannelsObs.value = true;
  const res = await apiClient.request({
    url: 'myInAppChannels:list',
    method: 'get',
    params: merge({ filter: { status: channelStatusFilterObs.value } }, params ?? {}),
  });
  const channels = res.data?.data;
  if (Array.isArray(channels)) {
    channels.forEach((channel: Channel) => {
      channelMapObs.value[channel.id] = channel;
    });
  }
  const count = res.data?.meta?.count;
  if (count >= 0) channelCountObs.value = count;
  isFetchingChannelsObs.value = false;
};

autorun(() => {
  if (!selectedChannelIdObs.value && channelListObs.value[0]?.id) {
    selectedChannelIdObs.value = channelListObs.value[0].id;
  } else if (channelListObs.value.length === 0) {
    selectedChannelIdObs.value = null;
  } else if (
    channelListObs.value.length > 0 &&
    !channelListObs.value.find((channel) => channel.id === selectedChannelIdObs.value)
  ) {
    selectedChannelIdObs.value = null;
  }
});

reaction(
  () => channelStatusFilterObs.value,
  () => {
    if (channelListObs.value[0]?.id) {
      selectedChannelIdObs.value = channelListObs.value[0].id;
    }
  },
  { fireImmediately: true },
);
