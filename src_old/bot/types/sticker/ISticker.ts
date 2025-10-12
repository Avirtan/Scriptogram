/**
 * Объект, представляющий стикер.
 * 
 * Represents a sticker.
 * 
 * @see {@link https://core.telegram.org/bots/api#sticker}
 */
export interface ISticker {
    /**
     * Идентификатор файла стикера, который можно использовать для загрузки или повторного использования файла.
     * 
     * Identifier for this file, which can be used to download or reuse the file.
     */
    file_id: string;
  
    /**
     * Уникальный идентификатор файла, предположительно остается неизменным с течением времени и для разных ботов. 
     * Нельзя использовать для загрузки или повторного использования файла.
     * 
     * Unique identifier for this file, supposed to be the same over time and for different bots. 
     * Can't be used to download or reuse the file.
     */
    file_unique_id: string;
  
    /**
     * Тип стикера, в настоящее время один из "regular", "mask", "custom_emoji". 
     * Тип стикера независим от его формата, который определяется полями is_animated и is_video.
     * 
     * Type of the sticker, currently one of “regular”, “mask”, “custom_emoji”. 
     * The type of the sticker is independent from its format, which is determined by the fields is_animated and is_video.
     */
    type: 'regular' | 'mask' | 'custom_emoji';
  
    // Другие поля...
  
    /**
     * Размер файла в байтах.
     * 
     * File size in bytes.
     */
    file_size?: number;
  }
  