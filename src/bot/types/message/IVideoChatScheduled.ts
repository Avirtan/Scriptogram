/**
 * Этот объект представляет сервисное сообщение о запланированном видеочате в чате.
 * This object represents a service message about a video chat scheduled in the chat.
 */
export interface IVideoChatScheduled {
  /**
   * Момент времени (в формате Unix timestamp), когда видеочат должен быть запущен администратором чата.
   * Point in time (Unix timestamp) when the video chat is supposed to be started by a chat administrator.
   */
  start_date: number;
}
