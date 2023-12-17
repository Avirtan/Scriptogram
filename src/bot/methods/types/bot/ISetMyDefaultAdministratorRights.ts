import { IChatAdministratorRights } from "../../../types";

/**
 * Используйте этот метод, чтобы изменить права администратора по умолчанию, запрашиваемые ботом при добавлении в группы или каналы.
 * Эти права будут предложены пользователям, но они могут изменить список перед добавлением бота.
 * Возвращает True при успешном выполнении.
 *
 * Use this method to change the default administrator rights requested by the bot when it's added as an administrator to groups or channels.
 * These rights will be suggested to users, but they are free to modify the list before adding the bot.
 * Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#setmydefaultadministratorrights}
 */
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
