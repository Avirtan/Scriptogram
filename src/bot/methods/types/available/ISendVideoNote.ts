/**
 * Используйте этот метод для отправки видеосообщений. Начиная с v.4.0, клиенты Telegram поддерживают круглые квадратные MPEG4-видео длиной до 1 минуты.
 * При успехе возвращается отправленное сообщение.
 *
 * Use this method to send video messages. As of v.4.0, Telegram clients support rounded square MPEG4 videos of up to 1 minute long.
 * On success, the sent Message is returned.
 * @see {@link https://core.telegram.org/bots/api#sendvideonote}
 */
export interface ISendVideoNote {
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
   * Видеозапись для отправки. Передайте file_id в виде строки, чтобы отправить видеозапись, которая существует на серверах Telegram (рекомендуется)
   * или загрузите новое видео с использованием multipart/form-data.
   *
   * Video note to send. Pass a file_id as String to send a video note that exists on the Telegram servers (recommended) or upload a new video using multipart/form-data.
   */
  video_note: InputFile | string;

  /**
   * Опционально. Длительность отправленного видео в секундах.
   *
   * Duration of sent video in seconds.
   */
  duration?: number;

  /**
   * Опционально. Ширина и высота видео, т.е. диаметр видеосообщения.
   *
   * Video width and height, i.e. diameter of the video message.
   */
  length?: number;

  /**
   * Опционально. Эскиз отправленного файла; может быть проигнорирован, если генерация эскиза для файла поддерживается на сервере.
   *
   * Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side.
   */
  thumbnail?: InputFile | string;

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
   * Опционально. Передайте True, если сообщение должно быть отправлено, даже если указанное сообщение-ответ не найдено.
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
