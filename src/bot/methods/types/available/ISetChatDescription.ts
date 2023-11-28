/**
 * Используйте этот метод для изменения описания группы, супергруппы или канала. Бот должен быть администратором в чате и иметь соответствующие права администратора для выполнения этой операции. При успехе возвращается True.
 *
 * Use this method to change the description of a group, a supergroup, or a channel. The bot must be an administrator in the chat and must have the appropriate administrator rights for this operation to work. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#setchatdescription}
 */
export interface ISetChatDescription {
  /**
   * Уникальный идентификатор целевого чата или имя пользователя целевого канала (в формате @channelusername).
   *
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername).
   */
  chat_id: number | string;

  /**
   * Новое описание чата, от 0 до 255 символов.
   *
   * New chat description, 0-255 characters.
   */
  description?: string;
}
