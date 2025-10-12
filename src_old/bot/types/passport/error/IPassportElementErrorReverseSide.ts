/**
 * Представляет проблему с обратной стороной документа.
 * Ошибка считается устраненной, когда файл с обратной стороной документа изменяется.
 *
 * Represents an issue with the reverse side of a document.
 * The error is considered resolved when the file with reverse side of the document changes.
 *
 * @see {@link https://core.telegram.org/bots/api#passportelementerrorreverseside}
 */
export interface IPassportElementErrorReverseSide {
  /**
   * Источник ошибки, должен быть reverse_side.
   *
   * Error source, must be reverse_side.
   */
  source: string;

  /**
   * Раздел Telegram Passport пользователя, в котором произошла проблема.
   *
   * The section of the user's Telegram Passport which has the issue.
   */
  type: string;

  /**
   * Base64-кодированный хэш файла с обратной стороной документа.
   *
   * Base64-encoded hash of the file with the reverse side of the document.
   */
  file_hash: string;

  /**
   * Сообщение об ошибке.
   *
   * Error message.
   */
  message: string;
}
