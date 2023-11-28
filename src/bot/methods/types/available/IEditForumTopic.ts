/**
 * Используйте этот метод для изменения названия и значка темы в чате форума супергруппы. Бот должен быть администратором в чате для выполнения этой операции и должен иметь права администратора can_manage_topics, если он не создатель темы. Возвращает True в случае успеха.
 *
 * Use this method to edit name and icon of a topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have can_manage_topics administrator rights, unless it is the creator of the topic. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#editforumtopic}
 */
export interface IEditForumTopic {
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

  /**
   * Новое название темы, от 0 до 128 символов. Если не указано или пусто, будет сохранено текущее название темы.
   *
   * New topic name, 0-128 characters. If not specified or empty, the current name of the topic will be kept.
   */
  name?: string;

  /**
   * Новый уникальный идентификатор пользовательского смайлика, отображаемого в качестве значка темы. Используйте getForumTopicIconStickers, чтобы получить все допустимые идентификаторы пользовательских смайликов. Передайте пустую строку, чтобы удалить значок. Если не указано, будет сохранен текущий значок.
   *
   * New unique identifier of the custom emoji shown as the topic icon. Use getForumTopicIconStickers to get all allowed custom emoji identifiers. Pass an empty string to remove the icon. If not specified, the current icon will be kept.
   */
  icon_custom_emoji_id?: string;
}
