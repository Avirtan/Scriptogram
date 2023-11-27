/**
 * При получении сообщения с этим объектом, клиенты Telegram отображают пользователю интерфейс ответа (как если бы пользователь выбрал сообщение бота и нажал "Ответить"). Это может быть крайне полезно, если вы хотите создать удобные пошаговые интерфейсы, не отказываясь от режима конфиденциальности.
 * Upon receiving a message with this object, Telegram clients will display a reply interface to the user (act as if the user has selected the bot's message and tapped 'Reply'). This can be extremely useful if you want to create user-friendly step-by-step interfaces without having to sacrifice privacy mode.
 * @see {@link https://core.telegram.org/bots/api#forcereply}
 */
export interface IForceReply {
  /**
   * Показывает пользователю интерфейс ответа, как если бы они вручную выбрали сообщение бота и нажали "Ответить".
   * Shows a reply interface to the user, as if they manually selected the bot's message and tapped 'Reply'.
   */
  force_reply: true;

  /**
   * Опционально. Текст, который будет отображаться в поле ввода при активном ответе; 1-64 символа.
   * Optional. The placeholder to be shown in the input field when the reply is active; 1-64 characters.
   */
  input_field_placeholder?: string;

  /**
   * Опционально. Используйте этот параметр, если вы хотите, чтобы ответ был получен только от определенных пользователей.
   * Цели: 1) пользователи, упомянутые в тексте объекта Message; 2) если сообщение бота - ответ (есть reply_to_message_id), отправитель первоначального сообщения.
   * Optional. Use this parameter if you want to force reply from specific users only.
   * Targets: 1) users that are @mentioned in the text of the Message object; 2) if the bot's message is a reply (has reply_to_message_id), sender of the original message.
   */
  selective?: boolean;
}
