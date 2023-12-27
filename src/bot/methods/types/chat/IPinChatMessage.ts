export interface IPinChatMessage {
  /**
   * Уникальный идентификатор целевого чата или имя пользователя целевого канала (в формате @channelusername).
   *
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername).
   */
  chat_id: number | string;

  /**
   * Идентификатор сообщения для закрепления.
   *
   * Identifier of a message to pin.
   */
  message_id: number;

  /**
   * Отключает уведомление всем участникам чата о новом закрепленном сообщении.
   *
   * Pass True if it is not necessary to send a notification to all chat members about the new pinned message.
   */
  disable_notification?: boolean;
}
