import { IUser } from "../..";

/**
 * Представляет участника чата, который был заблокирован в чате и не может вернуться в чат или просматривать сообщения чата.
 *
 * Represents a chat member that was banned in the chat and can't return to the chat or view chat messages.
 * @see {@link https://core.telegram.org/bots/api#chatmemberbanned}
 */
export interface IChatMemberBanned {
  /**
   * Статус участника чата, всегда “kicked”.
   *
   * The member's status in the chat, always “kicked”.
   */
  status: string;

  /**
   * Информация о пользователе.
   *
   * Information about the user.
   */
  user: IUser;

  /**
   * Дата, когда ограничения будут сняты для этого пользователя; Unix время. Если 0, то пользователь заблокирован навсегда.
   *
   * Date when restrictions will be lifted for this user; Unix time. If 0, then the user is banned forever.
   */
  until_date: number;
}
