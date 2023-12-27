export interface ISetChatDescription {
  /**
   * Уникальный идентификатор целевого чата или имя пользователя целевого канала (в формате @channelusername).
   *
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername).
   */
  chat_id: number | string;

  /**
   * Новое описание чата, от 0 до 255 символов.
   *
   * New chat description, 0-255 characters.
   */
  description?: string;
}
