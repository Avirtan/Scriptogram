/**
 * Используйте этот метод для получения текущего списка команд бота для заданной области и языка пользователя.
 * Возвращает массив объектов BotCommand. Если команды не установлены, возвращается пустой список.
 *
 * Use this method to get the current list of the bot's commands for the given scope and user language.
 * Returns an Array of BotCommand objects. If commands aren't set, an empty list is returned.
 * @see {@link https://core.telegram.org/bots/api#getmycommands}
 */
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
