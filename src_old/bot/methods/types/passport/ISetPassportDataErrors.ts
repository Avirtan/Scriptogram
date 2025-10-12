import { IPassportElementError } from "../../../types";

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
