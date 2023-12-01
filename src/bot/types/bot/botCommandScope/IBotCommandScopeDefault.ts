/**
 * Представляет стандартную область видимости команд бота.
 * Стандартные команды используются, если для пользователя не указаны команды с более узкой областью видимости.
 *
 * Represents the default scope of bot commands.
 * Default commands are used if no commands with a narrower scope are specified for the user.
 * @see {@link https://core.telegram.org/bots/api#botcommandscopedefault}
 */
export interface IBotCommandScopeDefault {
  /**
   * Тип области видимости, должен быть default.
   *
   * Scope type, must be default.
   */
  type: string;
}
