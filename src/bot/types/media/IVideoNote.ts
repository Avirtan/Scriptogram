/**
 * Этот объект представляет видеосообщение (доступно в приложениях Telegram начиная с версии 4.0).
 * This object represents a video message (available in Telegram apps as of v.4.0).
 * @see {@link https://core.telegram.org/bots/api#videonote}
 */
export interface IVideoNote {
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
   * Ширина и высота видео (диаметр видеосообщения), заданная отправителем
   * Video width and height (diameter of the video message) as defined by sender
   */
  length: number;

  /**
   * Продолжительность видео в секундах, заданная отправителем
   * Duration of the video in seconds as defined by sender
   */
  duration: number;

  /**
   * Опционально. Миниатюра видеосообщения
   * Optional. Video thumbnail
   */
  thumbnail?: IPhotoSize;

  /**
   * Опционально. Размер файла видеосообщения в байтах
   * Optional. File size in bytes
   */
  file_size?: number;
}
