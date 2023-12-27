import {
  IInputFile,
  IMessageEntity,
  IInlineKeyboardMarkup,
  IReplyKeyboardMarkup,
  IReplyKeyboardRemove,
  IForceReply,
} from "../../../types";

export interface ISendAnimation {
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
   * Анимация для отправки. Передайте file_id в виде строки, чтобы отправить анимацию, которая существует на серверах Telegram (рекомендуется),
   * передайте HTTP-URL в виде строки для загрузки анимации из интернета Telegram или загрузите новую анимацию с использованием multipart/form-data.
   *
   * Animation to send. Pass a file_id as String to send an animation that exists on the Telegram servers (recommended),
   * pass an HTTP URL as a String for Telegram to get an animation from the Internet, or upload a new animation using multipart/form-data.
   */
  animation: IInputFile | string;

  /**
   * Опционально. Длительность отправленной анимации в секундах.
   *
   * Duration of sent animation in seconds.
   */
  duration?: number;

  /**
   * Опционально. Ширина анимации.
   *
   * Animation width.
   */
  width?: number;

  /**
   * Опционально. Высота анимации.
   *
   * Animation height.
   */
  height?: number;

  /**
   * Опционально. Тэг, изображение (тумбнейл) для отправленного файла.
   *
   * Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side.
   */
  thumbnail?: IInputFile | string;

  /**
   * Опционально. Подпись к анимации, от 0 до 1024 символов после обработки сущностей.
   *
   * Animation caption (may also be used when resending animation by file_id), 0-1024 characters after entities parsing.
   */
  caption?: string;

  /**
   * Опционально. Режим разбора сущностей в подписи к анимации.
   *
   * Mode for parsing entities in the animation caption. See formatting options for more details.
   */
  parse_mode?: string;

  /**
   * Опционально. Список особых сущностей, которые появляются в подписи к анимации.
   *
   * A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode.
   */
  caption_entities?: IMessageEntity[];

  /**
   * Опционально. Передайте True, если анимация должна быть закрыта анимацией спойлера.
   *
   * Pass True if the animation needs to be covered with a spoiler animation.
   */
  has_spoiler?: boolean;

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
