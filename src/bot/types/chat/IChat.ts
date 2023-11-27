/**
 * Этот объект представляет чат.
 * This object represents a chat.
 * @see {@link https://core.telegram.org/bots/api#chat}
 */
export interface IChat {
  /**
   * Уникальный идентификатор для этого чата.
   * Unique identifier for this chat.
   */
  id: number;

  /**
   * Тип чата, может быть "private", "group", "supergroup" или "channel".
   * Type of chat, can be either “private”, “group”, “supergroup” or “channel”.
   */
  type: string;

  /**
   * Опционально. Заголовок, для супергрупп, каналов и групповых чатов.
   * Optional. Title, for supergroups, channels and group chats.
   */
  title?: string;

  /**
   * Опционально. Имя пользователя, для приватных чатов, супергрупп и каналов, если доступно.
   * Optional. Username, for private chats, supergroups and channels if available.
   */
  username?: string;

  /**
   * Опционально. Имя другой стороны в частном чате.
   * Optional. First name of the other party in a private chat.
   */
  first_name?: string;

  /**
   * Опционально. Фамилия другой стороны в частном чате.
   * Optional. Last name of the other party in a private chat.
   */
  last_name?: string;

  /**
   * Опционально. True, если супергруппа является форумом (включены темы).
   * Optional. True, if the supergroup chat is a forum (has topics enabled).
   */
  is_forum?: boolean;

  /**
   * Опционально. Фотография чата. Возвращается только в getChat.
   * Optional. Chat photo. Returned only in getChat.
   */
  photo?: IChatPhoto;

  /**
   * Опционально. Если непустой, список всех активных имен пользователей чата; для приватных чатов, супергрупп и каналов. Возвращается только в getChat.
   * Optional. If non-empty, the list of all active chat usernames; for private chats, supergroups and channels. Returned only in getChat.
   */
  active_usernames?: string[];

  /**
   * Опционально. Идентификатор кастомного эмодзи статуса другой стороны в частном чате. Возвращается только в getChat.
   * Optional. Custom emoji identifier of emoji status of the other party in a private chat. Returned only in getChat.
   */
  emoji_status_custom_emoji_id?: string;

  /**
   * Опционально. Дата истечения срока действия статуса эмодзи другой стороны в частном чате в формате Unix time, если таковой имеется. Возвращается только в getChat.
   * Optional. Expiration date of the emoji status of the other party in a private chat in Unix time, if any. Returned only in getChat.
   */
  emoji_status_expiration_date?: number;

  /**
   * Опционально. Биография другой стороны в частном чате. Возвращается только в getChat.
   * Optional. Bio of the other party in a private chat. Returned only in getChat.
   */
  bio?: string;

  /**
   * Опционально. True, если настройки конфиденциальности другой стороны в частном чате позволяют использовать ссылки `tg://user?id=<user_id>` только в чатах с этим пользователем. Возвращается только в getChat.
   * Optional. True, if privacy settings of the other party in the private chat allows to use `tg://user?id=<user_id>` links only in chats with the user. Returned only in getChat.
   */
  has_private_forwards?: boolean;

  /**
   * Опционально. True, если настройки конфиденциальности другой стороны ограничивают отправку голосовых и видеосообщений в частном чате. Возвращается только в getChat.
   * Optional. True, if the privacy settings of the other party restrict sending voice and video note messages in the private chat. Returned only in getChat.
   */
  has_restricted_voice_and_video_messages?: boolean;

  /**
   * Опционально. True, если пользователи должны вступить в супергруппу, прежде чем они смогут отправлять сообщения. Возвращается только в getChat.
   * Optional. True, if users need to join the supergroup before they can send messages. Returned only in getChat.
   */
  join_to_send_messages?: boolean;

  /**
   * Опционально. True, если все пользователи, напрямую присоединяющиеся к супергруппе, должны быть одобрены администраторами супергруппы. Возвращается только в getChat.
   * Optional. True, if all users directly joining the supergroup need to be approved by supergroup administrators. Returned only in getChat.
   */
  join_by_request?: boolean;

  /**
   * Опционально. Описание, для групп, супергрупп и чатов каналов. Возвращается только в getChat.
   * Optional. Description, for groups, supergroups and channel chats. Returned only in getChat.
   */
  description?: string;

  /**
   * Опционально. Основная ссылка-приглашение, для групп, супергрупп и чатов каналов. Возвращается только в getChat.
   * Optional. Primary invite link, for groups, supergroups and channel chats. Returned only in getChat.
   */
  invite_link?: string;

  /**
   * Опционально. Наиболее недавнее закрепленное сообщение (по дате отправки). Возвращается только в getChat.
   * Optional. The most recent pinned message (by sending date). Returned only in getChat.
   */
  pinned_message?: IMessage;

  /**
   * Опционально. По умолчанию разрешения участников чата, для групп и супергрупп. Возвращается только в getChat.
   * Optional. Default chat member permissions, for groups and supergroups. Returned only in getChat.
   */
  permissions?: IChatPermissions;

  /**
   * Опционально. Для супергрупп, минимальная разрешенная задержка между последовательными сообщениями, отправляемыми каждым непривилегированным пользователем; в секундах. Возвращается только в getChat.
   * Optional. For supergroups, the minimum allowed delay between consecutive messages sent by each unprivileged user; in seconds. Returned only in getChat.
   */
  slow_mode_delay?: number;

  /**
   * Опционально. Время, после которого все сообщения, отправленные в чат, будут автоматически удалены; в секундах. Возвращается только в getChat.
   * Optional. The time after which all messages sent to the chat will be automatically deleted; in seconds. Returned only in getChat.
   */
  message_auto_delete_time?: number;

  /**
   * Опционально. True, если в супергруппе включены агрессивные проверки на спам. Поле доступно только администраторам чата. Возвращается только в getChat.
   * Optional. True, if aggressive anti-spam checks are enabled in the supergroup. The field is only available to chat administrators. Returned only in getChat.
   */
  has_aggressive_anti_spam_enabled?: boolean;

  /**
   * Опционально. True, если не-администраторы могут получать список только ботов и администраторов в чате. Возвращается только в getChat.
   * Optional. True, if non-administrators can only get the list of bots and administrators in the chat. Returned only in getChat.
   */
  has_hidden_members?: boolean;

  /**
   * Опционально. True, если сообщения из чата не могут быть пересланы в другие чаты. Возвращается только в getChat.
   * Optional. True, if messages from the chat can't be forwarded to other chats. Returned only in getChat.
   */
  has_protected_content?: boolean;

  /**
   * Опционально. Для супергрупп, имя набора стикеров группы. Возвращается только в getChat.
   * Optional. For supergroups, name of group sticker set. Returned only in getChat.
   */
  sticker_set_name?: string;

  /**
   * Опционально. True, если бот может изменять набор стикеров группы. Возвращается только в getChat.
   * Optional. True, if the bot can change the group sticker set. Returned only in getChat.
   */
  can_set_sticker_set?: boolean;

  /**
   * Опционально. Уникальный идентификатор связанного чата, то есть идентификатор группы обсуждения для канала и наоборот; для супергрупп и чатов каналов. Возвращается только в getChat.
   * Optional. Unique identifier for the linked chat, i.e. the discussion group identifier for a channel and vice versa; for supergroups and channel chats. Returned only in getChat.
   */
  linked_chat_id?: number;

  /**
   * Опционально. Для супергрупп, местоположение, с которым связана супергруппа. Возвращается только в getChat.
   * Optional. For supergroups, the location to which the supergroup is connected. Returned only in getChat.
   */
  location?: IChatLocation;
}
