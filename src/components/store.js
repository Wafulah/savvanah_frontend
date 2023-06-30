import { proxy } from 'valtio';

export const store = proxy({
  member_data: null,
  otp: null,
  edi_auth_guid: null,
});
