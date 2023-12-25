import { ILocation, IUser } from "..";

/**
 * Представляет результат встроенного запроса, выбранный пользователем и отправленный его чат-партнеру.
 *
 * Represents a result of an inline query that was chosen by the user and sent to their chat partner.
 *
 * @see {@link https://core.telegram.org/bots/api#choseninlineresult}
 */
export interface IChosenInlineResult {
  /**
   * Уникальный идентификатор результата, который был выбран.
   *
   * The unique identifier for the result that was chosen.
   */
  result_id: string;

  /**
   * Пользователь, который выбрал результат.
   *
   * The user that chose the result.
   */
  from: IUser;

  /**
   * Необязательно. Местоположение отправителя, только для ботов, которые запрашивают местоположение пользователя.
   *
   * Optional. Sender location, only for bots that require user location.
   */
  location?: ILocation;

  /**
   * Необязательно. Идентификатор отправленного сообщения в инлайн-режиме.
   * Доступно только при наличии вложенной инлайн-клавиатуры к сообщению.
   * Будет также получен в коллбэк-запросах и может быть использован для редактирования сообщения.
   *
   * Optional. Identifier of the sent inline message.
   * Available only if there is an inline keyboard attached to the message.
   * Will be also received in callback queries and can be used to edit the message.
   */
  inline_message_id?: string;

  /**
   * Запрос, который был использован для получения результата.
   *
   * The query that was used to obtain the result.
   */
  query: string;
}
