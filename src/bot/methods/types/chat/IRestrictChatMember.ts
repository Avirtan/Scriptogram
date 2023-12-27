import { IChatPermissions } from "../../../types";

export interface IRestrictChatMember {
  /**
   * Уникальный идентификатор супергруппы или имя пользователя супергруппы (в формате @supergroupusername).
   *
   * Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername).
   */
  chat_id: number | string;

  /**
   * Уникальный идентификатор целевого пользователя.
   *
   * Unique identifier of the target user.
   */
  user_id: number;

  /**
   * Объект, сериализованный в JSON, для новых прав пользователя.
   *
   * A JSON-serialized object for new user permissions.
   */
  permissions: IChatPermissions;

  /**
   * Передайте True, если разрешения чата установлены независимо.
   * В противном случае разрешения can_send_other_messages и can_add_web_page_previews подразумевают разрешение can_send_messages, can_send_audios, can_send_documents, can_send_photos, can_send_videos, can_send_video_notes и can_send_voice_notes;
   * разрешение can_send_polls подразумевает разрешение can_send_messages.
   *
   * Pass True if chat permissions are set independently.
   * Otherwise, the can_send_other_messages and can_add_web_page_previews permissions will imply the can_send_messages, can_send_audios, can_send_documents, can_send_photos, can_send_videos, can_send_video_notes, and can_send_voice_notes permissions;
   * the can_send_polls permission will imply the can_send_messages permission.
   */
  use_independent_chat_permissions?: boolean;

  /**
   * Дата, когда ограничения будут сняты для пользователя (время Unix).
   * Если пользователь ограничен более чем на 366 дней или менее чем на 30 секунд от текущего времени, он считается ограниченным навсегда.
   *
   * Date when restrictions will be lifted for the user; Unix time.
   * If user is restricted for more than 366 days or less than 30 seconds from the current time, they are considered to be restricted forever.
   */
  until_date?: number;
}
