export interface ISetMyDescription {
  /**
   * Опционально. Новое описание бота; 0-512 символов. Передайте пустую строку, чтобы удалить специальное описание для указанного языка.
   *
   * Optional. New bot description; 0-512 characters. Pass an empty string to remove the dedicated description for the given language.
   */
  description?: string;

  /**
   * Опционально. Двухбуквенный ISO 639-1 код языка.
   * Если пусто, описание будет применено ко всем пользователям, у которых нет специального описания для указанного языка.
   *
   * Optional. A two-letter ISO 639-1 language code.
   * If empty, the description will be applied to all users for whose language there is no dedicated description.
   */
  language_code?: string;
}
