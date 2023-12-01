/**
 * Используйте этот метод для разбана ранее заблокированного чата канала в супергруппе или канале. Бот должен быть администратором для выполнения этой операции и должен иметь соответствующие права администратора. При успехе возвращается True.
 *
 * Use this method to unban a previously banned channel chat in a supergroup or channel. The bot must be an administrator for this to work and must have the appropriate administrator rights. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#unbanchatsenderchat}
 */
export interface IUnbanChatSenderChat {
  /**
   * Уникальный идентификатор целевого чата или имя пользователя целевого канала (в формате @channelusername).
   *
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername).
   */
  chat_id: number | string;

  /**
   * Уникальный идентификатор заблокированного чата-отправителя.
   *
   * Unique identifier of the target sender chat.
   */
  sender_chat_id: number;
}
