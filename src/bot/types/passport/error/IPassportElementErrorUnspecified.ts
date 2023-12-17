/**
 * Представляет проблему в неопределенном месте.
 * Ошибка считается устраненной, когда добавляются новые данные.
 *
 * Represents an issue in an unspecified place.
 * The error is considered resolved when new data is added.
 *
 * @see {@link https://core.telegram.org/bots/api#passportelementerrorunspecified}
 */
export interface IPassportElementErrorUnspecified {
  /**
   * Источник ошибки, должен быть unspecified.
   *
   * Error source, must be unspecified.
   */
  source: string;

  /**
   * Тип элемента Telegram Passport пользователя, в котором есть проблема.
   *
   * Type of element of the user's Telegram Passport which has the issue.
   */
  type: string;

  /**
   * Base64-кодированный хэш элемента.
   *
   * Base64-encoded element hash.
   */
  element_hash: string;

  /**
   * Сообщение об ошибке.
   *
   * Error message.
   */
  message: string;
}
