export interface IEditChatInviteLink {
  /**
   * Уникальный идентификатор целевого чата или имя пользователя целевого канала (в формате @channelusername).
   *
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername).
   */
  chat_id: number | string;

  /**
   * Пригласительная ссылка для редактирования.
   *
   * The invite link to edit.
   */
  invite_link: string;

  /**
   * Опционально. Название пригласительной ссылки; от 0 до 32 символов.
   *
   * Optional. Invite link name; 0-32 characters.
   */
  name?: string;

  /**
   * Опционально. Момент времени (в формате Unix timestamp), когда ссылка истекает.
   *
   * Optional. Point in time (Unix timestamp) when the link will expire.
   */
  expire_date?: number;

  /**
   * Опционально. Максимальное количество пользователей, которые могут быть участниками чата одновременно после вступления в чат по этой пригласительной ссылке; от 1 до 99999.
   *
   * Optional. The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999.
   */
  member_limit?: number;

  /**
   * Опционально. True, если пользователи, присоединяющиеся к чату по ссылке, должны быть одобрены администраторами чата. Если True, member_limit не может быть указан.
   *
   * Optional. True, if users joining the chat via the link need to be approved by chat administrators. If True, member_limit can't be specified.
   */
  creates_join_request?: boolean;
}
