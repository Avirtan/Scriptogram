/**
 * Этот объект представляет голосовое сообщение.
 *
 * This object represents a voice note.
 * @see {@link https://core.telegram.org/bots/api#voice}
 */
export interface IVoice {
  /**
   * Идентификатор файла, который можно использовать для загрузки или повторного использования файла.
   *
   * Identifier for this file, which can be used to download or reuse the file.
   */
  file_id: string;

  /**
   * Уникальный идентификатор файла, который предположительно остается постоянным со временем и для разных ботов. Не может быть использован для загрузки или повторного использования файла.
   *
   * Unique identifier for this file, which is supposed to be the same over time and for different bots. Can't be used to download or reuse the file.
   */
  file_unique_id: string;

  /**
   * Длительность аудио в секундах, заданная отправителем.
   *
   * Duration of the audio in seconds as defined by sender.
   */
  duration: number;

  /**
   * Опционально. MIME-тип файла, заданный отправителем.
   *
   * Optional. MIME type of the file as defined by sender.
   */
  mime_type?: string;

  /**
   * Опционально. Размер файла в байтах. Может быть больше, чем 2^31, и некоторые языки программирования могут иметь трудности/недочеты при интерпретации этого значения. Но у него есть не более 52 значащих бит, поэтому для хранения этого значения безопасны знаковый 64-битный целочисленный или числовой тип с двойной точностью с плавающей запятой.
   *
   * Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value.
   */
  file_size?: number;
}
