/**
 * Этот объект содержит информацию о чате, идентификатор которого был
 * передан боту с помощью кнопки KeyboardButtonRequestChat.
 *
 * This object contains information about the chat whose identifier was shared
 * with the bot using a KeyboardButtonRequestChat button.
 * @see {@link https://core.telegram.org/bots/api#chatshared}
 */
export interface IChatShared {
  /**
   * Идентификатор запроса.
   *
   * Identifier of the request.
   */
  request_id: number;

  /**
   * Идентификатор общего чата.
   * Этот номер может содержать более 32 значащих бит, и некоторые языки
   * программирования могут испытывать затруднения/молчаливые дефекты при его интерпретации.
   * Но у него максимум 52 значащих бита, поэтому для хранения этого идентификатора
   * безопасно использовать целое число (64 бита) или число двойной точности с плавающей запятой.
   *
   * Identifier of the shared chat.
   * This number may have more than 32 significant bits and some programming languages
   * may have difficulty/silent defects in interpreting it.
   * But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier.
   * The bot may not have access to the chat and could be unable to use this identifier,
   * unless the chat is already known to the bot by some other means.
   */
  chat_id: number;
}
