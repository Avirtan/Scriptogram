export interface IEditGeneralForumTopic {
  /**
   * Уникальный идентификатор целевой супергруппы или имя пользователя целевой супергруппы (в формате @supergroupusername).
   *
   * Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername).
   */
  chat_id: number | string;

  /**
   * Новое название темы, 1-128 символов.
   *
   * New topic name, 1-128 characters.
   */
  name: string;
}
