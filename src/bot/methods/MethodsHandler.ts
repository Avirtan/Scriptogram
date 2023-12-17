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
  IMenuButton,
  IMessage,
  IMessageId,
  IUserProfilePhotos,
} from "../types";
import { ISticker } from "../types/sticker/ISticker";
import { RequestHandler } from "../utils/RequestHandler";
import {
  IAnswerCallbackQuery,
  IApproveChatJoinRequest,
  IBanChatMember,
  IBanChatSenderChat,
  ICloseForumTopic,
  ICloseGeneralForumTopic,
  ICopyMessage,
  ICreateChatInviteLink,
  ICreateForumTopic,
  IDeclineChatJoinRequest,
  IDeleteChatPhoto,
  IDeleteChatStickerSet,
  IEditChatInviteLink,
  IEditForumTopic,
  IEditGeneralForumTopic,
  IExportChatInviteLink,
  IForwardMessage,
  IGetChat,
  IGetChatAdministrators,
  IGetChatMemberCount,
  IGetChatMenuButton,
  IGetFile,
  IGetMyDefaultAdministratorRights,
  IGetMyDescription,
  IGetMyShortDescription,
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
  ISendContact,
  ISendDice,
  ISendDocument,
  ISendLocation,
  ISendMediaGroup,
  ISendMessage,
  ISendPhoto,
  ISendPoll,
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
  ISetMyCommands,
  ISetMyDefaultAdministratorRights,
  ISetMyDescription,
  ISetMyShortDescription,
  IUnbanChatMember,
  IUnbanChatSenderChat,
  IUnhideGeneralForumTopic,
  IUnpinAllChatMessages,
  IUnpinAllForumTopicMessages,
  IUnpinAllGeneralForumTopicMessages,
  IUnpinChatMessage,
} from "./types";
import { IGetChatMember } from "./types/chat/IGetChatMember";
import { ISendChatAction } from "./types/chat/ISendChatAction";

export class MethodHandler {
  private _requestHandler: RequestHandler;
  constructor(requestHandler: RequestHandler) {
    this._requestHandler = requestHandler;
  }

  public async getMe(): Promise<any> {
    let data = await this._requestHandler.getMethod("getMe");
    return data;
  }

  //https://core.telegram.org/bots/api#sendmessage
  public async sendMessage(requestData: ISendMessage): Promise<IMessage> {
    let data = await this._requestHandler.getMethod("sendMessage", requestData);
    return data.result;
  }

  //https://core.telegram.org/bots/api#forwardmessage
  public async forwardMessage(requestData: IForwardMessage): Promise<IMessage> {
    let data = await this._requestHandler.getMethod("forwardMessage", requestData);
    return data.result;
  }

  //https://core.telegram.org/bots/api#copymessage
  public async copyMessage(requestData: ICopyMessage): Promise<IMessageId> {
    let data = await this._requestHandler.getMethod("copyMessage", requestData);
    return data.result;
  }

  //https://core.telegram.org/bots/api#sendphoto
  public async sendPhoto(requestData: ISendPhoto): Promise<IMessage> {
    let data = await this._requestHandler.getMethod("sendPhoto", requestData);
    return data.result;
  }

  //https://core.telegram.org/bots/api#sendaudio
  public async sendAudio(requestData: ISendAudio): Promise<IMessage> {
    let data = await this._requestHandler.getMethod("sendAudio", requestData);
    return data.result;
  }

  //https://core.telegram.org/bots/api#senddocument
  public async sendDocument(requestData: ISendDocument): Promise<IMessage> {
    let data = await this._requestHandler.getMethod("sendDocument", requestData);
    return data.result;
  }

  //https://core.telegram.org/bots/api#sendvideo
  public async sendVideo(requestData: ISendVideo): Promise<IMessage> {
    let data = await this._requestHandler.getMethod("sendVideo", requestData);
    return data.result;
  }

  //https://core.telegram.org/bots/api#sendanimation
  public async sendAnimation(requestData: ISendAnimation): Promise<IMessage> {
    let data = await this._requestHandler.getMethod("sendAnimation", requestData);
    return data.result;
  }

  //https://core.telegram.org/bots/api#sendvoice
  public async sendVoice(requestData: ISendVideo): Promise<IMessage> {
    let data = await this._requestHandler.getMethod("sendVoice", requestData);
    return data.result;
  }

