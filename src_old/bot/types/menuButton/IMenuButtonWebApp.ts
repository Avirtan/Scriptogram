import { IWebAppInfo } from "..";

/**
 * Представляет кнопку меню, которая запускает веб-приложение.
 *
 * Represents a menu button that launches a Web App.
 * @see {@link https://core.telegram.org/bots/api#menubuttonwebapp}
 */
export interface IMenuButtonWebApp {
  /**
   * Тип кнопки, должен быть web_app.
   *
   * Type of the button, must be web_app.
   */
  type: string;

  /**
   * Текст на кнопке.
   *
   * Text on the button.
   */
  text: string;

  /**
   * Описание веб-приложения, которое будет запущено при нажатии пользователем кнопки.
   * Это веб-приложение сможет отправлять произвольные сообщения от имени пользователя с помощью метода `answerWebAppQuery`.
   *
   * Information about the Web App that will be launched when the user presses the button.
   * The Web App will be able to send an arbitrary message on behalf of the user using the method `answerWebAppQuery`.
   */
  web_app: IWebAppInfo;
}
