/**
 * Представляет участника чата с дополнительными привилегиями.
 *
 * Represents a chat member with additional privileges.
 * @see {@link https://core.telegram.org/bots/api#chatmemberadministrator}
 */
export interface IChatMemberAdministrator {
  /**
   * Статус участника в чате, всегда "administrator".
   *
   * The member's status in the chat, always "administrator".
   */
  status: string;

  /**
   * Информация о пользователе.
   *
   * Information about the user.
   */
  user: IUser;

  /**
   * Опционально. True, если боту разрешено редактировать привилегии администратора для этого пользователя.
   *
   *  Optional. True, if the bot is allowed to edit administrator privileges of that user.
   */
  can_be_edited?: boolean;

  /**
   * Опционально. True, если присутствие пользователя в чате скрыто.
   *
   * Optional. True, if the user's presence in the chat is hidden.
   */
  is_anonymous?: boolean;

  /**
   * Опционально. True, если администратор может получить доступ к журналу событий чата,
   * списку усилий в каналах, увидеть членов канала, сообщить о спаме, увидеть анонимных администраторов в супергруппах и игнорировать режим замедления.
   * Это подразумевается любым другим привилегиям администратора.
   *
   * Optional. True, if the administrator can access the chat event log, boost list in channels, see channel members, report spam messages,
   * see anonymous administrators in supergroups and ignore slow mode. Implied by any other administrator privilege
   */
  can_manage_chat?: boolean;

  /**
   * Опционально. True, если администратор может удалять сообщения других пользователей.
   *
   * Optional. True, if the administrator can delete messages of other users.
   */
  can_delete_messages?: boolean;

  /**
   * Опционально. True, если администратор может управлять видеочатами.
   *
   * Optional. True, if the administrator can manage video chats.
   */
  can_manage_video_chats?: boolean;

  /**
   * Опционально. True, если администратор может ограничивать, банить или разбанивать участников чата,
   * или получать доступ к статистике супергруппы.
   *
   * Optional. True, if the administrator can restrict, ban, or unban chat members, or access supergroup statistics.
   */
  can_restrict_members?: boolean;

  /**
   * Опционально. True, если администратор может добавлять новых администраторов с частью их собственных привилегий,
   * или понижать администраторов, которых он назначил, непосредственно или косвенно
   * (назначенные администраторами, которых назначил пользователь).
   *
   * Optional. True, if the administrator can add new administrators with a subset of their own privileges
   * or demote administrators that they have promoted, directly or indirectly (promoted by administrators that were appointed by the user).
   */
  can_promote_members?: boolean;

  /**
   * Опционально. True, если пользователю разрешено изменять название чата, фото и другие настройки.
   *
   * Optional. True, if the user is allowed to change the chat title, photo, and other settings.
   */
  can_change_info?: boolean;

  /**
   * Опционально. True, если пользователю разрешено приглашать новых пользователей в чат.
   *
   * Optional. True, if the user is allowed to invite new users to the chat.
   */
  can_invite_users?: boolean;

  /**
   * Опционально. True, если администратор может отправлять сообщения в канале или получать статистику канала; только для каналов.
   *
   * Optional. True, if the administrator can post messages in the channel or access channel statistics; channels only.
   */
  can_post_messages?: boolean;

  /**
   * Опционально. True, если администратор может редактировать сообщения других пользователей и прикреплять сообщения; только для каналов.
   *
   * Optional. True, if the administrator can edit messages of other users and can pin messages; channels only.
   */
  can_edit_messages?: boolean;

  /**
   * Опционально. True, если пользователю разрешено закреплять сообщения; только для групп и супергрупп.
   *
   * Optional. True, if the user is allowed to pin messages; groups and supergroups only.
   */
  can_pin_messages?: boolean;

  /**
   * Опционально. True, если администратор может размещать сторис в канале; только для каналов.
   *
   * Optional. True, if the administrator can post stories in the channel; channels only.
   */
  can_post_stories?: boolean;

  /**
   * Опционально. True, если администратор может редактировать сторис, размещенные другими пользователями; только для каналов.
   *
   * Optional. True, if the administrator can edit stories posted by other users; channels only.
   */
  can_edit_stories?: boolean;

  /**
   * Опционально. True, если администратор может удалять сторис, размещенные другими пользователями; только для каналов.
   *
   * Optional. True, if the administrator can delete stories posted by other users; channels only.
   */
  can_delete_stories?: boolean;

  /**
   * Опционально. True, если пользователю разрешено создавать, переименовывать, закрывать и открывать темы форума; только для супергрупп.
   *
   * Optional. True, if the user is allowed to create, rename, close, and reopen forum topics; supergroups only.
   */
  can_manage_topics?: boolean;

  /**
   * Опционально. Название для этого пользователя.
   *
   * Optional. Custom title for this user.
   */
  custom_title?: string;
}
