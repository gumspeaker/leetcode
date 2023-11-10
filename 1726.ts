function tupleSameProduct(nums: number[]): number {
  let map: Record<string, number> = {};
  for (let index = 0; index < nums.length; index++) {
    for (let index2 = index + 1; index2 < nums.length; index2++) {
      let result = nums[index] * nums[index2];
      console.log(result);

      map[result] = (map[result] ?? 0) + 1;
    }
  }
  console.log(map);

  return (
    Object.values(map).reduce((sum, same_value_number) => {
      return sum + (same_value_number * (same_value_number - 1)) / 2;
    }, 0) * 8
  );
}
tupleSameProduct([2, 3, 4, 6]);
('{"_staging_flag":0,"env":1,"is_ppe":1,"EVENT_ORIGIN_FEATURE":"TEMAI","test_flag":1,"region_code":"GB","rd_region":"GB","app_id":4068,"local_id":"localID_kF0XGgnVyiFfJAw_ysjqN","idc_name":"eu-ttp","rd_v_main":"1.0.2.119","rd_v_mf_workbench":"1.0.0.1128","shop_region":"GB","seller_id":"7494066831978890955","account_id":"7494066831978890955","user_type":"enterprise","business_type":"corporation","seller_type":"local","global_seller_id":"7494066831978890955","is_sub_account":0,"shop_code":"GBLCELWLWU","shop_status":2,"time":1697705813403,"task_id":"sessionID_qNFyBJCeRu0s5388Tq9Aa","ticket_service_ids":[],"page_source":"","prev_page_name":"","prev_module_name":"","page_name":"service_marketplace_authorizations_page","rd_v_services":"1.0.0.2105","cur_url_pathname":"/services/authorizations","cur_url_origin":"https://seller-uk.tiktok.com","rd_grey_challenges":0,"rd_grey_dashboard":0,"rd_grey_finance":0,"rd_grey_message":0,"rd_grey_order":0,"rd_grey_performance":0,"rd_grey_product":0,"rd_grey_profile":0,"rd_grey_promotion":0,"rd_grey_settle":0,"rd_grey_ticket":0,"rd_grey_ads":0,"rd_grey_compass":0,"rd_grey_decoration":0,"rd_grey_services":0,"rd_grey_logistics":0,"rd_grey_creator":0,"rd_grey_rights":0,"rd_grey_qualification":0,"rd_grey_crm":0,"rd_grey_ads-creation":0,"rd_grey_livestream":0,"rd_grey_saio":0,"rd_grey_short-video":0,"rd_grey_affiliate":0,"event_index":1697706245702}');
