/**
 * Представляет участника чата, являющегося владельцем чата и имеющего все права администратора.
 * Represents a chat member that owns the chat and has all administrator privileges.
 * @see {@link https://core.telegram.org/bots/api#chatmemberowner}
 */
export interface IChatMemberOwner {
  /**
   * Статус участника в чате, всегда "creator".
   * The member's status in the chat, always "creator".
   */
  status: string;

  /**
   * Информация о пользователе.
   * Information about the user.
   */
  user: IUser;

  /**
   * Опционально. Настраиваемое название для этого пользователя.
   * Optional. Custom title for this user.
   */
  custom_title?: string;

  /**
   * Опционально. True, если присутствие пользователя в чате скрыто.
   * Optional. True, if the user's presence in the chat is hidden.
   */
  is_anonymous?: boolean;
}
