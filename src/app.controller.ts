import { Controller, Get, Session, Response, Request } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hellos')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('sessions')
  findAllSessions(@Session() session: Record<string, any>) {
    session.visits = session.visits ? session.visits + 1 : 1;
    return session.visits;
  }

  @Get('setcookies')
  SetCookie(@Response({ passthrough: true }) response) {
    response.cookie('key1', 'value', {
      maxAge: 1000 * 60 * 10,
      httpOnly: true,}
    )
    /*cookie segura sólo con https*/
    response.cookie('key2', 'value2', 
    {maxAge: 1000 * 60 * 10,
      signed: true,});
  }

  @Get('getcookies')
  getCookies(@Request() request) {
    // para conseguir todas
    console.log(request.cookies); 
    // para conseguir  una en concreto
    console.log(request.cookies['clave']);
    // para conseguir  las firmadas
    console.log(request.signedCookies);
  }
}
