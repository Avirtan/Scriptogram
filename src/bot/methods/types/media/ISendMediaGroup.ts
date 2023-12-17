import {
  IInputMediaAudio,
  IInputMediaDocument,
  IInputMediaPhoto,
  IInputMediaVideo,
} from "../../../types";

/**
 * Используйте этот метод для отправки группы фотографий, видео, документов или аудио как альбома.
 * На успех возвращается массив сообщений, которые были отправлены.
 *
 * Use this method to send a group of photos, videos, documents, or audios as an album.
 * On success, an array of Messages that were sent is returned.
 * @see {@link https://core.telegram.org/bots/api#sendmediagroup}
 */
export interface ISendMediaGroup {
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
   * Описание сообщений, которые должны быть отправлены, в виде массива InputMediaAudio, InputMediaDocument, InputMediaPhoto и InputMediaVideo.
   * Должен содержать от 2 до 10 элементов.
   *
   * A JSON-serialized array describing messages to be sent, must include 2-10 items.
   */
  media: (IInputMediaAudio | IInputMediaDocument | IInputMediaPhoto | IInputMediaVideo)[];

  /**
   * Опционально. Отправлять сообщения без звука.
   *
   * Sends messages silently. Users will receive a notification with no sound.
   */
  disable_notification?: boolean;

  /**
   * Опционально. Защищает содержание отправленных сообщений от пересылки и сохранения.
   *
   * Protects the contents of the sent messages from forwarding and saving.
   */
  protect_content?: boolean;

  /**
   * Опционально. Если сообщения являются ответом, ID оригинального сообщения.
   *
   * If the messages are a reply, ID of the original message.
   */
  reply_to_message_id?: number;

  /**
   * Опционально. Передайте True, если сообщения должны быть отправлены, даже если указанное сообщение-ответ не найдено.
   *
   * Pass True if the messages should be sent even if the specified replied-to message is not found.
   */
  allow_sending_without_reply?: boolean;
}
