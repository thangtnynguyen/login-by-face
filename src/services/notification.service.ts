import { useEffect, useState } from 'react';
import { get, post } from '../https/http-loading';

const NotificationService = {

    getNotifications: (request: any = null) => {
        return get('/notification/get', request);
    },

    getNotificationsByTeacher: (request: any = null) => {
        return get('/notification/get-by-teacher', request);
    },

    createNotification: (request: any) => {
        return post('/notification/create', request);
    },

    getNotificationById: (request: any) => {
        return get('/notification/get-by-id', request);
    },

    editNotification: (request: any) => {
        return post('/notification/edit', request);
    },

    deleteNotification: (request: any) => {
        return post('/notification/delete', request);
    },

    deleteMultipleNotification: (request: any) => {
        return post('/notification/delete-multiple', request);
    }
};

export default NotificationService;
