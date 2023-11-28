/**
 * Используйте этот метод для отзыва пригласительной ссылки, созданной ботом. Если основная ссылка отозвана, автоматически создается новая ссылка. Бот должен быть администратором в чате и иметь соответствующие права администратора для выполнения этой операции. При успехе возвращается отозванная пригласительная ссылка в виде объекта ChatInviteLink.
 *
 * Use this method to revoke an invite link created by the bot. If the primary link is revoked, a new link is automatically generated. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the revoked invite link as ChatInviteLink object.
 * @see {@link https://core.telegram.org/bots/api#revokechatinvitelink}
 */
export interface IRevokeChatInviteLink {
  /**
   * Уникальный идентификатор целевого чата или имя пользователя целевого канала (в формате @channelusername).
   *
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername).
   */
  chat_id: number | string;

  /**
   * Пригласительная ссылка для отзыва.
   *
   * The invite link to revoke.
   */
  invite_link: string;
}
