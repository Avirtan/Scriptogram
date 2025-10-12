import { IInputContactMessageContent } from "./IInputContactMessageContent";
import { IInputInvoiceMessageContent } from "./IInputInvoiceMessageContent";
import { IInputLocationMessageContent } from "./IInputLocationMessageContent";
import { IInputTextMessageContent } from "./IInputTextMessageContent";
import { IInputVenueMessageContent } from "./IInputVenueMessageContent";

/**
 * 
 *
 * 
 *
 * @see {@link }
 */
export interface IInputMessageContent extends IInputContactMessageContent{}
export interface IInputMessageContent extends IInputInvoiceMessageContent{}
export interface IInputMessageContent extends IInputLocationMessageContent{}
export interface IInputMessageContent extends IInputTextMessageContent{}
export interface IInputMessageContent extends IInputVenueMessageContent{}