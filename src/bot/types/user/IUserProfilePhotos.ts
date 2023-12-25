import { IPhotoSize } from "..";

/**
 * Этот объект представляет фотографии профиля пользователя.
 *
 * This object represents a user's profile pictures.
 */
export interface IUserProfilePhotos {
  /**
   * Общее количество фотографий профиля у целевого пользователя.
   *
   * Total number of profile pictures the target user has.
   */
  total_count: number;

  /**
   * Запрошенные фотографии профиля (до 4 размеров каждая).
   *
   * Requested profile pictures (in up to 4 sizes each).
   */
  photos: IPhotoSize[][];
}
