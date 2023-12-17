/**
 * Объект, представляющий набор стикеров.
 * 
 * This object represents a sticker set.
 * 
 * @see {@link https://core.telegram.org/bots/api#stickerset}
 */
export interface IStickerSet {
    /**
     * Название набора стикеров.
     * 
     * Sticker set name.
     */
    name: string;
  
    /**
     * Заголовок набора стикеров.
     * 
     * Sticker set title.
     */
    title: string;
  
    /**
     * Тип стикеров в наборе, в настоящее время один из "regular", "mask", "custom_emoji".
     * 
     * Type of stickers in the set, currently one of “regular”, “mask”, “custom_emoji”.
     */
    sticker_type: 'regular' | 'mask' | 'custom_emoji';
  
    /**
     * True, если набор стикеров содержит анимационные стикеры.
     * 
     * True, if the sticker set contains animated stickers.
     */
    is_animated: boolean;
  
    /**
     * True, если набор стикеров содержит видео стикеры.
     * 
     * True, if the sticker set contains video stickers.
     */
    is_video: boolean;
  
    /**
     * Список всех стикеров в наборе.
     * 
     * List of all set stickers.
     */
    stickers: ISticker[];
  
    /**
     * Обложка набора стикеров в формате .WEBP, .TGS или .WEBM.
     * 
     * Sticker set thumbnail in the .WEBP, .TGS, or .WEBM format.
     */
    thumbnail?: IPhotoSize;
  }
  