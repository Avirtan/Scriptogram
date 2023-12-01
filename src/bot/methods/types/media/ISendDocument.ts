/**
 * Используйте этот метод для отправки общих файлов. При успехе возвращается отправленное сообщение.
 * Bots в настоящее время могут отправлять файлы любого типа размером до 50 МБ, это ограничение может измениться в будущем.
 *
 * Use this method to send general files. On success, the sent Message is returned.
 * Bots can currently send files of any type of up to 50 MB in size, this limit may be changed in the future.
 * @see {@link https://core.telegram.org/bots/api#senddocument}
 */
export interface ISendDocument {
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
   * Файл для отправки. Передайте file_id в виде строки, чтобы отправить файл, который существует на серверах Telegram (рекомендуется),
   * передайте HTTP-URL в виде строки для загрузки файла из интернета Telegram или загрузите новый с использованием multipart/form-data.
   *
   * File to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended),
   * pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data.
   */
  document: IInputFile | string;

  /**
   * Опционально. Тэг, изображение (тумбнейл) для отправленного файла.
   *
   * Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side.
   */
  thumbnail?: IInputFile | string;

  /**
   * Опционально. Подпись к документу, от 0 до 1024 символов после обработки сущностей.
   *
   * Document caption, 0-1024 characters after entities parsing.
   */
  caption?: string;

  /**
   * Опционально. Режим разбора сущностей в подписи к документу.
   *
   * Mode for parsing entities in the document caption. See formatting options for more details.
   */
  parse_mode?: string;

  /**
   * Опционально. Список особых сущностей, которые появляются в подписи к документу.
   *
   * A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode.
   */
  caption_entities?: IMessageEntity[];

  /**
   * Опционально. Отключает автоматическое определение типа содержимого на сервере для файлов, загруженных с использованием multipart/form-data.
   *
   * Disables automatic server-side content type detection for files uploaded using multipart/form-data.
   */
  disable_content_type_detection?: boolean;

  /**
   * Опционально. Отправлять сообщение без звука.
   *
   * Sends the message silently. Users will receive a notification with no sound.
   */
  disable_notification?: boolean;

  /**
   * Опционально. Защищает содержание отправленного сообщения от пересылки и сохранения.
   *
   * Protects the contents of the sent message from forwarding and saving.
   */
  protect_content?: boolean;

  /**
   * Опционально. Если сообщение является ответом, ID оригинального сообщения.
   *
   * If the message is a reply, ID of the original message.
   */
  reply_to_message_id?: number;

  /**
   * Опционально. Передайте True, если сообщение должно быть отправлено даже если указанное сообщение-ответ не найдено.
   *
   * Pass True if the message should be sent even if the specified replied-to message is not found.
   */
  allow_sending_without_reply?: boolean;

  /**
   * Опционально. Дополнительные параметры интерфейса.
   *
   * Additional interface options.
   */
  reply_markup?: IInlineKeyboardMarkup | IReplyKeyboardMarkup | IReplyKeyboardRemove | IForceReply;
}
