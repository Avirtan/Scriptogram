/**
 * Используйте этот метод, чтобы остановить обновление сообщения о живом местоположении
 * до истечения live_period. При успешном выполнении, если сообщение не является встроенным,
 * возвращается отредактированное сообщение, в противном случае возвращается True.
 *
 * Use this method to stop updating a live location message before live_period expires.
 * On success, if the message is not an inline message, the edited Message is returned, otherwise True is returned.
 * @see {@link https://core.telegram.org/bots/api#stopmessagelivelocation}
 */
export interface IStopMessageLiveLocation {
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
   * Идентификатор сообщения с живым местоположением для остановки.
   *
   * Required if inline_message_id is not specified.
   * Identifier of the message with live location to stop.
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
   * A JSON-serialized object for a new inline keyboard.
   */
  reply_markup?: IInlineKeyboardMarkup;
}
