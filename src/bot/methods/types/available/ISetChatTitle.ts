/**
 * Используйте этот метод для изменения названия чата. Названия нельзя изменить в личных чатах. Бот должен быть администратором в чате и иметь соответствующее право администратора для выполнения этой операции. При успехе возвращается True.
 *
 * Use this method to change the title of a chat. Titles can't be changed for private chats. The bot must be an administrator in the chat and must have the appropriate administrator rights for this operation to work. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#setchattitle}
 */
export interface ISetChatTitle {
  /**
   * Уникальный идентификатор целевого чата или имя пользователя целевого канала (в формате @channelusername).
   *
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername).
   */
  chat_id: number | string;

  /**
   * Новое название чата, от 1 до 128 символов.
   *
   * New chat title, 1-128 characters.
   */
  title: string;
}
