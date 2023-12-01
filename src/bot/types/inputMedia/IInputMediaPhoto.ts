/**
 * Представляет фото для отправки.
 *
 * Represents a photo to be sent.
 * @see {@link https://core.telegram.org/bots/api#inputmediaphoto}
 */
export interface IInputMediaPhoto {
  /**
   * Тип результата, должен быть "photo".
   *
   * Type of the result, must be "photo".
   */
  type: string;

  /**
   * Файл для отправки. Передайте file_id для отправки файла, который существует на серверах Telegram (рекомендуется),
   * передайте HTTP-URL, чтобы Telegram получил файл из Интернета, или передайте "attach://<file_attach_name>",
   * чтобы загрузить новый файл с использованием multipart/form-data под именем <file_attach_name>.
   *
   * File to send. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL
   * for Telegram to get a file from the Internet, or pass "attach://<file_attach_name>" to upload a new one using
   * multipart/form-data under <file_attach_name> name. More information on Sending Files »
   */
  media: string;

  /**
   * Опционально. Подпись к фотографии, 0-1024 символа после разбора сущностей.
   *
   * Optional. Caption of the photo to be sent, 0-1024 characters after entities parsing.
   */
  caption?: string;

  /**
   * Опционально. Режим разбора сущностей в подписи к фотографии. См. варианты форматирования для получения дополнительной информации.
   *
   * Optional. Mode for parsing entities in the photo caption. See formatting options for more details.
   */
  parse_mode?: string;

  /**
   * Опционально. Список специальных сущностей, которые появляются в подписи, и которые можно указать вместо parse_mode.
   *
   * Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode.
   */
  caption_entities?: IMessageEntity[];

  /**
   * Опционально. Передайте True, если фото должно быть закрыто анимацией спойлера.
   *
   * Optional. Pass True if the photo needs to be covered with a spoiler animation.
   */
  has_spoiler?: boolean;
}
