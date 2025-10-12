/**
 * Этот объект представляет параметр кнопки встроенной клавиатуры, используемый для автоматической авторизации пользователя.
 *
 * This object represents a parameter of the inline keyboard button used to automatically authorize a user.
 * @see {@link https://core.telegram.org/bots/api#loginurl}
 */
export interface ILoginUrl {
  /**
   * HTTPS URL, который будет открыт с добавленными данными авторизации пользователя в строке запроса при нажатии кнопки.
   *
   * An HTTPS URL to be opened with user authorization data added to the query string when the button is pressed.
   */
  url: string;

  /**
   * Опционально. Новый текст кнопки в пересылаемых сообщениях.
   *
   * Optional. New text of the button in forwarded messages.
   */
  forward_text?: string;

  /**
   * Опционально. Имя пользователя бота, которое будет использоваться для авторизации пользователя.
   *
   * Optional. Username of a bot, which will be used for user authorization.
   */
  bot_username?: string;

  /**
   * Опционально. Передайте True, чтобы запросить разрешение вашему боту отправлять сообщения пользователю.
   *
   * Optional. Pass True to request the permission for your bot to send messages to the user.
   */
  request_write_access?: boolean;
}
