/**
 * Используйте этот метод для удаления набора стикеров из супергруппы. Бот должен быть администратором в чате для выполнения этой операции и должен иметь соответствующие права администратора. Используйте поле can_set_sticker_set, которое возвращается опционально при выполнении запросов getChat, чтобы проверить, может ли бот использовать этот метод. Возвращает True в случае успеха.
 *
 * Use this method to delete a group sticker set from a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Use the field can_set_sticker_set optionally returned in getChat requests to check if the bot can use this method. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#deletechatstickerset}
 */
export interface IDeleteChatStickerSet {
  /**
   * Уникальный идентификатор целевой супергруппы или имя пользователя целевой супергруппы (в формате @supergroupusername).
   *
   * Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername).
   */
  chat_id: number | string;
}
