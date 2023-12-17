/**
 * Используйте этот метод для удаления стикера из набора, созданного ботом. При успехе возвращается True.
 *
 * Use this method to delete a sticker from a set created by the bot. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#deletestickerfromset}
 */
export interface IDeleteStickerFromSet {
  /**
   * Идентификатор файла стикера.
   *
   * File identifier of the sticker.
   */
  sticker: string;
}
