/**
 * Этот объект представляет пользователя или бота Telegram.
 *
 * This object represents a Telegram user or bot.
 * @see {@link https://core.telegram.org/bots/api#user}
 */
export interface IUser {
  /**
   * Уникальный идентификатор для этого пользователя или бота.
   *
   * Unique identifier for this user or bot.
   */
  id: number;

  /**
   * True, если этот пользователь является ботом.
   *
   * True, if this user is a bot.
   */
  is_bot: boolean;

  /**
   * Имя пользователя или бота.
   *
   * User's or bot's first name.
   */
  first_name: string;

  /**
   * Опционально. Фамилия пользователя или бота.
   *
   * Optional. User's or bot's last name.
   */
  last_name?: string;

  /**
   * Опционально. Имя пользователя пользователя или бота.
   *
   * Optional. User's or bot's username.
   */
  username?: string;

  /**
   * Опционально. Языковой код пользователя.
   *
   * Optional. IETF language tag of the user's language.
   */
  language_code?: string;

  /**
   * Опционально. True, если пользователь является пользователем Telegram Premium.
   *
   * Optional. True, if this user is a Telegram Premium user.
   */
  is_premium?: boolean;

  /**
   * Опционально. True, если пользователь добавил бота в меню вложений.
   *
   * Optional. True, if this user added the bot to the attachment menu.
   */
  added_to_attachment_menu?: boolean;

  /**
   * Опционально. True, если бот может быть приглашен в группы.
   *
   * Optional. True, if the bot can be invited to groups.
   */
  can_join_groups?: boolean;

  /**
   * Опционально. True, если отключен режим конфиденциальности для бота.
   *
   * Optional. True, if privacy mode is disabled for the bot.
   */
  can_read_all_group_messages?: boolean;

  /**
   * Опционально. True, если бот поддерживает инлайн-запросы.
   *
   * Optional. True, if the bot supports inline queries.
   */
  supports_inline_queries?: boolean;
}
