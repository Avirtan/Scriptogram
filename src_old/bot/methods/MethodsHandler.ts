import {
  IBotCommand,
  IBotDescription,
  IBotName,
  IBotShortDescription,
  IChat,
  IChatAdministratorRights,
  IChatInviteLink,
  IChatMember,
  IFile,
  IForumTopic,
  IGameHighScore,
  IMenuButton,
  IMessage,
  IMessageId,
  IPoll,
  ISticker,
  IStickerSet,
  IUserProfilePhotos,
} from "../types";
import { RequestHandler } from "../utils/RequestHandler";
import {
  IAddStickerToSet,
  IAnswerCallbackQuery,
  IAnswerInlineQuery,
  IAnswerPreCheckoutQuery,
  IAnswerShippingQuery,
  IAnswerWebAppQuery,
  IApproveChatJoinRequest,
  IBanChatMember,
  IBanChatSenderChat,
  ICloseForumTopic,
  ICloseGeneralForumTopic,
  ICopyMessage,
  ICreateChatInviteLink,
  ICreateForumTopic,
  ICreateInvoiceLink,
  ICreateNewStickerSet,
  IDeclineChatJoinRequest,
  IDeleteChatPhoto,
  IDeleteChatStickerSet,
  IDeleteForumTopic,
  IDeleteMessage,
  IDeleteMyCommands,
  IDeleteStickerFromSet,
  IDeleteStickerSet,
  IEditChatInviteLink,
  IEditForumTopic,
  IEditGeneralForumTopic,
  IEditMessageCaption,
  IEditMessageLiveLocation,
  IEditMessageMedia,
  IEditMessageReplyMarkup,
  IEditMessageText,
  IExportChatInviteLink,
  IForwardMessage,
  IGetChat,
  IGetChatAdministrators,
  IGetChatMember,
  IGetChatMemberCount,
  IGetChatMenuButton,
  IGetCustomEmojiStickers,
  IGetFile,
  IGetGameHighScores,
  IGetMyCommands,
  IGetMyDefaultAdministratorRights,
  IGetMyDescription,
  IGetMyName,
  IGetMyShortDescription,
  IGetStickerSet,
  IGetUserProfilePhotos,
  IHideGeneralForumTopic,
  ILeaveChat,
  IPinChatMessage,
  IPromoteChatMember,
  IReopenForumTopic,
  IReopenGeneralForumTopic,
  IRestrictChatMember,
  IRevokeChatInviteLink,
  ISendAnimation,
  ISendAudio,
  ISendChatAction,
  ISendContact,
  ISendDice,
  ISendDocument,
  ISendGame,
  ISendInvoice,
  ISendLocation,
  ISendMediaGroup,
  ISendMessage,
  ISendPhoto,
  ISendPoll,
  ISendSticker,
  ISendVenue,
  ISendVideo,
  ISendVideoNote,
  ISetChatAdministratorCustomTitle,
  ISetChatDescription,
  ISetChatMenuButton,
  ISetChatPermissions,
  ISetChatPhoto,
  ISetChatStickerSet,
  ISetChatTitle,
  ISetCustomEmojiStickerSetThumbnail,
  ISetGameScore,
  ISetMyCommands,
  ISetMyDefaultAdministratorRights,
  ISetMyDescription,
  ISetMyName,
  ISetMyShortDescription,
  ISetPassportDataErrors,
  ISetStickerEmojiList,
  ISetStickerKeywords,
  ISetStickerMaskPosition,
  ISetStickerPositionInSet,
  ISetStickerSetThumbnail,
  ISetStickerSetTitle,
  IStopMessageLiveLocation,
  IStopPoll,
  IUnbanChatMember,
  IUnbanChatSenderChat,
  IUnhideGeneralForumTopic,
  IUnpinAllChatMessages,
  IUnpinAllForumTopicMessages,
  IUnpinAllGeneralForumTopicMessages,
  IUnpinChatMessage,
  IUploadStickerFile,
} from "./types";

export class MethodHandler {
  private _requestHandler: RequestHandler;
  constructor(requestHandler: RequestHandler) {
    this._requestHandler = requestHandler;
  }

  // AVAILABLE  --------------------------------------------------------------------

  /**
   * Простой метод проверки токена аутентификации вашего бота. Не требует параметров. Возвращает основную информацию о боте в виде объекта User.
   *
   * A simple method for testing your bot's authentication token. Requires no parameters. Returns basic information about the bot in form of a User object.
   * @see {@link https://core.telegram.org/bots/api#getme}
   */
  public async getMe(): Promise<any> {
    let data = await this._requestHandler.getMethod("getMe");
    return data;
  }

