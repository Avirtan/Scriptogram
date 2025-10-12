/**
 * Этот объект представляет кнопку встроенной клавиатуры, переключающую текущего пользователя в режим инлайн в выбранном чате,
 * с опциональным значением запроса по умолчанию.
 *
 * This object represents an inline button that switches the current user to inline mode in a chosen chat, with an optional default inline query.
 * @see {@link https://core.telegram.org/bots/api#switchinlinequerychosenchat}
 */
export interface ISwitchInlineQueryChosenChat {
  /**
   * Опционально. Запрос по умолчанию для ввода в поле ввода.
   *
   * Optional. The default inline query to be inserted in the input field.
   */
  query?: string;

  /**
   * Опционально. Разрешает выбирать чаты с пользователями.
   *
   * Optional. True, if private chats with users can be chosen.
   */
  allow_user_chats?: boolean;

  /**
   * Опционально. Разрешает выбирать чаты с ботами.
   *
   * Optional. True, if private chats with bots can be chosen.
   */
  allow_bot_chats?: boolean;

  /**
   * Опционально. Разрешает выбирать групповые и супергрупповые чаты.
   *
   * Optional. True, if group and supergroup chats can be chosen.
   */
  allow_group_chats?: boolean;

  /**
   * Опционально. Разрешает выбирать канальные чаты.
   *
   * Optional. True, if channel chats can be chosen.
   */
  allow_channel_chats?: boolean;
}
