import { IInlineKeyboardMarkup } from "../../../types";

/**
 * Используйте этот метод для отправки игры. При успехе возвращается отправленное сообщение.
 *
 * Use this method to send a game. On success, the sent Message is returned.
 * @see {@link https://core.telegram.org/bots/api#sendgame}
 */
export interface ISendGame {
  /**
   * Уникальный идентификатор целевого чата.
   *
   * Unique identifier for the target chat.
   */
  chat_id: number;

  /**
   * Опционально. Уникальный идентификатор целевой темы сообщения (топика) форума; только для форум-супергрупп.
   *
   * Optional. Unique identifier for the target message thread (topic) of the forum; for forum supergroups only.
   */
  message_thread_id?: number;

  /**
   * Короткое имя игры, служит уникальным идентификатором для игры. Настройте свои игры через @BotFather.
   *
   * Short name of the game, serves as the unique identifier for the game. Set up your games via @BotFather.
   */
  game_short_name: string;

  /**
   * Опционально. Отправляет сообщение без звука. Пользователи получат уведомление без звука.
   *
   * Optional. Sends the message silently. Users will receive a notification with no sound.
   */
  disable_notification?: boolean;

  /**
   * Опционально. Защищает содержимое отправленного сообщения от пересылки и сохранения.
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
   * Опционально. Передайте True, если сообщение должно быть отправлено, даже если указанное сообщение-ответ не найдено.
   *
   * Optional. Pass True if the message should be sent even if the specified replied-to message is not found.
   */
  allow_sending_without_reply?: boolean;

  /**
   * Опционально. Объект JSON для встроенной клавиатуры. Если пусто, будет показана одна кнопка "Играть" с названием игры.
   * Если не пусто, первая кнопка должна запускать игру.
   *
   * Optional. A JSON-serialized object for an inline keyboard. If empty, one 'Play game_title' button will be shown.
   * If not empty, the first button must launch the game.
   */
  reply_markup?: IInlineKeyboardMarkup;
}
