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
  /*   addGirl() {
    return {
      code: 0,
      data: { id: 3, name: '小明', age: '12' },
      msg: 'success',
    };
  } */
  addGirl(body: any) {
    return {
      code: 0,
      data: body,
      msg: 'success',
    };
  }
  getGirlById(id: number) {
    let res: any = {};
    switch (id) {
      case 1:
        res = { id: 1, name: '小花' };
        break;
      case 2:
        res = { id: 2, name: '小树' };
        break;
      default:
        res = { id: id, name: 'name' + id };
        break;
    }
    return {
      code: 0,
      data: res,
      msg: 'success',
    };
  }
}
