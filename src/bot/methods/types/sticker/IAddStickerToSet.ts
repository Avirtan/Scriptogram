/**
 * Используйте этот метод для добавления нового стикера в набор, созданный ботом. Формат добавленного стикера должен соответствовать формату других стикеров в наборе. В наборе стикеров с emoji может быть до 200 стикеров. Анимированные и видеостикеры могут содержать до 50 стикеров. Статические стикеры могут содержать до 120 стикеров. При успехе возвращается True.
 *
 * Use this method to add a new sticker to a set created by the bot. The format of the added sticker must match the format of the other stickers in the set. Emoji sticker sets can have up to 200 stickers. Animated and video sticker sets can have up to 50 stickers. Static sticker sets can have up to 120 stickers. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#addstickertoset}
 */
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
