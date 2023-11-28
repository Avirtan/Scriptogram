/**
 * Этот объект представляет фотографию чата.
 *
 * This object represents a chat photo.
 * @see {@link https://core.telegram.org/bots/api#chatphoto}
 */
export interface IChatPhoto {
  /**
   * Идентификатор файла маленькой (160x160) фотографии чата.
   * Этот file_id может использоваться только для загрузки фотографии и только до тех пор, пока фотография не будет изменена.
   *
   * File identifier of the small (160x160) chat photo.
   * This file_id can be used only for photo download and only for as long as the photo is not changed.
   */
  small_file_id: string;

  /**
   * Уникальный идентификатор файла маленькой (160x160) фотографии чата, который должен оставаться неизменным.
   * Нельзя использовать для загрузки или повторного использования файла.
   *
   * Unique file identifier of the small (160x160) chat photo, which is supposed to be the same over time and for different bots.
   * Can't be used to download or reuse the file.
   */
  small_file_unique_id: string;

  /**
   * Идентификатор файла большой (640x640) фотографии чата.
   * Этот file_id может использоваться только для загрузки фотографии и только до тех пор, пока фотография не будет изменена.
   *
   * File identifier of the big (640x640) chat photo.
   * This file_id can be used only for photo download and only for as long as the photo is not changed.
   */
  big_file_id: string;

  /**
   * Уникальный идентификатор файла большой (640x640) фотографии чата, который должен оставаться неизменным.
   * Нельзя использовать для загрузки или повторного использования файла.
   *
   * Unique file identifier of the big (640x640) chat photo, which is supposed to be the same over time and for different bots.
   * Can't be used to download or reuse the file.
   */
  big_file_unique_id: string;
}
