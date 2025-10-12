/**
 * Представляет адрес доставки.
 *
 * This object represents a shipping address.
 *
 * @see {@link https://core.telegram.org/bots/api#shippingaddress}
 */
export interface IShippingAddress {
    /**
     * Двухбуквенный код страны согласно ISO 3166-1 alpha-2.
     *
     * Two-letter ISO 3166-1 alpha-2 country code.
     */
    country_code: string;
  
    /**
     * Регион (штат), если применимо.
     *
     * State, if applicable.
     */
    state: string;
  
    /**
     * Город.
     *
     * City.
     */
    city: string;
  
    /**
     * Первая строка адреса.
     *
     * First line for the address.
     */
    street_line1: string;
  
    /**
     * Вторая строка адреса.
     *
     * Second line for the address.
     */
    street_line2: string;
  
    /**
     * Почтовый индекс.
     *
     * Address post code.
     */
    post_code: string;
  }
  