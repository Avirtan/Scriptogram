import { IInlineKeyboardMarkup, ILabeledPrice } from "../../../types";

export interface ISendInvoice {
  /**
   * Уникальный идентификатор целевого чата или имя пользователя целевого канала (в формате @channelusername).
   *
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername).
   */
  chat_id: number | string;

  /**
   * Уникальный идентификатор целевой темы сообщения (топика) форума; только для форум-супергрупп.
   *
   * Unique identifier for the target message thread (topic) of the forum; for forum supergroups only.
   */
  message_thread_id?: number;

  /**
   * Название продукта, 1-32 символа.
   *
   * Product name, 1-32 characters.
   */
  title: string;

  /**
   * Описание продукта, 1-255 символов.
   *
   * Product description, 1-255 characters.
   */
  description: string;

  /**
   * Bot-defined invoice payload, 1-128 байт. Это не будет отображаться пользователю, используется для внутренних процессов.
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
   * Трехбуквенный код валюты ISO 4217, подробнее о валютах.
   *
   * Three-letter ISO 4217 currency code, see more on currencies.
   */
  currency: string;

  /**
   * Разбивка цены, JSON-сериализованный список компонентов (например, цена продукта, налог, скидка, стоимость доставки и т. д.).
   *
   * Price breakdown, a JSON-serialized list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.)
   */
  prices: ILabeledPrice[];

  /**
   * Максимальная сумма для чаевых в мелких единицах валюты (целое число, не float/double).
   *
   * The maximum accepted amount for tips in the smallest units of the currency (integer, not float/double).
   */
  max_tip_amount?: number;

  /**
   * JSON-сериализованный массив предлагаемых сумм для чаевых в мелких единицах валюты (целое число, не float/double).
   *
   * A JSON-serialized array of suggested amounts of tips in the smallest units of the currency (integer, not float/double).
   */
  suggested_tip_amounts?: number[];

  /**
   * Уникальный параметр глубокой ссылки для создания длинной ссылки на оплату счета.
   *
   * Unique deep-linking parameter.
   */
  start_parameter?: string;

  /**
   * URL фотографии товара для счета. Может быть фотографией товара или маркетинговым изображением для услуги.
   *
   * URL of the product photo for the invoice. Can be a photo of the goods or a marketing image for a service.
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
   * Показывает, нужно ли полное имя пользователя для завершения заказа.
   *
   * Pass True if you require the user's full name to complete the order.
   */
  need_name?: boolean;

  /**
   * Показывает, нужен ли номер телефона пользователя для завершения заказа.
   *
   * Pass True if you require the user's phone number to complete the order.
   */
  need_phone_number?: boolean;

  /**
   * Показывает, нужен ли email пользователя для завершения заказа.
   *
   * Pass True if you require the user's email address to complete the order.
   */
  need_email?: boolean;

  /**
   * Показывает, нужен ли адрес доставки пользователя для завершения заказа.
   *
   * Pass True if you require the user's shipping address to complete the order.
   */
  need_shipping_address?: boolean;

  /**
   * Показывает, должен ли номер телефона пользователя быть отправлен провайдеру.
   *
   * Pass True if the user's phone number should be sent to provider.
   */
  send_phone_number_to_provider?: boolean;

  /**
   * Показывает, должен ли email пользователя быть отправлен провайдеру.
   *
   * Pass True if the user's email address should be sent to provider.
   */
  send_email_to_provider?: boolean;

  /**
   * Показывает, зависит ли конечная цена от метода доставки.
   *
   * Pass True if the final price depends on the shipping method.
   */
  is_flexible?: boolean;

  /**
   * Параметр, отвечающий за отправку уведомления о счете без звука.
   *
   * Sends the message silently. Users will receive a notification with no sound.
   */
  disable_notification?: boolean;

  /**
   * Защищает содержимое отправленного сообщения от пересылки и сохранения.
   *
   * Protects the contents of the sent message from forwarding and saving.
   */
  protect_content?: boolean;

  /**
   * Если сообщение является ответом, ID оригинального сообщения.
   *
   * If the message is a reply, ID of the original message.
   */
  reply_to_message_id?: number;

  /**
   * Отправлять сообщение, даже если указанное сообщение-ответ не найдено.
   *
   * Pass True if the message should be sent even if the specified replied-to message is not found.
   */
  allow_sending_without_reply?: boolean;

  /**
   * Дополнительные параметры интерфейса. Объект JSON для встроенной клавиатуры или кнопки оплаты.
   *
   * Additional interface options. A JSON-serialized object for an inline keyboard or a payment button.
   */
  reply_markup?: IInlineKeyboardMarkup;
}
