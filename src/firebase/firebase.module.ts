import { Module } from '@nestjs/common';
import * as admin from 'firebase-admin';
import serviceAccount from './social-educational-v2-firebase-adminsdk-qsws6-d5657dee21.json';
import { ConfigService } from '@nestjs/config';
import { FirebaseService } from './firebase.service';

@Module({
  controllers: [],
  providers: [
    {
      provide: 'FIREBASE_ADMIN',
      useFactory: function (config: ConfigService) {
        return admin.initializeApp({
          credential: admin.credential.cert(
            serviceAccount as admin.ServiceAccount,
          ),
          databaseURL: config.get('Firebase_Url'),
        });
      },
      inject: [ConfigService],
    },
    FirebaseService,
  ],
  exports: [FirebaseService],
})
export class FirebaseModule {}
