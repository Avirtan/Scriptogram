export interface IRevokeChatInviteLink {
  /**
   * Уникальный идентификатор целевого чата или имя пользователя целевого канала (в формате @channelusername).
   *
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername).
   */
  chat_id: number | string;

  /**
   * Пригласительная ссылка для отзыва.
   *
   * The invite link to revoke.
   */
  invite_link: string;
}
