import { IChatPermissions } from "../../../types";

export interface ISetChatPermissions {
  /**
   * Уникальный идентификатор целевого чата или имя пользователя целевой супергруппы (в формате @supergroupusername).
   *
   * Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername).
   */
  chat_id: number | string;

  /**
   * Сериализованный объект с новыми стандартными правами чата.
   *
   * A JSON-serialized object for new default chat permissions.
   */
  permissions: IChatPermissions;

  /**
   * Опционально. Передайте True, если права чата установлены независимо.
   *
   * Optional. Pass True if chat permissions are set independently.
   */
  use_independent_chat_permissions?: boolean;
}
