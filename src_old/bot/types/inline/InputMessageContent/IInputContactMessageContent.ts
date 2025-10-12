/**
 * Представляет содержимое сообщения о контакте, которое будет отправлено в результате встроенного запроса.
 *
 * Represents the content of a contact message to be sent as the result of an inline query.
 *
 * @see {@link https://core.telegram.org/bots/api#inputcontactmessagecontent}
 */
export interface IInputContactMessageContent {
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
     * Необязательно. Фамилия контакта.
     *
     * Optional. Contact's last name.
     */
    last_name?: string;
  
    /**
     * Необязательно. Дополнительные данные о контакте в формате vCard, от 0 до 2048 байт.
     *
     * Optional. Additional data about the contact in the form of a vCard, 0-2048 bytes.
     */
    vcard?: string;
  }
  