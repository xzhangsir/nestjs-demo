import {
  Controller,
  Get,
  Post,
  Request,
  Query,
  Body,
  Param,
  Headers,
} from '@nestjs/common';
import { GirlService } from './girl.service';

@Controller('girl')
export class GirlController {
  constructor(private girlService: GirlService) {}
  @Get()
  getGirls(): any {
    return this.girlService.getGirls();
  }
  /*  @Post('add') //  @Post('/add')
  addGril(): any {
    return this.girlService.addGirl();
  } */
  /* @Post('add') 
  addGril(@Request() req): any {
    console.log(req.body);
    return this.girlService.addGirl();
  } */
  @Post('add')
  addGril(@Body() body): any {
    console.log(body);
    return this.girlService.addGirl(body);
  }
  /*  @Get('getGirlById')
  getGirlById(@Request() req): any {
    // console.log(req);
    const id: number = parseInt(req.query.id);
    return this.girlService.getGirlById(id);
  } */
  @Get('getGirlById')
  getGirlById(@Query() query): any {
    // console.log(query);
    const id: number = parseInt(query.id);
    return this.girlService.getGirlById(id);
  }
  /*  @Get('findGirlById/:id')
  findGirlById(@Request() req): any {
    const id: number = parseInt(req.params.id);
    return this.girlService.getGirlById(id);
  } */
  @Get('findGirlById/:id')
  findGirlById(@Param() Params, @Headers() Headers): any {
    console.log('Headers', Headers); //获取请求头
    const id: number = parseInt(Params.id);
    return this.girlService.getGirlById(id);
  }
}
