/**
 * Этот объект представляет точку на карте.
 * This object represents a point on the map.
 * @see {@link https://core.telegram.org/bots/api#location}
 */
export interface ILocation {
  /**
   * Долгота, заданная отправителем.
   * Longitude as defined by sender.
   */
  longitude: number;

  /**
   * Широта, заданная отправителем.
   * Latitude as defined by sender.
   */
  latitude: number;

  /**
   * Опционально. Радиус неопределенности местоположения, измеренный в метрах; 0-1500.
   * Optional. The radius of uncertainty for the location, measured in meters; 0-1500.
   */
  horizontal_accuracy?: number;

  /**
   * Опционально. Время относительно даты отправки сообщения, в течение которого местоположение может быть обновлено; в секундах. Только для активных "live locations".
   * Optional. Time relative to the message sending date, during which the location can be updated; in seconds. For active live locations only.
   */
  live_period?: number;

  /**
   * Опционально. Направление, в котором движется пользователь, в градусах; 1-360. Только для активных "live locations".
   * Optional. The direction in which the user is moving, in degrees; 1-360. For active live locations only.
   */
  heading?: number;

  /**
   * Опционально. Максимальное расстояние для оповещений о приближении к другому участнику чата, в метрах. Только для отправленных "live locations".
   * Optional. The maximum distance for proximity alerts about approaching another chat member, in meters. For sent live locations only.
   */
  proximity_alert_radius?: number;
}
