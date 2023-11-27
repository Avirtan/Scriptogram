/**
 * Объект, представляющий сообщение.
 * This object represents a message.
 * @see {@link https://core.telegram.org/bots/api#message}
 */
export interface IMessage {
  /**
   * Уникальный идентификатор сообщения внутри этого чата
   * Unique message identifier inside this chat
   */
  message_id: number;

  /**
   * Опционально. Уникальный идентификатор темы сообщения, к которой принадлежит сообщение; только для супергрупп
   * Optional. Unique identifier of a message thread to which the message belongs; for supergroups only
   */
  message_thread_id?: number;

  /**
   * Опционально. Отправитель сообщения; пусто для сообщений, отправленных в каналы.
   * Для обеспечения обратной совместимости поле содержит фиктивного пользователя-отправителя в чатах, если сообщение было отправлено от имени чата.
   * Optional. Sender of the message; empty for messages sent to channels.
   * For backward compatibility, the field contains a fake sender user in non-channel chats, if the message was sent on behalf of a chat.
   */
  from?: IUser;

  // Добавьте комментарии для остальных полей, аналогично предыдущим
  // ...

  /**
   * Дата отправки сообщения в формате Unix time
   * Date the message was sent in Unix time
   */
  date: number;

  /**
   * Конверсация, к которой принадлежит сообщение
   * Conversation the message belongs to
   */
  chat: IChat;

  /**
   * Опционально. Отправитель исходного сообщения для пересланных сообщений
   * Optional. For forwarded messages, sender of the original message
   */
  forward_from?: IUser;

  /**
   * Опционально. Отправитель исходного сообщения для пересланных сообщений, если они были пересланы из канала
   * Optional. For messages forwarded from channels or from anonymous administrators, information about the original sender chat
   */
  forward_from_chat?: IChat;

  /**
   * Опционально. Идентификатор исходного сообщения для пересланных сообщений из канала
   * Optional. For messages forwarded from channels, identifier of the original message in the channel
   */
  forward_from_message_id?: number;

  /**
   * Опционально. Для пересланных сообщений, подпись отправителя исходного сообщения, если присутствует
   * Optional. For forwarded messages that were originally sent in channels or by an anonymous chat administrator, signature of the message sender if present
   */
  forward_signature?: string;

  /**
   * Опционально. Имя отправителя для пересланных сообщений от пользователей, запрещающих добавление ссылки на их аккаунт в пересланных сообщениях
   * Optional. Sender's name for messages forwarded from users who disallow adding a link to their account in forwarded messages
   */
  forward_sender_name?: string;

  /**
   * Опционально. Для пересланных сообщений, дата отправления исходного сообщения в формате Unix time
   * Optional. For forwarded messages, date the original message was sent in Unix time
   */
  forward_date?: number;

  /**
   * Опционально. True, если сообщение отправлено в тему форума
   * Optional. True, if the message is sent to a forum topic
   */
  is_topic_message?: boolean;

  /**
   * Опционально. True, если сообщение - это пост канала, который автоматически пересылается в связанную группу обсуждения
   * Optional. True, if the message is a channel post that was automatically forwarded to the connected discussion group
   */
  is_automatic_forward?: boolean;

  /**
   * Опционально. Для ответов - исходное сообщение. Обратите внимание, что объект Message в этом поле не будет содержать дополнительных полей reply_to_message, даже если сам он является ответом
   * Optional. For replies, the original message. Note that the Message object in this field will not contain further reply_to_message fields even if it itself is a reply.
   */
  reply_to_message?: IMessage;
  /**
   * Опционально. Бот через который было отправлено сообщение
   * Optional. Bot through which the message was sent
   */
  via_bot?: IUser;

  /**
   * Опционально. Дата последнего редактирования сообщения в формате Unix time
   * Optional. Date the message was last edited in Unix time
   */
  edit_date?: number;

  /**
   * Опционально. True, если сообщение содержит защищенный контент и не может быть переслано
   * Optional. True, if the message can't be forwarded
   */
  has_protected_content?: boolean;

  /**
   * Опционально. Уникальный идентификатор группы медиа-сообщений, к которой принадлежит это сообщение
   * Optional. The unique identifier of a media message group this message belongs to
   */
  media_group_id?: string;

  /**
   * Опционально. Подпись автора сообщения для сообщений в каналах или пользовательского заголовка для анонимного администратора группы
   * Optional. Signature of the post author for messages in channels, or the custom title of an anonymous group administrator
   */
  author_signature?: string;

  /**
   * Опционально. Фактический текст сообщения для текстовых сообщений
   * Optional. For text messages, the actual UTF-8 text of the message
   */
  text?: string;

