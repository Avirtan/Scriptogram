/**
 * Представляет информацию о заказе.
 *
 * This object represents information about an order.
 *
 * @see {@link https://core.telegram.org/bots/api#orderinfo}
 */
export interface IOrderInfo {
    /**
     * Имя пользователя.
     *
     * Optional. User name.
     */
    name?: string;
  
    /**
     * Номер телефона пользователя.
     *
     * Optional. User's phone number.
     */
    phone_number?: string;
  
    /**
     * Email пользователя.
     *
     * Optional. User email.
     */
    email?: string;
  
    /**
     * Адрес доставки пользователя.
     *
     * Optional. User shipping address.
     */
    shipping_address?: IShippingAddress;
  }
  