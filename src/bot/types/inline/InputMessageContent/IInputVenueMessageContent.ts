/**
 * Представляет содержимое сообщения о месте (venue), которое будет отправлено в результате встроенного запроса.
 *
 * Represents the content of a venue message to be sent as the result of an inline query.
 *
 * @see {@link https://core.telegram.org/bots/api#inputvenuemessagecontent}
 */
export interface IInputVenueMessageContent {
    /**
     * Широта места в градусах.
     *
     * Latitude of the venue in degrees.
     */
    latitude: number;
  
    /**
     * Долгота места в градусах.
     *
     * Longitude of the venue in degrees.
     */
    longitude: number;
  
    /**
     * Название места.
     *
     * Name of the venue.
     */
    title: string;
  
    /**
     * Адрес места.
     *
     * Address of the venue.
     */
    address: string;
  
    /**
     * Необязательно. Идентификатор Foursquare места, если известен.
     *
     * Optional. Foursquare identifier of the venue, if known.
     */
    foursquare_id?: string;
  
    /**
     * Необязательно. Тип Foursquare места, если известен.
     *
     * Optional. Foursquare type of the venue, if known.
     */
    foursquare_type?: string;
  
    /**
     * Необязательно. Идентификатор Google Places места.
     *
     * Optional. Google Places identifier of the venue.
     */
    google_place_id?: string;
  
    /**
     * Необязательно. Тип Google Places места.
     *
     * Optional. Google Places type of the venue.
     */
    google_place_type?: string;
  }
  