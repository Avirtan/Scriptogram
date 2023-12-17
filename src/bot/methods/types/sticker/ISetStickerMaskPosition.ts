/**
 * Используйте этот метод для изменения позиции маски маскировочного стикера. Стикер должен принадлежать набору, созданному ботом. При успехе возвращается True.
 *
 * Use this method to change the mask position of a mask sticker. The sticker must belong to a sticker set that was created by the bot. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#setstickermaskposition}
 */
export interface ISetStickerMaskPosition {
  /**
   * Идентификатор файла стикера.
   *
   * File identifier of the sticker.
   */
  sticker: string;

  /**
   * Положение маски на лицах в формате JSON. Оставьте параметр пустым, чтобы удалить положение маски.
   *
   * A JSON-serialized object with the position where the mask should be placed on faces. Omit the parameter to remove the mask position.
   */
  mask_position?: IMaskPosition;
}
