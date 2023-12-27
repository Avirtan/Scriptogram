export interface ISetStickerEmojiList {
  /**
   * Идентификатор файла стикера.
   *
   * File identifier of the sticker.
   */
  sticker: string;

  /**
   * Список эмодзи, связанных со стикером, в формате JSON. Может содержать от 1 до 20 эмодзи.
   *
   * A JSON-serialized list of 1-20 emoji associated with the sticker.
   */
  emoji_list: string[];
}
