import { useEffect, useState } from 'react';
import { get, post } from '../https/http-loading';

const TeacherService = {

    getTeachers: (request: any = null) => {
        return get('/teacher/get', request);
    },

    createTeacher: (request: any) => {
        return post('/teacher/create', request);
    },

    getTeacherById: (request: any) => {
        return get('/teacher/get-by-id', request);
    },

    getTeacherByUserId: (request: any) => {
        return get('teacher/get-by-userId', request);
    },

    editTeacher: (request: any) => {
        return post('/teacher/edit', request);
    },

    deleteTeacher: (request: any) => {
        return post('/teacher/delete', request);
    },

    deleteMultipleTeacher: (request: any) => {
        return post('/teacher/delete-multiple', request);
    }
};

export default TeacherService;
