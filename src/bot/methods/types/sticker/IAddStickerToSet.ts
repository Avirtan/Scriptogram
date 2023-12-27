import { IInputSticker } from "../../../types";

export interface IAddStickerToSet {
  /**
   * Идентификатор пользователя-владельца набора стикеров.
   *
   * User identifier of sticker set owner.
   */
  user_id: number;

  /**
   * Название набора стикеров.
   *
   * Sticker set name.
   */
  name: string;

  /**
   * Объект, сериализованный в JSON, содержащий информацию о добавляемом стикере. Если точно такой же стикер уже был добавлен в набор, то набор не изменится.
   *
   * A JSON-serialized object with information about the added sticker. If exactly the same sticker had already been added to the set, then the set isn't changed.
   */
  sticker: IInputSticker;
}
