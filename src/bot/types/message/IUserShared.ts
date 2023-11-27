/**
 * Этот объект содержит информацию о пользователе, чей идентификатор был передан боту с помощью кнопки KeyboardButtonRequestUser.
 * This object contains information about the user whose identifier was shared with the bot using a KeyboardButtonRequestUser button.
 */
export interface IUserShared {
  /**
   * Идентификатор запроса.
   * Identifier of the request.
   */
  request_id: number;

  /**
   * Идентификатор пользователя, чьи данные были переданы.
   * Этот номер может иметь более 32 значащих бит и некоторые языки программирования могут иметь трудности или молчаливые дефекты в его интерпретации.
   * Но у него максимум 52 значащих бита, поэтому целочисленный тип 64 бита или числа с плавающей запятой двойной точности безопасны для хранения этого идентификатора.
   * Бот может не иметь доступа к этому пользователю и может быть неспособен использовать этот идентификатор, если пользователь уже неизвестен боту по каким-либо другим причинам.
   * Identifier of the user whose data was shared.
   * This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it.
   * But it has at most 52 significant bits, so a 64-bit integer or double-precision float type are safe for storing this identifier.
   * The bot may not have access to the user and could be unable to use this identifier unless the user is already known to the bot by some other means.
   */
  user_id: number;
}
