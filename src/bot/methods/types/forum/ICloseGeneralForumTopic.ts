/**
 * Используйте этот метод для закрытия открытой темы "General" в супергруппе форума. Бот должен быть администратором в чате для выполнения этой операции и должен иметь права администратора can_manage_topics. Возвращает True в случае успеха.
 *
 * Use this method to close an open 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#closegeneralforumtopic}
 */
export interface ICloseGeneralForumTopic {
  /**
   * Уникальный идентификатор целевой супергруппы или имя пользователя целевой супергруппы (в формате @supergroupusername).
   *
   * Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername).
   */
  chat_id: number | string;
}
