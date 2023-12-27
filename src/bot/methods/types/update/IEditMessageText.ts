import { IMessageEntity, IInlineKeyboardMarkup } from "../../../types";

export interface IEditMessageText {
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
   * Новый текст сообщения, 1-4096 символов после обработки сущностей.
   *
   * New text of the message, 1-4096 characters after entities parsing.
   */
  text: string;

  /**
   * Опционально. Режим разбора сущностей в тексте сообщения.
   * Подробнее см. в опциях форматирования.
   *
   * Optional. Mode for parsing entities in the message text.
   * See formatting options for more details.
   */
  parse_mode?: string;

  /**
   * Опционально. Список особых сущностей, которые появляются в тексте сообщения,
   * которые можно указать вместо parse_mode.
   *
   * Optional. A JSON-serialized list of special entities that appear in message text,
   * which can be specified instead of parse_mode.
   */
  entities?: IMessageEntity[];

  /**
   * Опционально. Отключает предварительный просмотр ссылок для ссылок в этом сообщении.
   *
   * Optional. Disables link previews for links in this message.
   */
  disable_web_page_preview?: boolean;

  /**
   * Опционально. Объект JSON для встроенной клавиатуры.
   *
   * Optional. A JSON-serialized object for an inline keyboard.
   */
  reply_markup?: IInlineKeyboardMarkup;
}
