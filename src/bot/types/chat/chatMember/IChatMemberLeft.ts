/**
 * Представляет участника чата, который в данный момент не является участником чата, но может присоединиться самостоятельно.
 *
 * Represents a chat member that isn't currently a member of the chat, but may join it themselves.
 * @see {@link https://core.telegram.org/bots/api#chatmemberleft}
 */
export interface IChatMemberLeft {
  /**
   * Статус участника чата, всегда “left”.
   *
   * The member's status in the chat, always “left”.
   */
  status: string;

  /**
   * Информация о пользователе.
   *
   * Information about the user.
   */
  user: IUser;
}
