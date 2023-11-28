/**
 * Используйте этот метод для установки пользовательского заголовка для администратора в супергруппе, продвигаемой ботом. При успехе возвращается True.
 *
 * Use this method to set a custom title for an administrator in a supergroup promoted by the bot. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#setchatadministratorcustomtitle}
 */
export interface ISetChatAdministratorCustomTitle {
  /**
   * Уникальный идентификатор целевого чата или имя пользователя целевой супергруппы (в формате @supergroupusername).
   *
   * Unique identifier for the target chat or username of the target supergroup (in the format @supergroupusername).
   */
  chat_id: number | string;

  /**
   * Уникальный идентификатор целевого пользователя.
   *
   * Unique identifier of the target user.
   */
  user_id: number;

  /**
   * Новый пользовательский заголовок для администратора; 0-16 символов, эмодзи не разрешены.
   *
   * New custom title for the administrator; 0-16 characters, emoji are not allowed.
   */
  custom_title: string;
}
