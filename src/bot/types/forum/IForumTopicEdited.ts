/**
 * Этот объект представляет сервисное сообщение об отредактированной теме форума.
 *
 * This object represents a service message about an edited forum topic.
 * @see {@link https://core.telegram.org/bots/api#forumtopicedited}
 */
export interface IForumTopicEdited {
  /**
   * Опционально. Новое название темы, если оно было отредактировано.
   *
   * Optional. New name of the topic, if it was edited.
   */
  name?: string;

  /**
   * Опционально. Новый идентификатор пользовательского смайлика, отображаемого как иконка темы,
   * если он был отредактирован; пустая строка, если иконка была удалена.
   *
   * Optional. New identifier of the custom emoji shown as the topic icon, if it was edited;
   * an empty string if the icon was removed.
   */
  icon_custom_emoji_id?: string;
}
