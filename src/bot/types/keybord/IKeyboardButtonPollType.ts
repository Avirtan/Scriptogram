/**
 * Этот объект представляет тип опроса, который разрешено создавать и отправлять при нажатии соответствующей кнопки.
 * This object represents type of a poll, which is allowed to be created and sent when the corresponding button is pressed.
 * @see {@link https://core.telegram.org/bots/api#keyboardbuttonpolltype}
 */
export interface IKeyboardButtonPollType {
  /**
   * Опционально. Если передано значение 'quiz', пользователь сможет создавать только опросы в режиме викторины.
   * Если передано значение 'regular', будут разрешены только обычные опросы.
   * В противном случае пользователю будет разрешено создавать опрос любого типа.
   * Optional. If quiz is passed, the user will be allowed to create only polls in the quiz mode.
   * If regular is passed, only regular polls will be allowed.
   * Otherwise, the user will be allowed to create a poll of any type.
   */
  type?: string;
}
