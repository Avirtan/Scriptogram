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
