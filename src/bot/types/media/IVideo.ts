/**
 * Этот объект представляет видеофайл.
 *
 * This object represents a video file.
 * @see {@link https://core.telegram.org/bots/api#video}
 */
export interface IVideo {
  /**
   * Идентификатор файла, который можно использовать для загрузки или повторного использования файла
   *
   * Identifier for this file, which can be used to download or reuse the file
   */
  file_id: string;

  /**
   * Уникальный идентификатор файла, который предположительно остается постоянным со временем и для разных ботов. Не может быть использован для загрузки или повторного использования файла.
   *
   * Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
   */
  file_unique_id: string;

  /**
   * Ширина видео, заданная отправителем
   *
   * Video width as defined by sender
   */
  width: number;

  /**
   * Высота видео, заданная отправителем
   *
   * Video height as defined by sender
   */
  height: number;

  /**
   * Продолжительность видео в секундах, заданная отправителем
   *
   * Duration of the video in seconds as defined by sender
   */
  duration: number;

  /**
   * Опционально. Миниатюра видео
   *
   * Optional. Video thumbnail
   */
  thumbnail?: IPhotoSize;

  /**
   * Опционально. Оригинальное имя файла видео, заданное отправителем
   *
   * Optional. Original filename as defined by sender
   */
  file_name?: string;

  /**
   * Опционально. MIME-тип файла видео, заданный отправителем
   *
   * Optional. MIME type of the file as defined by sender
   */
  mime_type?: string;

  /**
   * Опционально. Размер файла видео в байтах. Может быть больше, чем 2^31, и некоторые языки программирования могут иметь трудности/недочеты при интерпретации этого значения. Но у него есть не более 52 значащих бит, поэтому для хранения этого значения безопасны знаковый 64-битный целочисленный или числовой тип с двойной точностью с плавающей запятой.
   *
   * Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value.
   */
  file_size?: number;
}
