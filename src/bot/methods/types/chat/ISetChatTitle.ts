export interface ISetChatTitle {
  /**
   * Уникальный идентификатор целевого чата или имя пользователя целевого канала (в формате @channelusername).
   *
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername).
   */
  chat_id: number | string;

  /**
   * Новое название чата, от 1 до 128 символов.
   *
   * New chat title, 1-128 characters.
   */
  title: string;
}
