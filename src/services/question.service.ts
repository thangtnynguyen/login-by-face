import { get, post, postFormData } from '../https/http-loading'; // Đường dẫn tới service HTTP đã chỉnh sửa

export const QuestionService = {
  getQuestions: async (request: any = null) => {
    return await get('/question/get', request);
  },

  createQuestion: async (request: any) => {
    return await post('/question/create', request);
  },

  getQuestionById: async (request: any) => {
    return await get('/question/get-by-id', { id: request.id });
  },

  editQuestion: async (request: any) => {
    return await post('/question/edit', request);
  },

  deleteQuestion: async (request: any) => {
    return await post('/question/delete', request);
  },

  deleteMultipleQuestion: async (request: any) => {
    return await post('/question/delete-multiple', request);
  },

  checkAnswer: async (request: any) => {
    return await post('/question/check-answers', request);
  },

  importQuestionsExcel: async (request: any) => {
    return await postFormData('/question/import-questions-excel', request);
  },

 
};
