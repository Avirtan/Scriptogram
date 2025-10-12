import { IInputMessageContent } from "..";
import { IMessageEntity, IInlineKeyboardMarkup } from "../..";

/**
 * Представляет ссылку на анимацию видео (H.264/MPEG-4 AVC без звука).
 * По умолчанию этот файл отправит пользователь с необязательным описанием.
 * Также можно использовать input_message_content для отправки сообщения с указанным содержимым вместо анимации.
 *
 * Represents a link to a video animation (H.264/MPEG-4 AVC video without sound).
 * By default, this animated MPEG-4 file will be sent by the user with optional caption.
 * Alternatively, you can use input_message_content to send a message with the specified content instead of the animation.
 *
 * @see {@link https://core.telegram.org/bots/api#inlinequeryresultmpeg4gif}
 */
export interface IInlineQueryResultMpeg4Gif {
  /**
   * Тип результата, должен быть mpeg4_gif.
   *
   * Type of the result, must be mpeg4_gif.
   */
  type: string;

  /**
   * Уникальный идентификатор этого результата, 1-64 байта.
   *
   * Unique identifier for this result, 1-64 bytes.
   */
  id: string;

  /**
   * Действительный URL для файла MPEG4. Размер файла не должен превышать 1 МБ.
   *
   * A valid URL for the MPEG4 file. File size must not exceed 1MB.
   */
  mpeg4_url: string;

  /**
   * Ширина видео.
   *
   * Video width.
   */
  mpeg4_width?: number;

  /**
   * Высота видео.
   *
   * Video height.
   */
  mpeg4_height?: number;

  /**
   * Продолжительность видео в секундах.
   *
   * Video duration in seconds.
   */
  mpeg4_duration?: number;

  /**
   * URL статической (JPEG или GIF) или анимированной (MPEG4) миниатюры для результата.
   *
   * URL of the static (JPEG or GIF) or animated (MPEG4) thumbnail for the result.
   */
  thumbnail_url: string;

  /**
   * MIME-тип миниатюры. Должен быть одним из "image/jpeg", "image/gif" или "video/mp4". По умолчанию "image/jpeg".
   *
   * MIME type of the thumbnail, must be one of “image/jpeg”, “image/gif”, or “video/mp4”. Defaults to “image/jpeg”.
   */
  thumbnail_mime_type?: string;

  /**
   * Название для результата.
   *
   * Title for the result.
   */
  title?: string;

  /**
   * Подпись к отправляемому файлу MPEG4, 0-1024 символа после обработки сущностей.
   *
   * Caption of the MPEG-4 file to be sent, 0-1024 characters after entities parsing.
   */
  caption?: string;

  /**
   * Режим разбора сущностей в подписи к файлу MPEG4. Подробнее см. в опциях форматирования.
   *
   * Mode for parsing entities in the MPEG-4 file caption. See formatting options for more details.
   */
  parse_mode?: string;

  /**
   * Список специальных сущностей, которые появляются в подписи, которые можно указать вместо parse_mode.
   *
   * List of special entities that appear in the caption, which can be specified instead of parse_mode.
   */
  caption_entities?: IMessageEntity[];

  /**
   * Inline-клавиатура, прикрепленная к сообщению.
   *
   * Inline keyboard attached to the message.
   */
  reply_markup?: IInlineKeyboardMarkup;

  /**
   * Содержимое сообщения для отправки вместо анимации MPEG4.
   *
   * Content of the message to be sent instead of the MPEG4 animation.
   */
  input_message_content?: IInputMessageContent;
}
