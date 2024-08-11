import { Controller, Post, Body } from '@nestjs/common';
import { FirebaseService } from 'src/firebase/firebase.service';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly firebaseService: FirebaseService) {}

  @Post('send')
  async sendNotification(
    @Body('token') token: string,
    @Body('title') title: string,
    @Body('body') body: string,
  ) {
    await this.firebaseService.sendMessage(token, title, body);
    return { message: 'Notification sent' };
  }
}
