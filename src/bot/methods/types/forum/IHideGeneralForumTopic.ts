/**
 * Используйте этот метод для скрытия темы "General" в супергруппе форума. Бот должен быть администратором в чате для выполнения этой операции и должен иметь права администратора can_manage_topics. Тема будет автоматически закрыта, если она была открыта. Возвращает True в случае успеха.
 *
 * Use this method to hide the 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. The topic will be automatically closed if it was open. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#hidegeneralforumtopic}
 */
export interface IHideGeneralForumTopic {
  /**
   * Уникальный идентификатор целевой супергруппы или имя пользователя целевой супергруппы (в формате @supergroupusername).
   *
   * Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername).
   */
  chat_id: number | string;
}
