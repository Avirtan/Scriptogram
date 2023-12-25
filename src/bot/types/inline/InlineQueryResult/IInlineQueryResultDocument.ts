import { IInputMessageContent } from "..";
import { IMessageEntity, IInlineKeyboardMarkup } from "../..";

/**
 * Представляет ссылку на файл. По умолчанию этот файл будет отправлен пользователем с возможным подписью.
 * Также можно использовать input_message_content для отправки сообщения с указанным содержимым вместо файла.
 * В настоящее время этим методом можно отправлять только файлы .PDF и .ZIP.
 *
 * Represents a link to a file. By default, this file will be sent by the user with an optional caption.
 * Alternatively, you can use input_message_content to send a message with the specified content instead of the file.
 * Currently, only .PDF and .ZIP files can be sent using this method.
 *
 * @see {@link https://core.telegram.org/bots/api#inlinequeryresultdocument}
 */
export interface IInlineQueryResultDocument {
  /**
   * Тип результата, должен быть document.
   *
   * Type of the result, must be document.
   */
  type: string;

  /**
   * Уникальный идентификатор этого результата, 1-64 байта.
   *
   * Unique identifier for this result, 1-64 bytes.
   */
  id: string;

  /**
   * Заголовок для результата.
   *
   * Title for the result.
   */
  title: string;

  /**
   * Подпись документа, 0-1024 символа после обработки сущностей.
   *
   * Caption of the document to be sent, 0-1024 characters after entities parsing.
   */
  caption?: string;

  /**
   * Режим разбора сущностей в подписи к документу.
   *
   * Mode for parsing entities in the document caption.
   */
  parse_mode?: string;

  /**
   * Список специальных сущностей, которые появляются в подписи, которые можно указать вместо parse_mode.
   *
   * List of special entities that appear in the caption, which can be specified instead of parse_mode.
   */
  caption_entities?: IMessageEntity[];

  /**
   * Действительный URL для файла.
   *
   * A valid URL for the file.
   */
  document_url: string;

  /**
   * MIME-тип содержимого файла, либо "application/pdf", либо "application/zip".
   *
   * MIME type of the content of the file, either “application/pdf” or “application/zip”.
   */
  mime_type: string;

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
   * Содержимое сообщения для отправки вместо файла.
   *
   * Content of the message to be sent instead of the file.
   */
  input_message_content?: IInputMessageContent;

  /**
   * URL эскиза (только JPEG) для файла.
   *
   * URL of the thumbnail (JPEG only) for the file.
   */
  thumbnail_url?: string;

  /**
   * Ширина эскиза.
   *
   * Thumbnail width.
   */
  thumbnail_width?: number;

  /**
   * Высота эскиза.
   *
   * Thumbnail height.
   */
  thumbnail_height?: number;
}
