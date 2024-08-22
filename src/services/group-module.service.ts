import { get, getExel, post, postFormData } from '../https/http-loading';

const GroupModuleService = {

    getGroupModules: async (request: any) => {
        return await get('/group-module/get', request);
    },

    getGroupModulesByTeacher: async (request: any) => {
        return await get('/group-module/get-by-teacher', request);
    },

    createGroupModules: async (request: any) => {
        return await post('/group-module/create', request);
    },

    editGroupModules: async (request: any) => {
        return await post('/group-module/edit', request);
    },

    hideGroupModules: async (request: any) => {
        return await post('/group-module/hide', request);
    },

    deleteGroupModule: async (request: any) => {
        return await post('/group-module/delete', request);
    },

    getStudentsGroupModule: async (request: any) => {
        return await get('/group-module/get-students', request);
    },

    getGroupModule: async (request: any) => {
        return await get('/group-module/get-by-id', request);
    },

    getGroupModuleByExamId : async(request: any) => {
        return await get('/group-module/get-by-exam-id', request);
    },


    exportExcelStudents: async (request: any) => {
        return await get('/group-module/export-excel-students', request);
    },

    exportExcelScoreStudents: async (request: any) => {
        return await get('/group-module/export-excel-score-students', request);
    },

    addStudentGroupModule: async (request: any) => {
        return await post('/group-module/add-student', request);
    },

    joinGroupModuleByInviteCode: async (request: any) => {
        return await post('/group-module/join-by-code', request);
    },

    generateInvitationCode: async (request: any) => {
        return await post('/group-module/generate-invitation-code', request);
    },

    importStudentsExcel: async (request: any) => {
        return await postFormData('/group-module/import-students-excel', request);
    },

    removeStudentGroupModule: async (request: any) => {
        return await post('/group-module/remove-student', request);
    },

    removeStudentsGroupModule: async (request: any) => {
        return await post('/group-module/remove-students', request);
    },

    getExamsByGroupModule: async (request: any) => {
        return await get('/group-module/get-exams', request);
    },

    getNotificationsByGroupModule: async (request: any) => {
        return await get('/group-module/get-notifications', request);
    },

    submitSchedule: async (request: any) => {
        return await post('/schedule/create-list-schedule', request);
    },

    getSchedule: async (request: any) => {
        return await get('/schedule/get', request);
    },

    getGroupModuleByUser: async (request: any) => {
        return await get('/group-module/get-group-module-by-user', request);
    },

    createAttendence: async (request: any) => {
        return await post('/attendence/create-list-attendence', request);
    },

    getAttendenceByScheduleId: async (request: any) => {
        return await get('/attendence/get', request);
    },

    // exportExcelAttendenceSheet: async (request: any) => {
    //     return await get('/schedule/export-excel-attendence-sheet', { ...request, responseType: 'blob' });
    // },


    exportExcelAttendenceSheet: async (request: any) => {
        try {
            const response = await getExel('/schedule/export-excel-attendence-sheet', request, { responseType: 'blob' });
            return response;
        } catch (error) {
            console.error('Error exporting Excel attendance sheet:', error);
            throw error;
        }
    },
};

export default GroupModuleService;