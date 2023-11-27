/**
 * Этот объект представляет пользовательскую клавиатуру с вариантами ответа.
 *
 * This object represents a custom keyboard with reply options.
 * @see {@link https://core.telegram.org/bots/api#replykeyboardmarkup}
 */
export interface IReplyKeyboardMarkup {
  /**
   * Массив строк кнопок, каждая строка представлена массивом объектов KeyboardButton.
   *
   * Array of button rows, each represented by an Array of KeyboardButton objects.
   */
  keyboard: Array<Array<IKeyboardButton>>;

  /**
   * Опционально. Запрашивает клиентов всегда показывать клавиатуру, когда обычная клавиатура скрыта.
   * По умолчанию - false.
   *
   * Optional. Requests clients to always show the keyboard when the regular keyboard is hidden.
   * Defaults to false.
   */
  is_persistent?: boolean;

  /**
   * Опционально. Запрашивает клиентов вертикально изменять размер клавиатуры для оптимального отображения.
   * По умолчанию - false.
   *
   * Optional. Requests clients to resize the keyboard vertically for optimal fit.
   * Defaults to false.
   */
  resize_keyboard?: boolean;

  /**
   * Опционально. Запрашивает клиентов скрывать клавиатуру сразу после использования.
   * По умолчанию - false.
   *
   * Optional. Requests clients to hide the keyboard as soon as it's been used.
   * Defaults to false.
   */
  one_time_keyboard?: boolean;

  /**
   * Опционально. Текст, который будет отображаться в поле ввода, когда клавиатура активна; 1-64 символа.
   *
   * Optional. The placeholder to be shown in the input field when the keyboard is active; 1-64 characters.
   */
  input_field_placeholder?: string;

  /**
   * Опционально. Используйте этот параметр, если вы хотите показать клавиатуру только определенным пользователям.
   * Targets: 1) пользователи, упомянутые в тексте объекта Message; 2) если сообщение бота - ответ (есть reply_to_message_id), отправитель первоначального сообщения.
   *
   * Optional. Use this parameter if you want to show the keyboard to specific users only.
   * Targets: 1) users that are @mentioned in the text of the Message object; 2) if the bot's message is a reply (has reply_to_message_id), sender of the original message.
   */
  selective?: boolean;
}
