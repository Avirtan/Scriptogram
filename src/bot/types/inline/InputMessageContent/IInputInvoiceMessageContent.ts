/**
 * Представляет содержимое сообщения о счете для отправки в результате встроенного запроса.
 *
 * Represents the content of an invoice message to be sent as the result of an inline query.
 *
 * @see {@link https://core.telegram.org/bots/api#inputinvoicemessagecontent}
 */
export interface IInputInvoiceMessageContent {
    /**
     * Название продукта, от 1 до 32 символов.
     *
     * Product name, 1-32 characters.
     */
    title: string;
  
    /**
     * Описание продукта, от 1 до 255 символов.
     *
     * Product description, 1-255 characters.
     */
    description: string;
  
    /**
     * Полезная нагрузка счета, бот определяет, 1-128 байт.
     *
     * Bot-defined invoice payload, 1-128 bytes.
     */
    payload: string;
  
    /**
     * Токен провайдера платежей, полученный через @BotFather.
     *
     * Payment provider token, obtained via @BotFather.
     */
    provider_token: string;
  
    /**
     * Трехбуквенный код валюты по стандарту ISO 4217.
     *
     * Three-letter ISO 4217 currency code.
     */
    currency: string;
  
    /**
     * Разбивка цены на компоненты.
     *
     * Price breakdown, a JSON-serialized list of components.
     */
    prices: ILabeledPrice[];
  
    /**
     * Максимальная принимаемая сумма для чаевых в самых маленьких единицах валюты (целое число, не float/double).
     * Например, для максимальной чаевой в размере 1,45 доллара США передайте max_tip_amount = 145.
     *
     * The maximum accepted amount for tips in the smallest units of the currency (integer, not float/double).
     * For example, for a maximum tip of US$ 1.45 pass max_tip_amount = 145.
     */
    max_tip_amount?: number;

    /**
     * Подсказываемые суммы чаевых в самых маленьких единицах валюты (целое число, не float/double).
     * Максимум 4 подсказываемые суммы чаевых. Суммы должны быть положительными, передаваться в строго возрастающем порядке и не превышать max_tip_amount.
     *
     * A JSON-serialized array of suggested amounts of tip in the smallest units of the currency (integer, not float/double).
     * At most 4 suggested tip amounts can be specified. The suggested tip amounts must be positive, passed in a strictly increased order and must not exceed max_tip_amount.
     */
    suggested_tip_amounts?: number[];

    /**
     * Необязательно. JSON-сериализованный объект с данными о счете, которые будут переданы провайдеру платежей.
     * Подробное описание обязательных полей должно быть предоставлено платежным провайдером.
     *
     * Optional. A JSON-serialized object for data about the invoice, which will be shared with the payment provider.
     * A detailed description of the required fields should be provided by the payment provider.
     */
    provider_data?: string;

    /**
     * Необязательно. URL фотографии товара для счета.
     *
     * Optional. URL of the product photo for the invoice.
     */
    photo_url?: string;

    /**
     * Необязательно. Размер фотографии товара для счета в байтах.
     *
     * Optional. Photo size in bytes.
     */
    photo_size?: number;

    /**
     * Необязательно. Ширина фотографии товара для счета.
     *
     * Optional. Photo width.
     */
    photo_width?: number;

    /**
     * Необязательно. Высота фотографии товара для счета.
     *
     * Optional. Photo height.
     */
    photo_height?: number;

    /**
     * Необязательно. Передайте True, если вам нужно полное имя пользователя для завершения заказа.
     *
     * Optional. Pass True, if you require the user's full name to complete the order.
     */
    need_name?: boolean;

    /**
     * Необязательно. Передайте True, если вам нужен номер телефона пользователя для завершения заказа.
     *
     * Optional. Pass True, if you require the user's phone number to complete the order.
     */
    need_phone_number?: boolean;

    /**
     * Необязательно. Передайте True, если вам нужен адрес электронной почты пользователя для завершения заказа.
     *
     * Optional. Pass True, if you require the user's email address to complete the order.
     */
    need_email?: boolean;

    /**
     * Необязательно. Передайте True, если вам нужен адрес доставки пользователя для завершения заказа.
     *
     * Optional. Pass True, if you require the user's shipping address to complete the order.
     */
    need_shipping_address?: boolean;

    /**
     * Необязательно. Передайте True, если номер телефона пользователя должен быть отправлен провайдеру.
     *
     * Optional. Pass True, if the user's phone number should be sent to provider.
     */
    send_phone_number_to_provider?: boolean;

    /**
     * Необязательно. Передайте True, если адрес электронной почты пользователя должен быть отправлен провайдеру.
     *
     * Optional. Pass True, if the user's email address should be sent to provider.
     */
    send_email_to_provider?: boolean;

    /**
     * Необязательно. Передайте True, если конечная цена зависит от способа доставки.
     *
     * Optional. Pass True, if the final price depends on the shipping method.
     */
    is_flexible?: boolean;
  }
  