import { IMenuButtonCommands } from "./IMenuButtonCommands";
import { IMenuButtonDefault } from "./IMenuButtonDefault";
import { IMenuButtonWebApp } from "./IMenuButtonWebApp";

/**
 * Этот объект описывает кнопку меню бота в частном чате. Она должна быть одной из следующих:
 *
 * MenuButtonCommands
 *
 * MenuButtonWebApp
 *
 * MenuButtonDefault
 *
 * Если для частного чата установлена кнопка меню, отличная от MenuButtonDefault, то она применяется в чате. В противном случае применяется кнопка меню по умолчанию. По умолчанию кнопка меню открывает список команд бота.
 *
 * This object describes the bot's menu button in a private chat. It should be one of:
 *
 * MenuButtonCommands
 *
 * MenuButtonWebApp
 *
 * MenuButtonDefault
 *
 * If a menu button other than MenuButtonDefault is set for a private chat, then it is applied in the chat. Otherwise the default menu button is applied. By default, the menu button opens the list of bot commands.
 * @see {@link https://core.telegram.org/bots/api#menubutton}
 */
export interface IMenuButton extends IMenuButtonCommands {}
export interface IMenuButton extends IMenuButtonWebApp {}
export interface IMenuButton extends IMenuButtonDefault {}