  //https://core.telegram.org/bots/api#sendvideonote
  public async sendVideonote(requestData: ISendVideoNote): Promise<IMessage> {
    let data = await this._requestHandler.getMethod("sendVideoNote", requestData);
    return data.result;
  }

  //https://core.telegram.org/bots/api#sendmediagroup
  public async sendMediagroup(requestData: ISendMediaGroup): Promise<IMessage> {
    let data = await this._requestHandler.getMethod("sendMediaGroup", requestData);
    return data.result;
  }

  //https://core.telegram.org/bots/api#sendlocation
  public async sendLocation(requestData: ISendLocation): Promise<IMessage> {
    let data = await this._requestHandler.getMethod("sendLocation", requestData);
    return data.result;
  }

  //https://core.telegram.org/bots/api#sendvenue
  public async sendVenue(requestData: ISendVenue): Promise<IMessage> {
    let data = await this._requestHandler.getMethod("sendVenue", requestData);
    return data.result;
  }

  //https://core.telegram.org/bots/api#sendcontact
  public async sendContact(requestData: ISendContact): Promise<IMessage> {
    let data = await this._requestHandler.getMethod("sendContact", requestData);
    return data.result;
  }

  //https://core.telegram.org/bots/api#sendpoll
  public async sendPoll(requestData: ISendPoll): Promise<IMessage> {
    let data = await this._requestHandler.getMethod("sendPoll", requestData);
    return data.result;
  }

  //https://core.telegram.org/bots/api#senddice
  public async sendDice(requestData: ISendDice): Promise<IMessage> {
    let data = await this._requestHandler.getMethod("sendDice", requestData);
    return data.result;
  }

  //https://core.telegram.org/bots/api#sendchataction
  public async sendChatAction(requestData: ISendChatAction): Promise<any> {
    let data = await this._requestHandler.getMethod("sendChatAction", requestData);
    return data;
  }

  //https://core.telegram.org/bots/api#getuserprofilephotos
  public async getUserProfilePhotos(
    requestData: IGetUserProfilePhotos
  ): Promise<IUserProfilePhotos> {
    let data = await this._requestHandler.getMethod("getUserProfilePhotos", requestData);
    return data.result;
  }

  //https://core.telegram.org/bots/api#getfile
  public async getFile(requestData: IGetFile): Promise<IFile> {
    let data = await this._requestHandler.getMethod("getFile", requestData);
    return data.result;
  }

  //https://core.telegram.org/bots/api#banchatmember
  public async banChatMember(requestData: IBanChatMember): Promise<any> {
    let data = await this._requestHandler.getMethod("banChatMember", requestData);
    return data.result;
  }

  //https://core.telegram.org/bots/api#unbanchatmember
  public async unbanChatMember(requestData: IUnbanChatMember): Promise<any> {
    let data = await this._requestHandler.getMethod("unbanChatMember", requestData);
    return data.result;
  }

  //https://core.telegram.org/bots/api#restrictchatmember
  public async restrictChatMember(requestData: IRestrictChatMember): Promise<any> {
    let data = await this._requestHandler.getMethod("unbanChatMember", requestData);
    return data.result;
  }

  //https://core.telegram.org/bots/api#promotechatmember
  public async promoteChatMember(requestData: IPromoteChatMember): Promise<any> {
    let data = await this._requestHandler.getMethod("promoteChatMember", requestData);
    return data.result;
  }

  //https://core.telegram.org/bots/api#setchatadministratorcustomtitle
  public async setChatAdministratorCustomTitle(
    requestData: ISetChatAdministratorCustomTitle
  ): Promise<any> {
    let data = await this._requestHandler.getMethod("setChatAdministratorCustomTitle", requestData);
    return data.result;
  }

  //https://core.telegram.org/bots/api#banchatsenderchat
  public async banChatSenderChat(requestData: IBanChatSenderChat): Promise<any> {
    let data = await this._requestHandler.getMethod("banChatSenderChat", requestData);
    return data.result;
  }

  //https://core.telegram.org/bots/api#unbanchatsenderchat
  public async unbanChatSenderChat(requestData: IUnbanChatSenderChat): Promise<any> {
    let data = await this._requestHandler.getMethod("unbanChatSenderChat", requestData);
    return data.result;
  }

