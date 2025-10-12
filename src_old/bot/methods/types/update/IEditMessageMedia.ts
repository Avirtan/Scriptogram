import { IInputMedia, IInlineKeyboardMarkup } from "../../../types";

export interface IEditMessageMedia {
  /**
   * Обязательно, если inline_message_id не указан.
   * Уникальный идентификатор целевого чата или имя пользователя целевого канала
   * (в формате @channelusername).
   *
   * Required if inline_message_id is not specified.
   * Unique identifier for the target chat or username of the target channel
   * (in the format @channelusername).
   */
  chat_id?: number | string;

  /**
   * Обязательно, если inline_message_id не указан.
   * Идентификатор сообщения для редактирования.
   *
   * Required if inline_message_id is not specified.
   * Identifier of the message to edit.
   */
  message_id?: number;

  /**
   * Обязательно, если chat_id и message_id не указаны.
   * Идентификатор встроенного сообщения.
   *
   * Required if chat_id and message_id are not specified.
   * Identifier of the inline message.
   */
  inline_message_id?: string;

  /**
   * Объект JSON для нового медиа-контента сообщения.
   *
   * A JSON-serialized object for a new media content of the message.
   */
  media: IInputMedia;

  /**
   * Опционально. Объект JSON для новой встроенной клавиатуры.
   *
   * Optional. A JSON-serialized object for a new inline keyboard.
   */
  reply_markup?: IInlineKeyboardMarkup;
}
