/**
 * Представляет одну строку таблицы рекордов для игры.
 *
 * Represents one row of the high scores table for a game.
 *
 * @see {@link https://core.telegram.org/bots/api#gamehighscore}
 */
export interface IGameHighScore {
  /**
   * Позиция в таблице рекордов для игры.
   *
   * Position in high score table for the game.
   */
  position: number;

  /**
   * Пользователь.
   *
   * User.
   */
  user: IUser;

  /**
   * Рекорд.
   *
   * Score.
   */
  score: number;
}
