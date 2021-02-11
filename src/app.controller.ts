import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  //This constructor function is used to inject the class appService into
  //this file (app.controller.ts). To be able to inject it, where appService object
  //is declared in this case app.service.ts, we need to add an '@injectables' (check
  //app.service.ts file)

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('hello2')
  @Render('index.html')
  getHello2(): {} {
    return this.appService.getHello2();
  }
  @Get()
  @Render('home.html')
   getHome(): {} {
return this.appService.getHome();
}
  @Get('about-us')
  @Render('about-us.html')
  getAboutUs(): {} {
    return this.appService.getAboutUs();
}
}



//GetHello