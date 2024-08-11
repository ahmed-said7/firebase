import { Module } from '@nestjs/common';
import { FirebaseModule } from 'src/firebase/firebase.module';
import { NotificationsController } from './notification.controller';

@Module({
  imports: [FirebaseModule],
  controllers: [NotificationsController],
})
export class notificationsModule {}
