/**
 * Представляет участника чата, который находится под определенными ограничениями в чате. Только супергруппы.
 * Represents a chat member that is under certain restrictions in the chat. Supergroups only.
 * @see {@link https://core.telegram.org/bots/api#chatmemberrestricted}
 */
export interface IChatMemberRestricted {
  /**
   * Статус пользователя в чате, всегда "restricted".
   * The member's status in the chat, always "restricted".
   */
  status: string;

  /**
   * Информация о пользователе.
   * Information about the user.
   */
  user: IUser;

  /**
   * True, если пользователь является участником чата на момент запроса.
   * True, if the user is a member of the chat at the moment of the request.
   */
  is_member?: boolean;

  /**
   * True, если пользователю разрешено отправлять текстовые сообщения, контакты, счета, местоположения и места.
   * True, if the user is allowed to send text messages, contacts, invoices, locations, and venues.
   */
  can_send_messages?: boolean;

  /**
   * True, если пользователь разрешено отправлять аудиозаписи.
   * True, if the user is allowed to send audios.
   */
  can_send_audios?: boolean;

  /**
   * True, если пользователь разрешено отправлять документы.
   * True, if the user is allowed to send documents.
   */
  can_send_documents?: boolean;

  /**
   * True, если пользователь разрешено отправлять фотографии.
   * True, if the user is allowed to send photos.
   */
  can_send_photos?: boolean;

  /**
   * True, если пользователь разрешено отправлять видеозаписи.
   * True, if the user is allowed to send videos.
   */
  can_send_videos?: boolean;

  /**
   * True, если пользователь разрешено отправлять видеосообщения.
   * True, if the user is allowed to send video notes.
   */
  can_send_video_notes?: boolean;

  /**
   * True, если пользователь разрешено отправлять голосовые сообщения.
   * True, if the user is allowed to send voice notes.
   */
  can_send_voice_notes?: boolean;

  /**
   * True, если пользователь разрешено отправлять опросы.
   * True, if the user is allowed to send polls.
   */
  can_send_polls?: boolean;

  /**
   * True, если пользователь разрешено отправлять анимации, игры, стикеры и использовать inline-ботов.
   * True, if the user is allowed to send animations, games, stickers, and use inline bots.
   */
  can_send_other_messages?: boolean;

  /**
   * True, если пользователь разрешено добавлять предварительные просмотры веб-страниц в свои сообщения.
   * True, if the user is allowed to add web page previews to their messages.
   */
  can_add_web_page_previews?: boolean;

  /**
   * True, если пользователь может изменять название чата, фотографию и другие настройки.
   * True, if the user is allowed to change the chat title, photo, and other settings.
   */
  can_change_info?: boolean;

  /**
   * True, если пользователь может приглашать новых участников в чат.
   * True, if the user is allowed to invite new users to the chat.
   */
  can_invite_users?: boolean;

  /**
   * True, если пользователь может закреплять сообщения.
   * True, if the user is allowed to pin messages.
   */
  can_pin_messages?: boolean;

  /**
   * True, если пользователь может создавать темы на форуме.
   * True, if the user is allowed to create forum topics.
   */
  can_manage_topics?: boolean;

  /**
   * Дата, когда ограничения будут сняты для этого пользователя; время Unix. Если 0, то пользователь ограничен навсегда.
   * Date when restrictions will be lifted for this user; Unix time. If 0, then the user is restricted forever.
   */
  until_date: number;
}
