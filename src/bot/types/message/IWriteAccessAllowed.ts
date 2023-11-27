/**
 * Этот объект представляет сервисное сообщение о разрешении пользователем боту отправлять сообщения после добавления его в меню вложений, запуска Веб-приложения по ссылке
 * или принятия явного запроса из Веб-приложения, отправленного методом requestWriteAccess.
 * This object represents a service message about a user allowing a bot to write messages after adding it to the attachment menu, launching a Web App from a link, or accepting an explicit request from a Web App sent by the method requestWriteAccess.
 */
export interface IWriteAccessAllowed {
  /**
   * Опционально. True, если доступ был предоставлен после того, как пользователь принял явный запрос из Веб-приложения, отправленного методом requestWriteAccess.
   * Optional. True, if the access was granted after the user accepted an explicit request from a Web App sent by the method requestWriteAccess.
   */
  from_request?: boolean;

  /**
   * Опционально. Название Веб-приложения, если доступ был предоставлен при запуске Веб-приложения из ссылки.
   * Optional. Name of the Web App, if the access was granted when the Web App was launched from a link.
   */
  web_app_name?: string;

  /**
   * Опционально. True, если доступ был предоставлен при добавлении бота в меню вложений или боковое меню.
   * Optional. True, if the access was granted when the bot was added to the attachment or side menu.
   */
  from_attachment_menu?: boolean;
}
