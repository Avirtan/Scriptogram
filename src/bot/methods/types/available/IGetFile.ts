/**
 * Используйте этот метод для получения основной информации о файле и его подготовки для загрузки.
 * В данный момент боты могут загружать файлы размером до 20 МБ.
 * При успехе возвращается объект File.
 *
 * Use this method to get basic information about a file and prepare it for downloading.
 * For the moment, bots can download files of up to 20MB in size. On success, a File object is returned.
 * @see {@link https://core.telegram.org/bots/api#getfile}
 */
export interface IGetFile {
  /**
   * Идентификатор файла для получения информации о нем.
   *
   * File identifier to get information about.
   */
  file_id: string;
}
