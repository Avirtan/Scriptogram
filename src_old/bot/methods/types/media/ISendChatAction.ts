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
