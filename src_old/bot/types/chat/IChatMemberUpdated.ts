import { IChat, IChatMember, IChatInviteLink } from ".";
import { IUser } from "..";

/**
 * Представляет изменения в статусе участника чата.
 *
 * Represents changes in the status of a chat member.
 * @see {@link https://core.telegram.org/bots/api#chatmemberupdated}
 */
export interface IChatMemberUpdated {
  /**
   * Чат, к которому принадлежит пользователь.
   *
   * Chat the user belongs to.
   */
  chat: IChat;

  /**
   * Исполнитель действия, которое привело к изменению.
   *
   * Performer of the action, which resulted in the change.
   */
  from: IUser;

  /**
   * Дата изменения в Unix времени.
   *
   * Date the change was done in Unix time.
   */
  date: number;

  /**
   * Предыдущая информация о члене чата.
   *
   * Previous information about the chat member.
   */
  old_chat_member: IChatMember;

  /**
   * Новая информация о члене чата.
   *
   * New information about the chat member.
   */
  new_chat_member: IChatMember;

  /**
   * Опционально. Пригласительная ссылка чата, которая была использована пользователем для вступления в чат; только для событий вступления по ссылке-приглашению.
   *
   * Optional. Chat invite link, which was used by the user to join the chat; for joining by invite link events only.
   */
  invite_link?: IChatInviteLink;

  /**
   * Опционально. True, если пользователь присоединился к чату через пригласительную ссылку чата через папку.
   *
   * Optional. True, if the user joined the chat via a chat folder invite link.
   */
  via_chat_folder_invite_link?: boolean;
}
