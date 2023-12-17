/**
 * Представляет файл, загруженный в Telegram Passport.
 *
 * This object represents a file uploaded to Telegram Passport.
 *
 * @see {@link https://core.telegram.org/bots/api#passportfile}
 */
export interface IPassportFile {
    /**
     * Идентификатор для этого файла, который можно использовать для загрузки или повторного использования файла.
     *
     * Identifier for this file, which can be used to download or reuse the file.
     */
    file_id: string;
  
    /**
     * Уникальный идентификатор этого файла, который должен оставаться постоянным с течением времени
     * и для разных ботов. Нельзя использовать для загрузки или повторного использования файла.
     *
     * Unique identifier for this file, which is supposed to be the same over time and for different bots.
     * Can't be used to download or reuse the file.
     */
    file_unique_id: string;
  
    /**
     * Размер файла в байтах.
     *
     * File size in bytes.
     */
    file_size: number;
  
    /**
     * Время загрузки файла в формате Unix time.
     *
     * Unix time when the file was uploaded.
     */
    file_date: number;
  }
  