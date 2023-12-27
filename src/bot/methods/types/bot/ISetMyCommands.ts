import { IBotCommand, IBotCommandScope } from "../../../types";

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
