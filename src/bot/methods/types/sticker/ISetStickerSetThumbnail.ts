/**
 * Используйте этот метод для установки обложки обычного или маскирующего набора стикеров. Формат файла обложки должен соответствовать формату стикеров в наборе. При успехе возвращается True.
 *
 * Use this method to set the thumbnail of a regular or mask sticker set. The format of the thumbnail file must match the format of the stickers in the set. Returns True on success.
 * @see {@link https://core.telegram.org/bots/api#setstickersetthumbnail}
 */
export interface ISetStickerSetThumbnail {
  /**
   * Название набора стикеров.
   *
   * Sticker set name.
   */
  name: string;

  /**
   * Идентификатор пользователя-владельца набора стикеров.
   *
   * User identifier of the sticker set owner.
   */
  user_id: number;

  /**
   * Обложка .WEBP или .PNG изображения, которое должно соответствовать требованиям набора стикеров. Размер до 128 килобайт с шириной и высотой точно 100px, или анимация .TGS размером до 32 килобайт (см. https://core.telegram.org/stickers#animated-sticker-requirements для технических требований анимированных стикеров), или видео WEBM с обложкой до 32 килобайт; см. https://core.telegram.org/stickers#video-sticker-requirements для технических требований видеостикеров. Передайте file_id в виде строки, чтобы отправить файл, который уже существует на серверах Telegram, передайте HTTP URL в виде строки, чтобы Telegram получил файл из Интернета или загрузите новый с использованием multipart/form-data. Больше информации на странице Отправка файлов ». Обложки анимированных и видеостикеров нельзя загружать через HTTP URL. Если не указано, тогда обложка убирается, и первый стикер используется в качестве обложки.
   *
   * A .WEBP or .PNG image with the thumbnail, must meet the requirements for the sticker set. Up to 128 kilobytes in size with a width and height exactly 100px, or a .TGS animation up to 32 kilobytes in size (see https://core.telegram.org/stickers#animated-sticker-requirements for animated sticker technical requirements), or a WEBM video with the thumbnail up to 32 kilobytes in size; see https://core.telegram.org/stickers#video-sticker-requirements for video sticker technical requirements. Pass a file_id as a String to send a file that already exists on the Telegram servers, pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. More information on Sending Files ». Animated and video sticker set thumbnails can't be uploaded via HTTP URL. If omitted, then the thumbnail is dropped and the first sticker is used as the thumbnail.
   */
  thumbnail?: IInputFile | string;
}
