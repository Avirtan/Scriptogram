import { IPassportFile } from ".";

/**
 * Описывает документы или другие элементы Telegram Passport, предоставленные пользователем боту.
 *
 * Describes documents or other Telegram Passport elements shared with the bot by the user.
 *
 * @see {@link https://core.telegram.org/bots/api#encryptedpassportelement}
 */
export interface IEncryptedPassportElement {
  /**
   * Тип элемента. Один из "personal_details", "passport", "driver_license", "identity_card", "internal_passport",
   * "address", "utility_bill", "bank_statement", "rental_agreement", "passport_registration",
   * "temporary_registration", "phone_number", "email".
   *
   * Element type. One of "personal_details", "passport", "driver_license", "identity_card", "internal_passport",
   * "address", "utility_bill", "bank_statement", "rental_agreement", "passport_registration",
   * "temporary_registration", "phone_number", "email".
   */
  type: string;

  /**
   * Данные элемента Telegram Passport, закодированные в base64, предоставленные пользователем. Доступны для типов
   * "personal_details", "passport", "driver_license", "identity_card", "internal_passport" и "address".
   * Могут быть расшифрованы и проверены с помощью сопровождающих EncryptedCredentials.
   *
   * Optional. Base64-encoded encrypted Telegram Passport element data provided by the user, available for
   * "personal_details", "passport", "driver_license", "identity_card", "internal_passport" and "address" types.
   * Can be decrypted and verified using the accompanying EncryptedCredentials.
   */
  data?: string;

  /**
   * Проверенный номер телефона пользователя, доступен только для типа "phone_number".
   *
   * Optional. User's verified phone number, available only for "phone_number" type.
   */
  phone_number?: string;

  /**
   * Проверенный адрес электронной почты пользователя, доступен только для типа "email".
   *
   * Optional. User's verified email address, available only for "email" type.
   */
  email?: string;

  /**
   * Массив зашифрованных файлов с документами, предоставленными пользователем, доступен для типов
   * "utility_bill", "bank_statement", "rental_agreement", "passport_registration" и "temporary_registration".
   * Файлы могут быть расшифрованы и проверены с помощью сопровождающих EncryptedCredentials.
   *
   * Optional. Array of encrypted files with documents provided by the user, available for "utility_bill",
   * "bank_statement", "rental_agreement", "passport_registration" and "temporary_registration" types.
   * Files can be decrypted and verified using the accompanying EncryptedCredentials.
   */
  files?: IPassportFile[];

  /**
   * Зашифрованный файл с передней стороной документа, предоставленный пользователем, доступен для типов
   * "passport", "driver_license", "identity_card" и "internal_passport".
   * Файл может быть расшифрован и проверен с помощью сопровождающих EncryptedCredentials.
   *
   * Optional. Encrypted file with the front side of the document, provided by the user. Available for "passport",
   * "driver_license", "identity_card" and "internal_passport". The file can be decrypted and verified using
   * the accompanying EncryptedCredentials.
   */
  front_side?: IPassportFile;

  /**
   * Зашифрованный файл с обратной стороной документа, предоставленный пользователем. Доступен для типов
   * "driver_license" и "identity_card".
   * Файл может быть расшифрован и проверен с помощью сопровождающих EncryptedCredentials.
   *
   * Optional. Encrypted file with the reverse side of the document, provided by the user. Available for "driver_license"
   * and "identity_card". The file can be decrypted and verified using the accompanying EncryptedCredentials.
   */
  reverse_side?: IPassportFile;

  /**
   * Зашифрованный файл с селфи пользователя с документом, предоставленный пользователем; доступен для типов
   * "passport", "driver_license", "identity_card" и "internal_passport".
   * Файл может быть расшифрован и проверен с помощью сопровождающих EncryptedCredentials.
   *
   * Optional. Encrypted file with the selfie of the user holding a document, provided by the user; available for
   * "passport", "driver_license", "identity_card" and "internal_passport". The file can be decrypted and verified
   * using the accompanying EncryptedCredentials.
   */
  selfie?: IPassportFile;

  /**
   * Массив зашифрованных файлов с переводами документов, предоставленных пользователем. Доступен, если запрошен для
   * типов "passport", "driver_license", "identity_card", "internal_passport", "utility_bill", "bank_statement",
   * "rental_agreement", "passport_registration" и "temporary_registration".
   * Файлы могут быть расшифрованы и проверены с помощью сопровождающих EncryptedCredentials.
   *
   * Optional. Array of encrypted files with translated versions of documents provided by the user. Available if
   * requested for "passport", "driver_license", "identity_card", "internal_passport", "utility_bill",
   * "bank_statement", "rental_agreement", "passport_registration" and "temporary_registration" types. Files can be
   * decrypted and verified using the accompanying EncryptedCredentials.
   */
  translation?: IPassportFile[];

  /**
   * Base64-закодированный хэш элемента для использования в PassportElementErrorUnspecified.
   *
   * Base64-encoded element hash for using in PassportElementErrorUnspecified.
   */
  hash: string;
}
