/**
 * Используйте этот метод для создания ссылки на инвойс.
 * При успехе возвращается созданная ссылка на инвойс в виде строки.
 *
 * Use this method to create a link for an invoice.
 * Returns the created invoice link as String on success.
 * @see {@link https://core.telegram.org/bots/api#createinvoicelink}
 */
export interface ICreateInvoiceLink {
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
   * Payload, определенный ботом, от 1 до 128 байт.
   * Не отображается пользователю, используется для внутренних процессов.
   *
   * Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use for your internal processes.
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
   * Разбивка цены на составляющие, сериализованный в JSON список компонентов (например, цена продукта, налог, скидка и т.д.).
   *
   * Price breakdown, a JSON-serialized list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.).
   */
  prices: ILabeledPrice[];

  /**
   * Максимальная сумма чаевых в наименьших единицах валюты (целое число, не float/double).
   * Например, для максимальной суммы чаевых $1.45 передайте max_tip_amount = 145.
   * По умолчанию 0.
   *
   * The maximum accepted amount for tips in the smallest units of the currency (integer, not float/double).
   * For example, for a maximum tip of US$ 1.45 pass max_tip_amount = 145.
   * Defaults to 0.
   */
  max_tip_amount?: number;

  /**
   * Список предлагаемых сумм чаевых в наименьших единицах валюты (целое число, не float/double).
   * Можно указать не более 4 предлагаемых сумм чаевых.
   *
   * A JSON-serialized array of suggested amounts of tips in the smallest units of the currency (integer, not float/double).
   * At most 4 suggested tip amounts can be specified.
   */
  suggested_tip_amounts?: number[];

  /**
   * Данные о счете, которые будут переданы провайдеру платежей в JSON-формате.
   * Подробное описание необходимых полей должно быть предоставлено провайдером платежей.
   *
   * JSON-serialized data about the invoice, which will be shared with the payment provider.
   * A detailed description of required fields should be provided by the payment provider.
   */
  provider_data?: string;

  /**
   * URL фотографии продукта для счета.
   * Может быть изображением товара или маркетинговым изображением для услуги.
   *
   * URL of the product photo for the invoice.
   * Can be a photo of the goods or a marketing image for a service.
   */
  photo_url?: string;

  /**
   * Размер фотографии в байтах.
   *
   * Photo size in bytes.
   */
  photo_size?: number;

  /**
   * Ширина фотографии.
   *
   * Photo width.
   */
  photo_width?: number;

  /**
   * Высота фотографии.
   *
   * Photo height.
   */
  photo_height?: number;

  /**
   * Передать True, если требуется полное имя пользователя для завершения заказа.
   *
   * Pass True if you require the user's full name to complete the order.
   */
  need_name?: boolean;

  /**
   * Передать True, если требуется номер телефона пользователя для завершения заказа.
   *
   * Pass True if you require the user's phone number to complete the order.
   */
  need_phone_number?: boolean;

  /**
   * Передать True, если требуется адрес электронной почты пользователя для завершения заказа.
   *
   * Pass True if you require the user's email address to complete the order.
   */
  need_email?: boolean;

  /**
   * Передать True, если требуется адрес доставки пользователя для завершения заказа.
   *
   * Pass True if you require the user's shipping address to complete the order.
   */
  need_shipping_address?: boolean;

  /**
   * Передать True, если номер телефона пользователя должен быть отправлен провайдеру.
   *
   * Pass True if the user's phone number should be sent to the provider.
   */
  send_phone_number_to_provider?: boolean;

  /**
   * Передать True, если адрес электронной почты пользователя должен быть отправлен провайдеру.
   *
   * Pass True if the user's email address should be sent to the provider.
   */
  send_email_to_provider?: boolean;

  /**
   * Предоставить True, если конечная цена зависит от метода доставки.
   *
   * Pass True if the final price depends on the shipping method.
   */
  is_flexible?: boolean;
}
