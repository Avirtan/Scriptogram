/**
 * Этот объект описывает кнопку меню, для которой не установлено конкретное значение.
 *
 * This object describes a menu button for which no specific value was set.
 * @see {@link https://core.telegram.org/bots/api#menubuttondefault}
 */
export interface IMenuButtonDefault {
  /**
   * Тип кнопки, должен быть default.
   *
   * Type of the button, must be default.
   */
  type: string;
}
