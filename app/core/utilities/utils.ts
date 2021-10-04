import { notification } from "antd"
import { NotificationPlacement } from "antd/lib/notification"

export enum NotificationType {
  SUCCESS = "success",
  ERROR = "error",
  WARNING = "warning",
  INFO = "info",
}

const openNotification = (
  type: NotificationType,
  message: string,
  placement: NotificationPlacement,
  description: string
) => {
  if (type === NotificationType.SUCCESS) {
    notification.success({
      message,
      placement,
      description,
    })
  } else if (type === NotificationType.ERROR) {
    notification.error({
      message,
      placement,
      description,
    })
  } else if (type === NotificationType.WARNING) {
    notification.warning({
      message,
      placement,
      description,
    })
  } else if (type === NotificationType.INFO) {
    notification.info({
      message,
      placement,
      description,
    })
  }
}

export { openNotification }
