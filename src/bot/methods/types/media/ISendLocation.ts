import { IInlineKeyboardMarkup, IReplyKeyboardMarkup, IReplyKeyboardRemove, IForceReply } from "../../../types";

export interface ISendLocation {
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
   * Latitude of the location.
   */
  latitude: number;

  /**
   * Долгота местоположения.
   *
   * Longitude of the location.
   */
  longitude: number;

  /**
   * Опционально. Радиус неопределенности местоположения, измеряется в метрах; 0-1500.
   *
   * The radius of uncertainty for the location, measured in meters; 0-1500.
   */
  horizontal_accuracy?: number;

  /**
   * Опционально. Период в секундах, в течение которого местоположение будет обновляться.
   *
   * Period in seconds for which the location will be updated.
   */
  live_period?: number;

  /**
   * Опционально. Направление движения пользователя в градусах.
   *
   * For live locations, a direction in which the user is moving, in degrees.
   */
  heading?: number;

  /**
   * Опционально. Максимальное расстояние для уведомлений о приближении к другому участнику чата, в метрах.
   *
   * For live locations, a maximum distance for proximity alerts about approaching another chat member, in meters.
   */
  proximity_alert_radius?: number;

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
