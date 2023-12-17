/**
 * Содержит основную информацию о счете.
 *
 * This object contains basic information about an invoice.
 *
 * @see {@link https://core.telegram.org/bots/api#invoice}
 */
export interface IInvoice {
    /**
     * Название продукта.
     *
     * Product name.
     */
    title: string;
  
    /**
     * Описание продукта.
     *
     * Product description.
     */
    description: string;
  
    /**
     * Уникальный параметр для генерации счета.
     *
     * Unique bot deep-linking parameter that can be used to generate this invoice.
     */
    start_parameter: string;
  
    /**
     * Трехбуквенный код валюты согласно ISO 4217.
     *
     * Three-letter ISO 4217 currency code.
     */
    currency: string;
  
    /**
     * Общая сумма в наименьших единицах валюты (целое число).
     * Например, для суммы в US$ 1.45 передайте amount = 145.
     * См. параметр exp в currencies.json, он показывает количество цифр после десятичной точки для каждой валюты
     * (2 для большинства валют).
     *
     * Total price in the smallest units of the currency (integer, not float/double).
     * For example, for a price of US$ 1.45 pass amount = 145.
     */
    total_amount: number;
  }
  