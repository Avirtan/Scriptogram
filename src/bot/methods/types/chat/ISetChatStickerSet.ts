/**
 * Используйте этот метод для установки нового набора стикеров для супергруппы. Бот должен быть администратором в чате для выполнения этой операции и должен иметь соответствующие права администратора. Используйте поле can_set_sticker_set, которое возвращается опционально при выполнении запросов getChat, чтобы проверить, может ли бот использовать этот метод. Возвращает True в случае успеха.
 *
 * Use this method to set a new group sticker set for a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Use the field can_set_sticker_set optionally returned in getChat requests to check if the bot can use this method. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#setchatstickerset}
 */
export interface ISetChatStickerSet {
  /**
   * Уникальный идентификатор целевой супергруппы или имя пользователя целевой супергруппы (в формате @supergroupusername).
   *
   * Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername).
   */
  chat_id: number | string;

  /**
   * Название набора стикеров, которое нужно установить в качестве набора стикеров для группы.
   *
   * Name of the sticker set to be set as the group sticker set.
   */
  sticker_set_name: string;
}
