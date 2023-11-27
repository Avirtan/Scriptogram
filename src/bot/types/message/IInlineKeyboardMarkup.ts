/**
 * Этот объект представляет встроенную клавиатуру, которая появляется рядом с сообщением, к которому она относится.
 *
 * This object represents an inline keyboard that appears right next to the message it belongs to.
 * @see {@link https://core.telegram.org/bots/api#inlinekeyboardmarkup}
 */
export interface IInlineKeyboardMarkup {
  /**
   * Массив строк кнопок, каждая строка представлена массивом объектов InlineKeyboardButton.
   *
   * Array of button rows, each represented by an Array of InlineKeyboardButton objects.
   */
  inline_keyboard: Array<Array<IInlineKeyboardButton>>;
}
