/**
 * Представляет область видимости команд бота, охватывающую все групповые и супергрупповые чаты.
 *
 * Represents the scope of bot commands, covering all group and supergroup chats.
 * @see {@link https://core.telegram.org/bots/api#botcommandscopeallgroupchats}
 */
export interface IBotCommandScopeAllGroupChats {
  /**
   * Тип области видимости, должен быть all_group_chats.
   * Scope type, must be all_group_chats.
   */
  type: string;
}
