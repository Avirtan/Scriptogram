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
