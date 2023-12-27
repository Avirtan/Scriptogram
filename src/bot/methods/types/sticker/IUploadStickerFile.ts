import { IInputFile } from "../../../types";

export interface IUploadStickerFile {
  /**
   * Идентификатор пользователя-владельца файла стикера.
   *
   * User identifier of sticker file owner.
   */
  user_id: number;

  /**
   * Файл со стикером в формате .WEBP, .PNG, .TGS или .WEBM. Подробности см. на странице https://core.telegram.org/stickers по техническим требованиям. Дополнительная информация по отправке файлов ».
   *
   * A file with the sticker in .WEBP, .PNG, .TGS, or .WEBM format. See https://core.telegram.org/stickers for technical requirements. More information on Sending Files ».
   */
  sticker: IInputFile;

  /**
   * Формат стикера. Должен быть одним из значений: “static” (статический), “animated” (анимированный), “video” (видео).
   *
   * Format of the sticker, must be one of “static”, “animated”, “video”.
   */
  sticker_format: string;
}
