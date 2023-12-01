/**
 * Используйте этот метод для удаления всех закрепленных сообщений в теме форума. Бот должен быть администратором в чате для выполнения этой операции и должен иметь права администратора can_pin_messages в супергруппе. Возвращает True в случае успеха.
 *
 * Use this method to clear the list of pinned messages in a forum topic. The bot must be an administrator in the chat for this to work and must have the can_pin_messages administrator right in the supergroup. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#unpinallforumtopicmessages}
 */
export interface IUnpinAllForumTopicMessages {
  /**
   * Уникальный идентификатор целевой супергруппы или имя пользователя целевой супергруппы (в формате @supergroupusername).
   *
   * Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername).
   */
  chat_id: number | string;

  /**
   * Уникальный идентификатор целевой темы сообщения форума.
   *
   * Unique identifier for the target message thread of the forum topic.
   */
  message_thread_id: number;
}
