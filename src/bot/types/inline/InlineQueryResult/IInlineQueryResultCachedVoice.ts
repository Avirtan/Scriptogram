/**
 * Представляет ссылку на голосовое сообщение, хранящееся на серверах Telegram. По умолчанию это голосовое сообщение будет отправлено пользователем.
 * В качестве альтернативы можно использовать input_message_content для отправки сообщения с указанным содержимым вместо голосового сообщения.
 *
 * Represents a link to a voice message stored on the Telegram servers.
 * By default, this voice message will be sent by the user.
 * Alternatively, you can use input_message_content to send a message with the specified content instead of the voice message.
 *
 * @see {@link https://core.telegram.org/bots/api#inlinequeryresultcachedvoice}
 */
export interface IInlineQueryResultCachedVoice {
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
     * Действительный идентификатор файла для голосового сообщения.
     *
     * A valid file identifier for the voice message.
     */
    voice_file_id: string;
  
    /**
     * Название голосового сообщения.
     *
     * Voice message title.
     */
    title?: string;
  
    /**
     * Необязательный. Подпись, 0-1024 символов после разбора сущностей.
     *
     * Caption, 0-1024 characters after entities parsing.
     */
    caption?: string;
  
    /**
     * Необязательный. Режим разбора сущностей в подписи голосового сообщения.
     *
     * Mode for parsing entities in the voice message caption. See formatting options for more details.
     */
    parse_mode?: string;
  
    /**
     * Необязательный. Список специальных сущностей, которые появляются в подписи голосового сообщения.
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
     * Необязательный. Содержимое сообщения, которое будет отправлено вместо голосового сообщения.
     *
     * Content of the message to be sent instead of the voice message.
     */
    input_message_content?: IInputMessageContent;
  }
  