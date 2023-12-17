/**
 * Содержит информацию о входящем запросе на доставку.
 *
 * This object contains information about an incoming shipping query.
 *
 * @see {@link https://core.telegram.org/bots/api#shippingquery}
 */
export interface IShippingQuery {
    /**
     * Уникальный идентификатор запроса.
     *
     * Unique query identifier.
     */
    id: string;
  
    /**
     * Пользователь, отправивший запрос.
     *
     * User who sent the query.
     */
    from: IUser;
  
    /**
     * Полезная нагрузка (payload), указанная ботом в инвойсе.
     *
     * Bot-specified invoice payload.
     */
    invoice_payload: string;
  
    /**
     * Пользовательский адрес доставки.
     *
     * User-specified shipping address.
     */
    shipping_address: IShippingAddress;
  }
  