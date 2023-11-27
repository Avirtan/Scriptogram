/**
 * Описывает действия, которые пользователь, не являющийся администратором, может выполнить в чате.
 * Describes actions that a non-administrator user is allowed to take in a chat.
 * @see {@link https://core.telegram.org/bots/api#chatpermissions}
 */
export interface IChatPermissions {
  /**
   * Опционально. true, если пользователь может отправлять текстовые сообщения, контакты, счета, местоположения и места.
   * Optional. True, if the user is allowed to send text messages, contacts, invoices, locations, and venues.
   */
  can_send_messages?: boolean;

  /**
   * Опционально. true, если пользователь может отправлять аудиосообщения.
   * Optional. True, if the user is allowed to send audios.
   */
  can_send_audios?: boolean;

  /**
   * Опционально. true, если пользователь может отправлять документы.
   * Optional. True, if the user is allowed to send documents.
   */
  can_send_documents?: boolean;

  /**
   * Опционально. true, если пользователь может отправлять фотографии.
   * Optional. True, if the user is allowed to send photos.
   */
  can_send_photos?: boolean;

  /**
   * Опционально. true, если пользователь может отправлять видеозаписи.
   * Optional. True, if the user is allowed to send videos.
   */
  can_send_videos?: boolean;

  /**
   * Опционально. true, если пользователь может отправлять видеозаметки.
   * Optional. True, if the user is allowed to send video notes.
   */
  can_send_video_notes?: boolean;

  /**
   * Опционально. true, если пользователь может отправлять голосовые заметки.
   * Optional. True, if the user is allowed to send voice notes.
   */
  can_send_voice_notes?: boolean;

  /**
   * Опционально. true, если пользователь может отправлять опросы.
   * Optional. True, if the user is allowed to send polls.
   */
  can_send_polls?: boolean;

  /**
   * Опционально. true, если пользователь может отправлять другие сообщения: анимации, игры, стикеры и использовать встроенных ботов.
   * Optional. True, if the user is allowed to send other messages: animations, games, stickers, and use inline bots.
   */
  can_send_other_messages?: boolean;

  /**
   * Опционально. true, если пользователь может добавлять превью веб-страниц к своим сообщениям.
   * Optional. True, if the user is allowed to add web page previews to their messages.
   */
  can_add_web_page_previews?: boolean;

  /**
   * Опционально. true, если пользователь может изменять заголовок чата, фото и другие настройки. В общедоступных супергруппах игнорируется.
   * Optional. True, if the user is allowed to change the chat title, photo, and other settings. Ignored in public supergroups.
   */
  can_change_info?: boolean;

  /**
   * Опционально. true, если пользователь может приглашать новых участников в чат.
   * Optional. True, if the user is allowed to invite new users to the chat.
   */
  can_invite_users?: boolean;

  /**
   * Опционально. true, если пользователь может закреплять сообщения. В общедоступных супергруппах игнорируется.
   * Optional. True, if the user is allowed to pin messages. Ignored in public supergroups.
   */
  can_pin_messages?: boolean;

  /**
   * Опционально. true, если пользователь может управлять темами форума. Если опущено, принимает значение поля can_pin_messages.
   * Optional. True, if the user is allowed to create forum topics. If omitted, defaults to the value of can_pin_messages.
   */
  can_manage_topics?: boolean;
}
