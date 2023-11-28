/**
 * Представляет область видимости команд бота, охватывающую всех администраторов конкретной группы или супергруппы.
 *
 * Represents the scope of bot commands, covering all administrators of a specific group or supergroup chat.
 * @see {@link https://core.telegram.org/bots/api#botcommandscopechatadministrators}
 */
export interface IBotCommandScopeChatAdministrators {
  /**
   * Тип области видимости, должен быть chat_administrators.
   *
   * Scope type, must be chat_administrators.
   */
  type: string;

  /**
   * Уникальный идентификатор целевого чата или имя пользователя целевой супергруппы
   * (в формате @supergroupusername).
   *
   * Unique identifier for the target chat or username of the target supergroup
   * (in the format @supergroupusername).
   */
  chat_id: number | string;
}
