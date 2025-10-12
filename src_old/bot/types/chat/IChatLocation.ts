import { ILocation } from "..";

/**
 * Представляет местоположение, к которому подключен чат.
 *
 * Represents a location to which a chat is connected.
 * @see {@link https://core.telegram.org/bots/api#chatlocation}
 */
export interface IChatLocation {
  /**
   * Местоположение, к которому подключена супергруппа. Не может быть указана в режиме Live.
   *
   * The location to which the supergroup is connected. Can't be a live location.
   */
  location: ILocation;

  /**
   * Адрес местоположения; от 1 до 64 символов, как определено владельцем чата.
   *
   * Location address; 1-64 characters, as defined by the chat owner.
   */
  address: string;
}
