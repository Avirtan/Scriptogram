/**
 * Представляет ссылку на анимированный GIF-файл, хранящийся на серверах Telegram.
 * По умолчанию этот анимированный GIF-файл будет отправлен пользователем с необязательным заголовком.
 * В качестве альтернативы можно использовать input_message_content для отправки сообщения с указанным содержимым вместо анимации.
 *
 * Represents a link to an animated GIF file stored on the Telegram servers.
 * By default, this animated GIF file will be sent by the user with an optional caption.
 * Alternatively, you can use input_message_content to send a message with specified content instead of the animation.
 *
 * @see {@link https://core.telegram.org/bots/api#inlinequeryresultcachedgif}
 */
export interface IInlineQueryResultCachedGif {
    /**
     * Тип результата, должен быть gif.
     *
     * Type of the result, must be gif.
     */
    type: string;
  
    /**
     * Уникальный идентификатор этого результата, 1-64 байта.
     *
     * Unique identifier for this result, 1-64 bytes.
     */
    id: string;
  
    /**
     * Действительный идентификатор файла GIF.
     *
     * A valid file identifier for the GIF file.
     */
    gif_file_id: string;
  
    /**
     * Необязательный. Заголовок результата.
     *
     * Optional. Title for the result.
     */
    title?: string;
  
    /**
     * Необязательный. Подпись к анимированному GIF-файлу, который будет отправлен.
     * 0-1024 символа после парсинга entities.
     *
     * Caption of the GIF file to be sent, 0-1024 characters after entities parsing.
     */
    caption?: string;
  
    /**
     * Необязательный. Режим разбора сущностей в подписи анимации.
     * См. параметр parse_mode.
     *
     * Mode for parsing entities in the caption. See formatting options for more details.
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
     * Необязательный. Содержимое сообщения, которое будет отправлено вместо анимации GIF.
     *
     * Content of the message to be sent instead of the GIF animation.
     */
    input_message_content?: IInputMessageContent;
  }
  