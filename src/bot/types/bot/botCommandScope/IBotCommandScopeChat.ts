/**
 * Представляет область видимости команд бота, охватывающую определенный чат.
 *
 * Represents the scope of bot commands, covering a specific chat.
 * @see {@link https://core.telegram.org/bots/api#botcommandscopechat}
 */
export interface IBotCommandScopeChat {
  /**
   * Тип области видимости, должен быть chat.
   * Scope type, must be chat.
   */
  type: string;

  /**
   * Уникальный идентификатор целевого чата или имя пользователя целевой супергруппы
   * (в формате @supergroupusername).
   * Unique identifier for the target chat or username of the target supergroup
   * (in the format @supergroupusername).
   */
  chat_id: number | string;
}
