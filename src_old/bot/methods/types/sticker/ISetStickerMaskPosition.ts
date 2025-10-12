import { IMaskPosition } from "../../../types";

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
