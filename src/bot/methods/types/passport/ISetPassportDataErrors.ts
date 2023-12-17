/**
 * Используйте этот метод, чтобы уведомить пользователя о том, что некоторые из предоставленных им элементов Telegram Passport содержат ошибки. Пользователь не сможет повторно отправить свой Passport вам, пока ошибки не будут исправлены (содержимое поля, для которого была возвращена ошибка, должно измениться). Возвращает True в случае успеха.
 *
 * Use this method to inform a user that some of the Telegram Passport elements they provided contain errors. The user will not be able to re-submit their Passport to you until the errors are fixed (the contents of the field for which you returned the error must change). Returns True on success.
 *
 * @see {@link https://core.telegram.org/bots/api#setpassportdataerrors}
 */
export interface ISetPassportDataErrors {
  /**
   * Уникальный идентификатор пользователя.
   *
   * Unique identifier for the user.
   */
  user_id: number;

  /**
   * Массив, описывающий ошибки в элементах Telegram Passport.
   *
   * Array describing errors in the Telegram Passport elements.
   */
  errors: IPassportElementError[];
}
