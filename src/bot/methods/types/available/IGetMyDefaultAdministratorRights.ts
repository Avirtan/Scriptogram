/**
 * Используйте этот метод, чтобы получить текущие права администратора по умолчанию бота.
 * Возвращает ChatAdministratorRights в случае успеха.
 *
 * Use this method to get the current default administrator rights of the bot.
 * Returns ChatAdministratorRights on success.
 * @see {@link https://core.telegram.org/bots/api#getmydefaultadministratorrights}
 */
export interface IGetMyDefaultAdministratorRights {
  /**
   * Опционально. Укажите True, чтобы получить права администратора по умолчанию бота в каналах.
   * В противном случае будут возвращены права администратора по умолчанию бота для групп и супергрупп.
   *
   * Optional. Pass True to get default administrator rights of the bot in channels.
   * Otherwise, default administrator rights of the bot for groups and supergroups will be returned.
   */
  for_channels?: boolean;
}
