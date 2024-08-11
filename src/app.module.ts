import { Module } from '@nestjs/common';
import { FirebaseModule } from './firebase/firebase.module';
import { notificationsModule } from './notification/notification.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    FirebaseModule,
    notificationsModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
})
export class AppModule {}
