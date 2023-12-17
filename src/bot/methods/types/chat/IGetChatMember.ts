/**
 * Используйте этот метод для получения информации о участнике чата. Метод гарантированно работает только для других пользователей, если бот является администратором в чате. Возвращает объект ChatMember в случае успеха.
 *
 * Use this method to get information about a member of a chat. The method is only guaranteed to work for other users if the bot is an administrator in the chat. Returns a ChatMember object on success.
 * @see {@link https://core.telegram.org/bots/api#getchatmember}
 */
export interface IGetChatMember {
  /**
   * Уникальный идентификатор целевого чата или имя пользователя целевой супергруппы или канала (в формате @channelusername).
   *
   * Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername).
   */
  chat_id: number | string;

  /**
   * Уникальный идентификатор целевого пользователя.
   *
   * Unique identifier of the target user.
   */
  user_id: number;
}
