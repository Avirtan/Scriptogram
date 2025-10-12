import { IInlineQueryResult } from "../../../types";

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
