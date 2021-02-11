//Main.ts is the first file to inspect, we would create a function named 
//bootstrap, Inside bootstrapfunction there is an app create that gives an 
//appmodule (Appmodule is declared in the file app.module.ts)

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

//Let's make it a NestExpressApplication

import { NestExpressApplication } from '@nestjs/platform-express';

//We need join to synthesize the directory path which will contain templates
import { join } from 'path';

//We need nunjucks as render engine
import * as nunjucks from 'nunjucks';

async function bootstrap() {
//create a Nest application with Express under the hood
const app = await NestFactory.create<NestExpressApplication>(
AppModule,//This is the top level entry module, so if we are to create anymore modules it would be under AppModule.
);

/*To associate nunjucks with express,
we need to get the underlying express platform from Nest
app */
const express = app.getHttpAdapter().getInstance();


/*We also need to get directory name views (create it in
project root directory), which is the root directory for our template files*/
const views = join(__dirname, '..', 'views');


/*Finally, configure nunjucks, setting views and express
declared above*/
nunjucks.configure(views, { express });
//In this case nunjucks is our render function in pycharm
//Views is similar to templates in pycharm

const staticAssets = join(__dirname, '..', 'static');
app.useStaticAssets(staticAssets);

//this is to start/run the application to run on our local host and listen on port 3000
await app.listen(3000);
}
bootstrap();//This is to invoke the function bootstrap so that it can start running
//What runs depends on what AppModule has to offer.

