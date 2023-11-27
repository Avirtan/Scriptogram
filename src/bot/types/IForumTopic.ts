/**
 * Представляет тему форума.
 * Represents a forum topic.
 * @see {@link https://core.telegram.org/bots/api#forumtopic}
 */
export interface IForumTopic {
  /**
   * Уникальный идентификатор темы форума.
   * Unique identifier of the forum topic.
   */
  message_thread_id: number;

  /**
   * Название темы.
   * Name of the topic.
   */
  name: string;

  /**
   * Цвет значка темы в формате RGB.
   * Color of the topic icon in RGB format.
   */
  icon_color: number;

  /**
   * Опционально. Уникальный идентификатор пользовательской эмодзи, отображаемой в качестве значка темы.
   * Optional. Unique identifier of the custom emoji shown as the topic icon.
   */
  icon_custom_emoji_id?: string;
}
