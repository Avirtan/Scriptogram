/**
 * Используйте этот метод для копирования сообщений любого типа. Служебные сообщения и сообщения-инвойсы не могут быть скопированы. Викторины могут быть скопированы только если известно значение поля correct_option_id. Метод аналогичен методу forwardMessage, но скопированное сообщение не имеет ссылки на исходное сообщение. Возвращает MessageId отправленного сообщения в случае успеха.
 *
 * Use this method to copy messages of any kind. Service messages and invoice messages can't be copied. A quiz poll can be copied only if the value of the field correct_option_id is known to the bot. The method is analogous to the method forwardMessage, but the copied message doesn't have a link to the original message. Returns the MessageId of the sent message on success.
 * @see {@link https://core.telegram.org/bots/api#copymessage}
 */
export interface ICopyMessage {
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
   * Уникальный идентификатор чата, откуда было отправлено исходное сообщение (или имя пользователя канала в формате @channelusername).
   *
   * Unique identifier for the chat where the original message was sent (or channel username in the format @channelusername).
   */
  from_chat_id: number | string;

  /**
   * Идентификатор сообщения в указанном чате from_chat_id.
   *
   * Message identifier in the chat specified in from_chat_id.
   */
  message_id: number;

  /**
   * Опционально. Новый заголовок для медиа, 0-1024 символа после обработки сущностей. Если не указан, сохраняется оригинальный заголовок.
   *
   * Optional. New caption for media, 0-1024 characters after entities parsing. If not specified, the original caption is kept.
   */
  caption?: string;

  /**
   * Опционально. Режим разбора сущностей в новом заголовке.
   *
   * Optional. Mode for parsing entities in the new caption.
   */
  parse_mode?: string;

  /**
   * Опционально. Список особых сущностей, которые появляются в новом заголовке, можно указать вместо parse_mode.
   *
   * Optional. A JSON-serialized list of special entities that appear in the new caption, which can be specified instead of parse_mode.
   */
  caption_entities?: IMessageEntity[];

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
