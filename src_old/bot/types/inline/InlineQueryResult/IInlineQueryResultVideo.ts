import { IInputMessageContent } from "..";
import { IMessageEntity, IInlineKeyboardMarkup } from "../..";

/**
 * Представляет ссылку на страницу с встроенным видеоплеером или файлом видео.
 * По умолчанию этот файл будет отправлен пользователем с необязательным описанием.
 * Также можно использовать input_message_content для отправки сообщения с указанным содержимым вместо видео.
 *
 * Represents a link to a page containing an embedded video player or a video file.
 * By default, this video file will be sent by the user with an optional caption.
 * Alternatively, you can use input_message_content to send a message with the specified content instead of the video.
 *
 * @see {@link https://core.telegram.org/bots/api#inlinequeryresultvideo}
 */
export interface IInlineQueryResultVideo {
  /**
   * Тип результата, должен быть video.
   *
   * Type of the result, must be video.
   */
  type: string;

  /**
   * Уникальный идентификатор этого результата, 1-64 байта.
   *
   * Unique identifier for this result, 1-64 bytes.
   */
  id: string;

  /**
   * Действительный URL для встроенного видеоплеера или файла видео.
   *
   * A valid URL for the embedded video player or video file.
   */
  video_url: string;

  /**
   * MIME-тип содержимого URL видео, “text/html” или “video/mp4”.
   *
   * MIME type of the content of the video URL, “text/html” or “video/mp4”.
   */
  mime_type: string;

  /**
   * URL миниатюры (только JPEG) для видео.
   *
   * URL of the thumbnail (JPEG only) for the video.
   */
  thumbnail_url: string;

  /**
   * Заголовок для результата.
   *
   * Title for the result.
   */
  title: string;

  /**
   * Подпись к отправляемому видео, 0-1024 символа после обработки сущностей.
   *
   * Caption of the video to be sent, 0-1024 characters after entities parsing.
   */
  caption?: string;

  /**
   * Режим разбора сущностей в подписи к видео.
   *
   * Mode for parsing entities in the video caption.
   */
  parse_mode?: string;

  /**
   * Список специальных сущностей, которые появляются в подписи, которые можно указать вместо parse_mode.
   *
   * List of special entities that appear in the caption, which can be specified instead of parse_mode.
   */
  caption_entities?: IMessageEntity[];

  /**
   * Ширина видео.
   *
   * Video width.
   */
  video_width?: number;

  /**
   * Высота видео.
   *
   * Video height.
   */
  video_height?: number;

  /**
   * Продолжительность видео в секундах.
   *
   * Video duration in seconds.
   */
  video_duration?: number;

  /**
   * Краткое описание результата.
   *
   * Short description of the result.
   */
  description?: string;

  /**
   * Inline-клавиатура, прикрепленная к сообщению.
   *
   * Inline keyboard attached to the message.
   */
  reply_markup?: IInlineKeyboardMarkup;

  /**
   * Содержимое сообщения для отправки вместо видео.
   *
   * Content of the message to be sent instead of the video.
   * This field is required if InlineQueryResultVideo is used to send an HTML-page as a result (e.g., a YouTube video).
   */
  input_message_content?: IInputMessageContent;
}
