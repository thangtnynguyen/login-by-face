import { get, post, postFormData } from '../https/http-loading';

export const ExamService = {
  getExams: async (request: any = null) => {
    return await get('/exam/get', request);
  },

  getExamsByTeacher: async (request: any = null) => {
    return await get('/exam/get-by-teacher', request);
  },

  createExam: async (request: any) => {
    return await postFormData('/exam/create', request);
  },

  getExamById: async (request: any = null) => {
    return await get('/exam/get-by-id', request);
  },

  getExamResults: async (request: any = null) => {
    return await get('/exam/get-result', request);
  },

  deleteExam: async (request: any) => {
    return await post('/exam/delete', request);
  },

  deleteMultipleExams: async (request: any) => {
    return await post('/exam/delete-multiple', request);
  },

  checkAnswer: async (request: any) => {
    return await post('/exam/check-answers', request);
  },

  addExamResult: async (request: any) => {
    return await post('/exam/add-exam-result', request);
  },

  getExamResultByStudentOne: async (request: any) => {
    return await get('/exam/get-exam-result-by-student-exam-id', request);
  },


};
