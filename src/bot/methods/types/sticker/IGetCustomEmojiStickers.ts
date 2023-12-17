/**
 * Используйте этот метод для получения информации о персонализированных стикерах с помощью их идентификаторов. Возвращает массив объектов Sticker.
 *
 * Use this method to get information about custom emoji stickers by their identifiers. Returns an Array of Sticker objects.
 * @see {@link https://core.telegram.org/bots/api#getcustomemojistickers}
 */
export interface IGetCustomEmojiStickers {
  /**
   * Список идентификаторов персонализированных эмодзи.
   *
   * List of custom emoji identifiers. At most 200 custom emoji identifiers can be specified.
   */
  custom_emoji_ids: string[];
}
