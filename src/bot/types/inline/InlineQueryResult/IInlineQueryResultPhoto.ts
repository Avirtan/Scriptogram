/**
 * Представляет ссылку на фотографию. По умолчанию эта фотография будет отправлена пользователем с необязательным подписью. 
 * Также вы можете использовать input_message_content для отправки сообщения с указанным содержимым вместо фотографии.
 *
 * Represents a link to a photo. By default, this photo will be sent by the user with optional caption. Alternatively, 
 * you can use input_message_content to send a message with the specified content instead of the photo.
 *
 * @see {@link https://core.telegram.org/bots/api#inlinequeryresultphoto}
 */
export interface IInlineQueryResultPhoto {
    /**
     * Тип результата, должен быть photo.
     *
     * Type of the result, must be photo.
     */
    type: string;
  
    /**
     * Уникальный идентификатор этого результата, 1-64 байт.
     *
     * Unique identifier for this result, 1-64 bytes.
     */
    id: string;
  
    /**
     * Действительный URL фотографии. Фото должно быть в формате JPEG. Размер фото не должен превышать 5 МБ.
     *
     * A valid URL of the photo. Photo must be in JPEG format. Photo size must not exceed 5MB.
     */
    photo_url: string;
  
    /**
     * URL миниатюры для фотографии.
     *
     * URL of the thumbnail for the photo.
     */
    thumbnail_url: string;
  
    /**
     * Ширина фотографии.
     *
     * Width of the photo.
     */
    photo_width?: number;
  
    /**
     * Высота фотографии.
     *
     * Height of the photo.
     */
    photo_height?: number;
  
    /**
     * Название для результата.
     *
     * Title for the result.
     */
    title?: string;
  
    /**
     * Краткое описание результата.
     *
     * Short description of the result.
     */
    description?: string;
  
    /**
     * Подпись к отправляемой фотографии, 0-1024 символов после обработки сущностей.
     *
     * Caption of the photo to be sent, 0-1024 characters after entities parsing.
     */
    caption?: string;
  
    /**
     * Режим разбора сущностей в подписи к фото. Подробнее см. в опциях форматирования.
     *
     * Mode for parsing entities in the photo caption. See formatting options for more details.
     */
    parse_mode?: string;
  
    /**
     * Список специальных сущностей, которые появляются в подписи, которые можно указать вместо parse_mode.
     *
     * List of special entities that appear in the caption, which can be specified instead of parse_mode.
     */
    caption_entities?: IMessageEntity[];
  
    /**
     * Inline-клавиатура, прикрепленная к сообщению.
     *
     * Inline keyboard attached to the message.
     */
    reply_markup?: IInlineKeyboardMarkup;
  
    /**
     * Содержимое сообщения для отправки вместо фотографии.
     *
     * Content of the message to be sent instead of the photo.
     */
    input_message_content?: IInputMessageContent;
  }
  