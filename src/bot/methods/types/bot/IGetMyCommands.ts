import { IBotCommandScope } from "../../../types";

export interface IGetMyCommands {
  /**
   * Опционально. JSON-сериализованный объект, описывающий область пользователей.
   * По умолчанию: BotCommandScopeDefault.
   *
   * Optional. A JSON-serialized object describing the scope of users.
   * Defaults to BotCommandScopeDefault.
   */
  scope?: IBotCommandScope;

  /**
   * Опционально. Двухбуквенный ISO 639-1 код языка или пустая строка.
   *
   * Optional. A two-letter ISO 639-1 language code or an empty string.
   */
  language_code?: string;
}
