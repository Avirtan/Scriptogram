/**
 * Описывает данные, необходимые для расшифровки и аутентификации EncryptedPassportElement. См. документацию Telegram
 * Passport для полного описания процессов расшифровки данных и аутентификации.
 *
 * Describes data required for decrypting and authenticating EncryptedPassportElement. See the Telegram Passport
 * Documentation for a complete description of the data decryption and authentication processes.
 *
 * @see {@link https://core.telegram.org/bots/api#encryptedcredentials}
 */
export interface IEncryptedCredentials {
    /**
     * Base64-кодированные зашифрованные JSON-сериализованные данные с уникальной пользовательской нагрузкой,
     * хэшами данных и секретами, необходимыми для расшифровки и аутентификации EncryptedPassportElement.
     *
     * Base64-encoded encrypted JSON-serialized data with unique user's payload, data hashes and secrets required for
     * EncryptedPassportElement decryption and authentication.
     */
    data: string;
  
    /**
     * Base64-кодированный хэш данных для аутентификации данных.
     *
     * Base64-encoded data hash for data authentication.
     */
    hash: string;
  
    /**
     * Base64-кодированный секрет, зашифрованный с помощью открытого RSA-ключа бота, необходимый для расшифровки
     * данных.
     *
     * Base64-encoded secret, encrypted with the bot's public RSA key, required for data decryption.
     */
    secret: string;
  }
  