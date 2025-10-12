import { IChatAdministratorRights } from "..";

/**
 * Этот объект определяет критерии для запроса подходящего чата.
 * Идентификатор выбранного чата будет передан боту при нажатии соответствующей кнопки.
 *
 * This object defines the criteria used to request a suitable chat.
 * The identifier of the selected chat will be shared with the bot when the corresponding button is pressed.
 * @see {@link https://core.telegram.org/bots/api#keyboardbuttonrequestchat}
 */
export interface IKeyboardButtonRequestChat {
  /**
   * Знаковый 32-битный идентификатор запроса, который будет получен обратно в объекте ChatShared. Должен быть уникальным в пределах сообщения.
   *
   * Signed 32-bit identifier of the request, which will be received back in the ChatShared object. Must be unique within the message.
   */
  request_id: number;

  /**
   * Передайте True, чтобы запросить чат-канал, передайте False, чтобы запросить групповой или супергрупповой чат.
   *
   * Pass True to request a channel chat, pass False to request a group or a supergroup chat.
   */
  chat_is_channel: boolean;

  /**
   * Опционально. Передайте True, чтобы запросить форум супергруппы, передайте False, чтобы запросить чат без форума.
   * Если не указано, не применяются дополнительные ограничения.
   *
   * Optional. Pass True to request a forum supergroup, pass False to request a non-forum chat. If not specified, no additional restrictions are applied.
   */
  chat_is_forum?: boolean;

  /**
   * Опционально. Передайте True, чтобы запросить супергруппу или канал с именем пользователя, передайте False, чтобы запросить чат без имени пользователя.
   * Если не указано, не применяются дополнительные ограничения.
   *
   * Optional. Pass True to request a supergroup or a channel with a username, pass False to request a chat without a username. If not specified, no additional restrictions are applied.
   */
  chat_has_username?: boolean;

  /**
   * Опционально. Передайте True, чтобы запросить чат, принадлежащий пользователю. В противном случае не применяются дополнительные ограничения.
   *
   * Optional. Pass True to request a chat owned by the user. Otherwise, no additional restrictions are applied.
   */
  chat_is_created?: boolean;

  /**
   * Опционально. JSON-сериализованный объект, перечисляющий необходимые права администратора пользователя в чате.
   * Права должны быть надмножеством прав администратора бота. Если не указано, не применяются дополнительные ограничения.
   *
   * Optional. A JSON-serialized object listing the required administrator rights of the user in the chat.
   * The rights must be a superset of bot_administrator_rights. If not specified, no additional restrictions are applied.
   */
  user_administrator_rights?: IChatAdministratorRights;

  /**
   * Опционально. JSON-сериализованный объект, перечисляющий необходимые права администратора бота в чате.
   * Права должны быть подмножеством прав администратора пользователя. Если не указано, не применяются дополнительные ограничения.
   *
   * Optional. A JSON-serialized object listing the required administrator rights of the bot in the chat.
   * The rights must be a subset of user_administrator_rights. If not specified, no additional restrictions are applied.
   */
  bot_administrator_rights?: IChatAdministratorRights;

  /**
   * Опционально. Передайте True, чтобы запросить чат с ботом в качестве участника. В противном случае не применяются дополнительные ограничения.
   *
   * Optional. Pass True to request a chat with the bot as a member. Otherwise, no additional restrictions are applied.
   */
  bot_is_member?: boolean;
}
