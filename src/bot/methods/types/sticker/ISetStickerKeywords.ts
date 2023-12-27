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
