/**
 * Представляет проблему со списком сканирований.
 * Ошибка считается устраненной, когда список файлов, содержащих сканы, изменяется.
 *
 * Represents an issue with a list of scans.
 * The error is considered resolved when the list of files containing the scans changes.
 *
 * @see {@link https://core.telegram.org/bots/api#passportelementerrorfiles}
 */
export interface IPassportElementErrorFiles {
  /**
   * Источник ошибки, должен быть files.
   *
   * Error source, must be files.
   */
  source: string;

  /**
   * Раздел Telegram Passport пользователя, в котором произошла проблема.
   *
   * The section of the user's Telegram Passport which has the issue.
   */
  type: string;

  /**
   * Список base64-кодированных хэшей файлов.
   *
   * List of base64-encoded file hashes.
   */
  file_hashes: string[];

  /**
   * Сообщение об ошибке.
   *
   * Error message.
   */
  message: string;
}