  /**
   * Опционально. Специальные сущности, такие как имена пользователей, URL, команды бота и т. д., которые присутствуют в тексте
   * Optional. For text messages, special entities like usernames, URLs, bot commands, etc. that appear in the text
   */
  entities?: IMessageEntity[];

  /**
   * Опционально. Анимация, если сообщение - это анимация
   * Optional. Message is an animation, information about the animation. For backward compatibility, when this field is set, the document field will also be set
   */
  animation?: IAnimation;

  /**
   * Опционально. Аудиофайл, если сообщение - это аудиофайл
   * Optional. Message is an audio file, information about the file
   */
  audio?: IAudio;

  /**
   * Опционально. Общий файл, если сообщение - это общий файл
   * Optional. Message is a general file, information about the file
   */
  document?: IDocument;

  /**
   * Опционально. Фотография, если сообщение - это фотография
   * Optional. Message is a photo, available sizes of the photo
   */
  photo?: IPhotoSize[];

  /**
   * Опционально. Стикер, если сообщение - это стикер
   * Optional. Message is a sticker, information about the sticker
   */
  sticker?: ISticker;

  /**
   * Опционально. История, если сообщение - это пересланная история
   * Optional. Message is a forwarded story
   */
  story?: IStory;

  /**
   * Опционально. Видеофайл, если сообщение - это видеофайл
   * Optional. Message is a video, information about the video
   */
  video?: IVideo;

  /**
   * Опционально. Видео-сообщение, если сообщение - это видео-сообщение
   * Optional. Message is a video note, information about the video message
   */
  video_note?: IVideoNote;

  /**
   * Опционально. Голосовое сообщение, если сообщение - это голосовое сообщение
   * Optional. Message is a voice message, information about the file
   */
  voice?: IVoice;

  /**
   * Опционально. Подпись для анимации, аудио, документа, фото, видео или голосового сообщения
   * Optional. Caption for the animation, audio, document, photo, video, or voice
   */
  caption?: string;

  /**
   * Опционально. Специальные сущности, такие как имена пользователей, URL, команды бота и т. д., которые присутствуют в подписи
   * Optional. For messages with a caption, special entities like usernames, URLs, bot commands, etc. that appear in the caption
   */
  caption_entities?: IMessageEntity[];

  /**
   * Опционально. True, если медиа-контент сообщения скрыт анимацией-спойлером
   * Optional. True, if the message media is covered by a spoiler animation
   */
  has_media_spoiler?: boolean;

  /**
   * Опционально. Контакт, если сообщение - это общий контакт
   * Optional. Message is a shared contact, information about the contact
   */
  contact?: IContact;

  /**
   * Опционально. Бросок кубика с случайным значением
   * Optional. Message is a dice with random value
   */
  dice?: IDice;

  /**
   * Опционально. Игра, если сообщение - это игра
   * Optional. Message is a game, information about the game. More about games »
   */
  game?: IGame;

  /**
   * Опционально. Нативное голосование, если сообщение - это нативное голосование
   * Optional. Message is a native poll, information about the poll
   */
  poll?: IPoll;

  /**
   * Опционально. Местоположение, если сообщение - это местоположение
   * Optional. Message is a venue, information about the venue. For backward compatibility, when this field is set, the location field will also be set
   */
  venue?: IVenue;

  /**
   * Опционально. Общее местоположение, если сообщение - это общее местоположение
   * Optional. Message is a shared location, information about the location
   */
  location?: ILocation;

  /**
   * Опционально. Новые участники, добавленные в группу или супергруппу, и информация о них
   * Optional. New members that were added to the group or supergroup and information about them (the bot itself may be one of these members)
   */
  new_chat_members?: IUser[];

  /**
   * Опционально. Участник был удален из группы, информация о нем (этот участник может быть самим ботом)
   * Optional. A member was removed from the group, information about them (this member may be the bot itself)
   */
  left_chat_member?: IUser;

  /**
   * Опционально. Новое название чата
   * Optional. A chat title was changed to this value
   */
  new_chat_title?: string;

  /**
   * Опционально. Новое фото чата
   * Optional. A chat photo was changed to this value
   */
  new_chat_photo?: IPhotoSize[];

  /**
   * Опционально. Сообщение о удалении фото чата
   * Optional. Service message: the chat photo was deleted
   */
  delete_chat_photo?: boolean;

  /**
   * Опционально. Сообщение о создании группы
   * Optional. Service message: the group has been created
   */
  group_chat_created?: boolean;

  /**
   * Опционально. Сообщение о создании супергруппы
   * Optional. Service message: the supergroup has been created.
   */
  supergroup_chat_created?: boolean;

