import { IInlineKeyboardMarkup, IInputMessageContent, IMessageEntity } from "../..";

/**
 * Представляет ссылку на файл анимированного GIF. По умолчанию этот файл будет отправлен пользователем с необязательным описанием.
 * Также вы можете использовать input_message_content для отправки сообщения с указанным содержимым вместо анимации GIF.
 *
 * Represents a link to an animated GIF file. By default, this animated GIF file will be sent by the user with optional caption.
 * Alternatively, you can use input_message_content to send a message with the specified content instead of the animation.
 *
 * @see {@link https://core.telegram.org/bots/api#inlinequeryresultgif}
 */
export interface IInlineQueryResultGif {
  /**
   * Тип результата, должен быть gif.
   *
   * Type of the result, must be gif.
   */
  type: string;

  /**
   * Уникальный идентификатор этого результата, 1-64 байта.
   *
   * Unique identifier for this result, 1-64 bytes.
   */
  id: string;

  /**
   * Действительный URL для файла GIF. Размер файла не должен превышать 1 МБ.
   *
   * A valid URL for the GIF file. File size must not exceed 1MB.
   */
  gif_url: string;

  /**
   * Ширина GIF.
   *
   * Width of the GIF.
   */
  gif_width?: number;

  /**
   * Высота GIF.
   *
   * Height of the GIF.
   */
  gif_height?: number;

  /**
   * Продолжительность GIF в секундах.
   *
   * Duration of the GIF in seconds.
   */
  gif_duration?: number;

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
   * Подпись к отправляемому файлу GIF, 0-1024 символа после обработки сущностей.
   *
   * Caption of the GIF file to be sent, 0-1024 characters after entities parsing.
   */
  caption?: string;

  /**
   * Режим разбора сущностей в подписи к файлу GIF. Подробнее см. в опциях форматирования.
   *
   * Mode for parsing entities in the GIF caption. See formatting options for more details.
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
   * Содержимое сообщения для отправки вместо анимации GIF.
   *
   * Content of the message to be sent instead of the GIF animation.
   */
  input_message_content?: IInputMessageContent;
}
