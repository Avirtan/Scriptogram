/**
 * Этот объект представляет уникальный идентификатор сообщения.
 * This object represents a unique message identifier.
 * @see {@link https://core.telegram.org/bots/api#messageid}
 */
export interface IMessageId {
  /**
   * Уникальный идентификатор сообщения
   * Unique message identifier
   */
  message_id: number;
}
