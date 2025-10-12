/**
 * Описывает положение маски по умолчанию на лице.
 *
 * This object describes the position on faces where a mask should be placed by default.
 *
 * @see {@link https://core.telegram.org/bots/api#maskposition}
 */
export interface IMaskPosition {
    /**
     * Часть лица, относительно которой должна быть размещена маска.
     * Одно из: "forehead", "eyes", "mouth" или "chin".
     *
     * The part of the face relative to which the mask should be placed.
     * One of: “forehead”, “eyes”, “mouth”, or “chin”.
     */
    point: 'forehead' | 'eyes' | 'mouth' | 'chin';
  
    /**
     * Сдвиг по оси X, измеренный в ширинах маски, масштабированных до размера лица, слева направо.
     * Например, выбор -1.0 разместит маску слева от позиции по умолчанию.
     *
     * Shift by X-axis measured in widths of the mask scaled to the face size, from left to right.
     * For example, choosing -1.0 will place mask just to the left of the default mask position.
     */
    x_shift: number;
  
    /**
     * Сдвиг по оси Y, измеренный в высотах маски, масштабированных до размера лица, сверху вниз.
     * Например, 1.0 разместит маску чуть ниже позиции по умолчанию.
     *
     * Shift by Y-axis measured in heights of the mask scaled to the face size, from top to bottom.
     * For example, 1.0 will place the mask just below the default mask position.
     */
    y_shift: number;
  
    /**
     * Коэффициент масштабирования маски. Например, 2.0 означает увеличение в два раза.
     *
     * Mask scaling coefficient. For example, 2.0 means double size.
     */
    scale: number;
  }
  