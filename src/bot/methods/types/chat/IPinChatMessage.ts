/**
 * Используйте этот метод, чтобы добавить сообщение в список закрепленных сообщений в чате. Если чат не является частным, бот должен быть администратором в чате и иметь право администратора 'can_pin_messages' в супергруппе или 'can_edit_messages' в канале, чтобы этот метод работал. При успехе возвращается True.
 *
 * Use this method to add a message to the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat and must have the 'can_pin_messages' administrator right in a supergroup or 'can_edit_messages' administrator right in a channel for this method to work. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#pinchatmessage}
 */
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
