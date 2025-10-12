import { IWebAppInfo } from "..";

/**
 * Представляет кнопку, которая будет отображаться над результатами встроенного запроса.
 * Вы должны использовать ровно одно из необязательных полей.
 *
 * This object represents a button to be shown above inline query results. You must use exactly one of the optional fields.
 *
 * @see {@link https://core.telegram.org/bots/api#inlinequeryresultsbutton}
 */
export interface IInlineQueryResultsButton {
  /**
   * Текст метки на кнопке.
   *
   * Label text on the button.
   */
  text: string;

  /**
   * Описание веб-приложения, которое будет запущено, когда пользователь нажмет на кнопку.
   * Веб-приложение сможет переключиться обратно в режим встроенного запроса, используя метод switchInlineQuery
   * внутри веб-приложения.
   *
   * Description of the Web App that will be launched when the user presses the button. The Web App will be able to
   * switch back to the inline mode using the method switchInlineQuery inside the Web App.
   */
  web_app?: IWebAppInfo;

  /**
   * Параметр глубокой ссылки для сообщения /start, отправленного боту, когда пользователь нажимает кнопку.
   * 1-64 символа, разрешены только A-Z, a-z, 0-9, _ и -.
   *
   * Пример: Встроенный бот, отправляющий видеоролики YouTube, может попросить пользователя подключить бота к своему
   * аккаунту YouTube, чтобы адаптировать результаты поиска соответствующим образом. Для этого он отображает кнопку
   * "Подключить ваш аккаунт YouTube" над результатами, или даже до их отображения. Пользователь нажимает кнопку, переключается
   * в личный чат с ботом и при этом передает параметр start, который указывает боту вернуть ссылку OAuth. После этого бот может
   * предложить кнопку switch_inline, чтобы пользователь мог легко вернуться в чат, где он хотел использовать встроенные возможности бота.
   *
   * Deep-linking parameter for the /start message sent to the bot when a user presses the button. 1-64 characters,
   * only A-Z, a-z, 0-9, _ and - are allowed.
   *
   * Example: An inline bot that sends YouTube videos can ask the user to connect the bot to their YouTube account to adapt search results accordingly. To do this, it displays a 'Connect your YouTube account' button above the results, or even before showing any. The user presses the button, switches to a private chat with the bot and, in doing so, passes a start parameter that instructs the bot to return an OAuth link. Once done, the bot can offer a switch_inline button so that the user can easily return to the chat where they wanted to use the bot's inline capabilities.
   */
  start_parameter?: string;
}
