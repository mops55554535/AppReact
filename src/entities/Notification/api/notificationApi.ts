import { Article } from 'entities/Article';
import { rtkApi } from 'shared/api/rtkApi';
import { Notification } from '../model/types/notificationTypes';

const notificationApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getNotifications: build.query<Notification[], null>({
            query: (limit) => ({
                url: '/notifications',
            }),
        }),
    }),
});
export const useNotifications = notificationApi.useGetNotificationsQuery;
