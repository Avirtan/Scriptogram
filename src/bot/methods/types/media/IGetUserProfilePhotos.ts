export interface IGetUserProfilePhotos {
  /**
   * Уникальный идентификатор целевого пользователя.
   *
   * Unique identifier of the target user.
   */
  user_id: number;

  /**
   * Опционально. Последовательный номер первой фотографии, которая должна быть возвращена.
   * По умолчанию возвращаются все фотографии.
   *
   * Optional. Sequential number of the first photo to be returned.
   * By default, all photos are returned.
   */
  offset?: number;

  /**
   * Опционально. Ограничивает количество фотографий, которые будут извлечены.
   * Принимаются значения от 1 до 100. По умолчанию 100.
   *
   * Optional. Limits the number of photos to be retrieved.
   * Values between 1-100 are accepted. Defaults to 100.
   */
  limit?: number;
}
