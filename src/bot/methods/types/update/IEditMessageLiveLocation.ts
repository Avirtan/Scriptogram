import { IInlineKeyboardMarkup } from "../../../types";

/**
 * Используйте этот метод для редактирования сообщений о живом местоположении.
 * Местоположение можно редактировать до истечения срока жизни live_period или до явного отключения редактирования
 * с помощью вызова stopMessageLiveLocation.
 * При успешном выполнении, если отредактированное сообщение не является встроенным,
 * возвращается отредактированное сообщение, в противном случае возвращается True.
 *
 * Use this method to edit live location messages.
 * A location can be edited until its live_period expires or editing is explicitly disabled by a call to stopMessageLiveLocation.
 * On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.
 * @see {@link https://core.telegram.org/bots/api#editmessagelivelocation}
 */
export interface IEditMessageLiveLocation {
  /**
   * Обязательно, если inline_message_id не указан.
   * Уникальный идентификатор целевого чата или имя пользователя целевого канала
   * (в формате @channelusername).
   *
   * Required if inline_message_id is not specified.
   * Unique identifier for the target chat or username of the target channel
   * (in the format @channelusername).
   */
  chat_id?: number | string;

  /**
   * Обязательно, если inline_message_id не указан.
   * Идентификатор сообщения для редактирования.
   *
   * Required if inline_message_id is not specified.
   * Identifier of the message to edit.
   */
  message_id?: number;

  /**
   * Обязательно, если chat_id и message_id не указаны.
   * Идентификатор встроенного сообщения.
   *
   * Required if chat_id and message_id are not specified.
   * Identifier of the inline message.
   */
  inline_message_id?: string;

  /**
   * Широта нового местоположения.
   *
   * Latitude of new location.
   */
  latitude: number;

  /**
   * Долгота нового местоположения.
   *
   * Longitude of new location.
   */
  longitude: number;

  /**
   * Радиус неопределенности местоположения, измеренный в метрах; от 0 до 1500.
   *
   * The radius of uncertainty for the location, measured in meters; 0-1500.
   */
  horizontal_accuracy?: number;

  /**
   * Направление движения пользователя, в градусах.
   * Должно быть от 1 до 360, если указано.
   *
   * Direction in which the user is moving, in degrees.
   * Must be between 1 and 360 if specified.
   */
  heading?: number;

  /**
   * Максимальное расстояние для предупреждений о приближении другого участника чата, в метрах.
   * Должно быть от 1 до 100000, если указано.
   *
   * The maximum distance for proximity alerts about approaching another chat member, in meters.
   * Must be between 1 and 100000 if specified.
   */
  proximity_alert_radius?: number;

  /**
   * Объект JSON для новой встроенной клавиатуры.
   *
   * A JSON-serialized object for a new inline keyboard.
   */
  reply_markup?: IInlineKeyboardMarkup;
}
