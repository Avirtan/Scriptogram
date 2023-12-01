/**
 * Используйте этот метод, чтобы изменить краткое описание бота, которое отображается на странице профиля бота и отправляется вместе со ссылкой при публикации бота.
 * Возвращает True при успешном выполнении.
 *
 * Use this method to change the bot's short description, which is shown on the bot's profile page and is sent together with the link when users share the bot.
 * Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#setmyshortdescription}
 */
export interface ISetMyShortDescription {
  /**
   * Опционально. Новое краткое описание для бота; 0-120 символов.
   *
   * Optional. New short description for the bot; 0-120 characters.
   */
  short_description?: string;

  /**
   * Опционально. Двухбуквенный ISO 639-1 код языка.
   * Если пусто, краткое описание будет применено ко всем пользователям, у которых нет отдельного краткого описания.
   *
   * Optional. A two-letter ISO 639-1 language code.
   * If empty, the short description will be applied to all users for whose language there is no dedicated short description.
   */
  language_code?: string;
}
