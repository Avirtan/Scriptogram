/**
 * Представляет ссылку на стикер, хранящийся на серверах Telegram. По умолчанию этот стикер будет отправлен пользователем.
 * В качестве альтернативы можно использовать input_message_content для отправки сообщения с указанным содержимым вместо стикера.
 *
 * Represents a link to a sticker stored on the Telegram servers.
 * By default, this sticker will be sent by the user.
 * Alternatively, you can use input_message_content to send a message with the specified content instead of the sticker.
 *
 * @see {@link https://core.telegram.org/bots/api#inlinequeryresultcachedsticker}
 */
export interface IInlineQueryResultCachedSticker {
    /**
     * Тип результата, должен быть sticker.
     *
     * Type of the result, must be sticker.
     */
    type: string;
  
    /**
     * Уникальный идентификатор этого результата, 1-64 байта.
     *
     * Unique identifier for this result, 1-64 bytes.
     */
    id: string;
  
    /**
     * Действительный идентификатор файла стикера.
     *
     * A valid file identifier of the sticker.
     */
    sticker_file_id: string;
  
    /**
     * Необязательный. Inline-клавиатура, прикрепленная к сообщению.
     *
     * Inline keyboard attached to the message.
     */
    reply_markup?: IInlineKeyboardMarkup;
  
    /**
     * Необязательный. Содержимое сообщения, которое будет отправлено вместо стикера.
     *
     * Content of the message to be sent instead of the sticker.
     */
    input_message_content?: IInputMessageContent;
  }
  