  /**
   * Используйте этот метод для отправки текстовых сообщений. При успехе возвращается отправленное сообщение.
   *
   * Use this method to send text messages. On success, the sent Message is returned.
   * @see {@link https://core.telegram.org/bots/api#sendmessage}
   */
  public async sendMessage(requestData: ISendMessage): Promise<IMessage> {
    let data = await this._requestHandler.getMethod("sendMessage", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для пересылки сообщений любого типа. Служебные сообщения пересылать нельзя. При успехе возвращается отправленное сообщение.
   *
   * Use this method to forward messages of any kind. Service messages can't be forwarded. On success, the sent Message is returned.
   * @see {@link https://core.telegram.org/bots/api#forwardmessage}
   */
  public async forwardMessage(requestData: IForwardMessage): Promise<IMessage> {
    let data = await this._requestHandler.getMethod("forwardMessage", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для копирования сообщений любого типа. Служебные сообщения и сообщения-инвойсы не могут быть скопированы. Викторины могут быть скопированы только если известно значение поля correct_option_id. Метод аналогичен методу forwardMessage, но скопированное сообщение не имеет ссылки на исходное сообщение. Возвращает MessageId отправленного сообщения в случае успеха.
   *
   * Use this method to copy messages of any kind. Service messages and invoice messages can't be copied. A quiz poll can be copied only if the value of the field correct_option_id is known to the bot. The method is analogous to the method forwardMessage, but the copied message doesn't have a link to the original message. Returns the MessageId of the sent message on success.
   * @see {@link https://core.telegram.org/bots/api#copymessage}
   */
  public async copyMessage(requestData: ICopyMessage): Promise<IMessageId> {
    let data = await this._requestHandler.getMethod("copyMessage", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для отправки фотографий. При успехе возвращается отправленное сообщение.
   *
   * Use this method to send photos. On success, the sent Message is returned.
   * @see {@link https://core.telegram.org/bots/api#sendphoto}
   */
  public async sendPhoto(requestData: ISendPhoto): Promise<IMessage> {
    let data = await this._requestHandler.getMethod("sendPhoto", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для отправки аудиофайлов, если вы хотите, чтобы клиенты Telegram показывали их в музыкальном плеере.
   * Ваше аудио должно быть в формате .MP3 или .M4A. При успехе возвращается отправленное сообщение.
   * Bots в настоящее время могут отправлять аудиофайлы размером до 50 МБ, это ограничение может измениться в будущем.
   *
   * Use this method to send audio files, if you want Telegram clients to display them in the music player.
   * Your audio must be in the .MP3 or .M4A format. On success, the sent Message is returned.
   * Bots can currently send audio files of up to 50 MB in size, this limit may be changed in the future.
   * @see {@link https://core.telegram.org/bots/api#sendaudio}
   */
  public async sendAudio(requestData: ISendAudio): Promise<IMessage> {
    let data = await this._requestHandler.getMethod("sendAudio", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для отправки общих файлов. При успехе возвращается отправленное сообщение.
   * Bots в настоящее время могут отправлять файлы любого типа размером до 50 МБ, это ограничение может измениться в будущем.
   *
   * Use this method to send general files. On success, the sent Message is returned.
   * Bots can currently send files of any type of up to 50 MB in size, this limit may be changed in the future.
   * @see {@link https://core.telegram.org/bots/api#senddocument}
   */
  public async sendDocument(requestData: ISendDocument): Promise<IMessage> {
    let data = await this._requestHandler.getMethod("sendDocument", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для отправки видеофайлов. Клиенты Telegram поддерживают MPEG4-видео (другие форматы могут быть отправлены как Document).
   * При успехе возвращается отправленное сообщение. Bots в настоящее время могут отправлять видеофайлы размером до 50 МБ, это ограничение может измениться в будущем.
   *
   * Use this method to send video files, Telegram clients support MPEG4 videos (other formats may be sent as Document). On success, the sent Message is returned.
   * Bots can currently send video files of up to 50 MB in size, this limit may be changed in the future.
   * @see {@link https://core.telegram.org/bots/api#sendvideo}
   */
  public async sendVideo(requestData: ISendVideo): Promise<IMessage> {
    let data = await this._requestHandler.getMethod("sendVideo", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для отправки файлов анимации (GIF или видео H.264/MPEG-4 AVC без звука).
   * При успехе возвращается отправленное сообщение. Bots в настоящее время могут отправлять файлы анимации размером до 50 МБ, это ограничение может измениться в будущем.
   *
   * Use this method to send animation files (GIF or H.264/MPEG-4 AVC video without sound). On success, the sent Message is returned.
   * Bots can currently send animation files of up to 50 MB in size, this limit may be changed in the future.
   * @see {@link https://core.telegram.org/bots/api#sendanimation}
   */
  public async sendAnimation(requestData: ISendAnimation): Promise<IMessage> {
    let data = await this._requestHandler.getMethod("sendAnimation", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для отправки аудиофайлов, если вы хотите, чтобы клиенты Telegram отображали файл как проигрываемое голосовое сообщение.
   * Для этого ваш аудиофайл должен быть в формате .OGG, закодированным с использованием OPUS (другие форматы могут быть отправлены как Audio или Document).
   * При успехе возвращается отправленное сообщение. Bots в настоящее время могут отправлять голосовые сообщения размером до 50 МБ, это ограничение может измениться в будущем.
   *
   * Use this method to send audio files, if you want Telegram clients to display the file as a playable voice message.
   * For this to work, your audio must be in an .OGG file encoded with OPUS (other formats may be sent as Audio or Document).
   * On success, the sent Message is returned.
   * Bots can currently send voice messages of up to 50 MB in size, this limit may be changed in the future.
   * @see {@link https://core.telegram.org/bots/api#sendvoice}
   */
  public async sendVoice(requestData: ISendVideo): Promise<IMessage> {
    let data = await this._requestHandler.getMethod("sendVoice", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для отправки видеосообщений. Начиная с v.4.0, клиенты Telegram поддерживают круглые квадратные MPEG4-видео длиной до 1 минуты.
   * При успехе возвращается отправленное сообщение.
   *
   * Use this method to send video messages. As of v.4.0, Telegram clients support rounded square MPEG4 videos of up to 1 minute long.
   * On success, the sent Message is returned.
   * @see {@link https://core.telegram.org/bots/api#sendvideonote}
   */
  public async sendVideoNote(requestData: ISendVideoNote): Promise<IMessage> {
    let data = await this._requestHandler.getMethod("sendVideoNote", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для отправки группы фотографий, видео, документов или аудио как альбома.
   * На успех возвращается массив сообщений, которые были отправлены.
   *
   * Use this method to send a group of photos, videos, documents, or audios as an album.
   * On success, an array of Messages that were sent is returned.
   * @see {@link https://core.telegram.org/bots/api#sendmediagroup}
   */
  public async sendMediaGroup(requestData: ISendMediaGroup): Promise<IMessage> {
    let data = await this._requestHandler.getMethod("sendMediaGroup", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для отправки точки на карте. При успехе возвращается отправленное сообщение.
   *
   * Use this method to send point on the map. On success, the sent Message is returned.
   * @see {@link https://core.telegram.org/bots/api#sendlocation}
   */
  public async sendLocation(requestData: ISendLocation): Promise<IMessage> {
    let data = await this._requestHandler.getMethod("sendLocation", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для отправки информации о месте. При успехе возвращается отправленное сообщение.
   *
   * Use this method to send information about a venue. On success, the sent Message is returned.
   * @see {@link https://core.telegram.org/bots/api#sendvenue}
   */
  public async sendVenue(requestData: ISendVenue): Promise<IMessage> {
    let data = await this._requestHandler.getMethod("sendVenue", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для отправки контактных данных. При успехе возвращается отправленное сообщение.
   *
   * Use this method to send phone contacts. On success, the sent Message is returned.
   * @see {@link https://core.telegram.org/bots/api#sendcontact}
   */
  public async sendContact(requestData: ISendContact): Promise<IMessage> {
    let data = await this._requestHandler.getMethod("sendContact", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для отправки опроса. При успехе возвращается отправленное сообщение.
   *
   * Use this method to send a native poll. On success, the sent Message is returned.
   * @see {@link https://core.telegram.org/bots/api#sendpoll}
   */
  public async sendPoll(requestData: ISendPoll): Promise<IMessage> {
    let data = await this._requestHandler.getMethod("sendPoll", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для отправки анимированной эмодзи, которая будет отображать случайное значение.
   * При успехе возвращается отправленное сообщение.
   *
   * Use this method to send an animated emoji that will display a random value. On success, the sent Message is returned.
   * @see {@link https://core.telegram.org/bots/api#senddice}
   */
  public async sendDice(requestData: ISendDice): Promise<IMessage> {
    let data = await this._requestHandler.getMethod("sendDice", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод, когда вы хотите сообщить пользователю, что происходит какое-то действие с ботом.
   * Статус устанавливается на 5 секунд или менее (когда сообщение приходит от вашего бота,
   * клиенты Telegram очищают его статус набора текста). Возвращает True в случае успеха.
   * Рекомендуется использовать этот метод только в случае, когда ответ от бота займет заметное время.
   *
   * Use this method when you need to tell the user that something is happening on the bot's side.
   * The status is set for 5 seconds or less (when a message arrives from your bot, Telegram clients clear its typing status).
   * Returns True on success. We only recommend using this method when a response from the bot will take a noticeable amount of time to arrive.
   *
   * @see {@link https://core.telegram.org/bots/api#sendchataction}
   */
  public async sendChatAction(requestData: ISendChatAction): Promise<any> {
    let data = await this._requestHandler.getMethod("sendChatAction", requestData);
    return data;
  }

  /**
   * Используйте этот метод для получения списка фотографий профиля пользователя.
   * Возвращает объект UserProfilePhotos.
   *
   * Use this method to get a list of profile pictures for a user. Returns a UserProfilePhotos object.
   * @see {@link https://core.telegram.org/bots/api#getuserprofilephotos}
   */
  public async getUserProfilePhotos(requestData: IGetUserProfilePhotos): Promise<IUserProfilePhotos> {
    let data = await this._requestHandler.getMethod("getUserProfilePhotos", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для получения основной информации о файле и его подготовки для загрузки.
   * В данный момент боты могут загружать файлы размером до 20 МБ.
   * При успехе возвращается объект File.
   *
   * Use this method to get basic information about a file and prepare it for downloading.
   * For the moment, bots can download files of up to 20MB in size. On success, a File object is returned.
   * @see {@link https://core.telegram.org/bots/api#getfile}
   */
  public async getFile(requestData: IGetFile): Promise<IFile> {
    let data = await this._requestHandler.getMethod("getFile", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для бана пользователя в группе, супергруппе или канале.
   * В случае с супергруппами и каналами пользователь не сможет вернуться в чат самостоятельно с помощью пригласительных ссылок и т. д., пока не будет снят бан.
   * Для выполнения этой операции бот должен быть администратором в чате и иметь соответствующие права администратора.
   * При успехе возвращается True.
   *
   * Use this method to ban a user in a group, a supergroup or a channel.
   * In the case of supergroups and channels, the user will not be able to return to the chat on their own using invite links, etc., unless unbanned first.
   * The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights.
   * Returns True on success.
   * @see {@link https://core.telegram.org/bots/api#banchatmember}
   */
  public async banChatMember(requestData: IBanChatMember): Promise<any> {
    let data = await this._requestHandler.getMethod("banChatMember", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для разбана ранее забаненного пользователя в супергруппе или канале.
   * Пользователь не вернется в группу или канал автоматически, но сможет присоединиться через ссылку и т. д.
   * Для выполнения этой операции бот должен быть администратором.
   * По умолчанию этот метод гарантирует, что после вызова пользователь не является участником чата, но сможет присоединиться к нему.
   * Если вы не хотите этого, используйте параметр only_if_banned.
   * При успехе возвращается True.
   *
   * Use this method to unban a previously banned user in a supergroup or channel.
   * The user will not return to the group or channel automatically, but will be able to join via link, etc.
   * The bot must be an administrator for this to work.
   * By default, this method guarantees that after the call the user is not a member of the chat, but will be able to join it.
   * If you don't want this, use the parameter only_if_banned.
   * Returns True on success.
   * @see {@link https://core.telegram.org/bots/api#unbanchatmember}
   */
  public async unbanChatMember(requestData: IUnbanChatMember): Promise<any> {
    let data = await this._requestHandler.getMethod("unbanChatMember", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для ограничения пользователя в супергруппе.
   * Бот должен быть администратором в супергруппе и иметь соответствующие права администратора для выполнения этого действия.
   * Передайте True для всех разрешений, чтобы снять ограничения с пользователя.
   * При успехе возвращается True.
   *
   * Use this method to restrict a user in a supergroup.
   * The bot must be an administrator in the supergroup for this to work and must have the appropriate administrator rights.
   * Pass True for all permissions to lift restrictions from a user.
   * Returns True on success.
   * @see {@link https://core.telegram.org/bots/api#restrictchatmember}
   */
  public async restrictChatMember(requestData: IRestrictChatMember): Promise<any> {
    let data = await this._requestHandler.getMethod("restrictChatMember", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для повышения или понижения пользователя в супергруппе или канале.
   * Бот должен быть администратором в чате и иметь соответствующие права администратора для выполнения этого действия.
   * Передайте False для всех логических параметров, чтобы понизить пользователя.
   * При успехе возвращается True.
   *
   * Use this method to promote or demote a user in a supergroup or a channel.
   * The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights.
   * Pass False for all boolean parameters to demote a user.
   * Returns True on success.
   * @see {@link https://core.telegram.org/bots/api#promotechatmember}
   */
  public async promoteChatMember(requestData: IPromoteChatMember): Promise<any> {
    let data = await this._requestHandler.getMethod("promoteChatMember", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для установки пользовательского заголовка для администратора в супергруппе, продвигаемой ботом. При успехе возвращается True.
   *
   * Use this method to set a custom title for an administrator in a supergroup promoted by the bot. Returns True on success.
   * @see {@link https://core.telegram.org/bots/api#setchatadministratorcustomtitle}
   */
  public async setChatAdministratorCustomTitle(requestData: ISetChatAdministratorCustomTitle): Promise<any> {
    let data = await this._requestHandler.getMethod("setChatAdministratorCustomTitle", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для бана чата канала в супергруппе или канале. Пока чат не будет разбанен, владелец заблокированного чата не сможет отправлять сообщения от имени любого из своих каналов. Бот должен быть администратором в супергруппе или канале для выполнения этой операции и должен иметь соответствующие права администратора. При успехе возвращается True.
   *
   * Use this method to ban a channel chat in a supergroup or a channel. Until the chat is unbanned, the owner of the banned chat won't be able to send messages on behalf of any of their channels. The bot must be an administrator in the supergroup or channel for this to work and must have the appropriate administrator rights. Returns True on success.
   * @see {@link https://core.telegram.org/bots/api#banchatsenderchat}
   */
  public async banChatSenderChat(requestData: IBanChatSenderChat): Promise<any> {
    let data = await this._requestHandler.getMethod("banChatSenderChat", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для разбана ранее заблокированного чата канала в супергруппе или канале. Бот должен быть администратором для выполнения этой операции и должен иметь соответствующие права администратора. При успехе возвращается True.
   *
   * Use this method to unban a previously banned channel chat in a supergroup or channel. The bot must be an administrator for this to work and must have the appropriate administrator rights. Returns True on success.
   * @see {@link https://core.telegram.org/bots/api#unbanchatsenderchat}
   */
  public async unbanChatSenderChat(requestData: IUnbanChatSenderChat): Promise<any> {
    let data = await this._requestHandler.getMethod("unbanChatSenderChat", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для установки стандартных прав чата для всех участников. Бот должен быть администратором в группе или супергруппе для выполнения этой операции и должен иметь права администратора can_restrict_members. При успехе возвращается True.
   *
   * Use this method to set default chat permissions for all members. The bot must be an administrator in the group or a supergroup for this to work and must have the can_restrict_members administrator rights. Returns True on success.
   * @see {@link https://core.telegram.org/bots/api#setchatpermissions}
   */
  public async setChatPermissions(requestData: ISetChatPermissions): Promise<any> {
    let data = await this._requestHandler.getMethod("setChatPermissions", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для создания новой основной пригласительной ссылки для чата; любая ранее созданная основная ссылка будет отозвана. Бот должен быть администратором в чате и иметь соответствующие права администратора для выполнения этой операции. При успехе возвращается новая пригласительная ссылка в виде строки.
   *
   * Use this method to generate a new primary invite link for a chat; any previously generated primary link is revoked. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the new invite link as String on success.
   * @see {@link https://core.telegram.org/bots/api#exportchatinvitelink}
   */
  public async exportChatInviteLink(requestData: IExportChatInviteLink): Promise<any> {
    let data = await this._requestHandler.getMethod("exportChatInviteLink", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для создания дополнительной пригласительной ссылки для чата. Бот должен быть администратором в чате и иметь соответствующие права администратора для выполнения этой операции. Ссылка может быть отозвана с помощью метода revokeChatInviteLink. При успехе возвращается новая пригласительная ссылка в виде объекта ChatInviteLink.
   *
   * Use this method to create an additional invite link for a chat. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. The link can be revoked using the method revokeChatInviteLink. Returns the new invite link as ChatInviteLink object.
   * @see {@link https://core.telegram.org/bots/api#createchatinvitelink}
   */
  public async createChatInviteLink(requestData: ICreateChatInviteLink): Promise<any> {
    let data = await this._requestHandler.getMethod("createChatInviteLink", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для редактирования неосновной пригласительной ссылки, созданной ботом. Бот должен быть администратором в чате и иметь соответствующие права администратора для выполнения этой операции. При успехе возвращается отредактированная пригласительная ссылка в виде объекта ChatInviteLink.
   *
   * Use this method to edit a non-primary invite link created by the bot. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the edited invite link as a ChatInviteLink object.
   * @see {@link https://core.telegram.org/bots/api#editchatinvitelink}
   */
  public async editChatInviteLink(requestData: IEditChatInviteLink): Promise<IChatInviteLink> {
    let data = await this._requestHandler.getMethod("editChatInviteLink", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для отзыва пригласительной ссылки, созданной ботом. Если основная ссылка отозвана, автоматически создается новая ссылка. Бот должен быть администратором в чате и иметь соответствующие права администратора для выполнения этой операции. При успехе возвращается отозванная пригласительная ссылка в виде объекта ChatInviteLink.
   *
   * Use this method to revoke an invite link created by the bot. If the primary link is revoked, a new link is automatically generated. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Returns the revoked invite link as ChatInviteLink object.
   * @see {@link https://core.telegram.org/bots/api#revokechatinvitelink}
   */
  public async revokeChatInviteLink(requestData: IRevokeChatInviteLink): Promise<IChatInviteLink> {
    let data = await this._requestHandler.getMethod("revokeChatInviteLink", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для утверждения запроса на вступление в чат. Бот должен быть администратором в чате и иметь соответствующее право администратора can_invite_users для выполнения этой операции. При успехе возвращается True.
   *
   * Use this method to approve a chat join request. The bot must be an administrator in the chat and must have the can_invite_users administrator right for this operation to work. Returns True on success.
   * @see {@link https://core.telegram.org/bots/api#approvechatjoinrequest}
   */
  public async approveChatJoinRequest(requestData: IApproveChatJoinRequest): Promise<any> {
    let data = await this._requestHandler.getMethod("approveChatJoinRequest", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для отклонения запроса на вступление в чат. Бот должен быть администратором в чате и иметь соответствующее право администратора can_invite_users для выполнения этой операции. При успехе возвращается True.
   *
   * Use this method to decline a chat join request. The bot must be an administrator in the chat and must have the can_invite_users administrator right for this operation to work. Returns True on success.
   * @see {@link https://core.telegram.org/bots/api#declinechatjoinrequest}
   */
  public async declineChatJoinRequest(requestData: IDeclineChatJoinRequest): Promise<any> {
    let data = await this._requestHandler.getMethod("declineChatJoinRequest", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для установки нового профильного фото для чата. Фотографии нельзя изменить в личных чатах. Бот должен быть администратором в чате и иметь соответствующее право администратора для выполнения этой операции. При успехе возвращается True.
   *
   * Use this method to set a new profile photo for the chat. Photos can't be changed for private chats. The bot must be an administrator in the chat and must have the appropriate administrator rights for this operation to work. Returns True on success.
   * @see {@link https://core.telegram.org/bots/api#setchatphoto}
   */
  public async setChatPhoto(requestData: ISetChatPhoto): Promise<any> {
    let data = await this._requestHandler.getMethod("setChatPhoto", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для удаления фото чата. Фотографии нельзя изменить в личных чатах. Бот должен быть администратором в чате и иметь соответствующее право администратора для выполнения этой операции. При успехе возвращается True.
   *
   * Use this method to delete a chat photo. Photos can't be changed for private chats. The bot must be an administrator in the chat and must have the appropriate administrator rights for this operation to work. Returns True on success.
   * @see {@link https://core.telegram.org/bots/api#deletechatphoto}
   */
  public async deleteChatPhoto(requestData: IDeleteChatPhoto): Promise<any> {
    let data = await this._requestHandler.getMethod("deleteChatPhoto", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для изменения названия чата. Названия нельзя изменить в личных чатах. Бот должен быть администратором в чате и иметь соответствующее право администратора для выполнения этой операции. При успехе возвращается True.
   *
   * Use this method to change the title of a chat. Titles can't be changed for private chats. The bot must be an administrator in the chat and must have the appropriate administrator rights for this operation to work. Returns True on success.
   * @see {@link https://core.telegram.org/bots/api#setchattitle}
   */
  public async setChatTitle(requestData: ISetChatTitle): Promise<any> {
    let data = await this._requestHandler.getMethod("setChatTitle", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для изменения описания группы, супергруппы или канала. Бот должен быть администратором в чате и иметь соответствующие права администратора для выполнения этой операции. При успехе возвращается True.
   *
   * Use this method to change the description of a group, a supergroup, or a channel. The bot must be an administrator in the chat and must have the appropriate administrator rights for this operation to work. Returns True on success.
   * @see {@link https://core.telegram.org/bots/api#setchatdescription}
   */
  public async setChatDescription(requestData: ISetChatDescription): Promise<any> {
    let data = await this._requestHandler.getMethod("setChatDescription", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод, чтобы добавить сообщение в список закрепленных сообщений в чате. Если чат не является частным, бот должен быть администратором в чате и иметь право администратора 'can_pin_messages' в супергруппе или 'can_edit_messages' в канале, чтобы этот метод работал. При успехе возвращается True.
   *
   * Use this method to add a message to the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat and must have the 'can_pin_messages' administrator right in a supergroup or 'can_edit_messages' administrator right in a channel for this method to work. Returns True on success.
   * @see {@link https://core.telegram.org/bots/api#pinchatmessage}
   */
  public async pinChatMessage(requestData: IPinChatMessage): Promise<any> {
    let data = await this._requestHandler.getMethod("pinChatMessage", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод, чтобы удалить сообщение из списка закрепленных сообщений в чате. Если чат не является частным, бот должен быть администратором в чате и иметь право администратора 'can_pin_messages' в супергруппе или 'can_edit_messages' в канале, чтобы этот метод работал. При успехе возвращается True.
   *
   * Use this method to remove a message from the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat and must have the 'can_pin_messages' administrator right in a supergroup or 'can_edit_messages' administrator right in a channel for this method to work. Returns True on success.
   * @see {@link https://core.telegram.org/bots/api#unpinchatmessage}
   */
  public async unpinChatMessage(requestData: IUnpinChatMessage): Promise<any> {
    let data = await this._requestHandler.getMethod("unpinChatMessage", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод, чтобы очистить список закрепленных сообщений в чате. Если чат не является частным, бот должен быть администратором в чате и иметь право администратора 'can_pin_messages' в супергруппе или 'can_edit_messages' в канале, чтобы этот метод работал. При успехе возвращается True.
   *
   * Use this method to clear the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat and must have the 'can_pin_messages' administrator right in a supergroup or 'can_edit_messages' administrator right in a channel for this method to work. Returns True on success.
   * @see {@link https://core.telegram.org/bots/api#unpinallchatmessages}
   */
  public async unpinAllChatMessages(requestData: IUnpinAllChatMessages): Promise<any> {
    let data = await this._requestHandler.getMethod("unpinAllChatMessages", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод, чтобы ваш бот покинул группу, супергруппу или канал. При успехе возвращается True.
   *
   * Use this method for your bot to leave a group, supergroup, or channel. Returns True on success.
   * @see {@link https://core.telegram.org/bots/api#leavechat}
   */
  public async leaveChat(requestData: ILeaveChat): Promise<any> {
    let data = await this._requestHandler.getMethod("leaveChat", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для получения актуальной информации о чате (текущее имя пользователя для чатов один на один, текущее имя пользователя пользователя, группы или канала и т. д.). При успехе возвращается объект чата.
   *
   * Use this method to get up-to-date information about the chat (current name of the user for one-on-one conversations, current username of a user, group, or channel, etc.). Returns a Chat object on success.
   * @see {@link https://core.telegram.org/bots/api#getchat}
   */
  public async getChat(requestData: IGetChat): Promise<IChat> {
    let data = await this._requestHandler.getMethod("getChat", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для получения списка администраторов в чате, которые не являются ботами. Возвращает массив объектов ChatMember.
   *
   * Use this method to get a list of administrators in a chat, which aren't bots. Returns an Array of ChatMember objects.
   * @see {@link https://core.telegram.org/bots/api#getchatadministrators}
   */
  public async getChatAdministrators(requestData: IGetChatAdministrators): Promise<IChatMember> {
    let data = await this._requestHandler.getMethod("getChatAdministrators", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для получения количества участников в чате. Возвращает Int в случае успеха.
   *
   * Use this method to get the number of members in a chat. Returns Int on success.
   * @see {@link https://core.telegram.org/bots/api#getchatmembercount}
   */
  public async getChatMemberCount(requestData: IGetChatMemberCount): Promise<any> {
    let data = await this._requestHandler.getMethod("getChatMemberCount", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для получения информации о участнике чата. Метод гарантированно работает только для других пользователей, если бот является администратором в чате. Возвращает объект ChatMember в случае успеха.
   *
   * Use this method to get information about a member of a chat. The method is only guaranteed to work for other users if the bot is an administrator in the chat. Returns a ChatMember object on success.
   * @see {@link https://core.telegram.org/bots/api#getchatmember}
   */
  public async getChatMember(requestData: IGetChatMember): Promise<IChatMember> {
    let data = await this._requestHandler.getMethod("getChatMember", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для установки нового набора стикеров для супергруппы. Бот должен быть администратором в чате для выполнения этой операции и должен иметь соответствующие права администратора. Используйте поле can_set_sticker_set, которое возвращается опционально при выполнении запросов getChat, чтобы проверить, может ли бот использовать этот метод. Возвращает True в случае успеха.
   *
   * Use this method to set a new group sticker set for a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Use the field can_set_sticker_set optionally returned in getChat requests to check if the bot can use this method. Returns True on success.
   * @see {@link https://core.telegram.org/bots/api#setchatstickerset}
   */
  public async setChatStickerSet(requestData: ISetChatStickerSet): Promise<any> {
    let data = await this._requestHandler.getMethod("setChatStickerSet", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для удаления набора стикеров из супергруппы. Бот должен быть администратором в чате для выполнения этой операции и должен иметь соответствующие права администратора. Используйте поле can_set_sticker_set, которое возвращается опционально при выполнении запросов getChat, чтобы проверить, может ли бот использовать этот метод. Возвращает True в случае успеха.
   *
   * Use this method to delete a group sticker set from a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate administrator rights. Use the field can_set_sticker_set optionally returned in getChat requests to check if the bot can use this method. Returns True on success.
   * @see {@link https://core.telegram.org/bots/api#deletechatstickerset}
   */
  public async deleteChatStickerSet(requestData: IDeleteChatStickerSet): Promise<any> {
    let data = await this._requestHandler.getMethod("deleteChatStickerSet", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод, чтобы изменить кнопку меню бота в приватном чате или кнопку меню по умолчанию.
   * Возвращает True при успешном выполнении.
   *
   * Use this method to change the bot's menu button in a private chat, or the default menu button.
   * Returns True on success.
   * @see {@link https://core.telegram.org/bots/api#setchatmenubutton}
   */
  public async setChatMenuButton(requestData: ISetChatMenuButton): Promise<any> {
    let data = await this._requestHandler.getMethod("setChatMenuButton", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод, чтобы получить текущее значение кнопки меню бота в приватном чате или кнопки меню по умолчанию.
   * Возвращает MenuButton при успешном выполнении.
   *
   * Use this method to get the current value of the bot's menu button in a private chat, or the default menu button.
   * Returns MenuButton on success.
   * @see {@link https://core.telegram.org/bots/api#getchatmenubutton}
   */
  public async getChatMenuButton(requestData: IGetChatMenuButton): Promise<IMenuButton> {
    let data = await this._requestHandler.getMethod("getChatMenuButton", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод, чтобы получить собственные стикеры-эмодзи, которые любой пользователь может использовать в качестве значка темы форума. Не требует параметров. Возвращает массив объектов стикера.
   *
   * Use this method to get custom emoji stickers, which can be used as a forum topic icon by any user. Requires no parameters. Returns an Array of Sticker objects.
   * @see {@link https://core.telegram.org/bots/api#getforumtopiciconstickers}
   */
  public async getForumTopicIconStickers(): Promise<ISticker[]> {
    let data = await this._requestHandler.getMethod("getForumTopicIconStickers");
    return data.result;
  }

  /**
   * Используйте этот метод для создания темы в чате форума супергруппы. Бот должен быть администратором в чате для выполнения этой операции и должен иметь права администратора can_manage_topics. Возвращает информацию о созданной теме в виде объекта ForumTopic.
   *
   * Use this method to create a topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. Returns information about the created topic as a ForumTopic object.
   * @see {@link https://core.telegram.org/bots/api#createforumtopic}
   */
  public async createForumTopic(requestData: ICreateForumTopic): Promise<IForumTopic> {
    let data = await this._requestHandler.getMethod("createForumTopic", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для изменения названия и значка темы в чате форума супергруппы. Бот должен быть администратором в чате для выполнения этой операции и должен иметь права администратора can_manage_topics, если он не создатель темы. Возвращает True в случае успеха.
   *
   * Use this method to edit name and icon of a topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have can_manage_topics administrator rights, unless it is the creator of the topic. Returns True on success.
   * @see {@link https://core.telegram.org/bots/api#editforumtopic}
   */
  public async editForumTopic(requestData: IEditForumTopic): Promise<any> {
    let data = await this._requestHandler.getMethod("editForumTopic", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для закрытия открытой темы в чате форума супергруппы. Бот должен быть администратором в чате для выполнения этой операции и должен иметь права администратора can_manage_topics, если он не создатель темы. Возвращает True в случае успеха.
   *
   * Use this method to close an open topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights, unless it is the creator of the topic. Returns True on success.
   * @see {@link https://core.telegram.org/bots/api#closeforumtopic}
   */
  public async closeForumTopic(requestData: ICloseForumTopic): Promise<any> {
    let data = await this._requestHandler.getMethod("closeForumTopic", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для повторного открытия закрытой темы в чате форума супергруппы. Бот должен быть администратором в чате для выполнения этой операции и должен иметь права администратора can_manage_topics, если он не создатель темы. Возвращает True в случае успеха.
   *
   * Use this method to reopen a closed topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights, unless it is the creator of the topic. Returns True on success.
   * @see {@link https://core.telegram.org/bots/api#reopenforumtopic}
   */
  public async reopenForumTopic(requestData: IReopenForumTopic): Promise<any> {
    let data = await this._requestHandler.getMethod("reopenForumTopic", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для удаления темы форума вместе со всеми ее сообщениями в чате форума супергруппы. Бот должен быть администратором в чате для выполнения этой операции и должен иметь права администратора can_delete_messages. Возвращает True в случае успеха.
   *
   * Use this method to delete a forum topic along with all its messages in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_delete_messages administrator rights. Returns True on success.
   * @see {@link https://core.telegram.org/bots/api#deleteforumtopic}
   */
  public async deleteForumTopic(requestData: IDeleteForumTopic): Promise<any> {
    let data = await this._requestHandler.getMethod("deleteForumTopic", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для удаления всех закрепленных сообщений в теме форума. Бот должен быть администратором в чате для выполнения этой операции и должен иметь права администратора can_pin_messages в супергруппе. Возвращает True в случае успеха.
   *
   * Use this method to clear the list of pinned messages in a forum topic. The bot must be an administrator in the chat for this to work and must have the can_pin_messages administrator right in the supergroup. Returns True on success.
   * @see {@link https://core.telegram.org/bots/api#unpinallforumtopicmessages}
   */
  public async unpinAllForumTopicMessages(requestData: IUnpinAllForumTopicMessages): Promise<any> {
    let data = await this._requestHandler.getMethod("unpinAllForumTopicMessages", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для изменения названия темы "General" в супергруппе форума. Бот должен быть администратором в чате для выполнения этой операции и должен иметь права администратора can_manage_topics. Возвращает True в случае успеха.
   *
   * Use this method to edit the name of the 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have can_manage_topics administrator rights. Returns True on success.
   * @see {@link https://core.telegram.org/bots/api#editgeneralforumtopic}
   */
  public async editGeneralForumTopic(requestData: IEditGeneralForumTopic): Promise<any> {
    let data = await this._requestHandler.getMethod("editGeneralForumTopic", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для закрытия открытой темы "General" в супергруппе форума. Бот должен быть администратором в чате для выполнения этой операции и должен иметь права администратора can_manage_topics. Возвращает True в случае успеха.
   *
   * Use this method to close an open 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. Returns True on success.
   * @see {@link https://core.telegram.org/bots/api#closegeneralforumtopic}
   */
  public async closeGeneralForumTopic(requestData: ICloseGeneralForumTopic): Promise<any> {
    let data = await this._requestHandler.getMethod("closeGeneralForumTopic", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для повторного открытия закрытой темы "General" в супергруппе форума. Бот должен быть администратором в чате для выполнения этой операции и должен иметь права администратора can_manage_topics. Тема будет автоматически разблокирована, если она была скрыта. Возвращает True в случае успеха.
   *
   * Use this method to reopen a closed 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. The topic will be automatically unhidden if it was hidden. Returns True on success.
   * @see {@link https://core.telegram.org/bots/api#reopengeneralforumtopic}
   */
  public async reopenGeneralForumTopic(requestData: IReopenGeneralForumTopic): Promise<any> {
    let data = await this._requestHandler.getMethod("reopenGeneralForumTopic", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для скрытия темы "General" в супергруппе форума. Бот должен быть администратором в чате для выполнения этой операции и должен иметь права администратора can_manage_topics. Тема будет автоматически закрыта, если она была открыта. Возвращает True в случае успеха.
   *
   * Use this method to hide the 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. The topic will be automatically closed if it was open. Returns True on success.
   * @see {@link https://core.telegram.org/bots/api#hidegeneralforumtopic}
   */
  public async hideGeneralForumTopic(requestData: IHideGeneralForumTopic): Promise<any> {
    let data = await this._requestHandler.getMethod("hideGeneralForumTopic", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для отображения темы "General" в супергруппе форума. Бот должен быть администратором в чате для выполнения этой операции и должен иметь права администратора can_manage_topics. Возвращает True в случае успеха.
   *
   * Use this method to unhide the 'General' topic in a forum supergroup chat. The bot must be an administrator in the chat for this to work and must have the can_manage_topics administrator rights. Returns True on success.
   * @see {@link https://core.telegram.org/bots/api#unhidegeneralforumtopic}
   */
  public async unhideGeneralForumTopic(requestData: IUnhideGeneralForumTopic): Promise<any> {
    let data = await this._requestHandler.getMethod("unhideGeneralForumTopic", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для очистки списка закрепленных сообщений в теме "General" форума. Бот должен быть администратором в чате для выполнения этой операции и должен иметь право администратора can_pin_messages в супергруппе. Возвращает True в случае успеха.
   *
   * Use this method to clear the list of pinned messages in a General forum topic. The bot must be an administrator in the chat for this to work and must have the can_pin_messages administrator right in the supergroup. Returns True on success.
   * @see {@link https://core.telegram.org/bots/api#unpinallgeneralforumtopicmessages}
   */
  public async unpinAllGeneralForumTopicMessages(requestData: IUnpinAllGeneralForumTopicMessages): Promise<any> {
    let data = await this._requestHandler.getMethod("unpinAllGeneralForumTopicMessages", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для отправки ответов на callback-запросы, отправленные из встроенной клавиатуры. Ответ будет отображаться пользователю в виде уведомления сверху экрана чата или как предупреждение. При успешном выполнении возвращает True.
   *
   * Use this method to send answers to callback queries sent from inline keyboards. The answer will be displayed to the user as a notification at the top of the chat screen or as an alert. On success, True is returned.
   * @see {@link https://core.telegram.org/bots/api#answercallbackquery}
   */
  public async answerCallbackQuery(requestData: IAnswerCallbackQuery): Promise<any> {
    let data = await this._requestHandler.getMethod("answerCallbackQuery", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для изменения списка команд бота.
   *
   * Use this method to change the list of the bot's commands.
   * @see {@link https://core.telegram.org/bots/api#setmycommands}
   */
  public async setMyCommands(requestData: ISetMyCommands): Promise<any> {
    let data = await this._requestHandler.getMethod("setMyCommands", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для удаления списка команд бота для указанной области и языка пользователя.
   * После удаления, более высокоуровневые команды будут показаны задействованным пользователям.
   *
   * Use this method to delete the list of the bot's commands for the given scope and user language.
   * After deletion, higher level commands will be shown to affected users.
   * @see {@link https://core.telegram.org/bots/api#deletemycommands}
   */
  public async deleteMyCommands(requestData: IDeleteMyCommands): Promise<any> {
    let data = await this._requestHandler.getMethod("deleteMyCommands", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для получения текущего списка команд бота для заданной области и языка пользователя.
   * Возвращает массив объектов BotCommand. Если команды не установлены, возвращается пустой список.
   *
   * Use this method to get the current list of the bot's commands for the given scope and user language.
   * Returns an Array of BotCommand objects. If commands aren't set, an empty list is returned.
   * @see {@link https://core.telegram.org/bots/api#getmycommands}
   */
  public async getMyCommands(requestData: IGetMyCommands): Promise<IBotCommand[]> {
    let data = await this._requestHandler.getMethod("getMyCommands", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для изменения имени бота. Возвращает True при успешном выполнении.
   *
   * Use this method to change the bot's name. Returns True on success.
   * @see {@link https://core.telegram.org/bots/api#setmyname}
   */
  public async setMyName(requestData: ISetMyName): Promise<any> {
    let data = await this._requestHandler.getMethod("setMyName", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод, чтобы получить текущее имя бота для указанного языка пользователя.
   * Возвращает имя бота при успешном выполнении.
   *
   * Use this method to get the current bot name for the given user language.
   * Returns BotName on success.
   * @see {@link https://core.telegram.org/bots/api#getmyname}
   */
  public async getMyName(requestData: IGetMyName): Promise<IBotName> {
    let data = await this._requestHandler.getMethod("getMyName", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод, чтобы изменить описание бота, которое отображается в чате с ботом, если чат пустой.
   * Возвращает True при успешном выполнении.
   *
   * Use this method to change the bot's description, which is shown in the chat with the bot if the chat is empty.
   * Returns True on success.
   * @see {@link https://core.telegram.org/bots/api#setmydescription}
   */
  public async setMyDescription(requestData: ISetMyDescription): Promise<any> {
    let data = await this._requestHandler.getMethod("setMyDescription", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод, чтобы получить текущее описание бота для указанного языка пользователя.
   * Возвращает BotDescription при успешном выполнении.
   *
   * Use this method to get the current bot description for the given user language.
   * Returns BotDescription on success.
   * @see {@link https://core.telegram.org/bots/api#getmydescription}
   */
  public async getMyDescription(requestData: IGetMyDescription): Promise<IBotDescription> {
    let data = await this._requestHandler.getMethod("getMyDescription", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод, чтобы изменить краткое описание бота, которое отображается на странице профиля бота и отправляется вместе со ссылкой при публикации бота.
   * Возвращает True при успешном выполнении.
   *
   * Use this method to change the bot's short description, which is shown on the bot's profile page and is sent together with the link when users share the bot.
   * Returns True on success.
   * @see {@link https://core.telegram.org/bots/api#setmyshortdescription}
   */
  public async setMyShortDescription(requestData: ISetMyShortDescription): Promise<any> {
    let data = await this._requestHandler.getMethod("setMyShortDescription", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод, чтобы получить текущее краткое описание бота для указанного языка пользователя.
   * Возвращает BotShortDescription при успешном выполнении.
   *
   * Use this method to get the current bot short description for the given user language.
   * Returns BotShortDescription on success.
   * @see {@link https://core.telegram.org/bots/api#getmyshortdescription}
   */
  public async getMyShortDescription(requestData: IGetMyShortDescription): Promise<IBotShortDescription> {
    let data = await this._requestHandler.getMethod("getMyShortDescription", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод, чтобы изменить права администратора по умолчанию, запрашиваемые ботом при добавлении в группы или каналы.
   * Эти права будут предложены пользователям, но они могут изменить список перед добавлением бота.
   * Возвращает True при успешном выполнении.
   *
   * Use this method to change the default administrator rights requested by the bot when it's added as an administrator to groups or channels.
   * These rights will be suggested to users, but they are free to modify the list before adding the bot.
   * Returns True on success.
   * @see {@link https://core.telegram.org/bots/api#setmydefaultadministratorrights}
   */
  public async setMyDefaultAdministratorRights(requestData: ISetMyDefaultAdministratorRights): Promise<any> {
    let data = await this._requestHandler.getMethod("setMyDefaultAdministratorRights", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод, чтобы получить текущие права администратора по умолчанию бота.
   * Возвращает ChatAdministratorRights в случае успеха.
   *
   * Use this method to get the current default administrator rights of the bot.
   * Returns ChatAdministratorRights on success.
   * @see {@link https://core.telegram.org/bots/api#getmydefaultadministratorrights}
   */
  public async getMyDefaultAdministratorRights(
    requestData: IGetMyDefaultAdministratorRights
  ): Promise<IChatAdministratorRights> {
    let data = await this._requestHandler.getMethod("getMyDefaultAdministratorRights", requestData);
    return data.result;
  }

  // UPDATE MESSAGE ----------------------------------------------------------------

  /**
   * Используйте этот метод для редактирования текстовых и игровых сообщений.
   * При успехе, если отредактированное сообщение не является встроенным,
   * возвращается отредактированное сообщение, в противном случае возвращается True.
   *
   * Use this method to edit text and game messages.
   * On success, if the edited message is not an inline message,
   * the edited Message is returned, otherwise True is returned.
   * @see {@link https://core.telegram.org/bots/api#editmessagetext}
   */
  public async editMessageText(requestData: IEditMessageText): Promise<IMessage> {
    let data = await this._requestHandler.getMethod("editMessageText", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для редактирования подписей к сообщениям.
   * При успехе, если отредактированное сообщение не является встроенным,
   * возвращается отредактированное сообщение, в противном случае возвращается True.
   *
   * Use this method to edit captions of messages.
   * On success, if the edited message is not an inline message,
   * the edited Message is returned, otherwise True is returned.
   * @see {@link https://core.telegram.org/bots/api#editmessagecaption}
   */
  public async editMessageCaption(requestData: IEditMessageCaption): Promise<IMessage> {
    let data = await this._requestHandler.getMethod("editMessageCaption", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для редактирования анимации, аудио, документов, фото или видео сообщений.
   * Если сообщение является частью альбома сообщений, то его можно отредактировать только на аудио для аудиоальбомов,
   * только на документ для документальных альбомов и на фотографию или видео в противном случае.
   * Когда редактируется встроенное сообщение, новый файл не может быть загружен;
   * используйте ранее загруженный файл через его file_id или укажите URL.
   * При успешном выполнении, если отредактированное сообщение не является встроенным,
   * возвращается отредактированное сообщение, в противном случае возвращается True.
   *
   * Use this method to edit animation, audio, document, photo, or video messages.
   * If a message is part of a message album, then it can be edited only to an audio for audio albums,
   * only to a document for document albums and to a photo or a video otherwise.
   * When an inline message is edited, a new file can't be uploaded;
   * use a previously uploaded file via its file_id or specify a URL.
   * On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.
   * @see {@link https://core.telegram.org/bots/api#editmessagemedia}
   */
  public async editMessageMedia(requestData: IEditMessageMedia): Promise<IMessage> {
    let data = await this._requestHandler.getMethod("editMessageMedia", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для редактирования сообщений о живом местоположении.
   * Местоположение можно редактировать до истечения срока жизни live_period или до явного отключения редактирования
   * с помощью вызова stopMessageLiveLocation.
   * При успешном выполнении, если отредактированное сообщение не является встроенным,
   * возвращается отредактированное сообщение, в противном случае возвращается True.
   *
   * Use this method to edit live location messages.
   * A location can be edited until its live_period expires or editing is explicitly disabled by a call to stopMessageLiveLocation.
   * On success, if the edited message is not an inline message, the edited Message is returned, otherwise True is returned.
   * @see {@link https://core.telegram.org/bots/api#editmessagelivelocation}
   */
  public async editMessageLiveLocation(requestData: IEditMessageLiveLocation): Promise<IMessage> {
    let data = await this._requestHandler.getMethod("editMessageLiveLocation", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод, чтобы остановить обновление сообщения о живом местоположении
   * до истечения live_period. При успешном выполнении, если сообщение не является встроенным,
   * возвращается отредактированное сообщение, в противном случае возвращается True.
   *
   * Use this method to stop updating a live location message before live_period expires.
   * On success, if the message is not an inline message, the edited Message is returned, otherwise True is returned.
   * @see {@link https://core.telegram.org/bots/api#stopmessagelivelocation}
   */
  public async stopMessageLiveLocation(requestData: IStopMessageLiveLocation): Promise<IMessage> {
    let data = await this._requestHandler.getMethod("stopMessageLiveLocation", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод, чтобы редактировать только разметку ответа сообщений.
   * При успешном выполнении, если отредактированное сообщение не является встроенным,
   * возвращается отредактированное сообщение, в противном случае возвращается True.
   *
   * Use this method to edit only the reply markup of messages.
   * On success, if the edited message is not an inline message, the edited Message is returned,
   * otherwise True is returned.
   * @see {@link https://core.telegram.org/bots/api#editmessagereplymarkup}
   */
  public async editMessageReplyMarkup(requestData: IEditMessageReplyMarkup): Promise<IMessage> {
    let data = await this._requestHandler.getMethod("editMessageReplyMarkup", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод, чтобы остановить опрос, отправленный ботом.
   * При успешном выполнении возвращается остановленный опрос.
   *
   * Use this method to stop a poll which was sent by the bot.
   * On success, the stopped Poll is returned.
   * @see {@link https://core.telegram.org/bots/api#stoppoll}
   */
  public async stopPoll(requestData: IStopPoll): Promise<IPoll> {
    let data = await this._requestHandler.getMethod("stopPoll", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод, чтобы удалить сообщение, включая служебные сообщения,
   * с определенными ограничениями:
   * - Сообщение можно удалить только если оно было отправлено менее 48 часов назад.
   * - Служебные сообщения о создании супергруппы, канала или темы форума не могут быть удалены.
   * - Сообщение с кубиком в личном чате можно удалить только если оно было отправлено более 24 часов назад.
   * - Боты могут удалять исходящие сообщения в личных чатах, группах и супергруппах.
   * - Боты могут удалять входящие сообщения в личных чатах.
   * - Боты, получившие разрешение can_post_messages, могут удалять исходящие сообщения в каналах.
   * - Если бот является администратором группы, он может удалить любое сообщение там.
   * - Если у бота есть разрешение can_delete_messages в супергруппе или канале,
   *   он может удалить любое сообщение там.
   * Возвращает True в случае успешного выполнения.
   *
   * Use this method to delete a message, including service messages, with the following limitations:
   * - A message can only be deleted if it was sent less than 48 hours ago.
   * - Service messages about a supergroup, channel, or forum topic creation can't be deleted.
   * - A dice message in a private chat can only be deleted if it was sent more than 24 hours ago.
   * - Bots can delete outgoing messages in private chats, groups, and supergroups.
   * - Bots can delete incoming messages in private chats.
   * - Bots granted can_post_messages permissions can delete outgoing messages in channels.
   * - If the bot is an administrator of a group, it can delete any message there.
   * - If the bot has can_delete_messages permission in a supergroup or a channel,
   *   it can delete any message there.
   * Returns True on success.
   * @see {@link https://core.telegram.org/bots/api#deletemessage}
   */
  public async deleteMessage(requestData: IDeleteMessage): Promise<any> {
    let data = await this._requestHandler.getMethod("deleteMessage", requestData);
    return data.result;
  }

  // STICKERS  ----------------------------------------------------------------

  /**
   * Используйте этот метод для отправки статических .WEBP, анимированных .TGS или видео .WEBM стикеров. При успехе возвращается отправленное сообщение.
   *
   * Use this method to send static .WEBP, animated .TGS, or video .WEBM stickers. On success, the sent Message is returned.
   * @see {@link https://core.telegram.org/bots/api#sendsticker}
   */
  public async sendSticker(requestData: ISendSticker): Promise<IMessage> {
    let data = await this._requestHandler.getMethod("sendSticker", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для получения набора стикеров. При успехе возвращается объект StickerSet.
   *
   * Use this method to get a sticker set. On success, a StickerSet object is returned.
   * @see {@link https://core.telegram.org/bots/api#getstickerset}
   */
  public async getStickerSet(requestData: IGetStickerSet): Promise<IStickerSet> {
    let data = await this._requestHandler.getMethod("getStickerSet", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для получения информации о персонализированных стикерах с помощью их идентификаторов. Возвращает массив объектов Sticker.
   *
   * Use this method to get information about custom emoji stickers by their identifiers. Returns an Array of Sticker objects.
   * @see {@link https://core.telegram.org/bots/api#getcustomemojistickers}
   */
  public async getCustomEmojiStickers(requestData: IGetCustomEmojiStickers): Promise<ISticker> {
    let data = await this._requestHandler.getMethod("getCustomEmojiStickers", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для загрузки файла стикера для последующего использования в методах createNewStickerSet и addStickerToSet (файл можно использовать несколько раз). В случае успеха возвращается загруженный файл.
   *
   * Use this method to upload a file with a sticker for later use in the createNewStickerSet and addStickerToSet methods (the file can be used multiple times). Returns the uploaded File on success.
   * @see {@link https://core.telegram.org/bots/api#uploadstickerfile}
   */
  public async uploadStickerFile(requestData: IUploadStickerFile): Promise<IFile> {
    let data = await this._requestHandler.getMethod("uploadStickerFile", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для создания нового набора стикеров, принадлежащего пользователю. Бот сможет редактировать созданный набор стикеров. При успехе возвращается True.
   *
   * Use this method to create a new sticker set owned by a user. The bot will be able to edit the sticker set thus created. Returns True on success.
   * @see {@link https://core.telegram.org/bots/api#createnewstickerset}
   */
  public async createNewStickerSet(requestData: ICreateNewStickerSet): Promise<any> {
    let data = await this._requestHandler.getMethod("createNewStickerSet", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для добавления нового стикера в набор, созданный ботом. Формат добавленного стикера должен соответствовать формату других стикеров в наборе. В наборе стикеров с emoji может быть до 200 стикеров. Анимированные и видеостикеры могут содержать до 50 стикеров. Статические стикеры могут содержать до 120 стикеров. При успехе возвращается True.
   *
   * Use this method to add a new sticker to a set created by the bot. The format of the added sticker must match the format of the other stickers in the set. Emoji sticker sets can have up to 200 stickers. Animated and video sticker sets can have up to 50 stickers. Static sticker sets can have up to 120 stickers. Returns True on success.
   * @see {@link https://core.telegram.org/bots/api#addstickertoset}
   */
  public async addStickerToSet(requestData: IAddStickerToSet): Promise<any> {
    let data = await this._requestHandler.getMethod("addStickerToSet", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для перемещения стикера в наборе, созданном ботом, на определенную позицию. При успехе возвращается True.
   *
   * Use this method to move a sticker in a set created by the bot to a specific position. Returns True on success.
   * @see {@link https://core.telegram.org/bots/api#setstickerpositioninset}
   */
  public async setStickerPositionInSet(requestData: ISetStickerPositionInSet): Promise<any> {
    let data = await this._requestHandler.getMethod("setStickerPositionInSet", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для удаления стикера из набора, созданного ботом. При успехе возвращается True.
   *
   * Use this method to delete a sticker from a set created by the bot. Returns True on success.
   * @see {@link https://core.telegram.org/bots/api#deletestickerfromset}
   */
  public async deleteStickerFromSet(requestData: IDeleteStickerFromSet): Promise<any> {
    let data = await this._requestHandler.getMethod("deleteStickerFromSet", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для изменения списка эмодзи, назначенных обычному или кастомному эмодзи-стикеру.
   * Стикер должен принадлежать набору, созданному ботом. При успехе возвращается True.
   *
   * Use this method to change the list of emoji assigned to a regular or custom emoji sticker. The sticker must belong to a sticker set created by the bot. Returns True on success.
   * @see {@link https://core.telegram.org/bots/api#setstickeremojilist}
   */
  public async setStickerEmojiList(requestData: ISetStickerEmojiList): Promise<any> {
    let data = await this._requestHandler.getMethod("setStickerEmojiList", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для изменения ключевых слов поиска, назначенных обычному или кастомному эмодзи-стикеру.
   * Стикер должен принадлежать набору, созданному ботом. При успехе возвращается True.
   *
   * Use this method to change search keywords assigned to a regular or custom emoji sticker. The sticker must belong to a sticker set created by the bot. Returns True on success.
   * @see {@link https://core.telegram.org/bots/api#setstickerkeywords}
   */
  public async setStickerKeywords(requestData: ISetStickerKeywords): Promise<any> {
    let data = await this._requestHandler.getMethod("setStickerKeywords", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для изменения позиции маски маскировочного стикера. Стикер должен принадлежать набору, созданному ботом. При успехе возвращается True.
   *
   * Use this method to change the mask position of a mask sticker. The sticker must belong to a sticker set that was created by the bot. Returns True on success.
   * @see {@link https://core.telegram.org/bots/api#setstickermaskposition}
   */
  public async setStickerMaskPosition(requestData: ISetStickerMaskPosition): Promise<any> {
    let data = await this._requestHandler.getMethod("setStickerMaskPosition", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для установки заголовка созданного набора стикеров. При успехе возвращается True.
   *
   * Use this method to set the title of a created sticker set. Returns True on success.
   * @see {@link https://core.telegram.org/bots/api#setstickersettitle}
   */
  public async setStickerSetTitle(requestData: ISetStickerSetTitle): Promise<any> {
    let data = await this._requestHandler.getMethod("setStickerSetTitle", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для установки обложки обычного или маскирующего набора стикеров. Формат файла обложки должен соответствовать формату стикеров в наборе. При успехе возвращается True.
   *
   * Use this method to set the thumbnail of a regular or mask sticker set. The format of the thumbnail file must match the format of the stickers in the set. Returns True on success.
   * @see {@link https://core.telegram.org/bots/api#setstickersetthumbnail}
   */
  public async setStickerSetThumbnail(requestData: ISetStickerSetThumbnail): Promise<any> {
    let data = await this._requestHandler.getMethod("setStickerSetThumbnail", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для установки обложки для набора стикеров с кастомными эмодзи. При успехе возвращается True.
   *
   * Use this method to set the thumbnail of a custom emoji sticker set. Returns True on success.
   * @see {@link https://core.telegram.org/bots/api#setcustomemojistickersetthumbnail}
   */
  public async setCustomEmojiStickerSetThumbnail(requestData: ISetCustomEmojiStickerSetThumbnail): Promise<any> {
    let data = await this._requestHandler.getMethod("setCustomEmojiStickerSetThumbnail", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для удаления набора стикеров, созданного ботом. При успехе возвращается True.
   *
   * Use this method to delete a sticker set that was created by the bot. Returns True on success.
   * @see {@link https://core.telegram.org/bots/api#deletestickerset}
   */
  public async deleteStickerSet(requestData: IDeleteStickerSet): Promise<any> {
    let data = await this._requestHandler.getMethod("deleteStickerSet", requestData);
    return data.result;
  }

  // INLINE  ----------------------------------------------------------------

  /**
   * Используйте этот метод для отправки ответов на запросы встроенного поиска. При успехе возвращается True.
   * Не более 50 результатов для каждого запроса допускается.
   *
   * Use this method to send answers to an inline query. On success, True is returned.
   * No more than 50 results per query are allowed.
   * @see {@link https://core.telegram.org/bots/api#answerinlinequery}
   */
  public async answerInlineQuery(requestData: IAnswerInlineQuery): Promise<any> {
    let data = await this._requestHandler.getMethod("answerInlineQuery", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для установки результата взаимодействия с веб-приложением и отправки соответствующего сообщения от имени пользователя в чате, откуда произошел запрос. При успехе возвращается объект SentWebAppMessage.
   *
   * Use this method to set the result of an interaction with a Web App and send a corresponding message on behalf of the user to the chat from which the query originated. On success, a SentWebAppMessage object is returned.
   * @see {@link https://core.telegram.org/bots/api#answerwebappquery}
   */
  public async answerWebAppQuery(requestData: IAnswerWebAppQuery): Promise<any> {
    let data = await this._requestHandler.getMethod("answerWebAppQuery", requestData);
    return data.result;
  }

  // PAYMENTS  ----------------------------------------------------------------

  /**
   * Используйте этот метод для отправки счетов. При успехе возвращается отправленное сообщение.
   *
   * Use this method to send invoices. On success, the sent Message is returned.
   *
   * @see {@link https://core.telegram.org/bots/api#sendinvoice}
   */
  public async sendInvoice(requestData: ISendInvoice): Promise<IMessage> {
    let data = await this._requestHandler.getMethod("sendInvoice", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для создания ссылки на инвойс.
   * При успехе возвращается созданная ссылка на инвойс в виде строки.
   *
   * Use this method to create a link for an invoice.
   * Returns the created invoice link as String on success.
   * @see {@link https://core.telegram.org/bots/api#createinvoicelink}
   */
  public async createInvoiceLink(requestData: ICreateInvoiceLink): Promise<any> {
    let data = await this._requestHandler.getMethod("createInvoiceLink", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для ответа на запросы о доставке.
   * Если вы отправили счет с запросом адреса доставки и был указан параметр is_flexible, Bot API отправит обновление с полем shipping_query боту.
   * При успехе возвращается True.
   *
   * Use this method to reply to shipping queries.
   * If you sent an invoice requesting a shipping address and the parameter is_flexible was specified,
   * the Bot API will send an Update with a shipping_query field to the bot.
   * On success, True is returned.
   * @see {@link https://core.telegram.org/bots/api#answershippingquery}
   */
  public async answerShippingQuery(requestData: IAnswerShippingQuery): Promise<any> {
    let data = await this._requestHandler.getMethod("answerShippingQuery", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для ответа на предварительные запросы о проверке.
   * После того, как пользователь подтвердил свои платежные и доставочные данные,
   * Bot API отправляет окончательное подтверждение в виде обновления с полем pre_checkout_query.
   * При успехе возвращается True.
   * Примечание: Bot API должен получить ответ в течение 10 секунд после отправки предварительного запроса о проверке.
   *
   * Use this method to respond to pre-checkout queries.
   * Once the user has confirmed their payment and shipping details,
   * the Bot API sends the final confirmation in the form of an Update with the field pre_checkout_query.
   * On success, True is returned.
   * Note: The Bot API must receive an answer within 10 seconds after the pre-checkout query was sent.
   * @see {@link https://core.telegram.org/bots/api#answerprecheckoutquery}
   */
  public async answerPreCheckoutQuery(requestData: IAnswerPreCheckoutQuery): Promise<any> {
    let data = await this._requestHandler.getMethod("answerPreCheckoutQuery", requestData);
    return data.result;
  }

  // PASSPORT  ----------------------------------------------------------------

  /**
   * Используйте этот метод, чтобы уведомить пользователя о том, что некоторые из предоставленных им элементов Telegram Passport содержат ошибки. Пользователь не сможет повторно отправить свой Passport вам, пока ошибки не будут исправлены (содержимое поля, для которого была возвращена ошибка, должно измениться). Возвращает True в случае успеха.
   *
   * Use this method to inform a user that some of the Telegram Passport elements they provided contain errors. The user will not be able to re-submit their Passport to you until the errors are fixed (the contents of the field for which you returned the error must change). Returns True on success.
   *
   * @see {@link https://core.telegram.org/bots/api#setpassportdataerrors}
   */
  public async setPassportDataErrors(requestData: ISetPassportDataErrors): Promise<any> {
    let data = await this._requestHandler.getMethod("setPassportDataErrors", requestData);
    return data.result;
  }

  // GAMES  --------------------------------------------------------------------

  /**
   * Используйте этот метод для отправки игры. При успехе возвращается отправленное сообщение.
   *
   * Use this method to send a game. On success, the sent Message is returned.
   * @see {@link https://core.telegram.org/bots/api#sendgame}
   */
  public async sendGame(requestData: ISendGame): Promise<IMessage> {
    let data = await this._requestHandler.getMethod("sendGame", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для установки счета указанного пользователя в сообщении игры.
   * При успехе, если сообщение не является встроенным, возвращается отправленное сообщение.
   * В противном случае возвращается True. Возвращает ошибку, если новый счет не больше текущего счета пользователя в чате,
   * и force равно False.
   *
   * Use this method to set the score of the specified user in a game message. On success, if the message is not an inline message,
   * the Message is returned, otherwise True is returned. Returns an error, if the new score is not greater than the user's
   * current score in the chat and force is False.
   * @see {@link https://core.telegram.org/bots/api#setgamescore}
   */
  public async setGameScore(requestData: ISetGameScore): Promise<IMessage> {
    let data = await this._requestHandler.getMethod("setGameScore", requestData);
    return data.result;
  }

  /**
   * Используйте этот метод для получения данных таблиц высоких счетов.
   * Вернет счет указанного пользователя и нескольких его соседей в игре.
   * Возвращает массив объектов GameHighScore.
   *
   * Use this method to get data for high score tables. Will return the score of the specified user
   * and several of their neighbors in a game. Returns an Array of GameHighScore objects.
   * @see {@link https://core.telegram.org/bots/api#getgamehighscores}
   */
  public async getGameHighScores(requestData: IGetGameHighScores): Promise<IGameHighScore[]> {
    let data = await this._requestHandler.getMethod("getGameHighScores", requestData);
    return data.result;
  }
}
