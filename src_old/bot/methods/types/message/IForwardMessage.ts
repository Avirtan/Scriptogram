export interface IForwardMessage {
  /**
   * Уникальный идентификатор целевого чата или имя пользователя целевого канала (в формате @channelusername).
   *
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername).
   */
  chat_id: number | string;

  /**
   * Опционально. Уникальный идентификатор целевой темы сообщения (топика) форума; только для форум-супергрупп.
   *
   * Optional. Unique identifier for the target message thread (topic) of the forum; for forum supergroups only.
   */
  message_thread_id?: number;

  /**
   * Уникальный идентификатор чата, откуда было отправлено исходное сообщение (или имя пользователя канала в формате @channelusername).
   *
   * Unique identifier for the chat where the original message was sent (or channel username in the format @channelusername).
   */
  from_chat_id: number | string;

  /**
   * Опционально. Отправляет сообщение без звука.
   *
   * Optional. Sends the message silently. Users will receive a notification with no sound.
   */
  disable_notification?: boolean;

  /**
   * Опционально. Защищает содержание пересылаемого сообщения от пересылки и сохранения.
   *
   * Optional. Protects the contents of the forwarded message from forwarding and saving.
   */
  protect_content?: boolean;

  /**
   * Идентификатор сообщения в указанном чате from_chat_id.
   *
   * Message identifier in the chat specified in from_chat_id.
   */
  message_id: number;
}
