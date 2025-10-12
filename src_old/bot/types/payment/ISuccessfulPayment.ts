import { IOrderInfo } from ".";

/**
 * Содержит базовую информацию об успешной оплате.
 *
 * This object contains basic information about a successful payment.
 *
 * @see {@link https://core.telegram.org/bots/api#successfulpayment}
 */
export interface ISuccessfulPayment {
  /**
   * Трехбуквенный код валюты ISO 4217.
   *
   * Three-letter ISO 4217 currency code.
   */
  currency: string;

  /**
   * Общая сумма в наименьших единицах валюты (целое число).
   * Например, для суммы в $1.45 необходимо передать amount = 145.
   *
   * Total price in the smallest units of the currency (integer).
   * For example, for a price of $1.45, pass amount = 145.
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
   * Order information provided by the user (optional).
   */
  order_info?: IOrderInfo;

  /**
   * Идентификатор платежа Telegram.
   *
   * Telegram payment identifier.
   */
  telegram_payment_charge_id: string;

  /**
   * Идентификатор платежа провайдера.
   *
   * Provider payment identifier.
   */
  provider_payment_charge_id: string;
}
