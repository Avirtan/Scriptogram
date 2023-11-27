/**
 * Этот объект представляет один размер фотографии или файла / миниатюры стикера.
 * This object represents one size of a photo or a file / sticker thumbnail.
 * @see {@link https://core.telegram.org/bots/api#photosize}
 */
export interface IPhotoSize {
  /**
   * Идентификатор файла, который можно использовать для загрузки или повторного использования файла
   * Identifier for this file, which can be used to download or reuse the file
   */
  file_id: string;

  /**
   * Уникальный идентификатор файла, который предположительно остается постоянным со временем и для разных ботов. Не может быть использован для загрузки или повторного использования файла.
   * Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
   */
  file_unique_id: string;

  /**
   * Ширина фотографии
   * Photo width
   */
  width: number;

  /**
   * Высота фотографии
   * Photo height
   */
  height: number;

  /**
   * Размер файла в байтах
   * Optional. File size in bytes
   */
  file_size?: number;
}
