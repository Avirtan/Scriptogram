/**
 * Содержит информацию о входящем запросе предварительной проверки.
 *
 * This object contains information about an incoming pre-checkout query.
 *
 * @see {@link https://core.telegram.org/bots/api#precheckoutquery}
 */
export interface IPreCheckoutQuery {
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
     * Трехбуквенный код валюты ISO 4217.
     *
     * Three-letter ISO 4217 currency code.
     */
    currency: string;
  
    /**
     * Общая сумма в наименьших единицах валюты (целое число).
     * Например, для цены $1.45 передайте amount = 145.
     *
     * Total price in the smallest units of the currency (integer).
     * For example, for a price of $1.45 pass amount = 145.
     */
    total_amount: number;
  
    /**
     * Полезная нагрузка (payload), указанная ботом в инвойсе.
     *
     * Bot-specified invoice payload.
     */
    invoice_payload: string;
  
    /**
     * Идентификатор выбранного пользователем варианта доставки.
     *
     * Identifier of the shipping option chosen by the user (optional).
     */
    shipping_option_id?: string;
  
    /**
     * Информация о заказе, предоставленная пользователем.
     *
     * Order information provided by the user.
     */
    order_info?: IOrderInfo;
  }
  