/**
 * Этот объект представляет аудиофайл, который должен быть обработан как музыка Telegram клиентами.
 * This object represents an audio file to be treated as music by the Telegram clients.
 * @see {@link https://core.telegram.org/bots/api#audio}
 */
export interface IAudio {
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
   * Продолжительность аудио в секундах, заданная отправителем
   * Duration of the audio in seconds as defined by sender
   */
  duration: number;

  /**
   * Опционально. Исполнитель аудио, заданный отправителем или тегами аудио
   * Optional. Performer of the audio as defined by sender or by audio tags
   */
  performer?: string;

  /**
   * Опционально. Название аудио, заданное отправителем или тегами аудио
   * Optional. Title of the audio as defined by sender or by audio tags
   */
  title?: string;

  /**
   * Опционально. Оригинальное имя файла аудио, заданное отправителем
   * Optional. Original filename as defined by sender
   */
  file_name?: string;

  /**
   * Опционально. MIME-тип файла, заданный отправителем
   * Optional. MIME type of the file as defined by sender
   */
  mime_type?: string;

  /**
   * Опционально. Размер файла в байтах. Может быть больше, чем 2^31, и некоторые языки программирования могут иметь трудности/недочеты при интерпретации этого значения. Но у него есть не более 52 значащих бит, поэтому для хранения этого значения безопасны знаковый 64-битный целочисленный или числовой тип с двойной точностью с плавающей запятой.
   * Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value.
   */
  file_size?: number;

  /**
   * Опционально. Миниатюра обложки альбома, к которому принадлежит музыкальный файл
   * Optional. Thumbnail of the album cover to which the music file belongs
   */
  thumbnail?: IPhotoSize;
}
