/**
 * Этот объект представляет контакт телефона.
 *
 * This object represents a phone contact.
 * @see {@link https://core.telegram.org/bots/api#contact}
 */
export interface IContact {
  /**
   * Номер телефона контакта.
   *
   * Contact's phone number.
   */
  phone_number: string;

  /**
   * Имя контакта.
   *
   * Contact's first name.
   */
  first_name: string;

  /**
   * Опционально. Фамилия контакта.
   *
   * Optional. Contact's last name.
   */
  last_name?: string;

  /**
   * Опционально. Идентификатор пользователя контакта в Telegram. Этот номер может иметь более 32 значимых бит и некоторые языки программирования могут иметь трудности / молчаливые дефекты при его интерпретации. Но у него есть не более 52 значимых бит, поэтому безопасны для хранения этого идентификатора 64-разрядные целые числа или числа двойной точности с плавающей запятой.
   *
   * Optional. Contact's user identifier in Telegram. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier.
   */
  user_id?: number;

  /**
   * Опционально. Дополнительные данные о контакте в виде vCard.
   *
   * Optional. Additional data about the contact in the form of a vCard.
   */
  vcard?: string;
}
