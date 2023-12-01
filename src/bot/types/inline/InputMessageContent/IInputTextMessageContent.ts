/**
 * Представляет содержимое текстового сообщения, которое будет отправлено в результате встроенного запроса.
 *
 * Represents the content of a text message to be sent as the result of an inline query.
 *
 * @see {@link https://core.telegram.org/bots/api#inputtextmessagecontent}
 */
export interface IInputTextMessageContent {
    /**
     * Текст сообщения, которое будет отправлено, 1-4096 символов.
     *
     * Text of the message to be sent, 1-4096 characters.
     */
    message_text: string;
  
    /**
     * Необязательный. Режим разбора сущностей в тексте сообщения.
     *
     * Optional. Mode for parsing entities in the message text. See formatting options for more details.
     */
    parse_mode?: string;
  
    /**
     * Необязательный. Список специальных сущностей, которые появляются в тексте сообщения.
     *
     * Optional. List of special entities that appear in message text, which can be specified instead of parse_mode.
     */
    entities?: IMessageEntity[];
  
    /**
     * Необязательный. Отключает предварительный просмотр ссылок в отправленном сообщении.
     *
     * Optional. Disables link previews for links in the sent message.
     */
    disable_web_page_preview?: boolean;
  }
  