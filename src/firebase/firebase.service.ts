import { HttpException, Inject, Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class FirebaseService {
  constructor(
    @Inject('FIREBASE_ADMIN') private readonly firebaseApp: admin.app.App,
  ) {}

  async sendMessage(token: string, title: string, body: string): Promise<void> {
    const message = {
      token,
      notification: {
        title,
        body,
      },
    };
    try {
      await this.firebaseApp.messaging().send(message);
    } catch (error) {
      throw new HttpException('Error sending message', 400);
    }
  }
}
