/**
 * Представляет место проведения. По умолчанию место проведения будет отправлено пользователем. 
 * Также можно использовать input_message_content для отправки сообщения с указанным содержимым вместо места проведения.
 *
 * Represents a venue. By default, the venue will be sent by the user. 
 * Alternatively, you can use input_message_content to send a message with the specified content instead of the venue.
 *
 * @see {@link https://core.telegram.org/bots/api#inlinequeryresultvenue}
 */
export interface IInlineQueryResultVenue {
    /**
     * Тип результата, должен быть venue.
     *
     * Type of the result, must be venue.
     */
    type: string;
  
    /**
     * Уникальный идентификатор этого результата, 1-64 байта.
     *
     * Unique identifier for this result, 1-64 Bytes.
     */
    id: string;
  
    /**
     * Широта местоположения места проведения в градусах.
     *
     * Latitude of the venue location in degrees.
     */
    latitude: number;
  
    /**
     * Долгота местоположения места проведения в градусах.
     *
     * Longitude of the venue location in degrees.
     */
    longitude: number;
  
    /**
     * Название места проведения.
     *
     * Title of the venue.
     */
    title: string;
  
    /**
     * Адрес места проведения.
     *
     * Address of the venue.
     */
    address: string;
  
    /**
     * Идентификатор Foursquare места проведения, если известен.
     *
     * Foursquare identifier of the venue if known.
     */
    foursquare_id?: string;
  
    /**
     * Тип места проведения в Foursquare, если известен.
     *
     * Foursquare type of the venue if known.
     */
    foursquare_type?: string;
  
    /**
     * Идентификатор Google Places места проведения.
     *
     * Google Places identifier of the venue.
     */
    google_place_id?: string;
  
    /**
     * Тип места проведения в Google Places.
     *
     * Google Places type of the venue.
     */
    google_place_type?: string;
  
    /**
     * Inline-клавиатура, прикрепленная к сообщению.
     *
     * Inline keyboard attached to the message.
     */
    reply_markup?: IInlineKeyboardMarkup;
  
    /**
     * Содержимое сообщения для отправки вместо места проведения.
     *
     * Content of the message to be sent instead of the venue.
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
  