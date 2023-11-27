/**
 * Описывает причину неудачного запроса.
 * Describes why a request was unsuccessful.
 * @see {@link https://core.telegram.org/bots/api#responseparameters}
 */
export interface ResponseParameters {
  /**
   * Опционально. Группа была перенесена в супергруппу с указанным идентификатором.
   * Optional. The group has been migrated to a supergroup with the specified identifier.
   */
  migrate_to_chat_id?: number;

  /**
   * Опционально. В случае превышения контроля над флудом, количество секунд, оставшихся до повторения запроса.
   * Optional. In case of exceeding flood control, the number of seconds left to wait before the request can be repeated.
   */
  retry_after?: number;
}
