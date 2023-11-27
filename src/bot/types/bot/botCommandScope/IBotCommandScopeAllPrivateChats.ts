/**
 * Представляет область видимости команд бота, охватывающую все приватные чаты.
 *
 * Represents the scope of bot commands, covering all private chats.
 * @see {@link https://core.telegram.org/bots/api#botcommandscopeallprivatechats}
 */
export interface IBotCommandScopeAllPrivateChats {
  /**
   * Тип области видимости, должен быть all_private_chats.
   *
   * Scope type, must be all_private_chats.
   */
  type: string;
}
