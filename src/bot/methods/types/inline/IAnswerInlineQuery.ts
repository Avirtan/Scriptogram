import { IInlineQueryResult, IInlineQueryResultsButton } from "../../../types";

/**
 * Используйте этот метод для отправки ответов на запросы встроенного поиска. При успехе возвращается True.
 * Не более 50 результатов для каждого запроса допускается.
 *
 * Use this method to send answers to an inline query. On success, True is returned.
 * No more than 50 results per query are allowed.
 *
 * @see {@link https://core.telegram.org/bots/api#answerinlinequery}
 */
export interface IAnswerInlineQuery {
  /**
   * Уникальный идентификатор отвеченного запроса.
   *
   * Unique identifier for the answered query.
   */
  inline_query_id: string;

  /**
   * Массив результатов для встроенного запроса.
   *
   * An array of results for the inline query.
   */
  results: IInlineQueryResult[];

  /**
   * Максимальное время в секундах, в течение которого результат встроенного запроса может быть кэширован на сервере. По умолчанию 300 секунд.
   *
   * The maximum amount of time in seconds that the result of the inline query may be cached on the server. Defaults to 300 seconds.
   */
  cache_time?: number;

  /**
   * Передайте True, если результаты могут быть кэшированы только на стороне сервера для пользователя, отправившего запрос. По умолчанию результаты могут быть возвращены любому пользователю, отправившему тот же запрос.
   *
   * Pass True if results may be cached on the server side only for the user that sent the query. By default, results may be returned to any user who sends the same query.
   */
  is_personal?: boolean;

  /**
   * Передайте смещение, которое клиент должен отправить в следующем запросе с тем же текстом, чтобы получить больше результатов. Передайте пустую строку, если больше результатов нет или если вы не поддерживаете пагинацию. Длина смещения не может превышать 64 байта.
   *
   * Pass the offset that a client should send in the next query with the same text to receive more results. Pass an empty string if there are no more results or if you don't support pagination. Offset length can't exceed 64 bytes.
   */
  next_offset?: string;

  /**
   * Объект, описывающий кнопку, которая будет показана над результатами встроенного запроса.
   *
   * A JSON-serialized object describing a button to be shown above inline query results.
   */
  button?: IInlineQueryResultsButton;
}
