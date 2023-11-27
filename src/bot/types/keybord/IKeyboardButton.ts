/**
 * Этот объект представляет одну кнопку клавиатуры ответов.
 *
 * This object represents one button of the reply keyboard.
 * @see {@link https://core.telegram.org/bots/api#keyboardbutton}
 */
export interface IKeyboardButton {
  /**
   * Текст кнопки. Если ни одно из опциональных полей не используется, этот текст будет отправлен как сообщение при нажатии на кнопку.
   *
   * Text of the button. If none of the optional fields are used, it will be sent as a message when the button is pressed.
   */
  text: string;

  /**
   * Опционально. Если указано, нажатие на кнопку откроет список подходящих пользователей. Нажатие на любого пользователя отправит их идентификатор боту в служебном сообщении "user_shared". Доступно только в личных чатах.
   *
   * Optional. If specified, pressing the button will open a list of suitable users. Tapping on any user will send their identifier to the bot in a "user_shared" service message. Available in private chats only.
   */
  request_user?: IKeyboardButtonRequestUser;

  /**
   * Опционально. Если указано, нажатие на кнопку откроет список подходящих чатов. Нажатие на чат отправит его идентификатор боту в служебном сообщении "chat_shared". Доступно только в личных чатах.
   *
   * Optional. If specified, pressing the button will open a list of suitable chats. Tapping on a chat will send its identifier to the bot in a "chat_shared" service message. Available in private chats only.
   */
  request_chat?: IKeyboardButtonRequestChat;

  /**
   * Опционально. Если True, номер телефона пользователя будет отправлен в виде контакта при нажатии на кнопку. Доступно только в личных чатах.
   *
   * Optional. If True, the user's phone number will be sent as a contact when the button is pressed. Available in private chats only.
   */
  request_contact?: boolean;

  /**
   * Опционально. Если True, текущее местоположение пользователя будет отправлено при нажатии на кнопку. Доступно только в личных чатах.
   *
   * Optional. If True, the user's current location will be sent when the button is pressed. Available in private chats only.
   */
  request_location?: boolean;

  /**
   * Опционально. Если указано, пользователю будет предложено создать опрос и отправить его боту при нажатии на кнопку. Доступно только в личных чатах.
   *
   * Optional. If specified, the user will be asked to create a poll and send it to the bot when the button is pressed. Available in private chats only.
   */
  request_poll?: IKeyboardButtonPollType;

  /**
   * Опционально. Если указано, описанный Веб-приложение будет запущено при нажатии на кнопку. Веб-приложение сможет отправить служебное сообщение "web_app_data". Доступно только в личных чатах.
   *
   * Optional. If specified, the described Web App will be launched when the button is pressed. The Web App will be able to send a "web_app_data" service message. Available in private chats only.
   */
  web_app?: IWebAppInfo;
}
