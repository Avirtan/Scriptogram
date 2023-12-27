import { IChatAdministratorRights } from "../../../types";

export interface ISetMyDefaultAdministratorRights {
  /**
   * Опционально. Описание новых прав администратора по умолчанию в формате JSON.
   * Если не указано, права администратора по умолчанию будут удалены.
   *
   * Optional. A JSON-serialized object describing new default administrator rights.
   * If not specified, the default administrator rights will be cleared.
   */
  rights?: IChatAdministratorRights;

  /**
   * Опционально. Укажите True, чтобы изменить права администратора по умолчанию бота в каналах.
   * В противном случае будут изменены права администратора по умолчанию бота для групп и супергрупп.
   *
   * Optional. Pass True to change the default administrator rights of the bot in channels.
   * Otherwise, the default administrator rights of the bot for groups and supergroups will be changed.
   */
  for_channels?: boolean;
}
