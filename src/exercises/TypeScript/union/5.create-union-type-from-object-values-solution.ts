import { Equal, Expect } from '@/type-utils'

export const notification = {
  ALERT: 'alert',
  WARNING: 'warning',
  DANGER: 'danger',
} as const
type Notification = typeof notification
type NotificationNeedKeys = Exclude<keyof Notification, 'ALERT'>
export type NotificationWD = Omit<Notification, 'ALERT'>[NotificationNeedKeys]
// type NotificationWD = "warning" | "danger"
type tests = [Expect<Equal<NotificationWD, 'warning' | 'danger'>>]
