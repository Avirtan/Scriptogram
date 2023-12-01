/**
 * Используйте этот метод для разбана ранее забаненного пользователя в супергруппе или канале.
 * Пользователь не вернется в группу или канал автоматически, но сможет присоединиться через ссылку и т. д.
 * Для выполнения этой операции бот должен быть администратором.
 * По умолчанию этот метод гарантирует, что после вызова пользователь не является участником чата, но сможет присоединиться к нему.
 * Если вы не хотите этого, используйте параметр only_if_banned.
 * При успехе возвращается True.
 *
 * Use this method to unban a previously banned user in a supergroup or channel.
 * The user will not return to the group or channel automatically, but will be able to join via link, etc.
 * The bot must be an administrator for this to work.
 * By default, this method guarantees that after the call the user is not a member of the chat, but will be able to join it.
 * If you don't want this, use the parameter only_if_banned.
 * Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#unbanchatmember}
 */
export interface IUnbanChatMember {
  /**
   * Уникальный идентификатор группы или имя пользователя супергруппы или канала (в формате @channelusername).
   *
   * Unique identifier for the target group or username of the target supergroup or channel (in the format @channelusername).
   */
  chat_id: number | string;

  /**
   * Уникальный идентификатор целевого пользователя.
   *
   * Unique identifier of the target user.
   */
  user_id: number;

  /**
   * Ничего не делать, если пользователь не забанен.
   *
   * Do nothing if the user is not banned.
   */
  only_if_banned?: boolean;
}
