export interface IGetGameHighScores {
  /**
   * Идентификатор целевого пользователя.
   *
   * Target user id.
   */
  user_id: number;

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
