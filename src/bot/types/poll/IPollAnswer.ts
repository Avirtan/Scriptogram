/**
 * Этот объект представляет ответ пользователя в неанонимном опросе.
 * This object represents an answer of a user in a non-anonymous poll.
 * @see {@link https://core.telegram.org/bots/api#pollanswer}
 */
export interface IPollAnswer {
  /**
   * Уникальный идентификатор опроса.
   * Unique poll identifier.
   */
  poll_id: string;

  /**
   * Опционально. Чат, который изменил ответ на опрос, если пользователь анонимен.
   * Optional. The chat that changed the answer to the poll, if the voter is anonymous.
   */
  voter_chat?: IChat;

  /**
   * Опционально. Пользователь, который изменил ответ на опрос, если пользователь не анонимен.
   * Optional. The user that changed the answer to the poll, if the voter isn't anonymous.
   */
  user?: IUser;

  /**
   * Идентификаторы выбранных вариантов ответа (начиная с 0). Могут быть пустыми, если голос был отозван.
   * 0-based identifiers of chosen answer options. May be empty if the vote was retracted.
   */
  option_ids: number[];
}
