import BaseModel from './BaseModel';
import { parse } from '../Utils';

class UserKeys extends BaseModel {
  add(userId, title, key) {
    const uId = parse(userId);

    return this.post(`users/${uId}/keys`, {
      title,
      key,
    });
  }

  remove(userId, keyId) {
    const uId = parse(userId);
    const kId = parse(keyId);

    return this.delete(`users/${uId}/keys/${kId}`);
  }

  all(userId) {
    const uId = parse(userId);

    return this.get(`users/${uId}/keys`);
  }
}

export default UserKeys;
