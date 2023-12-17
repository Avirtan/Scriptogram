import { IPhotoSize, IMessageEntity, IAnimation } from "..";

/**
 * Представляет игру. Используйте BotFather для создания и редактирования игр, их короткие названия будут выступать в качестве уникальных идентификаторов.
 *
 * Represents a game. Use BotFather to create and edit games, their short names will act as unique identifiers.
 *
 * @see {@link https://core.telegram.org/bots/api#game}
 */
export interface IGame {
  /**
   * Название игры.
   *
   * Title of the game.
   */
  title: string;

  /**
   * Описание игры.
   *
   * Description of the game.
   */
  description: string;

  /**
   * Фото, которое будет отображаться в сообщении игры в чатах.
   *
   * Photo that will be displayed in the game message in chats.
   */
  photo: IPhotoSize[];

  /**
   * Необязательно. Краткое описание игры или рекорды, включенные в сообщение игры. Может быть автоматически отредактировано для включения текущих рекордов для игры, когда бот вызывает setGameScore, или вручную отредактировано с помощью editMessageText. 0-4096 символов.
   *
   * Optional. Brief description of the game or high scores included in the game message. Can be automatically edited to include current high scores for the game when the bot calls setGameScore, or manually edited using editMessageText. 0-4096 characters.
   */
  text?: string;

  /**
   * Необязательно. Специальные объекты, которые появляются в тексте, такие как имена пользователей, URL, команды ботов и т. д.
   *
   * Optional. Special entities that appear in text, such as usernames, URLs, bot commands, etc.
   */
  text_entities?: IMessageEntity[];

  /**
   * Необязательно. Анимация, которая будет отображаться в сообщении игры в чатах. Загрузите через BotFather.
   *
   * Optional. Animation that will be displayed in the game message in chats. Upload via BotFather.
   */
  animation?: IAnimation;
}
