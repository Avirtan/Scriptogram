/**
 * Используйте этот метод, чтобы удалить сообщение из списка закрепленных сообщений в чате. Если чат не является частным, бот должен быть администратором в чате и иметь право администратора 'can_pin_messages' в супергруппе или 'can_edit_messages' в канале, чтобы этот метод работал. При успехе возвращается True.
 *
 * Use this method to remove a message from the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat and must have the 'can_pin_messages' administrator right in a supergroup or 'can_edit_messages' administrator right in a channel for this method to work. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#unpinchatmessage}
 */
export interface IUnpinChatMessage {
  /**
   * Уникальный идентификатор целевого чата или имя пользователя целевого канала (в формате @channelusername).
   *
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername).
   */
  chat_id: number | string;

  /**
   * Идентификатор сообщения для открепления. Если не указан, будет откреплено самое последнее закрепленное сообщение (по дате отправки).
   *
   * Identifier of a message to unpin. If not specified, the most recent pinned message (by sending date) will be unpinned.
   */
  message_id?: number;
}
