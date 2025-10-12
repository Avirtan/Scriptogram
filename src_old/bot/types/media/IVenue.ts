import { ILocation } from ".";

/**
 * Этот объект представляет место (venue).
 *
 * This object represents a venue.
 * @see {@link https://core.telegram.org/bots/api#venue}
 */
export interface IVenue {
  /**
   * Местоположение места.
   *
   * Venue location. Can't be a live location.
   */
  location: ILocation;

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
   * Опционально. Идентификатор Foursquare места.
   *
   * Optional. Foursquare identifier of the venue.
   */
  foursquare_id?: string;

  /**
   * Опционально. Тип места Foursquare.
   *
   * Optional. Foursquare type of the venue.
   * (For example, “arts_entertainment/default”, “arts_entertainment/aquarium” or “food/icecream”.)
   */
  foursquare_type?: string;

  /**
   * Опционально. Идентификатор Google Places места.
   *
   * Optional. Google Places identifier of the venue.
   */
  google_place_id?: string;

  /**
   * Опционально. Тип места Google Places.
   *
   * Optional. Google Places type of the venue.
   * (See supported types.)
   */
  google_place_type?: string;
}
