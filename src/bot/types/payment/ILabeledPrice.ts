/**
 * Представляет часть цены товара или услуги.
 *
 * This object represents a portion of the price for goods or services.
 *
 * @see {@link https://core.telegram.org/bots/api#labeledprice}
 */
export interface ILabeledPrice {
    /**
     * Метка части цены.
     *
     * Portion label.
     */
    label: string;
  
    /**
     * Цена продукта в наименьших единицах валюты (целое число, не float/double).
     * Например, для цены в 1.45 доллара нужно передать amount = 145.
     *
     * Price of the product in the smallest units of the currency (integer, not float/double).
     * For example, for a price of US$ 1.45 pass amount = 145.
     */
    amount: number;
  }
  