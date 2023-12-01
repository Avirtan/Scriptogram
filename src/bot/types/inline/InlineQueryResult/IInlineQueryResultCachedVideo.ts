/**
 * Представляет ссылку на видеофайл, хранящийся на серверах Telegram. По умолчанию этот видеофайл будет отправлен пользователем с необязательным описанием.
 * В качестве альтернативы можно использовать input_message_content для отправки сообщения с указанным содержимым вместо видео.
 *
 * Represents a link to a video file stored on the Telegram servers.
 * By default, this video file will be sent by the user with an optional caption.
 * Alternatively, you can use input_message_content to send a message with the specified content instead of the video.
 *
 * @see {@link https://core.telegram.org/bots/api#inlinequeryresultcachedvideo}
 */
export interface IInlineQueryResultCachedVideo {
    /**
     * Тип результата, должен быть video.
     *
     * Type of the result, must be video.
     */
    type: string;
  
    /**
     * Уникальный идентификатор этого результата, 1-64 байта.
     *
     * Unique identifier for this result, 1-64 bytes.
     */
    id: string;
  
    /**
     * Действительный идентификатор файла для видеофайла.
     *
     * A valid file identifier for the video file.
     */
    video_file_id: string;
  
    /**
     * Заголовок для результата.
     *
     * Title for the result.
     */
    title?: string;
  
    /**
     * Необязательный. Краткое описание результата.
     *
     * Short description of the result.
     */
    description?: string;
  
    /**
     * Необязательный. Подпись видео для отправки, 0-1024 символов после разбора сущностей.
     *
     * Caption of the video to be sent, 0-1024 characters after entities parsing.
     */
    caption?: string;
  
    /**
     * Необязательный. Режим разбора сущностей в подписи видео.
     *
     * Mode for parsing entities in the video caption. See formatting options for more details.
     */
    parse_mode?: string;
  
    /**
     * Необязательный. Список специальных сущностей, которые появляются в подписи видео.
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
     * Необязательный. Содержимое сообщения, которое будет отправлено вместо видео.
     *
     * Content of the message to be sent instead of the video.
     */
    input_message_content?: IInputMessageContent;
  }
  