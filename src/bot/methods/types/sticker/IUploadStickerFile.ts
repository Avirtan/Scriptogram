import { IInputFile } from "../../../types";

/**
 * Используйте этот метод для загрузки файла стикера для последующего использования в методах createNewStickerSet и addStickerToSet (файл можно использовать несколько раз). В случае успеха возвращается загруженный файл.
 *
 * Use this method to upload a file with a sticker for later use in the createNewStickerSet and addStickerToSet methods (the file can be used multiple times). Returns the uploaded File on success.
 * @see {@link https://core.telegram.org/bots/api#uploadstickerfile}
 */
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
