/**
 * Представляет местоположение на карте. По умолчанию местоположение будет отправлено пользователем. 
 * Также можно использовать input_message_content для отправки сообщения с указанным содержимым вместо местоположения.
 *
 * Represents a location on a map. By default, the location will be sent by the user. 
 * Alternatively, you can use input_message_content to send a message with the specified content instead of the location.
 *
 * @see {@link https://core.telegram.org/bots/api#inlinequeryresultlocation}
 */
export interface IInlineQueryResultLocation {
    /**
     * Тип результата, должен быть location.
     *
     * Type of the result, must be location.
     */
    type: string;
  
    /**
     * Уникальный идентификатор этого результата, 1-64 байта.
     *
     * Unique identifier for this result, 1-64 Bytes.
     */
    id: string;
  
    /**
     * Широта местоположения в градусах.
     *
     * Location latitude in degrees.
     */
    latitude: number;
  
    /**
     * Долгота местоположения в градусах.
     *
     * Location longitude in degrees.
     */
    longitude: number;
  
    /**
     * Название местоположения.
     *
     * Location title.
     */
    title: string;
  
    /**
     * Радиус неопределенности местоположения, измеренный в метрах; 0-1500.
     *
     * The radius of uncertainty for the location, measured in meters; 0-1500.
     */
    horizontal_accuracy?: number;
  
    /**
     * Период в секундах, в течение которого местоположение может быть обновлено, должен быть между 60 и 86400.
     *
     * Period in seconds for which the location can be updated, should be between 60 and 86400.
     */
    live_period?: number;
  
    /**
     * Направление, в котором пользователь движется, в градусах. 
     * Должно быть от 1 до 360 при указании, для живого местоположения.
     *
     * For live locations, a direction in which the user is moving, in degrees. 
     * Must be between 1 and 360 if specified for live locations.
     */
    heading?: number;
  
    /**
     * Максимальное расстояние для оповещений о приближении к другому участнику чата, в метрах.
     * Должно быть от 1 до 100000 при указании, для живого местоположения.
     *
     * For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters. 
     * Must be between 1 and 100000 if specified for live locations.
     */
    proximity_alert_radius?: number;
  
    /**
     * Inline-клавиатура, прикрепленная к сообщению.
     *
     * Inline keyboard attached to the message.
     */
    reply_markup?: IInlineKeyboardMarkup;
  
    /**
     * Содержимое сообщения для отправки вместо местоположения.
     *
     * Content of the message to be sent instead of the location.
     */
    input_message_content?: IInputMessageContent;
  
    /**
     * URL эскиза для результата.
     *
     * Url of the thumbnail for the result.
     */
    thumbnail_url?: string;
  
    /**
     * Ширина эскиза.
     *
     * Thumbnail width.
     */
    thumbnail_width?: number;
  
    /**
     * Высота эскиза.
     *
     * Thumbnail height.
     */
    thumbnail_height?: number;
  }
  