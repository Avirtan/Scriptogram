/**
 * Этот объект представляет сервисное сообщение о создании новой темы форума в чате.
 *
 * This object represents a service message about a new forum topic created in the chat.
 * @see {@link https://core.telegram.org/bots/api#forumtopiccreated}
 */
export interface IForumTopicCreated {
  /**
   * Название темы.
   *
   * Name of the topic.
   */
  name: string;

  /**
   * Цвет иконки темы в формате RGB.
   *
   * Color of the topic icon in RGB format.
   */
  icon_color: number;

  /**
   * Опционально. Уникальный идентификатор пользовательской эмодзи, отображаемый как иконка темы.
   *
   * Optional. Unique identifier of the custom emoji shown as the topic icon.
   */
  icon_custom_emoji_id?: string;
}
