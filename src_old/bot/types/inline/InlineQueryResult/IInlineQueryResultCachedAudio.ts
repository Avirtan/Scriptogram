import { IInputMessageContent } from "..";
import { IMessageEntity, IInlineKeyboardMarkup } from "../..";

/**
 * Представляет ссылку на аудиофайл MP3, хранящийся на серверах Telegram.
 * По умолчанию этот аудиофайл будет отправлен пользователем.
 * В качестве альтернативы можно использовать input_message_content для отправки сообщения с указанным содержимым вместо аудио.
 *
 * Represents a link to an MP3 audio file stored on the Telegram servers.
 * By default, this audio file will be sent by the user.
 * Alternatively, you can use input_message_content to send a message with the specified content instead of the audio.
 *
 * @see {@link https://core.telegram.org/bots/api#inlinequeryresultcachedaudio}
 */
export interface IInlineQueryResultCachedAudio {
  /**
   * Тип результата, должен быть audio.
   *
   * Type of the result, must be audio.
   */
  type: string;

  /**
   * Уникальный идентификатор этого результата, 1-64 байта.
   *
   * Unique identifier for this result, 1-64 bytes.
   */
  id: string;

  /**
   * Действительный идентификатор файла для аудиофайла.
   *
   * A valid file identifier for the audio file.
   */
  audio_file_id: string;

  /**
   * Необязательный. Подпись, 0-1024 символов после разбора сущностей.
   *
   * Caption, 0-1024 characters after entities parsing.
   */
  caption?: string;

  /**
   * Необязательный. Режим разбора сущностей в подписи аудиофайла.
   *
   * Mode for parsing entities in the audio caption. See formatting options for more details.
   */
  parse_mode?: string;

  /**
   * Необязательный. Список специальных сущностей, которые появляются в подписи аудиофайла.
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
   * Необязательный. Содержимое сообщения, которое будет отправлено вместо аудио.
   *
   * Content of the message to be sent instead of the audio.
   */
  input_message_content?: IInputMessageContent;
}
