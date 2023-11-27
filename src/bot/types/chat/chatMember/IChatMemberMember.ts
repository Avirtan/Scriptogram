/**
 * Представляет участника чата без дополнительных привилегий или ограничений.
 * Represents a chat member that has no additional privileges or restrictions.
 * @see {@link https://core.telegram.org/bots/api#chatmembermember}
 */
export interface IChatMemberMember {
  /**
   * Статус пользователя в чате, всегда "участник".
   * The member's status in the chat, always "member".
   */
  status: string;

  /**
   * Информация о пользователе.
   * Information about the user.
   */
  user: IUser;
}
