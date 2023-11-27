/**
 * Представляет область видимости команд бота, охватывающую всех администраторов групповых и супергрупповых чатов.
 *
 * Represents the scope of bot commands, covering all group and supergroup chat administrators.
 * @see {@link https://core.telegram.org/bots/api#botcommandscopeallchatadministrators}
 */
export interface IBotCommandScopeAllChatAdministrators {
  /**
   * Тип области видимости, должен быть all_chat_administrators.
   * Scope type, must be all_chat_administrators.
   */
  type: string;
}
