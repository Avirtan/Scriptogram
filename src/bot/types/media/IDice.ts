/**
 * Этот объект представляет анимированный смайлик, отображающий случайное значение.
 *
 * This object represents an animated emoji that displays a random value.
 * @see {@link https://core.telegram.org/bots/api#dice}
 */
export interface IDice {
  /**
   * Смайлик, на основе которого создана анимация броска кубика.
   *
   * Emoji on which the dice throw animation is based.
   */
  emoji: string;

  /**
   * Значение кубика: 1-6 для смайликов “🎲”, “🎯” и “🎳”, 1-5 для смайликов “🏀” и “⚽”, 1-64 для смайлика “🎰”.
   *
   * Value of the dice: 1-6 for “🎲”, “🎯”, and “🎳” base emojis, 1-5 for “🏀” and “⚽” base emojis, 1-64 for “🎰” base emoji.
   */
  value: number;
}
