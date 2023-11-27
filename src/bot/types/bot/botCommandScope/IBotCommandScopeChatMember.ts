/**
 * Представляет область видимости команд бота, охватывающую конкретного участника группы или супергруппы.
 *
 * Represents the scope of bot commands, covering a specific member of a group or supergroup chat.
 * @see {@link https://core.telegram.org/bots/api#botcommandscopechatmember}
 */
export interface IBotCommandScopeChatMember {
  /**
   * Тип области видимости, должен быть chat_member.
   *
   * Scope type, must be chat_member.
   */
  type: string;

  /**
   * Уникальный идентификатор целевого чата или имя пользователя целевой супергруппы (в формате @supergroupusername).
   * Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername).
   */
  chat_id: number | string;

  /**
   * Уникальный идентификатор целевого пользователя.
   * Unique identifier of the target user.
   */
  user_id: number;
}
