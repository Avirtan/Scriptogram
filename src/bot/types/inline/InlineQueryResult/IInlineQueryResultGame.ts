/**
 * Представляет игру.
 *
 * Represents a Game.
 *
 * @see {@link https://core.telegram.org/bots/api#inlinequeryresultgame}
 */
export interface IInlineQueryResultGame {
    /**
     * Тип результата, должен быть game.
     *
     * Type of the result, must be game.
     */
    type: string;
  
    /**
     * Уникальный идентификатор этого результата, 1-64 байта.
     *
     * Unique identifier for this result, 1-64 bytes.
     */
    id: string;
  
    /**
     * Краткое название игры.
     *
     * Short name of the game.
     */
    game_short_name: string;
  
    /**
     * Inline-клавиатура, прикрепленная к сообщению.
     *
     * Inline keyboard attached to the message.
     */
    reply_markup?: IInlineKeyboardMarkup;
  }
  