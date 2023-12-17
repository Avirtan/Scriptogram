import {
  IInputFile,
  IMessageEntity,
  IInlineKeyboardMarkup,
  IReplyKeyboardMarkup,
  IReplyKeyboardRemove,
  IForceReply,
} from "../../../types";

/**
 * Используйте этот метод для отправки фотографий. При успехе возвращается отправленное сообщение.
 *
 * Use this method to send photos. On success, the sent Message is returned.
 * @see {@link https://core.telegram.org/bots/api#sendphoto}
 */
export interface ISendPhoto {
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
   * Фото для отправки. Передайте file_id в виде строки, чтобы отправить фотографию, которая существует на серверах Telegram (рекомендуется), передайте HTTP-URL в виде строки для загрузки фотографии из интернета Telegram, или загрузите новую фотографию с использованием multipart/form-data. Фотография должна быть размером не более 10 МБ. Ширина и высота фотографии в сумме не должны превышать 10000. Соотношение ширины и высоты должно быть не более 20.
   *
   * Photo to send. Pass a file_id as String to send a photo that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a photo from the Internet, or upload a new photo using multipart/form-data. The photo must be at most 10 MB in size. The photo's width and height must not exceed 10000 in total. Width and height ratio must be at most 20.
   */
  photo: IInputFile | string;

  /**
   * Опционально. Подпись к фотографии (может использоваться при повторной отправке фотографий по file_id), от 0 до 1024 символов после обработки сущностей.
   *
   * Photo caption (may also be used when resending photos by file_id), 0-1024 characters after entities parsing.
   */
  caption?: string;

  /**
   * Опционально. Режим разбора сущностей в подписи к фотографии. Подробнее см. в опциях форматирования.
   *
   * Mode for parsing entities in the photo caption. See formatting options for more details.
   */
  parse_mode?: string;

  /**
   * Опционально. Список особых сущностей, которые появляются в подписи к фотографии, можно указать вместо parse_mode.
   *
   * Optional. A JSON-serialized list of special entities that appear in the caption, which can be specified instead of parse_mode.
   */
  caption_entities?: IMessageEntity[];

  /**
   * Опционально. Передайте True, если фотография должна быть скрыта анимацией-спойлером.
   *
   * Pass True if the photo needs to be covered with a spoiler animation.
   */
  has_spoiler?: boolean;

  /**
   * Опционально. Отправлять сообщение без звука.
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
   * Опционально. Передайте True, если сообщение должно быть отправлено даже если указанное сообщение-ответ не найдено.
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
