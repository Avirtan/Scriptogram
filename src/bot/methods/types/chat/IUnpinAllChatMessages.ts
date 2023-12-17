/**
 * Используйте этот метод, чтобы очистить список закрепленных сообщений в чате. Если чат не является частным, бот должен быть администратором в чате и иметь право администратора 'can_pin_messages' в супергруппе или 'can_edit_messages' в канале, чтобы этот метод работал. При успехе возвращается True.
 *
 * Use this method to clear the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat and must have the 'can_pin_messages' administrator right in a supergroup or 'can_edit_messages' administrator right in a channel for this method to work. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#unpinallchatmessages}
 */
export interface IUnpinAllChatMessages {
  /**
   * Уникальный идентификатор целевого чата или имя пользователя целевого канала (в формате @channelusername).
   *
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername).
   */
  chat_id: number | string;
}
