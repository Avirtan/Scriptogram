/**
 * Этот объект содержит информацию об одном варианте ответа в опросе.
 * This object contains information about one answer option in a poll.
 * @see {@link https://core.telegram.org/bots/api#polloption}
 */
export interface IPollOption {
  /**
   * Текст варианта, от 1 до 100 символов.
   * Option text, 1-100 characters.
   */
  text: string;

  /**
   * Количество пользователей, проголосовавших за этот вариант.
   * Number of users that voted for this option.
   */
  voter_count: number;
}
