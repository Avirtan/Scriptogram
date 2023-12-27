import {
  IMessageEntity,
  IInlineKeyboardMarkup,
  IReplyKeyboardMarkup,
  IReplyKeyboardRemove,
  IForceReply,
} from "../../../types";

export interface ISendPoll {
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
   * Вопрос для опроса, 1-300 символов.
   *
   * Poll question, 1-300 characters.
   */
  question: string;

  /**
   * Список вариантов ответа на опрос, 2-10 вариантов по 1-100 символов каждый.
   *
   * A JSON-serialized list of answer options, 2-10 strings 1-100 characters each.
   */
  options: string[];

  /**
   * Опционально. True, если опрос должен быть анонимным, по умолчанию True.
   *
   * True, if the poll needs to be anonymous, defaults to True.
   */
  is_anonymous?: boolean;

  /**
   * Опционально. Тип опроса, «quiz» или «regular», по умолчанию «regular».
   *
   * Poll type, “quiz” or “regular”, defaults to “regular”.
   */
  type?: string;

  /**
   * Опционально. True, если опрос разрешает несколько ответов, игнорируется для опросов в режиме викторины, по умолчанию False.
   *
   * True, if the poll allows multiple answers, ignored for polls in quiz mode, defaults to False.
   */
  allows_multiple_answers?: boolean;

  /**
   * Опционально. Идентификатор правильного варианта ответа для опросов в режиме викторины.
   *
   * 0-based identifier of the correct answer option, required for polls in quiz mode.
   */
  correct_option_id?: number;

  /**
   * Опционально. Текст, который отображается, когда пользователь выбирает неправильный ответ или нажимает на иконку лампы в опросе викторины.
   *
   * Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters with at most 2 line feeds after entities parsing.
   */
  explanation?: string;

  /**
   * Опционально. Режим разбора сущностей в объяснении.
   *
   * Mode for parsing entities in the explanation.
   */
  explanation_parse_mode?: string;

  /**
   * Опционально. Список специальных сущностей, которые появляются в объяснении опроса.
   *
   * A JSON-serialized list of special entities that appear in the poll explanation.
   */
  explanation_entities?: IMessageEntity[];

  /**
   * Опционально. Время в секундах, в течение которого опрос будет активен после создания, 5-600.
   *
   * Amount of time in seconds the poll will be active after creation, 5-600.
   */
  open_period?: number;

  /**
   * Опционально. Точка во времени (в формате Unix timestamp), когда опрос будет автоматически закрыт.
   *
   * Point in time (Unix timestamp) when the poll will be automatically closed.
   */
  close_date?: number;

  /**
   * Опционально. True, если опрос нужно сразу закрыть. Может быть полезно для предварительного просмотра опроса.
   *
   * Pass True if the poll needs to be immediately closed. This can be useful for poll preview.
   */
  is_closed?: boolean;

  /**
   * Опционально. Отправлять сообщение без звука.
   *
   * Sends the message silently. Users will receive a notification with no sound.
   */
  disable_notification?: boolean;

  /**
   * Опционально. Защищает содержание отправленного сообщения от пересылки и сохранения.
   *
   * Protects the contents of the sent message from forwarding and saving.
   */
  protect_content?: boolean;

  /**
   * Опционально. Если сообщение является ответом, ID оригинального сообщения.
   *
   * If the message is a reply, ID of the original message.
   */
  reply_to_message_id?: number;

  /**
   * Опционально. Передайте True, если сообщение должно быть отправлено, даже если указанное сообщение-ответ не найдено.
   *
   * Pass True if the message should be sent even if the specified replied-to message is not found.
   */
  allow_sending_without_reply?: boolean;

  /**
   * Опционально. Дополнительные параметры интерфейса.
   *
   * Additional interface options.
   */
  reply_markup?: IInlineKeyboardMarkup | IReplyKeyboardMarkup | IReplyKeyboardRemove | IForceReply;
}
