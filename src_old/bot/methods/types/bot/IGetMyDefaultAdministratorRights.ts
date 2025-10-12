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
