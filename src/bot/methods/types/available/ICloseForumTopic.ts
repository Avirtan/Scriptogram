/**
 * Используйте этот метод для закрытия открытой темы в чате форума супергруппы. Бот должен быть администратором в чате для выполнения этой операции и должен иметь права администратора can_manage_topics, если он не создатель темы. Возвращает True в случае успеха.
 *
 * Use this method to close an open topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights, unless it is the creator of the topic. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#closeforumtopic}
 */
export interface ICloseForumTopic {
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
