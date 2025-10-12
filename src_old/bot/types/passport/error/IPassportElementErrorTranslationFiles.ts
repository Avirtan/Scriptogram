/**
 * Представляет проблему с переведенной версией документа.
 * Ошибка считается устраненной, когда файл с переводом документа изменяется.
 *
 * Represents an issue with the translated version of a document.
 * The error is considered resolved when a file with the document translation change.
 *
 * @see {@link https://core.telegram.org/bots/api#passportelementerrortranslationfiles}
 */
export interface IPassportElementErrorTranslationFiles {
  /**
   * Источник ошибки, должен быть translation_files.
   *
   * Error source, must be translation_files.
   */
  source: string;

  /**
   * Тип элемента в Telegram Passport пользователя, в котором есть проблема.
   *
   * Type of element of the user's Telegram Passport which has the issue.
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
