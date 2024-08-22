import { notification } from "antd";
type NotificationType = 'success' | 'info' | 'warning' | 'error';

// const [api, contextHolder] = notification.useNotification();

const MESSAGE = (type: NotificationType, title: string, message: string) => {
  notification[type]({
    message: title,
    description: message,
    duration: 5, 
  });
};

export default MESSAGE;
