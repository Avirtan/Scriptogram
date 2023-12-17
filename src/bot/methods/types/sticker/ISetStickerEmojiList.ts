/**
 * Используйте этот метод для изменения списка эмодзи, назначенных обычному или кастомному эмодзи-стикеру.
 * Стикер должен принадлежать набору, созданному ботом. При успехе возвращается True.
 *
 * Use this method to change the list of emoji assigned to a regular or custom emoji sticker. The sticker must belong to a sticker set created by the bot. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#setstickeremojilist}
 */
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
