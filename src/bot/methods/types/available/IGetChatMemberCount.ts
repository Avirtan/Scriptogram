/**
 * Используйте этот метод для получения количества участников в чате. Возвращает Int в случае успеха.
 *
 * Use this method to get the number of members in a chat. Returns Int on success.
 * @see {@link https://core.telegram.org/bots/api#getchatmembercount}
 */
export interface IGetChatMemberCount {
  /**
   * Уникальный идентификатор целевого чата или имя пользователя целевой супергруппы или канала (в формате @channelusername).
   *
   * Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername).
   */
  chat_id: number | string;
}
