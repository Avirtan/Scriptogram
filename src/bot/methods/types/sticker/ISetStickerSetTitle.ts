/**
 * Используйте этот метод для установки заголовка созданного набора стикеров. При успехе возвращается True.
 *
 * Use this method to set the title of a created sticker set. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#setstickersettitle}
 */
export interface ISetStickerSetTitle {
  /**
   * Название набора стикеров.
   *
   * Sticker set name.
   */
  name: string;

  /**
   * Заголовок набора стикеров, от 1 до 64 символов.
   *
   * Sticker set title, 1-64 characters.
   */
  title: string;
}
