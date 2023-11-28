/**
 * Этот объект представляет одну специальную сущность в текстовом сообщении.
 * Например, хэштеги, имена пользователей, URL и т. д.
 *
 * This object represents one special entity in a text message.
 * For example, hashtags, usernames, URLs, etc.
 * @see {@link https://core.telegram.org/bots/api#messageentity}
 */
export interface IMessageEntity {
  /**
   * Тип сущности. В настоящее время может быть "mention" (@username), "hashtag" (#hashtag),
   * "cashtag" ($USD), "bot_command" (/start@jobs_bot), "url" (https://telegram.org),
   * "email" (do-not-reply@telegram.org), "phone_number" (+1-212-555-0123), "bold" (bold text),
   * "italic" (italic text), "underline" (underlined text), "strikethrough" (strikethrough text),
   * "spoiler" (spoiler message), "code" (monowidth string), "pre" (monowidth block),
   * "text_link" (for clickable text URLs), "text_mention" (for users without usernames),
   * "custom_emoji" (for inline custom emoji stickers)
   */
  type: string;

  /**
   * Смещение в кодовых единицах UTF-16 до начала сущности.
   *
   * Offset in UTF-16 code units to the start of the entity.
   */
  offset: number;

  /**
   * Длина сущности в кодовых единицах UTF-16.
   *
   * Length of the entity in UTF-16 code units.
   */
  length: number;

  /**
   * Опционально. URL, который будет открыт после нажатия пользователя на текст (только для "text_link").
   *
   * Optional. For "text_link" only, URL that will be opened after user taps on the text.
   */
  url?: string;

  /**
   * Опционально. Упомянутый пользователь (только для "text_mention").
   *
   * Optional. For "text_mention" only, the mentioned user.
   */
  user?: IUser;

  /**
   * Опционально. Язык программирования (только для "pre").
   *
   * Optional. For "pre" only, the programming language of the entity text.
   */
  language?: string;

  /**
   * Опционально. Уникальный идентификатор пользовательской эмодзи (только для "custom_emoji").
   *
   * Optional. For "custom_emoji" only, unique identifier of the custom emoji.
   */
  custom_emoji_id?: string;
}
