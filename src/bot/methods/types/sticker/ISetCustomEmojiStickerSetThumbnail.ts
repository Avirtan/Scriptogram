/**
 * Используйте этот метод для установки обложки для набора стикеров с кастомными эмодзи. При успехе возвращается True.
 *
 * Use this method to set the thumbnail of a custom emoji sticker set. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#setcustomemojistickersetthumbnail}
 */
export interface ISetCustomEmojiStickerSetThumbnail {
  /**
   * Название набора стикеров.
   *
   * Sticker set name.
   */
  name: string;

  /**
   * Идентификатор кастомного эмодзи стикера из набора стикеров. Передайте пустую строку, чтобы удалить обложку и использовать первый стикер в качестве обложки.
   *
   * Custom emoji identifier of a sticker from the sticker set; pass an empty string to drop the thumbnail and use the first sticker as the thumbnail.
   */
  custom_emoji_id?: string;
}
