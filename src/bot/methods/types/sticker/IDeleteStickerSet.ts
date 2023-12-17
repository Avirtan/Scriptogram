/**
 * Используйте этот метод для удаления набора стикеров, созданного ботом. При успехе возвращается True.
 *
 * Use this method to delete a sticker set that was created by the bot. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#deletestickerset}
 */
export interface IDeleteStickerSet {
  /**
   * Название набора стикеров.
   *
   * Sticker set name.
   */
  name: string;
}
