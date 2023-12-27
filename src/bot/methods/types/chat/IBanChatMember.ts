export interface IBanChatMember {
  /**
   * Уникальный идентификатор группы или имя пользователя супергруппы или канала (в формате @channelusername).
   *
   * Unique identifier for the target group or username of the target supergroup or channel (in the format @channelusername).
   */
  chat_id: number | string;

  /**
   * Уникальный идентификатор целевого пользователя.
   *
   * Unique identifier of the target user.
   */
  user_id: number;

  /**
   * Дата, когда пользователь будет разбанен; Unix-время.
   * Если пользователь забанен более чем на 366 дней или менее чем на 30 секунд с текущего времени, он считается забаненным навсегда.
   * Применяется только для супергрупп и каналов.
   *
   * Date when the user will be unbanned; Unix time.
   * If user is banned for more than 366 days or less than 30 seconds from the current time they are considered to be banned forever. Applied for supergroups and channels only.
   */
  until_date?: number;

  /**
   * Передайте True, чтобы удалить все сообщения пользователя из чата, который будет удален.
   * Если False, пользователь сможет видеть сообщения в группе, которые были отправлены до его удаления.
   * Всегда True для супергрупп и каналов.
   *
   * Pass True to delete all messages from the chat for the user that is being removed.
   * If False, the user will be able to see messages in the group that were sent before the user was removed. Always True for supergroups and channels.
   */
  revoke_messages?: boolean;
}
