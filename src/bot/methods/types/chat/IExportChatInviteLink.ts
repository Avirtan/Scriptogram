/**
 * Используйте этот метод для создания новой основной пригласительной ссылки для чата; любая ранее созданная основная ссылка будет отозвана. Бот должен быть администратором в чате и иметь соответствующие права администратора для выполнения этой операции. При успехе возвращается новая пригласительная ссылка в виде строки.
 *
 * Use this method to generate a new primary invite link for a chat; any previously generated primary link is revoked. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the new invite link as String on success.
 * @see {@link https://core.telegram.org/bots/api#exportchatinvitelink}
 */
export interface IExportChatInviteLink {
  /**
   * Уникальный идентификатор целевого чата или имя пользователя целевого канала (в формате @channelusername).
   *
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername).
   */
  chat_id: number | string;
}
