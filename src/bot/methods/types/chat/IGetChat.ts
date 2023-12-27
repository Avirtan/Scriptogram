export interface IGetChat {
  /**
   * Уникальный идентификатор целевого чата или имя пользователя целевой супергруппы или канала (в формате @channelusername).
   *
   * Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername).
   */
  chat_id: number | string;
}
