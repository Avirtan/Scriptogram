import { IInlineQueryResultArticle } from "./IInlineQueryResultArticle";
import { IInlineQueryResultAudio } from "./IInlineQueryResultAudio";
import { IInlineQueryResultCachedAudio } from "./IInlineQueryResultCachedAudio";
import { IInlineQueryResultCachedGif } from "./IInlineQueryResultCachedGif";
import { IInlineQueryResultCachedMpeg4Gif } from "./IInlineQueryResultCachedMpeg4Gif";
import { IInlineQueryResultCachedPhoto } from "./IInlineQueryResultCachedPhoto";
import { IInlineQueryResultCachedSticker } from "./IInlineQueryResultCachedSticker";
import { IInlineQueryResultCachedVideo } from "./IInlineQueryResultCachedVideo";
import { IInlineQueryResultCachedVoice } from "./IInlineQueryResultCachedVoice";
import { IInlineQueryResultCachedDocument } from "./IInlineQueryResultCachedDocument";

/**
 * 
 *
 * 
 *
 * @see {@link }
 */
export interface IInlineQueryResult extends IInlineQueryResultArticle{}
export interface IInlineQueryResult extends IInlineQueryResultAudio{}
export interface IInlineQueryResult extends IInlineQueryResultCachedAudio{}
export interface IInlineQueryResult extends IInlineQueryResultCachedDocument{}
export interface IInlineQueryResult extends IInlineQueryResultCachedGif{}
export interface IInlineQueryResult extends IInlineQueryResultCachedMpeg4Gif{}
export interface IInlineQueryResult extends IInlineQueryResultCachedPhoto{}
export interface IInlineQueryResult extends IInlineQueryResultCachedSticker{}
export interface IInlineQueryResult extends IInlineQueryResultCachedVideo{}
export interface IInlineQueryResult extends IInlineQueryResultCachedVoice{}
  