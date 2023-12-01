/**
 * Используйте этот метод для удаления фото чата. Фотографии нельзя изменить в личных чатах. Бот должен быть администратором в чате и иметь соответствующее право администратора для выполнения этой операции. При успехе возвращается True.
 *
 * Use this method to delete a chat photo. Photos can't be changed for private chats. The bot must be an administrator in the chat and must have the appropriate administrator rights for this operation to work. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#deletechatphoto}
 */
export interface IDeleteChatPhoto {
  /**
   * Уникальный идентификатор целевого чата или имя пользователя целевого канала (в формате @channelusername).
   *
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername).
   */
  chat_id: number | string;
}
