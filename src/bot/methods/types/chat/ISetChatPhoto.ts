import { IInputFile } from "../../../types";

export interface ISetChatPhoto {
  /**
   * Уникальный идентификатор целевого чата или имя пользователя целевого канала (в формате @channelusername).
   *
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername).
   */
  chat_id: number | string;

  /**
   * Новое фото чата, загруженное с использованием multipart/form-data.
   *
   * New chat photo, uploaded using multipart/form-data.
   */
  photo: IInputFile;
}
