/**
 * Используйте этот метод для изменения названия темы "General" в супергруппе форума. Бот должен быть администратором в чате для выполнения этой операции и должен иметь права администратора can_manage_topics. Возвращает True в случае успеха.
 *
 * Use this method to edit the name of the 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have can_manage_topics administrator rights. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#editgeneralforumtopic}
 */
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
