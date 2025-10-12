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
