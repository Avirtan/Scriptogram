/**
 * Используйте этот метод для перемещения стикера в наборе, созданном ботом, на определенную позицию. При успехе возвращается True.
 *
 * Use this method to move a sticker in a set created by the bot to a specific position. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#setstickerpositioninset}
 */
export interface ISetStickerPositionInSet {
  /**
   * Идентификатор файла стикера.
   *
   * File identifier of the sticker.
   */
  sticker: string;

  /**
   * Новая позиция стикера в наборе, начиная с нуля.
   *
   * New sticker position in the set, zero-based.
   */
  position: number;
}
