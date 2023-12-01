/**
 * Этот объект представляет одну кнопку встроенной клавиатуры. Необходимо использовать ровно одно из необязательных полей.
 *
 * This object represents one button of an inline keyboard. You must use exactly one of the optional fields.
 * @see {@link https://core.telegram.org/bots/api#inlinekeyboardbutton}
 */
export interface IInlineKeyboardButton {
  /**
   * Текст метки на кнопке.
   *
   * Label text on the button.
   */
  text: string;

  /**
   * Опционально. HTTP или tg:// URL, который будет открыт при нажатии на кнопку.
   *
   * Optional. HTTP or tg:// URL to be opened when the button is pressed.
   */
  url?: string;

  /**
   * Опционально. Данные, которые будут отправлены в обратный запрос боту при нажатии кнопки, 1-64 байта.
   *
   * Optional. Data to be sent in a callback query to the bot when the button is pressed, 1-64 bytes.
   */
  callback_data?: string;

  /**
   * Опционально. Описание веб-приложения, которое будет запущено при нажатии кнопки.
   *
   * Optional. Description of the Web App that will be launched when the user presses the button.
   */
  web_app?: IWebAppInfo;

  /**
   * Опционально. HTTPS URL, используемый для автоматической авторизации пользователя.
   *
   * Optional. HTTPS URL used to automatically authorize the user.
   */
  login_url?: ILoginUrl;

  /**
   * Опционально. Если установлено, при нажатии кнопки пользователь увидит предложение выбрать один из своих чатов.
   *
   * Optional. If set, pressing the button will prompt the user to select one of their chats.
   */
  switch_inline_query?: string;

  /**
   * Опционально. Если установлено, при нажатии кнопки будет вставлено имя бота и указанный запрос в текущее поле ввода чата.
   *
   * Optional. If set, pressing the button will insert the bot's username and the specified inline query in the current chat's input field.
   */
  switch_inline_query_current_chat?: string;

  /**
   * Опционально. Если установлено, при нажатии кнопки будет предложено выбрать один из своих чатов указанного типа.
   *
   * Optional. If set, pressing the button will prompt the user to select one of their chats of the specified type.
   */
  switch_inline_query_chosen_chat?: ISwitchInlineQueryChosenChat;

  /**
   * Опционально. Описание игры, которая будет запущена при нажатии кнопки.
   *
   * Optional. Description of the game that will be launched when the user presses the button.
   */
  callback_game?: ICallbackGame;

  /**
   * Опционально. Оплата. Укажите true, чтобы отправить кнопку "Оплатить".
   *
   * Optional. Specify True, to send a Pay button.
   */
  pay?: boolean;
}
