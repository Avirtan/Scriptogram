/**
 * Используйте этот метод для повторного открытия закрытой темы "General" в супергруппе форума. Бот должен быть администратором в чате для выполнения этой операции и должен иметь права администратора can_manage_topics. Тема будет автоматически разблокирована, если она была скрыта. Возвращает True в случае успеха.
 *
 * Use this method to reopen a closed 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. The topic will be automatically unhidden if it was hidden. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#reopengeneralforumtopic}
 */
export interface IReopenGeneralForumTopic {
  /**
   * Уникальный идентификатор целевой супергруппы или имя пользователя целевой супергруппы (в формате @supergroupusername).
   *
   * Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername).
   */
  chat_id: number | string;
}
