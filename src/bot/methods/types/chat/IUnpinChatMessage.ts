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
