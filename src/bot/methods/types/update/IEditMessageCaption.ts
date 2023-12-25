import { IMessageEntity, IInlineKeyboardMarkup } from "../../../types";

/**
 * Используйте этот метод для редактирования подписей к сообщениям.
 * При успехе, если отредактированное сообщение не является встроенным,
 * возвращается отредактированное сообщение, в противном случае возвращается True.
 *
 * Use this method to edit captions of messages.
 * On success, if the edited message is not an inline message,
 * the edited Message is returned, otherwise True is returned.
 * @see {@link https://core.telegram.org/bots/api#editmessagecaption}
 */
export interface IEditMessageCaption {
  /**
   * Опционально. Обязательно, если inline_message_id не указан.
   * Уникальный идентификатор целевого чата или имя пользователя целевого канала
   * (в формате @channelusername).
   *
   * Optional. Required if inline_message_id is not specified.
   * Unique identifier for the target chat or username of the target channel
   * (in the format @channelusername).
   */
  chat_id?: number | string;

  /**
   * Опционально. Обязательно, если inline_message_id не указан.
   * Идентификатор сообщения для редактирования.
   *
   * Optional. Required if inline_message_id is not specified.
   * Identifier of the message to edit.
   */
  message_id?: number;

  /**
   * Опционально. Обязательно, если chat_id и message_id не указаны.
   * Идентификатор встроенного сообщения.
   *
   * Optional. Required if chat_id and message_id are not specified.
   * Identifier of the inline message.
   */
  inline_message_id?: string;

  /**
   * Новая подпись к сообщению, 0-1024 символов после обработки сущностей.
   *
   * New caption of the message, 0-1024 characters after entities parsing.
   */
  caption?: string;

  /**
   * Опционально. Режим разбора сущностей в подписи к сообщению.
   * Подробнее см. в опциях форматирования.
   *
   * Optional. Mode for parsing entities in the message caption.
   * See formatting options for more details.
   */
  parse_mode?: string;

  /**
   * Опционально. Список особых сущностей, которые появляются в подписи к сообщению,
   * которые можно указать вместо parse_mode.
   *
   * Optional. A JSON-serialized list of special entities that appear in the caption,
   * which can be specified instead of parse_mode.
   */
  caption_entities?: IMessageEntity[];

  /**
   * Опционально. Объект JSON для встроенной клавиатуры.
   *
   * Optional. A JSON-serialized object for an inline keyboard.
   */
  reply_markup?: IInlineKeyboardMarkup;
}
