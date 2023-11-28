import { IChatMemberAdministrator } from "./IChatMemberAdministrator";
import { IChatMemberBanned } from "./IChatMemberBanned";
import { IChatMemberLeft } from "./IChatMemberLeft";
import { IChatMemberMember } from "./IChatMemberMember";
import { IChatMemberOwner } from "./IChatMemberOwner";
import { IChatMemberRestricted } from "./IChatMemberRestricted";

/**
 * Этот объект содержит информацию об одном участнике чата. В настоящее время поддерживаются следующие 6 типов участников чата:
 *
 * ChatMemberOwner,
 *
 * ChatMemberAdministrator,
 *
 * ChatMemberMember,
 *
 * ChatMemberRestricted,
 *
 * ChatMemberLeft,
 *
 * ChatMemberBanned.
 *
 * This object contains information about one member of a chat. Currently, the following 6 types of chat members are supported:
 *
 * ChatMemberOwner,
 *
 * ChatMemberAdministrator,
 *
 * ChatMemberMember,
 *
 * ChatMemberRestricted,
 *
 * ChatMemberLeft,
 *
 * ChatMemberBanned.
 * @see {@link https://core.telegram.org/bots/api#chatmember}
 */
export interface IChatMember extends IChatMemberOwner {}
export interface IChatMember extends IChatMemberAdministrator {}
export interface IChatMember extends IChatMemberMember {}
export interface IChatMember extends IChatMemberRestricted {}
export interface IChatMember extends IChatMemberLeft {}
export interface IChatMember extends IChatMemberBanned {}
