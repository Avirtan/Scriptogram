export interface IDeleteMessage {
  /**
   * Уникальный идентификатор целевого чата или имя пользователя целевого канала
   * (в формате @channelusername).
   *
   * Unique identifier for the target chat or username of the target channel
   * (in the format @channelusername).
   */
  chat_id: number | string;

  /**
   * Идентификатор удаляемого сообщения.
   *
   * Identifier of the message to delete.
   */
  message_id: number;
}
