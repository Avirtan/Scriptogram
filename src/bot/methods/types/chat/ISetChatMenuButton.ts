import { IMenuButton } from "../../../types";

/**
 * Используйте этот метод, чтобы изменить кнопку меню бота в приватном чате или кнопку меню по умолчанию.
 * Возвращает True при успешном выполнении.
 *
 * Use this method to change the bot's menu button in a private chat, or the default menu button.
 * Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#setchatmenubutton}
 */
export interface ISetChatMenuButton {
  /**
   * Опционально. Уникальный идентификатор для целевого приватного чата.
   * Если не указан, будет изменена кнопка меню по умолчанию бота.
   *
   * Optional. Unique identifier for the target private chat.
   * If not specified, default bot's menu button will be changed.
   */
  chat_id?: number;

  /**
   * Опционально. Объект JSON для новой кнопки меню бота.
   * По умолчанию: MenuButtonDefault.
   *
   * Optional. A JSON-serialized object for the bot's new menu button.
   * Defaults to MenuButtonDefault.
   */
  menu_button?: IMenuButton;
}