  //https://core.telegram.org/bots/api#setchatpermissions
  public async setChatPermissions(requestData: ISetChatPermissions): Promise<any> {
    let data = await this._requestHandler.getMethod("setChatPermissions", requestData);
    return data.result;
  }

  //https://core.telegram.org/bots/api#exportchatinvitelink
  public async exportChatInviteLink(requestData: IExportChatInviteLink): Promise<any> {
    let data = await this._requestHandler.getMethod("exportChatInviteLink", requestData);
    return data.result;
  }

  //https://core.telegram.org/bots/api#createchatinvitelink
  public async createChatInviteLink(requestData: ICreateChatInviteLink): Promise<any> {
    let data = await this._requestHandler.getMethod("createChatInviteLink", requestData);
    return data.result;
  }

  //https://core.telegram.org/bots/api#editchatinvitelink
  public async editChatInviteLink(requestData: IEditChatInviteLink): Promise<IChatInviteLink> {
    let data = await this._requestHandler.getMethod("editChatInviteLink", requestData);
    return data.result;
  }

  //https://core.telegram.org/bots/api#revokechatinvitelink
  public async revokeChatInviteLink(requestData: IRevokeChatInviteLink): Promise<IChatInviteLink> {
    let data = await this._requestHandler.getMethod("revokeChatInviteLink", requestData);
    return data.result;
  }

  //hhttps://core.telegram.org/bots/api#approvechatjoinrequest
  public async approveChatJoinRequest(requestData: IApproveChatJoinRequest): Promise<any> {
    let data = await this._requestHandler.getMethod("approveChatJoinRequest", requestData);
    return data.result;
  }

  //https://core.telegram.org/bots/api#declinechatjoinrequest
  public async declineChatJoinRequest(requestData: IDeclineChatJoinRequest): Promise<any> {
    let data = await this._requestHandler.getMethod("declineChatJoinRequest", requestData);
    return data.result;
  }

  //https://core.telegram.org/bots/api#setchatphoto
  public async setChatPhoto(requestData: ISetChatPhoto): Promise<any> {
    let data = await this._requestHandler.getMethod("setChatPhoto", requestData);
    return data.result;
  }

  //https://core.telegram.org/bots/api#deletechatphoto
  public async deleteChatPhoto(requestData: IDeleteChatPhoto): Promise<any> {
    let data = await this._requestHandler.getMethod("deleteChatPhoto", requestData);
    return data.result;
  }

  //https://core.telegram.org/bots/api#setchattitle
  public async setChatTitle(requestData: ISetChatTitle): Promise<any> {
    let data = await this._requestHandler.getMethod("setChatTitle", requestData);
    return data.result;
  }

  //https://core.telegram.org/bots/api#setchatdescription
  public async setChatDescription(requestData: ISetChatDescription): Promise<any> {
    let data = await this._requestHandler.getMethod("setChatDescription", requestData);
    return data.result;
  }

  //https://core.telegram.org/bots/api#pinchatmessage
  public async pinChatMessage(requestData: IPinChatMessage): Promise<any> {
    let data = await this._requestHandler.getMethod("pinChatMessage", requestData);
    return data.result;
  }

  //https://core.telegram.org/bots/api#unpinchatmessage
  public async unpinChatMessage(requestData: IUnpinChatMessage): Promise<any> {
    let data = await this._requestHandler.getMethod("unpinChatMessage", requestData);
    return data.result;
  }

  //https://core.telegram.org/bots/api#unpinallchatmessages
  public async unpinAllChatMessages(requestData: IUnpinAllChatMessages): Promise<any> {
    let data = await this._requestHandler.getMethod("unpinAllChatMessages", requestData);
    return data.result;
  }

  //https://core.telegram.org/bots/api#leavechat
  public async leaveChat(requestData: ILeaveChat): Promise<any> {
    let data = await this._requestHandler.getMethod("leaveChat", requestData);
    return data.result;
  }

  //https://core.telegram.org/bots/api#getchat
  public async getChat(requestData: IGetChat): Promise<IChat> {
    let data = await this._requestHandler.getMethod("getChat", requestData);
    return data.result;
  }

