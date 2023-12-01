/**
 * Описывает инлайн-сообщение, отправленное веб-приложением от имени пользователя.
 *
 * Describes an inline message sent by a Web App on behalf of a user.
 *
 * @see {@link https://core.telegram.org/bots/api#sentwebappmessage}
 */
export interface ISentWebAppMessage {
    /**
     * Необязательно. Идентификатор отправленного инлайн-сообщения.
     * Доступно только при наличии вложенной инлайн-клавиатуры к сообщению.
     *
     * Optional. Identifier of the sent inline message.
     * Available only if there is an inline keyboard attached to the message.
     */
    inline_message_id?: string;
  }
  