/**
 * Представляет команду бота.
 *
 * Represents a bot command.
 * @see {@link https://core.telegram.org/bots/api#botcommand}
 */
export interface IBotCommand {
  /**
   * Текст команды; от 1 до 32 символов. Может содержать только строчные буквы латинского алфавита, цифры и подчеркивания.
   *
   * Text of the command; 1-32 characters. Can contain only lowercase English letters, digits, and underscores.
   */
  command: string;

  /**
   * Описание команды; от 1 до 256 символов.
   *
   * Description of the command; 1-256 characters.
   */
  description: string;
}
