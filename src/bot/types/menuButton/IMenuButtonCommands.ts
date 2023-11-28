/**
 * Представляет кнопку меню, открывающую список команд бота.
 *
 * Represents a menu button that opens the bot's list of commands.
 * @see {@link https://core.telegram.org/bots/api#menubuttoncommands}
 */
export interface IMenuButtonCommands {
  /**
   * Тип кнопки, должен быть commands.
   *
   * Type of the button, must be commands.
   */
  type: string;
}
