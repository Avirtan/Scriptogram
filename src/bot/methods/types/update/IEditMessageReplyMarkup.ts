import { IInlineKeyboardMarkup } from "../../../types";

/**
 * Используйте этот метод, чтобы редактировать только разметку ответа сообщений.
 * При успешном выполнении, если отредактированное сообщение не является встроенным,
 * возвращается отредактированное сообщение, в противном случае возвращается True.
 *
 * Use this method to edit only the reply markup of messages.
 * On success, if the edited message is not an inline message, the edited Message is returned,
 * otherwise True is returned.
 * @see {@link https://core.telegram.org/bots/api#editmessagereplymarkup}
 */
export interface IEditMessageReplyMarkup {
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
   * Объект JSON для новой встроенной клавиатуры.
   *
   * A JSON-serialized object for an inline keyboard.
   */
  reply_markup?: IInlineKeyboardMarkup;
}
