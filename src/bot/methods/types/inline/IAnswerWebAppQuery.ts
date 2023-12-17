import { IInlineQueryResult } from "../../../types";

/**
 * Используйте этот метод для установки результата взаимодействия с веб-приложением и отправки соответствующего сообщения от имени пользователя в чате, откуда произошел запрос. При успехе возвращается объект SentWebAppMessage.
 *
 * Use this method to set the result of an interaction with a Web App and send a corresponding message on behalf of the user to the chat from which the query originated. On success, a SentWebAppMessage object is returned.
 *
 * @see {@link https://core.telegram.org/bots/api#answerwebappquery}
 */
export interface IAnswerWebAppQuery {
  /**
   * Уникальный идентификатор запроса для ответа.
   *
   * Unique identifier for the query to be answered.
   */
  web_app_query_id: string;

  /**
   * JSON-сериализованный объект, описывающий сообщение для отправки.
   *
   * A JSON-serialized object describing the message to be sent.
   */
  result: IInlineQueryResult;
}