  /**
   * Опционально. Сообщение о создании канала
   * Optional. Service message: the channel has been created.
   */
  channel_chat_created?: boolean;

  /**
   * Опционально. Сообщение о изменении настроек автоудаления сообщений в чате
   * Optional. Service message: auto-delete timer settings changed in the chat
   */
  message_auto_delete_timer_changed?: IMessageAutoDeleteTimerChanged;

  /**
   * Опционально. Идентификатор группы, в которой изменились настройки участия
   * Optional. The group has been migrated to a supergroup with the specified identifier.
   */
  migrate_to_chat_id?: number;

  /**
   * Опционально. Идентификатор группы, из которой изменились настройки участия
   * Optional. The supergroup has been migrated from a group with the specified identifier.
   */
  migrate_from_chat_id?: number;

  /**
   * Опционально. Сообщение, закрепленное на канале или чате
   * Optional. Specified message was pinned.
   */
  pinned_message?: IMessage;

  /**
   * Опционально. Сообщение о счете-фактуре для платежа
   * Optional. Message is an invoice for a payment, information about the invoice.
   */
  invoice?: IInvoice;

  /**
   * Опционально. Сообщение об успешной оплате
   * Optional. Message is a service message about a successful payment, information about the payment.
   */
  successful_payment?: ISuccessfulPayment;

  /**
   * Опционально. Сообщение о переданном пользователе боту
   * Optional. Service message: a user was shared with the bot.
   */
  user_shared?: IUserShared;

  /**
   * Опционально. Сообщение о переданном чате боту
   * Optional. Service message: a chat was shared with the bot.
   */
  chat_shared?: IChatShared;

  /**
   * Опционально. Доменное имя веб-сайта, на котором пользователь вошел
   * Optional. The domain name of the website on which the user has logged in.
   */
  connected_website?: string;

  /**
   * Опционально. Сообщение о предоставлении разрешения на запись сообщений
   * Optional. Service message: the user allowed the bot to write messages after adding it to the attachment or side menu, launching a Web App from a link, or accepting an explicit request from a Web App sent by the method requestWriteAccess.
   */
  write_access_allowed?: IWriteAccessAllowed;

  /**
   * Опционально. Данные Telegram Passport
   * Optional. Telegram Passport data.
   */
  passport_data?: IPassportData;

  /**
   * Опционально. Сообщение о триггере события приближенности
   * Optional. Service message. A user in the chat triggered another user's proximity alert while sharing Live Location.
   */
  proximity_alert_triggered?: IProximityAlertTriggered;

  /**
   * Опционально. Сообщение о создании темы форума
   * Optional. Service message: forum topic created.
   */
  forum_topic_created?: IForumTopicCreated;

  /**
   * Опционально. Сообщение об изменении темы форума
   * Optional. Service message: forum topic edited.
   */
  forum_topic_edited?: IForumTopicEdited;

  /**
   * Опционально. Сообщение о закрытии темы форума
   * Optional. Service message: forum topic closed.
   */
  forum_topic_closed?: IForumTopicClosed;

  /**
   * Опционально. Сообщение о повторном открытии темы форума
   * Optional. Service message: forum topic reopened.
   */
  forum_topic_reopened?: IForumTopicReopened;

  /**
   * Опционально. Сообщение о скрытии темы форума "Общее"
   * Optional. Service message: the 'General' forum topic hidden.
   */
  general_forum_topic_hidden?: IGeneralForumTopicHidden;

  /**
   * Опционально. Сообщение об открытии темы форума "Общее"
   * Optional. Service message: the 'General' forum topic unhidden.
   */
  general_forum_topic_unhidden?: IGeneralForumTopicUnhidden;

  /**
   * Опционально. Сообщение о запланированном видеочате
   * Optional. Service message: video chat scheduled.
   */
  video_chat_scheduled?: IVideoChatScheduled;

  /**
   * Опционально. Сообщение о начатом видеочате
   * Optional. Service message: video chat started.
   */
  video_chat_started?: IVideoChatStarted;

  /**
   * Опционально. Сообщение о завершенном видеочате
   * Optional. Service message: video chat ended.
   */
  video_chat_ended?: IVideoChatEnded;

  /**
   * Опционально. Сообщение о приглашении участников в видеочат
   * Optional. Service message: new participants invited to a video chat.
   */
  video_chat_participants_invited?: IVideoChatParticipantsInvited;

  /**
   * Опционально. Данные веб-приложения
   * Optional. Service message: data sent by a Web App.
   */
  web_app_data?: IWebAppData;

  /**
   * Опционально. Inline-клавиатура, присоединенная к сообщению
   * Optional. Inline keyboard attached to the message.
   */
  reply_markup?: IInlineKeyboardMarkup;
}
