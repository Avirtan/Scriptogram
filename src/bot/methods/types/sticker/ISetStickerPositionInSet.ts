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
