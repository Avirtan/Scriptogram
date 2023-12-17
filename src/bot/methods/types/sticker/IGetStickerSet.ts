/**
 * Используйте этот метод для получения набора стикеров. При успехе возвращается объект StickerSet.
 *
 * Use this method to get a sticker set. On success, a StickerSet object is returned.
 * @see {@link https://core.telegram.org/bots/api#getstickerset}
 */
export interface IGetStickerSet {
  /**
   * Название набора стикеров.
   *
   * Name of the sticker set.
   */
  name: string;
}
