export interface IAnswerCallbackQuery {
  /**
   * Уникальный идентификатор запроса для ответа.
   *
   * Unique identifier for the query to be answered.
   */
  callback_query_id: string;

  /**
   * Текст уведомления. Если не указано, пользователю ничего не будет показано, от 0 до 200 символов.
   *
   * Text of the notification. If not specified, nothing will be shown to the user, 0-200 characters.
   */
  text?: string;

  /**
   * Если True, клиент отобразит предупреждение вместо уведомления сверху экрана чата. По умолчанию false.
   *
   * If True, an alert will be shown by the client instead of a notification at the top of the chat screen. Defaults to false.
   */
  show_alert?: boolean;

  /**
   * URL, который откроется в клиенте пользователя. Может использоваться для открытия игры, если игра была создана через @BotFather.
   *
   * URL that will be opened by the user's client. It may be used to open a game if the game was created by @BotFather.
   */
  url?: string;

  /**
   * Максимальное время в секундах, в течение которого результат запроса может быть кэширован на стороне клиента.
   *
   * The maximum amount of time in seconds that the result of the callback query may be cached client-side.
   */
  cache_time?: number;
}
