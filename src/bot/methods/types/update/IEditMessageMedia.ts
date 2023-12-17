import { IInputMedia, IInlineKeyboardMarkup } from "../../../types";

/**
 * Используйте этот метод для редактирования анимации, аудио, документов, фото или видео сообщений.
 * Если сообщение является частью альбома сообщений, то его можно отредактировать только на аудио для аудиоальбомов,
 * только на документ для документальных альбомов и на фотографию или видео в противном случае.
 * Когда редактируется встроенное сообщение, новый файл не может быть загружен;
 * используйте ранее загруженный файл через его file_id или укажите URL.
 * При успешном выполнении, если отредактированное сообщение не является встроенным,
 * возвращается отредактированное сообщение, в противном случае возвращается True.
 *
 * Use this method to edit animation, audio, document, photo, or video messages.
 * If a message is part of a message album, then it can be edited only to an audio for audio albums,
 * only to a document for document albums and to a photo or a video otherwise.
 * When an inline message is edited, a new file can't be uploaded;
 * use a previously uploaded file via its file_id or specify a URL.
 * On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.
 * @see {@link https://core.telegram.org/bots/api#editmessagemedia}
 */
export interface IEditMessageMedia {
  /**
   * Обязательно, если inline_message_id не указан.
   * Уникальный идентификатор целевого чата или имя пользователя целевого канала
   * (в формате @channelusername).
   *
   * Required if inline_message_id is not specified.
   * Unique identifier for the target chat or username of the target channel
   * (in the format @channelusername).
   */
  chat_id?: number | string;

  /**
   * Обязательно, если inline_message_id не указан.
   * Идентификатор сообщения для редактирования.
   *
   * Required if inline_message_id is not specified.
   * Identifier of the message to edit.
   */
  message_id?: number;

  /**
   * Обязательно, если chat_id и message_id не указаны.
   * Идентификатор встроенного сообщения.
   *
   * Required if chat_id and message_id are not specified.
   * Identifier of the inline message.
   */
  inline_message_id?: string;

  /**
   * Объект JSON для нового медиа-контента сообщения.
   *
   * A JSON-serialized object for a new media content of the message.
   */
  media: IInputMedia;

  /**
   * Опционально. Объект JSON для новой встроенной клавиатуры.
   *
   * Optional. A JSON-serialized object for a new inline keyboard.
   */
  reply_markup?: IInlineKeyboardMarkup;
}
