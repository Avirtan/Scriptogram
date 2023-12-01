/**
 * Используйте этот метод, чтобы ваш бот покинул группу, супергруппу или канал. При успехе возвращается True.
 *
 * Use this method for your bot to leave a group, supergroup, or channel. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#leavechat}
 */
export interface ILeaveChat {
  /**
   * Уникальный идентификатор целевого чата или имя пользователя целевой супергруппы или канала (в формате @channelusername).
   *
   * Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername).
   */
  chat_id: number | string;
}
