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
