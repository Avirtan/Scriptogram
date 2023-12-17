/**
 * Используйте этот метод для отправки статических .WEBP, анимированных .TGS или видео .WEBM стикеров. При успехе возвращается отправленное сообщение.
 *
 * Use this method to send static .WEBP, animated .TGS, or video .WEBM stickers. On success, the sent Message is returned.
 * @see {@link https://core.telegram.org/bots/api#sendsticker}
 */
export interface ISendSticker {
  /**
   * Уникальный идентификатор целевого чата или имя пользователя целевого канала (в формате @channelusername).
   *
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername).
   */
  chat_id: number | string;

  /**
   * Опционально. Уникальный идентификатор целевой темы сообщения (топика) форума; только для форум-супергрупп.
   *
   * Optional. Unique identifier for the target message thread (topic) of the forum; for forum supergroups only.
   */
  message_thread_id?: number;

  /**
   * Стикер для отправки. Передайте file_id в виде строки, чтобы отправить файл, который существует на серверах Telegram (рекомендуется), передайте HTTP URL в виде строки, чтобы Telegram получил .WEBP стикер из Интернета, или загрузите новый .WEBP или .TGS стикер с использованием multipart/form-data. Больше информации на странице Отправка файлов ». Видеостикеры могут быть отправлены только по file_id. Анимированные стикеры не могут быть отправлены через HTTP URL.
   *
   * Sticker to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a .WEBP sticker from the Internet, or upload a new .WEBP or .TGS sticker using multipart/form-data. More information on Sending Files ». Video stickers can only be sent by a file_id. Animated stickers can't be sent via an HTTP URL.
   */
  sticker: IInputFile | string;

  /**
   * Опционально. Эмодзи, связанные со стикером; только для недавно загруженных стикеров.
   *
   * Optional. Emoji associated with the sticker; only for just uploaded stickers.
   */
  emoji?: string;

  /**
   * Опционально. Отправляет сообщение без звука.
   *
   * Optional. Sends the message silently. Users will receive a notification with no sound.
   */
  disable_notification?: boolean;

  /**
   * Опционально. Защищает содержание отправленного сообщения от пересылки и сохранения.
   *
   * Optional. Protects the contents of the sent message from forwarding and saving.
   */
  protect_content?: boolean;

  /**
   * Опционально. Если сообщение является ответом, ID оригинального сообщения.
   *
   * Optional. If the message is a reply, ID of the original message.
   */
  reply_to_message_id?: number;

  /**
   * Опционально. Отправлять сообщение, даже если указанное сообщение-ответ не найдено.
   *
   * Optional. Pass True if the message should be sent even if the specified replied-to message is not found.
   */
  allow_sending_without_reply?: boolean;

  /**
   * Опционально. Дополнительные параметры интерфейса. Объект JSON для встроенной клавиатуры, настраиваемой клавиатуры для ответов, инструкций по удалению клавиатуры для ответов или для принудительного ответа от пользователя.
   *
   * Optional. Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, instructions to remove reply keyboard or to force a reply from the user.
   */
  reply_markup?: IInlineKeyboardMarkup | IReplyKeyboardMarkup | IReplyKeyboardRemove | IForceReply;
}
