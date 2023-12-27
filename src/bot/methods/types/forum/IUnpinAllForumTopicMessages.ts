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
