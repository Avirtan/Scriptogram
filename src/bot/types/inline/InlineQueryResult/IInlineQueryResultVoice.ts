/**
 * Представляет ссылку на голосовую запись в контейнере .OGG, кодированную с помощью OPUS. 
 * По умолчанию эта голосовая запись будет отправлена пользователем. 
 * Также можно использовать input_message_content для отправки сообщения с указанным содержимым вместо голосового сообщения.
 *
 * Represents a link to a voice recording in an .OGG container encoded with OPUS. 
 * By default, this voice recording will be sent by the user. 
 * Alternatively, you can use input_message_content to send a message with the specified content instead of the voice message.
 *
 * @see {@link https://core.telegram.org/bots/api#inlinequeryresultvoice}
 */
export interface IInlineQueryResultVoice {
    /**
     * Тип результата, должен быть voice.
     *
     * Type of the result, must be voice.
     */
    type: string;
  
    /**
     * Уникальный идентификатор этого результата, 1-64 байта.
     *
     * Unique identifier for this result, 1-64 bytes.
     */
    id: string;
  
    /**
     * Действительный URL для голосовой записи.
     *
     * A valid URL for the voice recording.
     */
    voice_url: string;
  
    /**
     * Заголовок записи.
     *
     * Recording title.
     */
    title: string;
  
    /**
     * Подпись, 0-1024 символа после обработки сущностей.
     *
     * Caption, 0-1024 characters after entities parsing.
     */
    caption?: string;
  
    /**
     * Режим разбора сущностей в подписи к голосовой записи.
     *
     * Mode for parsing entities in the voice message caption.
     */
    parse_mode?: string;
  
    /**
     * Список специальных сущностей, которые появляются в подписи, которые можно указать вместо parse_mode.
     *
     * List of special entities that appear in the caption, which can be specified instead of parse_mode.
     */
    caption_entities?: IMessageEntity[];
  
    /**
     * Продолжительность записи в секундах.
     *
     * Recording duration in seconds.
     */
    voice_duration?: number;
  
    /**
     * Inline-клавиатура, прикрепленная к сообщению.
     *
     * Inline keyboard attached to the message.
     */
    reply_markup?: IInlineKeyboardMarkup;
  
    /**
     * Содержимое сообщения для отправки вместо голосовой записи.
     *
     * Content of the message to be sent instead of the voice recording.
     */
    input_message_content?: IInputMessageContent;
  }
  