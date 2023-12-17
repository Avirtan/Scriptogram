/**
 * Используйте этот метод для изменения ключевых слов поиска, назначенных обычному или кастомному эмодзи-стикеру.
 * Стикер должен принадлежать набору, созданному ботом. При успехе возвращается True.
 *
 * Use this method to change search keywords assigned to a regular or custom emoji sticker. The sticker must belong to a sticker set created by the bot. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#setstickerkeywords}
 */
export interface ISetStickerKeywords {
  /**
   * Идентификатор файла стикера.
   *
   * File identifier of the sticker.
   */
  sticker: string;

  /**
   * Список ключевых слов для поиска стикера, в формате JSON. Может содержать от 0 до 20 ключевых слов с общей длиной до 64 символов.
   *
   * A JSON-serialized list of 0-20 search keywords for the sticker with a total length of up to 64 characters.
   */
  keywords?: string[];
}
