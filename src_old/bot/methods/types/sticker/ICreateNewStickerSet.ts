import { IInputSticker } from "../../../types";

export interface ICreateNewStickerSet {
  /**
   * Идентификатор пользователя-владельца создаваемого набора стикеров.
   *
   * User identifier of created sticker set owner.
   */
  user_id: number;

  /**
   * Короткое имя набора стикеров, используемое в URL-адресах t.me/addstickers/ (например, animals). Может содержать только английские буквы, цифры и подчеркивания. Должно начинаться с буквы, не может содержать два подряд идущих подчеркивания и должно заканчиваться на "_by_<bot_username>". <bot_username> не чувствительный к регистру. Должно быть от 1 до 64 символов.
   *
   * Short name of sticker set, to be used in t.me/addstickers/ URLs (e.g., animals). Can contain only English letters, digits and underscores. Must begin with a letter, can't contain consecutive underscores and must end in "_by_<bot_username>". <bot_username> is case insensitive. 1-64 characters.
   */
  name: string;

  /**
   * Заголовок набора стикеров, от 1 до 64 символов.
   *
   * Sticker set title, 1-64 characters.
   */
  title: string;

  /**
   * Список от 1 до 50 начальных стикеров для добавления в набор стикеров.
   *
   * A JSON-serialized list of 1-50 initial stickers to be added to the sticker set.
   */
  stickers: IInputSticker[];

  /**
   * Формат стикеров в наборе, должен быть одним из значений: “static” (статический), “animated” (анимированный), “video” (видео).
   *
   * Format of stickers in the set, must be one of “static”, “animated”, “video”.
   */
  sticker_format: string;

  /**
   * Тип стикеров в наборе, передайте “regular”, “mask” или “custom_emoji”. По умолчанию создается обычный набор стикеров.
   *
   * Type of stickers in the set, pass “regular”, “mask”, or “custom_emoji”. By default, a regular sticker set is created.
   */
  sticker_type?: string;

  /**
   * Передайте True, если стикеры в наборе должны быть перекрашены в цвет текста при использовании в сообщениях, в акцентный цвет при использовании в качестве статуса emoji, белый на фотографиях чата или другой соответствующий цвет в зависимости от контекста; только для наборов стикеров с пользовательскими emoji.
   *
   * Pass True if stickers in the sticker set must be repainted to the color of text when used in messages, the accent color if used as emoji status, white on chat photos, or another appropriate color based on context; for custom emoji sticker sets only.
   */
  needs_repainting?: boolean;
}
