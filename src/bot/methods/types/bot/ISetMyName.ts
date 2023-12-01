/**
 * Используйте этот метод для изменения имени бота. Возвращает True при успешном выполнении.
 *
 * Use this method to change the bot's name. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#setmyname}
 */
export interface ISetMyName {
  /**
   * Опционально. Новое имя бота; от 0 до 64 символов.
   * Чтобы удалить выделенное имя для заданного языка, передайте пустую строку.
   *
   * Optional. New bot name; 0-64 characters.
   * Pass an empty string to remove the dedicated name for the given language.
   */
  name?: string;

  /**
   * Опционально. Двухбуквенный ISO 639-1 код языка.
   * Если пусто, имя будет отображаться для всех пользователей, для которых нет выделенного имени на их языке.
   *
   * Optional. A two-letter ISO 639-1 language code.
   * If empty, the name will be shown to all users for whose language there is no dedicated name.
   */
  language_code?: string;
}
