/**
 * Используйте этот метод для бана чата канала в супергруппе или канале. Пока чат не будет разбанен, владелец заблокированного чата не сможет отправлять сообщения от имени любого из своих каналов. Бот должен быть администратором в супергруппе или канале для выполнения этой операции и должен иметь соответствующие права администратора. При успехе возвращается True.
 *
 * Use this method to ban a channel chat in a supergroup or a channel. Until the chat is unbanned, the owner of the banned chat won't be able to send messages on behalf of any of their channels. The bot must be an administrator in the supergroup or channel for this to work and must have the appropriate administrator rights. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#banchatsenderchat}
 */
export interface IBanChatSenderChat {
  /**
   * Уникальный идентификатор целевого чата или имя пользователя целевого канала (в формате @channelusername).
   *
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername).
   */
  chat_id: number | string;

  /**
   * Уникальный идентификатор исходного чата-отправителя.
   *
   * Unique identifier of the target sender chat.
   */
  sender_chat_id: number;
}
