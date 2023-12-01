/**
 * Используйте этот метод для получения актуальной информации о чате (текущее имя пользователя для чатов один на один, текущее имя пользователя пользователя, группы или канала и т. д.). При успехе возвращается объект чата.
 *
 * Use this method to get up-to-date information about the chat (current name of the user for one-on-one conversations, current username of a user, group, or channel, etc.). Returns a Chat object on success.
 * @see {@link https://core.telegram.org/bots/api#getchat}
 */
export interface IGetChat {
  /**
   * Уникальный идентификатор целевого чата или имя пользователя целевой супергруппы или канала (в формате @channelusername).
   *
   * Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername).
   */
  chat_id: number | string;
}
