/**
 * Представляет один вариант доставки.
 *
 * This object represents one shipping option.
 *
 * @see {@link https://core.telegram.org/bots/api#shippingoption}
 */
export interface IShippingOption {
    /**
     * Идентификатор варианта доставки.
     *
     * Shipping option identifier.
     */
    id: string;
  
    /**
     * Название варианта.
     *
     * Option title.
     */
    title: string;
  
    /**
     * Список частей цены.
     *
     * List of price portions.
     */
    prices: ILabeledPrice[];
  }
  