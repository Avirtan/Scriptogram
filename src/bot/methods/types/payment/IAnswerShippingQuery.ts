import { IShippingOption } from "../../../types";

/**
 * Используйте этот метод для ответа на запросы о доставке.
 * Если вы отправили счет с запросом адреса доставки и был указан параметр is_flexible, Bot API отправит обновление с полем shipping_query боту.
 * При успехе возвращается True.
 *
 * Use this method to reply to shipping queries.
 * If you sent an invoice requesting a shipping address and the parameter is_flexible was specified,
 * the Bot API will send an Update with a shipping_query field to the bot.
 * On success, True is returned.
 * @see {@link https://core.telegram.org/bots/api#answershippingquery}
 */
export interface IAnswerShippingQuery {
  /**
   * Уникальный идентификатор запроса, на который нужно ответить.
   *
   * Unique identifier for the query to be answered.
   */
  shipping_query_id: string;

  /**
   * Укажите True, если доставка на указанный адрес возможна, и False, если есть какие-либо проблемы
   * (например, если доставка на указанный адрес невозможна).
   *
   * Pass True if delivery to the specified address is possible and False if there are any problems
   * (for example, if delivery to the specified address is not possible).
   */
  ok: boolean;

  /**
   * Обязательно, если ok равен True.
   * JSON-сериализованный массив доступных вариантов доставки.
   *
   * Required if ok is True.
   * A JSON-serialized array of available shipping options.
   */
  shipping_options?: IShippingOption[];

  /**
   * Обязательно, если ok равен False.
   * Сообщение об ошибке в человекочитаемой форме, которое объясняет, почему невозможно завершить заказ
   * (например, "Извините, доставка по вашему желаемому адресу недоступна").
   * Telegram отобразит это сообщение пользователю.
   *
   * Required if ok is False.
   * Error message in human readable form that explains why it is impossible to complete the order
   * (e.g. "Sorry, delivery to your desired address is unavailable").
   * Telegram will display this message to the user.
   */
  error_message?: string;
}
