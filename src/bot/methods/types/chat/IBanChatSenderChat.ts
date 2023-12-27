export interface IBanChatSenderChat {
  /**
   * Уникальный идентификатор целевого чата или имя пользователя целевого канала (в формате @channelusername).
   *
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername).
   */
  chat_id: number | string;

  /**
   * Уникальный идентификатор исходного чата-отправителя.
   *
   * Unique identifier of the target sender chat.
   */
  sender_chat_id: number;
}