  //https://core.telegram.org/bots/api#getchatadministrators
  public async getChatAdministrators(requestData: IGetChatAdministrators): Promise<IChatMember> {
    let data = await this._requestHandler.getMethod("getChatAdministrators", requestData);
    return data.result;
  }

  //https://core.telegram.org/bots/api#getchatmembercount
  public async getChatMemberCount(requestData: IGetChatMemberCount): Promise<any> {
    let data = await this._requestHandler.getMethod("getChatMemberCount", requestData);
    return data.result;
  }

  //https://core.telegram.org/bots/api#getchatmember
  public async getChatMember(requestData: IGetChatMember): Promise<IChatMember> {
    let data = await this._requestHandler.getMethod("getChatMember", requestData);
    return data.result;
  }

  //https://core.telegram.org/bots/api#setchatstickerset
  public async setChatStickerSet(requestData: ISetChatStickerSet): Promise<any> {
    let data = await this._requestHandler.getMethod("setChatStickerSet", requestData);
    return data.result;
  }

  //https://core.telegram.org/bots/api#deletechatstickerset
  public async deleteChatStickerSet(requestData: IDeleteChatStickerSet): Promise<any> {
    let data = await this._requestHandler.getMethod("deleteChatStickerSet", requestData);
    return data.result;
  }

  //https://core.telegram.org/bots/api#getforumtopiciconstickers
  public async getForumTopicIconStickers(): Promise<ISticker[]> {
    let data = await this._requestHandler.getMethod("getForumTopicIconStickers");
    return data.result;
  }

  //https://core.telegram.org/bots/api#createforumtopic
  public async createForumTopic(requestData: ICreateForumTopic): Promise<IForumTopic> {
    let data = await this._requestHandler.getMethod("createForumTopic", requestData);
    return data.result;
  }

  //https://core.telegram.org/bots/api#editforumtopic
  public async editForumTopic(requestData: IEditForumTopic): Promise<any> {
    let data = await this._requestHandler.getMethod("editForumTopic", requestData);
    return data.result;
  }

  //https://core.telegram.org/bots/api#closeforumtopic
  public async closeForumTopic(requestData: ICloseForumTopic): Promise<any> {
    let data = await this._requestHandler.getMethod("closeForumTopic", requestData);
    return data.result;
  }

  //https://core.telegram.org/bots/api#reopenforumtopic
  public async reopenForumTopic(requestData: IReopenForumTopic): Promise<any> {
    let data = await this._requestHandler.getMethod("reopenForumTopic", requestData);
    return data.result;
  }

  //https://core.telegram.org/bots/api#deleteforumtopic
  public async deleteForumTopic(requestData: IReopenForumTopic): Promise<any> {
    let data = await this._requestHandler.getMethod("deleteForumTopic", requestData);
    return data.result;
  }

  //https://core.telegram.org/bots/api#unpinallforumtopicmessages
  public async unpinAllForumTopicMessages(requestData: IUnpinAllForumTopicMessages): Promise<any> {
    let data = await this._requestHandler.getMethod("unpinAllForumTopicMessages", requestData);
    return data.result;
  }

  //https://core.telegram.org/bots/api#editgeneralforumtopic
  public async editGeneralForumTopic(requestData: IEditGeneralForumTopic): Promise<any> {
    let data = await this._requestHandler.getMethod("editGeneralForumTopic", requestData);
    return data.result;
  }

  //https://core.telegram.org/bots/api#closegeneralforumtopic
  public async closeGeneralForumTopic(requestData: ICloseGeneralForumTopic): Promise<any> {
    let data = await this._requestHandler.getMethod("closeGeneralForumTopic", requestData);
    return data.result;
  }

  //https://core.telegram.org/bots/api#reopengeneralforumtopic
  public async reopenGeneralForumTopic(requestData: IReopenGeneralForumTopic): Promise<any> {
    let data = await this._requestHandler.getMethod("reopenGeneralForumTopic", requestData);
    return data.result;
  }

  //https://core.telegram.org/bots/api#hidegeneralforumtopic
  public async hideGeneralForumTopic(requestData: IHideGeneralForumTopic): Promise<any> {
    let data = await this._requestHandler.getMethod("hideGeneralForumTopic", requestData);
    return data.result;
  }

