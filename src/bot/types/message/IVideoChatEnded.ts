/**
 * Этот объект представляет сервисное сообщение о завершении видеочата в чате.
 * This object represents a service message about a video chat ended in the chat.
 */
export interface IVideoChatEnded {
  /**
   * Продолжительность видеочата в секундах.
   * Video chat duration in seconds.
   */
  duration: number;
}
