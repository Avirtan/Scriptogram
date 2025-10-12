import { IInputMessageContent } from "..";
import { IMessageEntity, IInlineKeyboardMarkup } from "../..";

/**
 * Представляет ссылку на анимированный видеофайл (H.264/MPEG-4 AVC без звука),
 * хранящийся на серверах Telegram. По умолчанию этот анимированный MPEG-4 файл будет отправлен пользователем
 * с необязательным заголовком. В качестве альтернативы можно использовать input_message_content для
 * отправки сообщения с указанным содержимым вместо анимации.
 *
 * Represents a link to a video animation (H.264/MPEG-4 AVC video without sound) stored on the Telegram servers.
 * By default, this animated MPEG-4 file will be sent by the user with an optional caption.
 * Alternatively, you can use input_message_content to send a message with the specified content instead of the animation.
 *
 * @see {@link https://core.telegram.org/bots/api#inlinequeryresultcachedmpeg4gif}
 */
export interface IInlineQueryResultCachedMpeg4Gif {
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
   * Действительный идентификатор файла MPEG4.
   *
   * A valid file identifier for the MPEG4 file.
   */
  mpeg4_file_id: string;

  /**
   * Необязательный. Заголовок результата.
   *
   * Optional. Title for the result.
   */
  title?: string;

  /**
   * Необязательный. Подпись к файлу MPEG-4, который будет отправлен.
   * 0-1024 символа после парсинга entities.
   *
   * Caption of the MPEG-4 file to be sent, 0-1024 characters after entities parsing.
   */
  caption?: string;

  /**
   * Необязательный. Режим разбора сущностей в подписи MPEG-4 файла.
   * См. параметр parse_mode.
   *
   * Mode for parsing entities in the caption. See formatting options for more details.
   */
  parse_mode?: string;

  /**
   * Необязательный. Список специальных сущностей, присутствующих в подписи.
   *
   * List of special entities that appear in the caption, which can be specified instead of parse_mode.
   */
  caption_entities?: IMessageEntity[];

  /**
   * Необязательный. Inline-клавиатура, прикрепленная к сообщению.
   *
   * Inline keyboard attached to the message.
   */
  reply_markup?: IInlineKeyboardMarkup;

  /**
   * Необязательный. Содержимое сообщения, которое будет отправлено вместо анимации MPEG-4.
   *
   * Content of the message to be sent instead of the video animation.
   */
  input_message_content?: IInputMessageContent;
}
