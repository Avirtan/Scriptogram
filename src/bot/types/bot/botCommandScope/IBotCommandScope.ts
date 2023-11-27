import { IBotCommandScopeAllChatAdministrators } from "./IBotCommandScopeAllChatAdministrators";
import { IBotCommandScopeAllGroupChats } from "./IBotCommandScopeAllGroupChats";
import { IBotCommandScopeAllPrivateChats } from "./IBotCommandScopeAllPrivateChats";
import { IBotCommandScopeChat } from "./IBotCommandScopeChat";
import { IBotCommandScopeChatAdministrators } from "./IBotCommandScopeChatAdministrators";
import { IBotCommandScopeChatMember } from "./IBotCommandScopeChatMember";
import { IBotCommandScopeDefault } from "./IBotCommandScopeDefault";

/**
 * Этот объект представляет область применения команд бота.
 * В настоящее время поддерживается следующие 7 областей:
 * BotCommandScopeDefault,
 *
 * BotCommandScopeAllPrivateChats,
 *
 * BotCommandScopeAllGroupChats,
 *
 * BotCommandScopeAllChatAdministrators,
 *
 * BotCommandScopeChat,
 *
 * BotCommandScopeChatAdministrators,
 *
 * BotCommandScopeChatMember.
 *
 * Этот алгоритм определяет список команд для конкретного пользователя, просматривающего меню бота. Он возвращает первый набор команд, который установлен:
 *
 *
 * Команды в чате с ботом:
 *
 * botCommandScopeChat + language_code,
 *
 * botCommandScopeChat,
 *
 * botCommandScopeAllPrivateChats + language_code,
 *
 * botCommandScopeAllPrivateChats,
 *
 * botCommandScopeDefault + language_code,
 *
 * botCommandScopeDefault.
 *
 *
 * Команды в чатах групп и супергрупп:
 *
 * botCommandScopeChatMember + language_code,
 *
 * botCommandScopeChatMember,
 *
 * botCommandScopeChatAdministrators + language_code (только для администраторов),
 *
 * botCommandScopeChatAdministrators (только для администраторов),
 *
 * botCommandScopeChat + language_code,
 *
 * botCommandScopeChat,
 *
 * botCommandScopeAllChatAdministrators + language_code (только для администраторов),
 *
 * botCommandScopeAllChatAdministrators (только для администраторов),
 *
 * botCommandScopeAllGroupChats + language_code,
 *
 * botCommandScopeAllGroupChats,
 *
 * botCommandScopeDefault + language_code,
 *
 * botCommandScopeDefault.
 * @see {@link https://core.telegram.org/bots/api#botcommandscope}
 */
export interface IBotCommandScope extends IBotCommandScopeDefault {}
export interface IBotCommandScope extends IBotCommandScopeAllPrivateChats {}
export interface IBotCommandScope extends IBotCommandScopeAllGroupChats {}
export interface IBotCommandScope extends IBotCommandScopeAllChatAdministrators {}
export interface IBotCommandScope extends IBotCommandScopeChat {}
export interface IBotCommandScope extends IBotCommandScopeChatAdministrators {}
export interface IBotCommandScope extends IBotCommandScopeChatMember {}
