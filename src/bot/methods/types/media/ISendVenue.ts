import {
  IInlineKeyboardMarkup,
  IReplyKeyboardMarkup,
  IReplyKeyboardRemove,
  IForceReply,
} from "../../../types";

/**
 * Используйте этот метод для отправки информации о месте. При успехе возвращается отправленное сообщение.
 *
 * Use this method to send information about a venue. On success, the sent Message is returned.
 * @see {@link https://core.telegram.org/bots/api#sendvenue}
 */
export interface ISendVenue {
  /**
   * Уникальный идентификатор целевого чата или имя пользователя целевого канала (в формате @channelusername).
   *
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername).
   */
  chat_id: number | string;

  /**
   * Опционально. Уникальный идентификатор целевой темы сообщения (топика) форума; только для форум-супергрупп.
   *
   * Optional. Unique identifier for the target message thread (topic) of the forum; for forum supergroups only.
   */
  message_thread_id?: number;

  /**
   * Широта местоположения.
   *
   * Latitude of the venue.
   */
  latitude: number;

  /**
   * Долгота местоположения.
   *
   * Longitude of the venue.
   */
  longitude: number;

  /**
   * Название места.
   *
   * Name of the venue.
   */
  title: string;

  /**
   * Адрес места.
   *
   * Address of the venue.
   */
  address: string;

  /**
   * Опционально. Идентификатор Foursquare места.
   *
   * Foursquare identifier of the venue.
   */
  foursquare_id?: string;

  /**
   * Опционально. Тип Foursquare места, если известен.
   *
   * Foursquare type of the venue, if known.
   */
  foursquare_type?: string;

  /**
   * Опционально. Идентификатор Google Places места.
   *
   * Google Places identifier of the venue.
   */
  google_place_id?: string;

  /**
   * Опционально. Тип Google Places места.
   *
   * Google Places type of the venue.
   */
  google_place_type?: string;

  /**
   * Опционально. Отправлять сообщение без звука.
   *
   * Sends the message silently. Users will receive a notification with no sound.
   */
  disable_notification?: boolean;

  /**
   * Опционально. Защищает содержание отправленного сообщения от пересылки и сохранения.
   *
   * Protects the contents of the sent message from forwarding and saving.
   */
  protect_content?: boolean;

  /**
   * Опционально. Если сообщение является ответом, ID оригинального сообщения.
   *
   * If the message is a reply, ID of the original message.
   */
  reply_to_message_id?: number;

  /**
   * Опционально. Передайте True, если сообщение должно быть отправлено, даже если указанное сообщение-ответ не найдено.
   *
   * Pass True if the message should be sent even if the specified replied-to message is not found.
   */
  allow_sending_without_reply?: boolean;

  /**
   * Опционально. Дополнительные параметры интерфейса.
   *
   * Additional interface options.
   */
  reply_markup?: IInlineKeyboardMarkup | IReplyKeyboardMarkup | IReplyKeyboardRemove | IForceReply;
}
