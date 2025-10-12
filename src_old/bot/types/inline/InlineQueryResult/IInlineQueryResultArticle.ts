import { IInputMessageContent } from "..";
import { IInlineKeyboardMarkup } from "../..";

/**
 * Представляет ссылку на статью или веб-страницу.
 *
 * Represents a link to an article or web page.
 *
 * @see {@link https://core.telegram.org/bots/api#inlinequeryresultarticle}
 */
export interface IInlineQueryResultArticle {
  /**
   * Тип результата, должен быть article.
   *
   * Type of the result, must be article.
   */
  type: string;

  /**
   * Уникальный идентификатор этого результата, 1-64 байт.
   *
   * Unique identifier for this result, 1-64 Bytes.
   */
  id: string;

  /**
   * Заголовок результата.
   *
   * Title of the result.
   */
  title?: string;

  /**
   * Содержимое сообщения для отправки.
   *
   * Content of the message to be sent.
   */
  input_message_content?: IInputMessageContent;

  /**
   * Inline-клавиатура, прикрепленная к сообщению.
   *
   * Inline keyboard attached to the message.
   */
  reply_markup?: IInlineKeyboardMarkup;

  /**
   * URL результата.
   *
   * URL of the result.
   */
  url?: string;

  /**
   * Скрыть URL в сообщении (если True).
   *
   * Pass True if you don't want the URL to be shown in the message.
   */
  hide_url?: boolean;

  /**
   * Краткое описание результата.
   *
   * Short description of the result.
   */
  description?: string;

  /**
   * URL миниатюры для результата.
   *
   * Url of the thumbnail for the result.
   */
  thumbnail_url?: string;

  /**
   * Ширина миниатюры.
   *
   * Thumbnail width.
   */
  thumbnail_width?: number;

  /**
   * Высота миниатюры.
   *
   * Thumbnail height.
   */
  thumbnail_height?: number;
}
