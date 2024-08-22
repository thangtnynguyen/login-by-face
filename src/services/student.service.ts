import { useEffect, useState } from 'react';
import { get, post } from '../https/http-loading';

const StudentService = {

    getStudents: (request: any = null) => {
        return get('/student/get', request);
    },

    createStudent: (request: any) => {
        return post('/student/create', request);
    },

    getStudentById: (request: any) => {
        return get('/student/get-by-id', request);
    },

    editStudent: (request: any) => {
        return post('/student/edit', request);
    },

    deleteStudent: (request: any) => {
        return post('/student/delete', request);
    },

    deleteMultipleStudent: (request: any) => {
        return post('/student/delete-multiple', request);
    }
};

export default StudentService;
