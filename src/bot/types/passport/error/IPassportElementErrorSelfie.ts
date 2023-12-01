/**
 * Представляет проблему с селфи и документом.
 * Ошибка считается устраненной, когда файл с селфи изменяется.
 *
 * Represents an issue with the selfie with a document.
 * The error is considered resolved when the file with the selfie changes.
 *
 * @see {@link https://core.telegram.org/bots/api#passportelementerrorselfie}
 */
export interface IPassportElementErrorSelfie {
  /**
   * Источник ошибки, должен быть selfie.
   *
   * Error source, must be selfie.
   */
  source: string;

  /**
   * Раздел Telegram Passport пользователя, в котором произошла проблема.
   *
   * The section of the user's Telegram Passport which has the issue.
   */
  type: string;

  /**
   * Base64-кодированный хэш файла с селфи.
   *
   * Base64-encoded hash of the file with the selfie.
   */
  file_hash: string;

  /**
   * Сообщение об ошибке.
   *
   * Error message.
   */
  message: string;
}
