/**
 * Этот объект определяет критерии для запроса подходящего пользователя.
 * Идентификатор выбранного пользователя будет передан боту при нажатии соответствующей кнопки.
 * This object defines the criteria used to request a suitable user.
 * The identifier of the selected user will be shared with the bot when the corresponding button is pressed.
 * @see {@link https://core.telegram.org/bots/api#keyboardbuttonrequestuser}
 */
export interface IKeyboardButtonRequestUser {
  /**
   * Знаковый 32-битный идентификатор запроса, который будет получен обратно в объекте UserShared. Должен быть уникальным в пределах сообщения.
   * Signed 32-bit identifier of the request, which will be received back in the UserShared object. Must be unique within the message.
   */
  request_id: number;

  /**
   * Опционально. Укажите True, чтобы запросить бота, укажите False, чтобы запросить обычного пользователя.
   * Если не указано, не применяются дополнительные ограничения.
   * Optional. Pass True to request a bot, pass False to request a regular user. If not specified, no additional restrictions are applied.
   */
  user_is_bot?: boolean;

  /**
   * Опционально. Укажите True, чтобы запросить премиум-пользователя, укажите False, чтобы запросить обычного пользователя.
   * Если не указано, не применяются дополнительные ограничения.
   * Optional. Pass True to request a premium user, pass False to request a non-premium user. If not specified, no additional restrictions are applied.
   */
  user_is_premium?: boolean;
}
