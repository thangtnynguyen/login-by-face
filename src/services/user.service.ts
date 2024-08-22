import { get, getAuth, post, postFormData, postFormDataAuth } from '../https/http-loading';

const UserService = {

    getUserInfo: (request: any = null) => {
        return getAuth('/user/user-info', request);
    },

    editUserInfo: (request: any) => {
        return postFormDataAuth('/user/edit-user-info', request);
    },

   
};

export default UserService;
