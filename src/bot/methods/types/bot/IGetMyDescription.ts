/**
 * Используйте этот метод, чтобы получить текущее описание бота для указанного языка пользователя.
 * Возвращает BotDescription при успешном выполнении.
 *
 * Use this method to get the current bot description for the given user language.
 * Returns BotDescription on success.
 * @see {@link https://core.telegram.org/bots/api#getmydescription}
 */
export interface IGetMyDescription {
  /**
   * Опционально. Двухбуквенный ISO 639-1 код языка или пустая строка.
   *
   * Optional. A two-letter ISO 639-1 language code or an empty string.
   */
  language_code?: string;
}
