/**
 * Используйте этот метод, чтобы удалить сообщение, включая служебные сообщения,
 * с определенными ограничениями:
 * - Сообщение можно удалить только если оно было отправлено менее 48 часов назад.
 * - Служебные сообщения о создании супергруппы, канала или темы форума не могут быть удалены.
 * - Сообщение с кубиком в личном чате можно удалить только если оно было отправлено более 24 часов назад.
 * - Боты могут удалять исходящие сообщения в личных чатах, группах и супергруппах.
 * - Боты могут удалять входящие сообщения в личных чатах.
 * - Боты, получившие разрешение can_post_messages, могут удалять исходящие сообщения в каналах.
 * - Если бот является администратором группы, он может удалить любое сообщение там.
 * - Если у бота есть разрешение can_delete_messages в супергруппе или канале,
 *   он может удалить любое сообщение там.
 * Возвращает True в случае успешного выполнения.
 *
 * Use this method to delete a message, including service messages, with the following limitations:
 * - A message can only be deleted if it was sent less than 48 hours ago.
 * - Service messages about a supergroup, channel, or forum topic creation can't be deleted.
 * - A dice message in a private chat can only be deleted if it was sent more than 24 hours ago.
 * - Bots can delete outgoing messages in private chats, groups, and supergroups.
 * - Bots can delete incoming messages in private chats.
 * - Bots granted can_post_messages permissions can delete outgoing messages in channels.
 * - If the bot is an administrator of a group, it can delete any message there.
 * - If the bot has can_delete_messages permission in a supergroup or a channel,
 *   it can delete any message there.
 * Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#deletemessage}
 */
export interface IDeleteMessage {
  /**
   * Уникальный идентификатор целевого чата или имя пользователя целевого канала
   * (в формате @channelusername).
   *
   * Unique identifier for the target chat or username of the target channel
   * (in the format @channelusername).
   */
  chat_id: number | string;

  /**
   * Идентификатор удаляемого сообщения.
   *
   * Identifier of the message to delete.
   */
  message_id: number;
}
