export interface ICreateForumTopic {
  /**
   * Уникальный идентификатор целевой супергруппы или имя пользователя целевой супергруппы (в формате @supergroupusername).
   *
   * Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername).
   */
  chat_id: number | string;

  /**
   * Название темы, от 1 до 128 символов.
   *
   * Topic name, 1-128 characters.
   */
  name: string;

  /**
   * Цвет значка темы в формате RGB. В настоящее время должен быть одним из 7322096 (0x6FB9F0), 16766590 (0xFFD67E), 13338331 (0xCB86DB), 9367192 (0x8EEE98), 16749490 (0xFF93B2) или 16478047 (0xFB6F5F).
   *
   * Color of the topic icon in RGB format. Currently, must be one of 7322096 (0x6FB9F0), 16766590 (0xFFD67E), 13338331 (0xCB86DB), 9367192 (0x8EEE98), 16749490 (0xFF93B2), or 16478047 (0xFB6F5F).
   */
  icon_color?: number;

  /**
   * Уникальный идентификатор пользовательского смайлика, отображаемого в качестве значка темы. Используйте getForumTopicIconStickers, чтобы получить все допустимые идентификаторы пользовательских смайликов.
   *
   * Unique identifier of the custom emoji shown as the topic icon. Use getForumTopicIconStickers to get all allowed custom emoji identifiers.
   */
  icon_custom_emoji_id?: string;
}
