/**
 * Используйте этот метод для очистки списка закрепленных сообщений в теме "General" форума. Бот должен быть администратором в чате для выполнения этой операции и должен иметь право администратора can_pin_messages в супергруппе. Возвращает True в случае успеха.
 *
 * Use this method to clear the list of pinned messages in a General forum topic. The bot must be an administrator in the chat for this to work and must have the can_pin_messages administrator right in the supergroup. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#unpinallgeneralforumtopicmessages}
 */
export interface IUnpinAllGeneralForumTopicMessages {
  /**
   * Уникальный идентификатор целевой супергруппы или имя пользователя целевой супергруппы (в формате @supergroupusername).
   *
   * Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername).
   */
  chat_id: number | string;
}
