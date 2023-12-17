/**
 * Используйте этот метод для ответа на предварительные запросы о проверке.
 * После того, как пользователь подтвердил свои платежные и доставочные данные,
 * Bot API отправляет окончательное подтверждение в виде обновления с полем pre_checkout_query.
 * При успехе возвращается True.
 * Примечание: Bot API должен получить ответ в течение 10 секунд после отправки предварительного запроса о проверке.
 *
 * Use this method to respond to pre-checkout queries.
 * Once the user has confirmed their payment and shipping details,
 * the Bot API sends the final confirmation in the form of an Update with the field pre_checkout_query.
 * On success, True is returned.
 * Note: The Bot API must receive an answer within 10 seconds after the pre-checkout query was sent.
 * @see {@link https://core.telegram.org/bots/api#answerprecheckoutquery}
 */
export interface IAnswerPreCheckoutQuery {
  /**
   * Уникальный идентификатор запроса, на который нужно ответить.
   *
   * Unique identifier for the query to be answered.
   */
  pre_checkout_query_id: string;

  /**
   * Укажите True, если всё в порядке (товары доступны и т. д.) и бот готов продолжить с заказом.
   * Используйте False, если есть какие-либо проблемы.
   *
   * Specify True if everything is alright (goods are available, etc.) and the bot is ready to proceed with the order.
   * Use False if there are any problems.
   */
  ok: boolean;

  /**
   * Обязательно, если ok равен False.
   * Сообщение об ошибке в человекочитаемой форме, которое объясняет причину невозможности завершения оформления заказа
   * (например, "Извините, кто-то только что купил последнюю нашу удивительную черную футболку, пока вы заполняли данные вашего платежа. Пожалуйста, выберите другой цвет или изделие!").
   * Telegram отобразит это сообщение пользователю.
   *
   * Required if ok is False.
   * Error message in human readable form that explains the reason for failure to proceed with the checkout
   * (e.g. "Sorry, somebody just bought the last of our amazing black T-shirts while you were busy filling out your payment details. Please choose a different color or garment!").
   * Telegram will display this message to the user.
   */
  error_message?: string;
}
