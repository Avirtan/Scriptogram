/**
 * Представляет проблему с одним из файлов, составляющих перевод документа.
 * Ошибка считается устраненной, когда файл изменяется.
 *
 * Represents an issue with one of the files that constitute the translation of a document.
 * The error is considered resolved when the file changes.
 *
 * @see {@link https://core.telegram.org/bots/api#passportelementerrortranslationfile}
 */
export interface IPassportElementErrorTranslationFile {
  /**
   * Источник ошибки, должен быть translation_file.
   *
   * Error source, must be translation_file.
   */
  source: string;

  /**
   * Тип элемента в Telegram Passport пользователя, в котором есть проблема.
   *
   * Type of element of the user's Telegram Passport which has the issue.
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
