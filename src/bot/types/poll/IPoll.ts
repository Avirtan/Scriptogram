/**
 * Этот объект содержит информацию об опросе.
 *
 * This object contains information about a poll.
 * @see {@link https://core.telegram.org/bots/api#poll}
 */
export interface IPoll {
  /**
   * Уникальный идентификатор опроса.
   *
   * Unique poll identifier.
   */
  id: string;

  /**
   * Вопрос опроса, от 1 до 300 символов.
   *
   * Poll question, 1-300 characters.
   */
  question: string;

  /**
   * Список вариантов опроса.
   *
   * List of poll options.
   */
  options: IPollOption[];

  /**
   * Общее количество пользователей, проголосовавших в опросе.
   *
   * Total number of users that voted in the poll.
   */
  total_voter_count: number;

  /**
   * True, если опрос закрыт.
   *
   * True, if the poll is closed.
   */
  is_closed: boolean;

  /**
   * True, если опрос анонимный.
   *
   * True, if the poll is anonymous.
   */
  is_anonymous: boolean;

  /**
   * Тип опроса, в настоящее время может быть "regular" или "quiz".
   *
   * Poll type, currently can be “regular” or “quiz”.
   */
  type: string;

  /**
   * True, если опрос позволяет выбирать несколько ответов.
   *
   * True, if the poll allows multiple answers.
   */
  allows_multiple_answers: boolean;

  /**
   * Опционально. Номер правильного ответа (начиная с 0) в опросе-викторине.
   *
   * Optional. 0-based identifier of the correct answer option in a quiz poll.
   */
  correct_option_id?: number;

  /**
   * Опционально. Текст, который показывается, когда пользователь выбирает неправильный ответ или нажимает на значок лампы в опросе-викторине.
   *
   * Optional. Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll.
   */
  explanation?: string;

  /**
   * Опционально. Специальные объекты, такие как имена пользователей, URL, команды ботов и т.д., которые присутствуют в объяснении.
   *
   * Optional. Special entities like usernames, URLs, bot commands, etc. that appear in the explanation.
   */
  explanation_entities?: IMessageEntity[];

  /**
   * Опционально. Продолжительность активности опроса в секундах после создания.
   *
   * Optional. Amount of time in seconds the poll will be active after creation.
   */
  open_period?: number;

  /**
   * Опционально. Дата и время (в Unix-времени), когда опрос будет автоматически закрыт.
   *
   * Optional. Point in time (Unix timestamp) when the poll will be automatically closed.
   */
  close_date?: number;
}
