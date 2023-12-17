import {
  IInputFile,
  IMessageEntity,
  IInlineKeyboardMarkup,
  IReplyKeyboardMarkup,
  IReplyKeyboardRemove,
  IForceReply,
} from "../../../types";

/**
 * Используйте этот метод для отправки аудиофайлов, если вы хотите, чтобы клиенты Telegram показывали их в музыкальном плеере.
 * Ваше аудио должно быть в формате .MP3 или .M4A. При успехе возвращается отправленное сообщение.
 * Bots в настоящее время могут отправлять аудиофайлы размером до 50 МБ, это ограничение может измениться в будущем.
 *
 * Use this method to send audio files, if you want Telegram clients to display them in the music player.
 * Your audio must be in the .MP3 or .M4A format. On success, the sent Message is returned.
 * Bots can currently send audio files of up to 50 MB in size, this limit may be changed in the future.
 * @see {@link https://core.telegram.org/bots/api#sendaudio}
 */
export interface ISendAudio {
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
   * Аудиофайл для отправки. Передайте file_id в виде строки, чтобы отправить аудиофайл, который существует на серверах Telegram (рекомендуется),
   * передайте HTTP-URL в виде строки для загрузки аудиофайла из интернета Telegram, или загрузите новый с использованием multipart/form-data.
   *
   * Audio file to send. Pass a file_id as String to send an audio file that exists on the Telegram servers (recommended),
   * pass an HTTP URL as a String for Telegram to get an audio file from the Internet, or upload a new one using multipart/form-data.
   */
  audio: IInputFile | string;

  /**
   * Опционально. Подпись к аудио, от 0 до 1024 символов после обработки сущностей.
   *
   * Audio caption, 0-1024 characters after entities parsing.
   */
  caption?: string;

  /**
   * Опционально. Режим разбора сущностей в подписи к аудио.
   *
   * Mode for parsing entities in the audio caption. See formatting options for more details.
   */
  parse_mode?: string;

  /**
   * Опционально. Список особых сущностей, которые появляются в подписи к аудио.
   *
   * A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode.
   */
  caption_entities?: IMessageEntity[];

  /**
   * Опционально. Длительность аудио в секундах.
   *
   * Duration of the audio in seconds.
   */
  duration?: number;

  /**
   * Опционально. Исполнитель.
   *
   * Performer.
   */
  performer?: string;

  /**
   * Опционально. Название трека.
   *
   * Track name.
   */
  title?: string;

  /**
   * Опционально. Тэг, изображение (тумбнейл) для отправленного файла.
   *
   * Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side.
   */
  thumbnail?: IInputFile | string;

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
