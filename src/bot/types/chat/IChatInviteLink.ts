import { IUser } from "..";

/**
 * Этот объект представляет ссылку-приглашение для чата.
 *
 * Represents an invite link for a chat.
 * @see {@link https://core.telegram.org/bots/api#chatinvitelink}
 */
export interface IChatInviteLink {
  /**
   * Ссылка-приглашение. Если ссылка создана другим администратором чата, вторая часть ссылки будет заменена на «...».
   *
   * The invite link. If the link was created by another chat administrator, then the second part of the link will be replaced with “…”.
   */
  invite_link: string;

  /**
   * Создатель ссылки.
   *
   * Creator of the link.
   */
  creator: IUser;

  /**
   * True, если для пользователей, присоединяющихся к чату через ссылку, требуется одобрение администраторами чата.
   *
   * True, if users joining the chat via the link need to be approved by chat administrators.
   */
  creates_join_request: boolean;

  /**
   * True, если ссылка является основной.
   *
   * True, if the link is primary.
   */
  is_primary: boolean;

  /**
   * True, если ссылка отозвана.
   *
   * True, if the link is revoked.
   */
  is_revoked: boolean;

  /**
   * Опционально. Название ссылки-приглашения.
   *
   * Optional. Invite link name.
   */
  name?: string;

  /**
   * Опционально. Момент времени (в формате Unix timestamp), когда ссылка истечет или истекла.
   *
   * Optional. Point in time (Unix timestamp) when the link will expire or has been expired.
   */
  expire_date?: number;

  /**
   * Опционально. Максимальное количество пользователей, которые могут быть участниками чата одновременно после вступления в чат через эту ссылку-приглашение; от 1 до 99999.
   *
   * Optional. The maximum number of users that can be members of the chat simultaneously after joining the chat via this invite link; 1-99999.
   */
  member_limit?: number;

  /**
   * Опционально. Количество ожидающих запросов на присоединение, созданных с использованием этой ссылки.
   *
   * Optional. Number of pending join requests created using this link.
   */
  pending_join_request_count?: number;
}
