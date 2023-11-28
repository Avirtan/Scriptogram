/**
 * Используйте этот метод, чтобы остановить опрос, отправленный ботом.
 * При успешном выполнении возвращается остановленный опрос.
 *
 * Use this method to stop a poll which was sent by the bot.
 * On success, the stopped Poll is returned.
 * @see {@link https://core.telegram.org/bots/api#stoppoll}
 */
export interface IStopPoll {
  /**
   * Уникальный идентификатор целевого чата или имя пользователя целевого канала
   * (в формате @channelusername).
   *
   * Unique identifier for the target chat or username of the target channel
   * (in the format @channelusername).
   */
  chat_id: number | string;

  /**
   * Идентификатор исходного сообщения с опросом.
   *
   * Identifier of the original message with the poll.
   */
  message_id: number;

  /**
   * Объект JSON для новой встроенной клавиатуры сообщения.
   *
   * A JSON-serialized object for a new message inline keyboard.
   */
  reply_markup?: IInlineKeyboardMarkup;
}
