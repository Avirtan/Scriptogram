import { IEncryptedCredentials, IEncryptedPassportElement } from ".";

/**
 * Описывает данные Telegram Passport, которые были переданы боту пользователем.
 *
 * Describes Telegram Passport data shared with the bot by the user.
 *
 * @see {@link https://core.telegram.org/bots/api#passportdata}
 */
export interface IPassportData {
  /**
   * Массив с информацией о документах и других элементах Telegram Passport,
   * которая была передана боту.
   *
   * Array with information about documents and other Telegram Passport elements
   * that was shared with the bot.
   */
  data: IEncryptedPassportElement[];

  /**
   * Зашифрованные учетные данные, необходимые для расшифровки данных.
   *
   * Encrypted credentials required to decrypt the data.
   */
  credentials: IEncryptedCredentials;
}
