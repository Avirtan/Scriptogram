import { IChat, IChatInviteLink } from ".";
import { IUser } from "..";

/**
 * Представляет запрос на вступление, отправленный в чат.
 *
 * Represents a join request sent to a chat.
 * @see {@link https://core.telegram.org/bots/api#chatjoinrequest}
 */
export interface IChatJoinRequest {
  /**
   * Чат, в который был отправлен запрос.
   *
   * Chat to which the request was sent.
   */
  chat: IChat;

  /**
   * Пользователь, отправивший запрос на вступление.
   *
   * User that sent the join request.
   */
  from: IUser;

  /**
   * Идентификатор личного чата с пользователем, который отправил запрос на вступление.
   *
   * Identifier of a private chat with the user who sent the join request.
   */
  user_chat_id: number;

  /**
   * Дата отправки запроса в Unix времени.
   *
   * Date the request was sent in Unix time.
   */
  date: number;

  /**
   * Опционально. Биография пользователя.
   *
   * Optional. Bio of the user.
   */
  bio?: string;

  /**
   * Опционально. Пригласительная ссылка чата, использованная пользователем для отправки запроса на вступление.
   *
   * Optional. Chat invite link that was used by the user to send the join request.
   */
  invite_link?: IChatInviteLink;
}
