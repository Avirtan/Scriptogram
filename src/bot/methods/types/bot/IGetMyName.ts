/**
 * Используйте этот метод, чтобы получить текущее имя бота для указанного языка пользователя.
 * Возвращает имя бота при успешном выполнении.
 *
 * Use this method to get the current bot name for the given user language.
 * Returns BotName on success.
 * @see {@link https://core.telegram.org/bots/api#getmyname}
 */
export interface IGetMyName {
  /**
   * Опционально. Двухбуквенный ISO 639-1 код языка или пустая строка.
   *
   * Optional. A two-letter ISO 639-1 language code or an empty string.
   */
  language_code?: string;
}
