/**
 * Представляет ссылку на файл, хранящийся на серверах Telegram. По умолчанию этот файл будет отправлен пользователем с необязательным описанием.
 * В качестве альтернативы можно использовать input_message_content для отправки сообщения с указанным содержимым вместо файла.
 *
 * Represents a link to a file stored on the Telegram servers.
 * By default, this file will be sent by the user with an optional caption.
 * Alternatively, you can use input_message_content to send a message with the specified content instead of the file.
 *
 * @see {@link https://core.telegram.org/bots/api#inlinequeryresultcacheeddocument}
 */
export interface IInlineQueryResultCachedDocument {
    /**
     * Тип результата, должен быть document.
     *
     * Type of the result, must be document.
     */
    type: string;
  
    /**
     * Уникальный идентификатор этого результата, 1-64 байта.
     *
     * Unique identifier for this result, 1-64 bytes.
     */
    id: string;
  
    /**
     * Заголовок для результата.
     *
     * Title for the result.
     */
    title?: string;
  
    /**
     * Действительный идентификатор файла для документа.
     *
     * A valid file identifier for the document.
     */
    document_file_id: string;
  
    /**
     * Необязательный. Краткое описание результата.
     *
     * Short description of the result.
     */
    description?: string;
  
    /**
     * Необязательный. Подпись документа для отправки, 0-1024 символов после разбора сущностей.
     *
     * Caption of the document to be sent, 0-1024 characters after entities parsing.
     */
    caption?: string;
  
    /**
     * Необязательный. Режим разбора сущностей в подписи документа. Подробнее о вариантах форматирования см. в документации.
     *
     * Mode for parsing entities in the document caption. See formatting options for more details.
     */
    parse_mode?: string;
  
    /**
     * Необязательный. Список специальных сущностей, которые появляются в подписи документа.
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
     * Необязательный. Содержимое сообщения, которое будет отправлено вместо документа.
     *
     * Content of the message to be sent instead of the file.
     */
    input_message_content?: IInputMessageContent;
  }
  