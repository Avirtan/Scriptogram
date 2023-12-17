/**
 * Описывает стикер для добавления в набор стикеров.
 *
 * This object describes a sticker to be added to a sticker set.
 *
 * @see {@link https://core.telegram.org/bots/api#inputsticker}
 */
export interface IInputSticker {
  /**
   * Добавляемый стикер. Передайте file_id в виде строки, чтобы отправить файл, который уже существует на серверах Telegram.
   * Передайте HTTP URL в виде строки для загрузки файла Telegram из интернета,
   * загрузите новый файл с использованием multipart/form-data, или передайте "attach://<file_attach_name>" для загрузки нового файла
   * с использованием multipart/form-data под именем <file_attach_name>. Анимированные и видео стикеры нельзя загружать по HTTP URL.
   *
   * The added sticker. Pass a file_id as a String to send a file that already exists on the Telegram servers,
   * pass an HTTP URL as a String for Telegram to get a file from the Internet, upload a new one using multipart/form-data,
   * or pass “attach://<file_attach_name>” to upload a new one using multipart/form-data under <file_attach_name> name.
   * Animated and video stickers can't be uploaded via HTTP URL.
   */
  sticker: IInputFile | string;

  /**
   * Список 1-20 emoji, связанных со стикером.
   *
   * List of 1-20 emoji associated with the sticker.
   */
  emoji_list: string[];

  /**
   * Позиция, где должна быть размещена маска на лицах. Только для стикеров "mask".
   *
   * Position where the mask should be placed on faces. For “mask” stickers only.
   */
  mask_position?: IMaskPosition;

  /**
   * Список 0-20 ключевых слов для поиска стикера с общей длиной до 64 символов. Только для стикеров "regular" и "custom_emoji".
   *
   * List of 0-20 search keywords for the sticker with total length of up to 64 characters. For “regular” and “custom_emoji” stickers only.
   */
  keywords?: string[];
}
