/**
 * Используйте этот метод для установки стандартных прав чата для всех участников. Бот должен быть администратором в группе или супергруппе для выполнения этой операции и должен иметь права администратора can_restrict_members. При успехе возвращается True.
 *
 * Use this method to set default chat permissions for all members. The bot must be an administrator in the group or a supergroup for this to work and must have the can_restrict_members administrator rights. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#setchatpermissions}
 */
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
