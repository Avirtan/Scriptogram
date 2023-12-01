/**
 * Представляет ссылку на фото, хранящееся на серверах Telegram.
 * По умолчанию это фото будет отправлено пользователем с необязательным заголовком.
 * В качестве альтернативы можно использовать input_message_content для отправки сообщения с указанным содержимым вместо фото.
 *
 * Represents a link to a photo stored on the Telegram servers.
 * By default, this photo will be sent by the user with an optional caption.
 * Alternatively, you can use input_message_content to send a message with the specified content instead of the photo.
 *
 * @see {@link https://core.telegram.org/bots/api#inlinequeryresultcachedphoto}
 */
export interface IInlineQueryResultCachedPhoto {
    /**
     * Тип результата, должен быть photo.
     *
     * Type of the result, must be photo.
     */
    type: string;
  
    /**
     * Уникальный идентификатор этого результата, 1-64 байта.
     *
     * Unique identifier for this result, 1-64 bytes.
     */
    id: string;
  
    /**
     * Действительный идентификатор файла фотографии.
     *
     * A valid file identifier of the photo.
     */
    photo_file_id: string;
  
    /**
     * Необязательный. Заголовок результата.
     *
     * Optional. Title for the result.
     */
    title?: string;
  
    /**
     * Необязательный. Краткое описание результата.
     *
     * Optional. Short description of the result.
     */
    description?: string;
  
    /**
     * Необязательный. Подпись к фото, которое будет отправлено.
     * 0-1024 символа после парсинга entities.
     *
     * Caption of the photo to be sent, 0-1024 characters after entities parsing.
     */
    caption?: string;
  
    /**
     * Необязательный. Режим разбора сущностей в подписи фотографии.
     * См. параметр parse_mode.
     *
     * Mode for parsing entities in the photo caption. See formatting options for more details.
     */
    parse_mode?: string;
  
    /**
     * Необязательный. Список специальных сущностей, присутствующих в подписи.
     *
     * List of special entities that appear in the caption, which can be specified instead of parse_mode.
     */
    caption_entities?: IMessageEntity[];
  
    /**
     * Необязательный. Inline-клавиатура, прикрепленная к сообщению.
     *
     * Inline keyboard attached to the message.
     */
    reply_markup?: IInlineKeyboardMarkup;
  
    /**
     * Необязательный. Содержимое сообщения, которое будет отправлено вместо фото.
     *
     * Content of the message to be sent instead of the photo.
     */
    input_message_content?: IInputMessageContent;
  }
  