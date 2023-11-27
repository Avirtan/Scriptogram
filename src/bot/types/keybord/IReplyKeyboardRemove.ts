/**
 * Этот объект удаляет текущую пользовательскую клавиатуру и отображает стандартную клавиатуру с буквами.
 * Upon receiving a message with this object, Telegram clients will remove the current custom keyboard and display the default letter-keyboard.
 * @see {@link https://core.telegram.org/bots/api#replykeyboardremove}
 */
export interface IReplyKeyboardRemove {
  /**
   * True. Запрашивает удаление пользовательской клавиатуры (пользователь не сможет вызвать эту клавиатуру;
   * если вы хотите скрыть клавиатуру из виду, но оставить доступной, используйте one_time_keyboard в ReplyKeyboardMarkup).
   * True. Requests clients to remove the custom keyboard (user will not be able to summon this keyboard;
   * if you want to hide the keyboard from sight but keep it accessible, use one_time_keyboard in ReplyKeyboardMarkup).
   */
  remove_keyboard: true;

  /**
   * Опционально. Используйте этот параметр, если вы хотите удалить клавиатуру только для определенных пользователей.
   * Targets: 1) пользователи, упомянутые в тексте объекта Message; 2) если сообщение бота - ответ (есть reply_to_message_id), отправитель первоначального сообщения.
   * Optional. Use this parameter if you want to remove the keyboard for specific users only.
   * Targets: 1) users that are @mentioned in the text of the Message object; 2) if the bot's message is a reply (has reply_to_message_id), sender of the original message.
   */
  selective?: boolean;
}
