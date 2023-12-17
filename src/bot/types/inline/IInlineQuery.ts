/**
 * Представляет входящий встроенный запрос. Когда пользователь отправляет пустой запрос, ваш бот может вернуть некоторые 
 * стандартные или популярные результаты.
 *
 * This object represents an incoming inline query. When the user sends an empty query, your bot could return some default or trending results.
 *
 * @see {@link https://core.telegram.org/bots/api#inlinequery}
 */
export interface IInlineQuery {
    /**
     * Уникальный идентификатор для этого запроса.
     *
     * Unique identifier for this query.
     */
    id: string;
  
    /**
     * Отправитель.
     *
     * Sender.
     */
    from: IUser;
  
    /**
     * Текст запроса (до 256 символов).
     *
     * Text of the query (up to 256 characters).
     */
    query: string;
  
    /**
     * Смещение результатов, которые должны быть возвращены, может быть управляемо ботом.
     *
     * Offset of the results to be returned, can be controlled by the bot.
     */
    offset: string;
  
    /**
     * Тип чата, из которого был отправлен встроенный запрос. Может быть "sender" для личного чата с отправителем встроенного запроса,
     * "private", "group", "supergroup" или "channel". Тип чата должен быть всегда известен для запросов, отправленных из официальных
     * клиентов и большинства клиентов сторонних разработчиков, если запрос был отправлен из секретного чата.
     *
     * Type of the chat from which the inline query was sent. Can be either “sender” for a private chat with the inline query sender,
     * “private”, “group”, “supergroup”, or “channel”. The chat type should be always known for requests sent from official clients
     * and most third-party clients, unless the request was sent from a secret chat.
     */
    chat_type?: string;
  }
  