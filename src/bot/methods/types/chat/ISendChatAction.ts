/**
 * Используйте этот метод, когда вы хотите сообщить пользователю, что происходит какое-то действие с ботом.
 * Статус устанавливается на 5 секунд или менее (когда сообщение приходит от вашего бота,
 * клиенты Telegram очищают его статус набора текста). Возвращает True в случае успеха.
 * Рекомендуется использовать этот метод только в случае, когда ответ от бота займет заметное время.
 *
 * Use this method when you need to tell the user that something is happening on the bot's side.
 * The status is set for 5 seconds or less (when a message arrives from your bot, Telegram clients clear its typing status).
 * Returns True on success. We only recommend using this method when a response from the bot will take a noticeable amount of time to arrive.
 *
 * @see {@link https://core.telegram.org/bots/api#sendchataction}
 */
export interface ISendChatAction {
  /**
   * Уникальный идентификатор целевого чата или имя пользователя целевого канала (в формате @channelusername).
   *
   * Unique identifier for the target chat or username of the target channel (in the format @channelusername).
   */
  chat_id: number | string;

  /**
   * Опционально. Уникальный идентификатор целевой темы сообщения; только для форум-супергрупп.
   *
   * Optional. Unique identifier for the target message thread; supergroups only.
   */
  message_thread_id?: number;

  /**
   * Тип действия для трансляции. Выберите одно действие в зависимости от того, что пользователь собирается получить.
   * Например: "typing" для текстовых сообщений, "upload_photo" для фотографий и так далее.
   *
   * Type of action to broadcast. Choose one, depending on what the user is about to receive.
   * For example, "typing" for text messages, "upload_photo" for photos, and so on.
   */
  action: string;
}
