import { IInputFile, IMessageEntity } from "..";

/**
 * Представляет общий файл, который должен быть отправлен.
 *
 * Represents a general file to be sent.
 * @see {@link https://core.telegram.org/bots/api#inputmediadocument}
 */
export interface IInputMediaDocument {
  /**
   * Тип результата, должен быть "document".
   *
   * Type of the result, must be "document".
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
   * Опционально. Обложка для отправленного файла; может быть проигнорирована, если генерация обложки поддерживается на стороне сервера.
   * Обложка должна быть в формате JPEG и иметь размер менее 200 кБ. Ширина и высота обложки не должны превышать 320.
   * Игнорируется, если файл не загружен с использованием multipart/form-data.
   * Обложки нельзя повторно использовать и их можно загрузить только как новый файл, поэтому можно передать "attach://<file_attach_name>",
   * если обложка была загружена с использованием multipart/form-data под <file_attach_name>.
   *
   * Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side.
   * The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320.
   * Ignored if the file is not uploaded using multipart/form-data. Thumbnails can't be reused and can be only uploaded as a new file,
   * so you can pass “attach://<file_attach_name>” if the thumbnail was uploaded using multipart/form-data under <file_attach_name>.
   * More information on Sending Files »
   */
  thumbnail?: IInputFile | string;

  /**
   * Опционально. Подпись к документу, 0-1024 символа после разбора сущностей.
   *
   * Optional. Caption of the document to be sent, 0-1024 characters after entities parsing.
   */
  caption?: string;

  /**
   * Опционально. Режим разбора сущностей в подписи к документу. См. варианты форматирования для получения дополнительной информации.
   *
   * Optional. Mode for parsing entities in the document caption. See formatting options for more details.
   */
  parse_mode?: string;

  /**
   * Опционально. Список специальных сущностей, которые появляются в подписи, и которые можно указать вместо parse_mode.
   *
   * Optional. List of special entities that appear in the caption, which can be specified instead of parse_mode.
   */
  caption_entities?: IMessageEntity[];

  /**
   * Опционально. Отключает автоматическое обнаружение типа контента на стороне сервера для файлов, загруженных с использованием multipart/form-data.
   * Всегда True, если документ отправляется как часть альбома.
   *
   * Optional. Disables automatic server-side content type detection for files uploaded using multipart/form-data.
   * Always True, if the document is sent as part of an album.
   */
  disable_content_type_detection?: boolean;
}
