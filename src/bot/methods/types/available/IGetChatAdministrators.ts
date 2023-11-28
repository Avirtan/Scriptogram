/**
 * Используйте этот метод для получения списка администраторов в чате, которые не являются ботами. Возвращает массив объектов ChatMember.
 *
 * Use this method to get a list of administrators in a chat, which aren't bots. Returns an Array of ChatMember objects.
 * @see {@link https://core.telegram.org/bots/api#getchatadministrators}
 */
export interface IGetChatAdministrators {
  /**
   * Уникальный идентификатор целевого чата или имя пользователя целевой супергруппы или канала (в формате @channelusername).
   *
   * Unique identifier for the target chat or username of the target supergroup or channel (in the format @channelusername).
   */
  chat_id: number | string;
}
