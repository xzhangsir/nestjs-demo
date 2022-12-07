import { Injectable } from '@nestjs/common';

@Injectable()
export class GirlService {
  getGirls() {
    return {
      code: 0,
      data: ['小红', '小花'],
      msg: 'success',
    };
  }
}
