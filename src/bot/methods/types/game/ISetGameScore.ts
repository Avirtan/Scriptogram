/**
 * Используйте этот метод для установки счета указанного пользователя в сообщении игры.
 * При успехе, если сообщение не является встроенным, возвращается отправленное сообщение.
 * В противном случае возвращается True. Возвращает ошибку, если новый счет не больше текущего счета пользователя в чате,
 * и force равно False.
 *
 * Use this method to set the score of the specified user in a game message. On success, if the message is not an inline message,
 * the Message is returned, otherwise True is returned. Returns an error, if the new score is not greater than the user's
 * current score in the chat and force is False.
 * @see {@link https://core.telegram.org/bots/api#setgamescore}
 */
export interface ISetGameScore {
  /**
   * Идентификатор пользователя.
   *
   * User identifier.
   */
  user_id: number;

  /**
   * Новый счет, должен быть неотрицательным.
   *
   * New score, must be non-negative.
   */
  score: number;

  /**
   * Передайте True, если высокий счет может уменьшиться.
   * Это может быть полезно при исправлении ошибок или блокировке мошенников.
   *
   * Pass True if the high score is allowed to decrease. This can be useful when fixing mistakes or banning cheaters.
   */
  force?: boolean;

  /**
   * Передайте True, если сообщение игры не должно автоматически редактироваться,
   * чтобы включить текущую таблицу лидеров.
   *
   * Pass True if the game message should not be automatically edited to include the current scoreboard.
   */
  disable_edit_message?: boolean;

  /**
   * Обязательно, если inline_message_id не указан. Уникальный идентификатор целевого чата.
   *
   * Required if inline_message_id is not specified. Unique identifier for the target chat.
   */
  chat_id?: number;

  /**
   * Обязательно, если inline_message_id не указан. Идентификатор отправленного сообщения.
   *
   * Required if inline_message_id is not specified. Identifier of the sent message.
   */
  message_id?: number;

  /**
   * Обязательно, если chat_id и message_id не указаны. Идентификатор встроенного сообщения.
   *
   * Required if chat_id and message_id are not specified. Identifier of the inline message.
   */
  inline_message_id?: string;
}