  //https://core.telegram.org/bots/api#unhidegeneralforumtopic
  public async unhideGeneralForumTopic(requestData: IUnhideGeneralForumTopic): Promise<any> {
    let data = await this._requestHandler.getMethod("unhideGeneralForumTopic", requestData);
    return data.result;
  }

  //https://core.telegram.org/bots/api#unpinallgeneralforumtopicmessages
  public async unpinAllGeneralForumTopicMessages(
    requestData: IUnpinAllGeneralForumTopicMessages
  ): Promise<any> {
    let data = await this._requestHandler.getMethod(
      "unpinAllGeneralForumTopicMessages",
      requestData
    );
    return data.result;
  }

  //https://core.telegram.org/bots/api#answercallbackquery
  public async answerCallbackQuery(requestData: IAnswerCallbackQuery): Promise<any> {
    let data = await this._requestHandler.getMethod("answerCallbackQuery", requestData);
    return data.result;
  }

  //https://core.telegram.org/bots/api#setmycommands
  public async setMyCommands(requestData: ISetMyCommands): Promise<any> {
    let data = await this._requestHandler.getMethod("setMyCommands", requestData);
    return data.result;
  }

  //https://core.telegram.org/bots/api#deletemycommands
  public async deleteMyCommands(requestData: ISetMyCommands): Promise<any> {
    let data = await this._requestHandler.getMethod("deleteMyCommands", requestData);
    return data.result;
  }

  //https://core.telegram.org/bots/api#getmycommands
  public async getMyCommands(requestData: ISetMyCommands): Promise<IBotCommand[]> {
    let data = await this._requestHandler.getMethod("getMyCommands", requestData);
    return data.result;
  }

  //https://core.telegram.org/bots/api#setmyname
  public async setMyName(requestData: ISetMyCommands): Promise<any> {
    let data = await this._requestHandler.getMethod("setMyName", requestData);
    return data.result;
  }

  //https://core.telegram.org/bots/api#getmyname
  public async getMyName(requestData: ISetMyCommands): Promise<IBotName> {
    let data = await this._requestHandler.getMethod("getMyName", requestData);
    return data.result;
  }

  //https://core.telegram.org/bots/api#setmydescription
  public async setMyDescription(requestData: ISetMyDescription): Promise<any> {
    let data = await this._requestHandler.getMethod("setMyDescription", requestData);
    return data.result;
  }

  //https://core.telegram.org/bots/api#getmydescription
  public async getMyDescription(requestData: IGetMyDescription): Promise<IBotDescription> {
    let data = await this._requestHandler.getMethod("getMyDescription", requestData);
    return data.result;
  }

  //https://core.telegram.org/bots/api#setmyshortdescription
  public async setMyShortDescription(requestData: ISetMyShortDescription): Promise<any> {
    let data = await this._requestHandler.getMethod("setMyShortDescription", requestData);
    return data.result;
  }

  //https://core.telegram.org/bots/api#getmyshortdescription
  public async getMyShortDescription(
    requestData: IGetMyShortDescription
  ): Promise<IBotShortDescription> {
    let data = await this._requestHandler.getMethod("getMyShortDescription", requestData);
    return data.result;
  }

  //https://core.telegram.org/bots/api#setchatmenubutton
  public async setChatMenuButton(requestData: ISetChatMenuButton): Promise<any> {
    let data = await this._requestHandler.getMethod("setChatMenuButton", requestData);
    return data.result;
  }

  //https://core.telegram.org/bots/api#getchatmenubutton
  public async getChatMenuButton(requestData: IGetChatMenuButton): Promise<IMenuButton> {
    let data = await this._requestHandler.getMethod("getChatMenuButton", requestData);
    return data.result;
  }

  //https://core.telegram.org/bots/api#setmydefaultadministratorrights
  public async setMyDefaultAdministratorRights(
    requestData: ISetMyDefaultAdministratorRights
  ): Promise<any> {
    let data = await this._requestHandler.getMethod("setMyDefaultAdministratorRights", requestData);
    return data.result;
  }

  //https://core.telegram.org/bots/api#getmydefaultadministratorrights
  public async getMyDefaultAdministratorRights(
    requestData: IGetMyDefaultAdministratorRights
  ): Promise<IChatAdministratorRights> {
    let data = await this._requestHandler.getMethod("getMyDefaultAdministratorRights", requestData);
    return data.result;
  }
}
