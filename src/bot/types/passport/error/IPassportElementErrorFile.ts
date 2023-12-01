/**
 * Представляет проблему со сканированием документа.
 * Ошибка считается устраненной, когда файл с сканированием документа изменяется.
 *
 * Represents an issue with a document scan.
 * The error is considered resolved when the file with the document scan changes.
 *
 * @see {@link https://core.telegram.org/bots/api#passportelementerrorfile}
 */
export interface IPassportElementErrorFile {
  /**
   * Источник ошибки, должен быть file.
   *
   * Error source, must be file.
   */
  source: string;

  /**
   * Раздел Telegram Passport пользователя, в котором произошла проблема.
   *
   * The section of the user's Telegram Passport which has the issue.
   */
  type: string;

  /**
   * Base64-кодированный хэш файла.
   *
   * Base64-encoded file hash.
   */
  file_hash: string;

  /**
   * Сообщение об ошибке.
   *
   * Error message.
   */
  message: string;
}
