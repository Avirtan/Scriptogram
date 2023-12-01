/**
 * Используйте этот метод, чтобы получить текущее значение кнопки меню бота в приватном чате или кнопки меню по умолчанию.
 * Возвращает MenuButton при успешном выполнении.
 *
 * Use this method to get the current value of the bot's menu button in a private chat, or the default menu button.
 * Returns MenuButton on success.
 * @see {@link https://core.telegram.org/bots/api#getchatmenubutton}
 */
export interface IGetChatMenuButton {
  /**
   * Опционально. Уникальный идентификатор для целевого приватного чата.
   * Если не указан, будет возвращена кнопка меню по умолчанию бота.
   *
   * Optional. Unique identifier for the target private chat.
   * If not specified, the default bot's menu button will be returned.
   */
  chat_id?: number;
}
