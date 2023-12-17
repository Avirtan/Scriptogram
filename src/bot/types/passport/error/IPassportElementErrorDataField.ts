/**
 * Представляет проблему в одном из полей данных, предоставленных пользователем. Ошибка считается устраненной,
 * когда значение поля изменится.
 *
 * Represents an issue in one of the data fields that was provided by the user. The error is considered resolved
 * when the field's value changes.
 *
 * @see {@link https://core.telegram.org/bots/api#passportelementerrordatafield}
 */
export interface IPassportElementErrorDataField {
  /**
   * Источник ошибки, должен быть data.
   *
   * Error source, must be data.
   */
  source: string;

  /**
   * Раздел Telegram Passport пользователя, в котором произошла ошибка.
   *
   * The section of the user's Telegram Passport which has the error.
   */
  type: string;

  /**
   * Название поля данных, в котором произошла ошибка.
   *
   * Name of the data field which has the error.
   */
  field_name: string;

  /**
   * Base64-кодированный хэш данных.
   *
   * Base64-encoded data hash.
   */
  data_hash: string;

  /**
   * Сообщение об ошибке.
   *
   * Error message.
   */
  message: string;
}
