import {
  IInputFile,
  IMessageEntity,
  IInlineKeyboardMarkup,
  IReplyKeyboardMarkup,
  IReplyKeyboardRemove,
  IForceReply,
} from "../../../types";

/**
 * Используйте этот метод для отправки видеофайлов. Клиенты Telegram поддерживают MPEG4-видео (другие форматы могут быть отправлены как Document).
 * При успехе возвращается отправленное сообщение. Bots в настоящее время могут отправлять видеофайлы размером до 50 МБ, это ограничение может измениться в будущем.
 *
 * Use this method to send video files, Telegram clients support MPEG4 videos (other formats may be sent as Document). On success, the sent Message is returned.
 * Bots can currently send video files of up to 50 MB in size, this limit may be changed in the future.
 * @see {@link https://core.telegram.org/bots/api#sendvideo}
 */
export interface ISendVideo {
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
   * Видео для отправки. Передайте file_id в виде строки, чтобы отправить видео, которое существует на серверах Telegram (рекомендуется),
   * передайте HTTP-URL в виде строки для загрузки видео из интернета Telegram или загрузите новое видео с использованием multipart/form-data.
   *
   * Video to send. Pass a file_id as String to send a video that exists on the Telegram servers (recommended),
   * pass an HTTP URL as a String for Telegram to get a video from the Internet, or upload a new video using multipart/form-data.
   */
  video: IInputFile | string;

  /**
   * Опционально. Длительность отправленного видео в секундах.
   *
   * Duration of sent video in seconds.
   */
  duration?: number;

  /**
   * Опционально. Ширина видео.
   *
   * Video width.
   */
  width?: number;

  /**
   * Опционально. Высота видео.
   *
   * Video height.
   */
  height?: number;

  /**
   * Опционально. Тэг, изображение (тумбнейл) для отправленного файла.
   *
   * Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side.
   */
  thumbnail?: IInputFile | string;

  /**
   * Опционально. Подпись к видео, от 0 до 1024 символов после обработки сущностей.
   *
   * Video caption (may also be used when resending videos by file_id), 0-1024 characters after entities parsing.
   */
  caption?: string;

  /**
   * Опционально. Режим разбора сущностей в подписи к видео.
   *
   * Mode for parsing entities in the video caption. See formatting options for more details.
   */
  parse_mode?: string;

  /**
   * Опционально. Список особых сущностей, которые появляются в подписи к видео.
   *
   * A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode.
   */
  caption_entities?: IMessageEntity[];

  /**
   * Опционально. Передайте True, если видео должно быть закрыто анимацией спойлера.
   *
   * Pass True if the video needs to be covered with a spoiler animation.
   */
  has_spoiler?: boolean;

  /**
   * Опционально. Передайте True, если загруженное видео подходит для потоковой передачи.
   *
   * Pass True if the uploaded video is suitable for streaming.
   */
  supports_streaming?: boolean;

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
