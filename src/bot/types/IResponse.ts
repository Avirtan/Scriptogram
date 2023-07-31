export interface IRespone {
  ok: boolean;
  result: IUpdate[];
}

export interface IUpdate {
  update_id: number;
  message?: any;
  edited_message?: any;
  channel_post?: any;
  edited_channel_post?: any;
  inline_query?: any;
  chosen_inline_result?: any;
  callback_query?: any;
  shipping_query?: any;
  pre_checkout_query?: any;
  poll?: any;
  poll_answer?: any;
  my_chat_member: any;
  chat_member?: any;
  chat_join_request?: any;
}
