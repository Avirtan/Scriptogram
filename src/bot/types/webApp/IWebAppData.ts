/**
 * Этот объект описывает данные, отправленные из веб-приложения боту.
 *
 * This object describes data sent from a Web App to the bot.
 * @see {@link https://core.telegram.org/bots/api#webappdata}
 */
export interface IWebAppData {
  /**
   * Данные. Обратите внимание, что недобросовестный клиент может отправлять произвольные данные в этом поле.
   *
   * The data. Be aware that a bad client can send arbitrary data in this field.
   */
  data: string;

  /**
   * Текст кнопки веб-приложения клавиатуры, с помощью которой было открыто веб-приложение.
   * Обратите внимание, что недобросовестный клиент может отправлять произвольные данные в этом поле.
   *
   * Text of the web_app keyboard button from which the Web App was opened.
   * Be aware that a bad client can send arbitrary data in this field.
   */
  button_text: string;
}
