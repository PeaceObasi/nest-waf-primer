import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentRegistrationModule } from './student-registration/student-registration.module';

@Module({
  imports: [TypeOrmModule.forRoot(), StudentRegistrationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
//The concept of module
//The module has a file where it indicates who its controller is and the service it is using
//Depending on the url the client inputes the controller does what is requested.
//Once nest is started it creates a module and a service.
//The client talks to the controller and the controller talks to service. In
//the service is all our codes and then the service talks to the database

//In our case the name of our module is AppModule
//The controller is AppController (this is defined in our app.controller.ts)