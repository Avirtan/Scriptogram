import { IShippingOption } from "../../../types";

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
