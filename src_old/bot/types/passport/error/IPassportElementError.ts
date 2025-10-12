import { IPassportElementErrorDataField } from "./IPassportElementErrorDataField";
import { IPassportElementErrorFile } from "./IPassportElementErrorFile";
import { IPassportElementErrorFiles } from "./IPassportElementErrorFiles";
import { IPassportElementErrorFrontSide } from "./IPassportElementErrorFrontSide";
import { IPassportElementErrorReverseSide } from "./IPassportElementErrorReverseSide";
import { IPassportElementErrorSelfie } from "./IPassportElementErrorSelfie";
import { IPassportElementErrorTranslationFile } from "./IPassportElementErrorTranslationFile";
import { IPassportElementErrorTranslationFiles } from "./IPassportElementErrorTranslationFiles";
import { IPassportElementErrorUnspecified } from "./IPassportElementErrorUnspecified";

/**
 * Представляет проблему в одном из полей данных, предоставленных пользователем.
 * Ошибка считается устраненной, когда значение поля изменяется.
 *
 * Represents an issue in one of the data fields that was provided by the user.
 * The error is considered resolved when the field's value changes.
 * @see {@link https://core.telegram.org/bots/api#passportelementerrordatafield}
 */
export interface IPassportElementError extends IPassportElementErrorDataField {}
export interface IPassportElementError extends IPassportElementErrorFile {}
export interface IPassportElementError extends IPassportElementErrorFiles {}
export interface IPassportElementError extends IPassportElementErrorFrontSide {}
export interface IPassportElementError extends IPassportElementErrorReverseSide {}
export interface IPassportElementError extends IPassportElementErrorSelfie {}
export interface IPassportElementError extends IPassportElementErrorTranslationFile {}
export interface IPassportElementError extends IPassportElementErrorTranslationFiles {}
export interface IPassportElementError extends IPassportElementErrorUnspecified {}
