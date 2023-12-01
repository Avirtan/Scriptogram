/**
 * Используйте этот метод для отклонения запроса на вступление в чат. Бот должен быть администратором в чате и иметь соответствующее право администратора can_invite_users для выполнения этой операции. При успехе возвращается True.
 *
 * Use this method to decline a chat join request. The bot must be an administrator in the chat and must have the can_invite_users administrator right for this operation to work. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#declinechatjoinrequest}
 */
export interface IDeclineChatJoinRequest {
  /**
   * Уникальный идентификатор целевого чата или имя пользователя целевого канала (в формате @channelusername).
   *
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername).
   */
  chat_id: number | string;

  /**
   * Уникальный идентификатор целевого пользователя.
   *
   * Unique identifier of the target user.
   */
  user_id: number;
}
