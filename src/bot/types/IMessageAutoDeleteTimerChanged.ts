/**
 * Этот объект представляет сервисное сообщение о изменении настроек автоматического удаления таймера.
 * This object represents a service message about a change in auto-delete timer settings.
 * @see {@link https://core.telegram.org/bots/api#messageautodeletetimerchanged}
 */
export interface IMessageAutoDeleteTimerChanged {
  /**
   * Новое время автоматического удаления сообщений в чате; в секундах.
   * New auto-delete time for messages in the chat; in seconds.
   */
  message_auto_delete_time: number;
}
