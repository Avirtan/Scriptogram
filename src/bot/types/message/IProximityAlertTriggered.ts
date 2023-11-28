/**
 * Этот объект представляет содержимое сервисного сообщения, отправляемого всякий раз, когда пользователь в чате вызывает приближенное предупреждение, установленное другим пользователем.
 *
 * This object represents the content of a service message, sent whenever a user in the chat triggers a proximity alert set by another user.
 * @see {@link https://core.telegram.org/bots/api#proximityalerttriggered}
 */
export interface IProximityAlertTriggered {
  /**
   * Пользователь, вызвавший предупреждение.
   *
   * User that triggered the alert.
   */
  traveler: IUser;

  /**
   * Пользователь, установивший предупреждение.
   *
   * User that set the alert.
   */
  watcher: IUser;

  /**
   * Расстояние между пользователями.
   *
   * The distance between the users.
   */
  distance: number;
}
