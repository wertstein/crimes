import {
  Module,
  MiddlewareConsumer,
  RequestMethod,
  CacheModule,
  CacheInterceptor,
} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrimesModule } from './crimes/crimes.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { config } from './config/config';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [
    CrimesModule,
    CacheModule.register({
      ttl: 5, // seconds
      max: 10, // maximum number of items in cache
    }),
    AuthModule,
    UsersModule,
    MongooseModule.forRoot(config.mongo),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
