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
