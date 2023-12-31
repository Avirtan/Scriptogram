import { IUser } from "..";

/**
 * Этот объект представляет сервисное сообщение о новых участниках, приглашенных на видеочат.
 *
 * This object represents a service message about new members invited to a video chat.
 * @see {@link https://core.telegram.org/bots/api#videochatparticipantsinvited}
 */
export interface IVideoChatParticipantsInvited {
  /**
   * Новые участники, которые были приглашены на видеочат.
   *
   * New members that were invited to the video chat.
   */
  users: IUser[];
}
