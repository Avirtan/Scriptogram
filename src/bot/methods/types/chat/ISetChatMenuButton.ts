import { IMenuButton } from "../../../types";

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
