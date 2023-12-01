/**
 * Этот объект представляет входящее обновление.
 * В каждом обновлении может присутствовать только один из опциональных параметров.
 *
 * This object represents an incoming update.
 * At most one of the optional parameters can be present in any given update.
 * @see {@link https://core.telegram.org/bots/api#update}
 */
export interface IUpdate {
  /**
   * Уникальный идентификатор обновления.
   * Идентификаторы обновлений начинаются с определенного положительного числа
   * и увеличиваются последовательно. Этот идентификатор особенно полезен,
   * если вы используете вебхуки, поскольку он позволяет игнорировать повторяющиеся
   * обновления или восстанавливать правильную последовательность обновлений,
   * если они выходят из порядка. Если в течение недели не поступает новых обновлений,
   * идентификатор следующего обновления будет выбран случайным образом вместо последовательного.
   *
   * Unique identifier for the update.
   * Update identifiers start from a certain positive number and increase sequentially.
   * This ID becomes especially handy if you're using webhooks, since it allows you to ignore
   * repeated updates or to restore the correct update sequence, should they get out of order.
   * If there are no new updates for at least a week, then identifier of the next update will be
   * chosen randomly instead of sequentially.
   */
  update_id: number;

  /**
   * Опционально. Новое входящее сообщение любого типа - текст, фото, стикер и т. д.
   *
   * Optional. New incoming message of any kind - text, photo, sticker, etc.
   */
  message?: IMessage;

  /**
   * Опционально. Новая версия сообщения, которое известно боту и было отредактировано.
   *
   * Optional. New version of a message that is known to the bot and was edited.
   */
  edited_message?: IMessage;

  /**
   * Опционально. Новое входящее сообщение канала любого типа - текст, фото, стикер и т. д.
   *
   * Optional. New incoming channel post of any kind - text, photo, sticker, etc.
   */
  channel_post?: IMessage;

  /**
   * Опционально. Новая версия сообщения канала, которое известно боту и было отредактировано.
   *
   * Optional. New version of a channel post that is known to the bot and was edited.
   */
  edited_channel_post?: IMessage;

  /**
   * Опционально. Новый входящий запрос инлайн-поиска.
   *
   * Optional. New incoming inline query.
   */
  inline_query?: IInlineQuery;

  /**
   * Опционально. Результат запроса инлайн-поиска, выбранный пользователем и отправленный партнеру по чату.
   *
   * Optional. The result of an inline query that was chosen by a user and sent to their chat partner.
   */
  chosen_inline_result?: IChosenInlineResult;

  /**
   * Опционально. Новый входящий коллбэк-запрос.
   *
   * Optional. New incoming callback query.
   */
  callback_query?: ICallbackQuery;

  /**
   * Опционально. Новый входящий запрос на доставку.
   *
   * Optional. New incoming shipping query. Only for invoices with flexible price.
   */
  shipping_query?: IShippingQuery;

  /**
   * Опционально. Новый входящий запрос предварительной проверки.
   *
   * Optional. New incoming pre-checkout query. Contains full information about checkout.
   */
  pre_checkout_query?: IPreCheckoutQuery;

  /**
   * Опционально. Новое состояние опроса. Боты получают обновления только о остановленных опросах
   * и опросах, отправленных ботом.
   *
   * Optional. New poll state. Bots receive only updates about stopped polls and polls, which are sent by the bot.
   */
  poll?: IPoll;

  /**
   * Опционально. Пользователь изменил свой ответ в анонимном опросе. Боты получают новые голоса
   * только в опросах, отправленных ими самими.
   *
   * Optional. A user changed their answer in a non-anonymous poll. Bots receive new votes only in polls that were sent by the bot itself.
   */
  poll_answer?: IPollAnswer;

  /**
   * Опционально. Статус участника чата бота обновлен в чате. Для личных чатов это обновление
   * получается только тогда, когда пользователь заблокировал или разблокировал бота.
   *
   * Optional. The bot's chat member status was updated in a chat. For private chats,
   * this update is received only when the bot is blocked or unblocked by the user.
   */
  my_chat_member?: IChatMemberUpdated;

  /**
   * Опционально. Статус участника чата обновлен в чате. Бот должен быть администратором в чате
   * и явно указать "chat_member" в списке allowed_updates для получения этих обновлений.
   *
   * Optional. A chat member's status was updated in a chat. The bot must be an
   * administrator in the chat and must explicitly specify "chat_member" in the list of allowed_updates to receive these updates.
   */
  chat_member?: IChatMemberUpdated;

  /**
   * Опционально. Отправлен запрос на присоединение к чату. Бот должен иметь право администратора
   * can_invite_users в чате, чтобы получать эти обновления.
   *
   * Optional. A request to join the chat has been sent. The bot must have the can_invite_users
   * administrator right in the chat to receive these updates.
   */
  chat_join_request?: IChatJoinRequest;
}
