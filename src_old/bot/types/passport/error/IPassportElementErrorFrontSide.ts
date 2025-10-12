/**
 * Представляет проблему с лицевой стороной документа. Ошибка считается устраненной,
 * когда файл с лицевой стороной документа изменяется.
 *
 * Represents an issue with the front side of a document. The error is considered resolved
 * when the file with the front side of the document changes.
 *
 * @see {@link https://core.telegram.org/bots/api#passportelementerrorfrontside}
 */
export interface IPassportElementErrorFrontSide {
  /**
   * Источник ошибки, должен быть front_side.
   *
   * Error source, must be front_side.
   */
  source: string;

  /**
   * Раздел Telegram Passport пользователя, в котором произошла проблема.
   *
   * The section of the user's Telegram Passport which has the issue.
   */
  type: string;

  /**
   * Base64-кодированный хэш файла с лицевой стороной документа.
   *
   * Base64-encoded hash of the file with the front side of the document.
   */
  file_hash: string;

  /**
   * Сообщение об ошибке.
   *
   * Error message.
   */
  message: string;
}
