/**
 * Используйте этот метод, чтобы получить текущее краткое описание бота для указанного языка пользователя.
 * Возвращает BotShortDescription при успешном выполнении.
 *
 * Use this method to get the current bot short description for the given user language.
 * Returns BotShortDescription on success.
 * @see {@link https://core.telegram.org/bots/api#getmyshortdescription}
 */
export interface IGetMyShortDescription {
  /**
   * Опционально. Двухбуквенный ISO 639-1 код языка или пустая строка.
   *
   * Optional. A two-letter ISO 639-1 language code or an empty string.
   */
  language_code?: string;
}
