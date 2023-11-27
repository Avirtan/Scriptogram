/**
 * Представляет права администратора в чате.
 * Represents the rights of an administrator in a chat.
 * @see {@link https://core.telegram.org/bots/api#chatadministratorrights}
 */
export interface IChatAdministratorRights {
  /**
   * True, если присутствие пользователя в чате скрыто.
   * True, if the user's presence in the chat is hidden.
   */
  is_anonymous: boolean;

  /**
   * True, если администратор может получать доступ к журналу событий чата, списку участников в каналах, просматривать участников канала, отправлять жалобы на спам, видеть анонимных администраторов в супергруппах и игнорировать режим медленного режима. Включено в любые другие административные привилегии.
   * True, if the administrator can access the chat event log, boost list in channels, see channel members, report spam messages, see anonymous administrators in supergroups and ignore slow mode. Implied by any other administrator privilege.
   */
  can_manage_chat: boolean;

  /**
   * True, если администратор может удалять сообщения других пользователей.
   * True, if the administrator can delete messages of other users.
   */
  can_delete_messages: boolean;

  /**
   * True, если администратор может управлять видеочатами.
   * True, if the administrator can manage video chats.
   */
  can_manage_video_chats: boolean;

  /**
   * True, если администратор может ограничивать, банить или разбанивать участников чата или получать доступ к статистике супергрупп.
   * True, if the administrator can restrict, ban or unban chat members, or access supergroup statistics.
   */
  can_restrict_members: boolean;

  /**
   * True, если администратор может добавлять новых администраторов со своими привилегиями или понижать администраторов, которых он назначил, напрямую или косвенно (назначенных администраторов, которые были назначены пользователем).
   * True, if the administrator can add new administrators with a subset of their own privileges or demote administrators that they have promoted, directly or indirectly (promoted by administrators that were appointed by the user).
   */
  can_promote_members: boolean;

  /**
   * True, если пользователь может изменять название чата, фото и другие настройки.
   * True, if the user is allowed to change the chat title, photo and other settings.
   */
  can_change_info: boolean;

  /**
   * True, если пользователь может приглашать новых пользователей в чат.
   * True, if the user is allowed to invite new users to the chat.
   */
  can_invite_users: boolean;

  /**
   * Опционально. True, если администратор может публиковать сообщения в канале, или получать статистику канала; только каналы.
   * Optional. True, if the administrator can post messages in the channel, or access channel statistics; channels only.
   */
  can_post_messages?: boolean;

  /**
   * Опционально. True, если администратор может редактировать сообщения других пользователей и закреплять сообщения; только каналы.
   * Optional. True, if the administrator can edit messages of other users and can pin messages; channels only.
   */
  can_edit_messages?: boolean;

  /**
   * Опционально. True, если пользователь может закреплять сообщения; только группы и супергруппы.
   * Optional. True, if the user is allowed to pin messages; groups and supergroups only.
   */
  can_pin_messages?: boolean;

  /**
   * Опционально. True, если пользователь может публиковать сторис в канале; только каналы.
   * Optional. True, if the administrator can post stories in the channel; channels only.
   */
  can_post_stories?: boolean;

  /**
   * Опционально. True, если администратор может редактировать сторис, опубликованные другими пользователями; только каналы.
   * Optional. True, if the administrator can edit stories posted by other users; channels only.
   */
  can_edit_stories?: boolean;

  /**
   * Опционально. True, если администратор может удалять сторис, опубликованные другими пользователями; только каналы.
   * Optional. True, if the administrator can delete stories posted by other users; channels only.
   */
  can_delete_stories?: boolean;

  /**
   * Опционально. True, если пользователь может управлять темами форума: создавать, переименовывать, закрывать и открывать; только супергруппы.
   * Optional. True, if the user is allowed to create, rename, close, and reopen forum topics; supergroups only.
   */
  can_manage_topics?: boolean;
}
