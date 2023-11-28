/**
 * Используйте этот метод для изменения списка команд бота.
 *
 * Use this method to change the list of the bot's commands.
 * @see {@link https://core.telegram.org/bots/api#setmycommands}
 */
export interface ISetMyCommands {
  /**
   * Список команд бота для установки.
   *
   * A JSON-serialized list of bot commands to be set as the list of the bot's commands.
   * At most 100 commands can be specified.
   */
  commands: IBotCommand[];

  /**
   * Область применения команд.
   *
   * A JSON-serialized object describing the scope of users for which the commands are relevant.
   * Defaults to BotCommandScopeDefault.
   */
  scope?: IBotCommandScope;

  /**
   * Код языка в формате ISO 639-1.
   *
   * A two-letter ISO 639-1 language code.
   * If empty, commands will be applied to all users from the given scope, for whose language there are no dedicated commands.
   */
  language_code?: string;
}

/**
 * Объект описания команды бота.
 *
 * Object describing a bot command.
 */
export interface IBotCommand {
  /**
   * Название команды (до 32 символов).
   *
   * The name of the command (up to 32 characters).
   */
  command: string;

  /**
   * Описание команды (до 256 символов).
   *
   * Description of the command (up to 256 characters).
   */
  description: string;
}
