import { IInputMediaAnimation } from "./IInputMediaAnimation";
import { IInputMediaAudio } from "./IInputMediaAudio";
import { IInputMediaDocument } from "./IInputMediaDocument";
import { IInputMediaPhoto } from "./IInputMediaPhoto";
import { IInputMediaVideo } from "./IInputMediaVideo";

/**
 * Этот объект представляет содержимое медиа-сообщения для отправки. Он должен быть одним из:
 *
 * InputMediaAnimation
 *
 * InputMediaDocument
 *
 * InputMediaAudio
 *
 * InputMediaPhoto
 *
 * InputMediaVideo
 *
 * This object represents the content of a media message to be sent. It should be one of:
 *
 * InputMediaAnimation
 *
 * InputMediaDocument
 *
 * InputMediaAudio
 *
 * InputMediaPhoto
 *
 * InputMediaVideo
 * @see {@link https://core.telegram.org/bots/api#menubutton}
 */
export interface IInputMedia extends IInputMediaAnimation {}
export interface IInputMedia extends IInputMediaDocument {}
export interface IInputMedia extends IInputMediaAudio {}
export interface IInputMedia extends IInputMediaPhoto {}
export interface IInputMedia extends IInputMediaVideo {}
