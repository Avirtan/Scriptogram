/**
 * Этот объект представляет файл, готовый к загрузке. Файл можно загрузить по ссылке. Гарантируется, что ссылка будет действительна как минимум 1 час.
 * Когда ссылка истекает, новую можно запросить, вызвав getFile.
 *
 * This object represents a file ready to be downloaded. The file can be downloaded via the link. It is guaranteed that the link will be valid for at least 1 hour.
 * When the link expires, a new one can be requested by calling getFile.
 */
export interface IFile {
  /**
   * Идентификатор файла, который можно использовать для загрузки или повторного использования файла.
   *
   * Identifier for this file, which can be used to download or reuse the file.
   */
  file_id: string;

  /**
   * Уникальный идентификатор для этого файла, который должен оставаться постоянным во времени и для разных ботов.
   * Нельзя использовать для загрузки или повторного использования файла.
   *
   * Unique identifier for this file, which is supposed to be the same over time and for different bots.
   * Can't be used to download or reuse the file.
   */
  file_unique_id: string;

  /**
   * Опционально. Размер файла в байтах. Он может быть больше, чем 2^31, и некоторые языки программирования могут иметь сложности или молчаливые дефекты при его интерпретации.
   * Но в нем максимум 52 значимых бита, поэтому для хранения этого значения безопасны типы signed 64-bit integer или double-precision float.
   *
   * Optional. File size in bytes. It can be bigger than 2^31 and some programming languages may have difficulty/silent defects in interpreting it.
   * But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this value.
   */
  file_size?: number;

  /**
   * Опционально. Путь к файлу. Используйте https://api.telegram.org/file/bot<token>/<file_path> для получения файла.
   *
   * Optional. File path. Use https://api.telegram.org/file/bot<token>/<file_path> to get the file.
   */
  file_path?: string;
}
