import { IMessage } from ".";
import { IUser } from "..";

/**
 * Этот объект представляет входящий обратный вызов из инлайн-клавиатуры.
 *
 * This object represents an incoming callback query from a callback button in an inline keyboard.
 * @see {@link https://core.telegram.org/bots/api#callbackquery}
 */
export interface ICallbackQuery {
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
   * Опционально. Сообщение с кнопкой обратного вызова, которая породила запрос.
   *
   * Optional. Message with the callback button that originated the query.
   * Обратите внимание, что содержимое сообщения и дата сообщения не будут доступны, если сообщение слишком старое.
   */
  message?: IMessage;

  /**
   * Опционально. Идентификатор сообщения, отправленного ботом в режиме инлайн, который породил запрос.
   *
   * Optional. Identifier of the message sent via the bot in inline mode, that originated the query.
   */
  inline_message_id?: string;

  /**
   * Глобальный идентификатор, уникально соответствующий чату, в который было отправлено сообщение с кнопкой обратного вызова.
   * Полезно для отображения высших баллов в играх.
   *
   * Global identifier, uniquely corresponding to the chat to which the message with the callback button was sent.
   */
  chat_instance: string;

  /**
   * Опционально. Данные, связанные с кнопкой обратного вызова.
   * Обратите внимание, что сообщение, породившее запрос, может не содержать кнопок обратного вызова с этими данными.
   *
   * Optional. Data associated with the callback button.
   */
  data?: string;

  /**
   * Опционально. Краткое имя игры для возврата.
   * Служит в качестве уникального идентификатора игры.
   *
   * Optional. Short name of a Game to be returned.
   */
  game_short_name?: string;
}
