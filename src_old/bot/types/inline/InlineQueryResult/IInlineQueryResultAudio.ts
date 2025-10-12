import { IInputMessageContent } from "..";
import { IMessageEntity, IInlineKeyboardMarkup } from "../..";

/**
 * Представляет ссылку на аудиофайл в формате MP3. По умолчанию этот аудиофайл будет отправлен пользователем.
 * Также можно использовать input_message_content для отправки сообщения с указанным содержимым вместо аудио.
 *
 * Represents a link to an MP3 audio file. By default, this audio file will be sent by the user.
 * Alternatively, you can use input_message_content to send a message with the specified content instead of the audio.
 *
 * @see {@link https://core.telegram.org/bots/api#inlinequeryresultaudio}
 */
export interface IInlineQueryResultAudio {
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
   * Действительный URL для аудиофайла.
   *
   * A valid URL for the audio file.
   */
  audio_url: string;

  /**
   * Заголовок.
   *
   * Title.
   */
  title?: string;

  /**
   * Подпись, 0-1024 символа после обработки сущностей.
   *
   * Caption, 0-1024 characters after entities parsing.
   */
  caption?: string;

  /**
   * Режим разбора сущностей в подписи к аудио.
   *
   * Mode for parsing entities in the audio caption.
   */
  parse_mode?: string;

  /**
   * Список специальных сущностей, которые появляются в подписи, которые можно указать вместо parse_mode.
   *
   * List of special entities that appear in the caption, which can be specified instead of parse_mode.
   */
  caption_entities?: IMessageEntity[];

  /**
   * Артист.
   *
   * Performer.
   */
  performer?: string;

  /**
   * Продолжительность аудиофайла в секундах.
   *
   * Audio duration in seconds.
   */
  audio_duration?: number;

  /**
   * Inline-клавиатура, прикрепленная к сообщению.
   *
   * Inline keyboard attached to the message.
   */
  reply_markup?: IInlineKeyboardMarkup;

  /**
   * Содержимое сообщения для отправки вместо аудио.
   *
   * Content of the message to be sent instead of the audio.
   */
  input_message_content?: IInputMessageContent;
}
