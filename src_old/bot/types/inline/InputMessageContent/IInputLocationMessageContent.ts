/**
 * Представляет содержимое сообщения о местоположении, которое будет отправлено в результате встроенного запроса.
 *
 * Represents the content of a location message to be sent as the result of an inline query.
 *
 * @see {@link https://core.telegram.org/bots/api#inputlocationmessagecontent}
 */
export interface IInputLocationMessageContent {
    /**
     * Широта местоположения в градусах.
     *
     * Latitude of the location in degrees.
     */
    latitude: number;
  
    /**
     * Долгота местоположения в градусах.
     *
     * Longitude of the location in degrees.
     */
    longitude: number;
  
    /**
     * Необязательный. Радиус неопределенности местоположения, измеряется в метрах; 0-1500.
     *
     * Optional. The radius of uncertainty for the location, measured in meters; 0-1500.
     */
    horizontal_accuracy?: number;
  
    /**
     * Необязательный. Период в секундах, в течение которого можно обновлять местоположение,
     * должен быть между 60 и 86400.
     *
     * Optional. Period in seconds for which the location can be updated, should be between 60 and 86400.
     */
    live_period?: number;
  
    /**
     * Необязательный. Для местоположений в реальном времени, направление движения пользователя в градусах.
     * Должно быть между 1 и 360, если указано.
     *
     * Optional. For live locations, a direction in which the user is moving, in degrees. Must be between 1 and 360 if specified.
     */
    heading?: number;
  
    /**
     * Необязательный. Для местоположений в реальном времени, максимальное расстояние для оповещений о приближении
     * к другому участнику чата, в метрах. Должно быть между 1 и 100000, если указано.
     *
     * Optional. For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters.
     * Must be between 1 and 100000 if specified.
     */
    proximity_alert_radius?: number;
  }
  