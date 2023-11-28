/**
 * Используйте этот метод для отправки текстовых сообщений. При успехе возвращается отправленное сообщение.
 *
 * Use this method to send text messages. On success, the sent Message is returned.
 * @see {@link https://core.telegram.org/bots/api#sendmessage}
 */
export interface ISendMessage {
  /**
   * Уникальный идентификатор целевого чата или имя пользователя целевого канала (в формате @channelusername).
   *
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername).
   */
  chat_id: number | string;

  /**
   * Опционально. Уникальный идентификатор целевой темы сообщения (топика) форума; только для форум-супергрупп.
   *
   * Optional. Unique identifier for the target message thread (topic) of the forum; for forum supergroups only.
   */
  message_thread_id?: number;

  /**
   * Текст сообщения для отправки, 1-4096 символов после обработки сущностей.
   *
   * Text of the message to be sent, 1-4096 characters after entities parsing.
   */
  text: string;

  /**
   * Опционально. Режим разбора сущностей в тексте сообщения. Подробнее см. в опциях форматирования.
   *
   * Optional. Mode for parsing entities in the message text. See formatting options for more details.
   */
  parse_mode?: string;

  /**
   * Опционально. Список особых сущностей, которые появляются в тексте сообщения, можно указать вместо parse_mode.
   *
   * Optional. A JSON-serialized list of special entities that appear in message text, which can be specified instead of parse_mode.
   */
  entities?: IMessageEntity[];

  /**
   * Опционально. Отключает предварительный просмотр ссылок для ссылок в этом сообщении.
   *
   * Optional. Disables link previews for links in this message.
   */
  disable_web_page_preview?: boolean;

  /**
   * Опционально. Отправляет сообщение без звука.
   *
   * Optional. Sends the message silently. Users will receive a notification with no sound.
   */
  disable_notification?: boolean;

  /**
   * Опционально. Защищает содержание отправленного сообщения от пересылки и сохранения.
   *
   * Optional. Protects the contents of the sent message from forwarding and saving.
   */
  protect_content?: boolean;

  /**
   * Опционально. Если сообщение является ответом, ID оригинального сообщения.
   *
   * Optional. If the message is a reply, ID of the original message.
   */
  reply_to_message_id?: number;

  /**
   * Опционально. Отправлять сообщение, даже если указанное сообщение-ответ не найдено.
   *
   * Optional. Pass True if the message should be sent even if the specified replied-to message is not found.
   */
  allow_sending_without_reply?: boolean;

  /**
   * Опционально. Дополнительные параметры интерфейса. Объект JSON для встроенной клавиатуры, настраиваемой клавиатуры для ответов, инструкций по удалению клавиатуры для ответов или для принудительного ответа от пользователя.
   *
   * Optional. Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
   */
  reply_markup?: IInlineKeyboardMarkup | IReplyKeyboardMarkup | IReplyKeyboardRemove | IForceReply;
}
