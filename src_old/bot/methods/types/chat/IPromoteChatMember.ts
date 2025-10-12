export interface IPromoteChatMember {
  /**
   * Уникальный идентификатор чата или имя пользователя целевого канала (в формате @channelusername).
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

  /**
   * Передайте True, если присутствие администратора в чате скрыто.
   *
   * Pass True if the administrator's presence in the chat is hidden.
   */
  is_anonymous?: boolean;

  /**
   * Передайте True, если администратор может управлять чатом.
   *
   * Pass True if the administrator can manage the chat.
   */
  can_manage_chat?: boolean;

  /**
   * Передайте True, если администратор может удалять сообщения других пользователей.
   *
   * Pass True if the administrator can delete messages of other users.
   */
  can_delete_messages?: boolean;
  /**
   * Передайте True, если администратор может управлять видеочатами.
   *
   * Pass True if the administrator can manage video chats.
   */
  can_manage_video_chats?: boolean;

  /**
   * Передайте True, если администратор может ограничивать пользователей.
   *
   * Pass True if the administrator can restrict, ban or unban chat members, or access supergroup statistics.
   */
  can_restrict_members?: boolean;

  /**
   * Передайте True, если администратор может повышать участников.
   *
   * Pass True if the administrator can promote members.
   */
  can_promote_members?: boolean;

  /**
   * Передайте True, если администратор может изменять информацию о чате.
   *
   * Pass True if the administrator can change chat information.
   */
  can_change_info?: boolean;

  /**
   * Передайте True, если администратор может приглашать пользователей.
   *
   * Pass True if the administrator can invite users to the chat.
   */
  can_invite_users?: boolean;

  /**
   * Передайте True, если администратор может размещать сообщения в канале.
   *
   * Pass True if the administrator can post messages in the channel.
   */
  can_post_messages?: boolean;

  /**
   * Передайте True, если администратор может редактировать сообщения в канале.
   *
   * Pass True if the administrator can edit messages in the channel.
   */
  can_edit_messages?: boolean;

  /**
   * Передайте True, если администратор может закреплять сообщения в канале.
   *
   * Pass True if the administrator can pin messages in the channel.
   */
  can_pin_messages?: boolean;

  /**
   * Передайте True, если администратор может размещать сторис в канале.
   *
   * Pass True if the administrator can post stories in the channel.
   */
  can_post_stories?: boolean;

  /**
   * Передайте True, если администратор может редактировать сторис, размещенные другими пользователями, в канале.
   *
   * Pass True if the administrator can edit stories posted by other users in the channel.
   */
  can_edit_stories?: boolean;

  /**
   * Передайте True, если администратор может удалять сторис, размещенные другими пользователями, в канале.
   *
   * Pass True if the administrator can delete stories posted by other users in the channel.
   */
  can_delete_stories?: boolean;

  /**
   * Передайте True, если пользователь может управлять темами чата.
   *
   * Pass True if the user can manage chat topics.
   */
  can_manage_topics?: boolean;
}
