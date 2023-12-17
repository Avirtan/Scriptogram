import { IBotCommandScope } from "../../../types";

/**
 * Используйте этот метод для удаления списка команд бота для указанной области и языка пользователя.
 * После удаления, более высокоуровневые команды будут показаны задействованным пользователям.
 *
 * Use this method to delete the list of the bot's commands for the given scope and user language.
 * After deletion, higher level commands will be shown to affected users.
 * @see {@link https://core.telegram.org/bots/api#deletemycommands}
 */
export interface IDeleteMyCommands {
  /**
   * Область применения команд.
   *
   * A JSON-serialized object, describing the scope of users for which the commands are relevant.
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
