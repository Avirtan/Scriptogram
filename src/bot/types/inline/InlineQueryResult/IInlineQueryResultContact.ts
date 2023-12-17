/**
 * Представляет контакт с номером телефона. По умолчанию этот контакт будет отправлен пользователем. 
 * Также можно использовать input_message_content для отправки сообщения с указанным содержимым вместо контакта.
 *
 * Represents a contact with a phone number. By default, this contact will be sent by the user. 
 * Alternatively, you can use input_message_content to send a message with the specified content instead of the contact.
 *
 * @see {@link https://core.telegram.org/bots/api#inlinequeryresultcontact}
 */
export interface IInlineQueryResultContact {
    /**
     * Тип результата, должен быть contact.
     *
     * Type of the result, must be contact.
     */
    type: string;
  
    /**
     * Уникальный идентификатор этого результата, 1-64 байта.
     *
     * Unique identifier for this result, 1-64 Bytes.
     */
    id: string;
  
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
     * Фамилия контакта.
     *
     * Contact's last name.
     */
    last_name?: string;
  
    /**
     * Дополнительные данные о контакте в формате vCard, 0-2048 байт.
     *
     * Additional data about the contact in the form of a vCard, 0-2048 bytes.
     */
    vcard?: string;
  
    /**
     * Inline-клавиатура, прикрепленная к сообщению.
     *
     * Inline keyboard attached to the message.
     */
    reply_markup?: IInlineKeyboardMarkup;
  
    /**
     * Содержимое сообщения для отправки вместо контакта.
     *
     * Content of the message to be sent instead of the contact.
     */
    input_message_content?: IInputMessageContent;
  
    /**
     * URL эскиза для результата.
     *
     * Url of the thumbnail for the result.
     */
    thumbnail_url?: string;
  
    /**
     * Ширина эскиза.
     *
     * Thumbnail width.
     */
    thumbnail_width?: number;
  
    /**
     * Высота эскиза.
     *
     * Thumbnail height.
     */
    thumbnail_height?: number;
  }
  