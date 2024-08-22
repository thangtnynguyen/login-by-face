import { get, post } from '../https/http-loading';

const ScheduleService = {

    getSchedules: (request: any = null) => {
        return get('/schedule/get', request);
    },

    createSchedule: (request: any) => {
        return post('/schedule/create', request);
    },

    getScheduleByUser: (request: any) => {
        return get('/schedule/get-by-user', request);
    },

    editSchedule: (request: any) => {
        return post('/schedule/edit', request);
    },

    deleteSchedule: (request: any) => {
        return post('/schedule/delete', request);
    },

    deleteMultipleSchedule: (request: any) => {
        return post('/schedule/delete-multiple', request);
    }
};

export default ScheduleService;
