import Amplify from '@aws-amplify/core';
import Storage from '@aws-amplify/storage';
import Amplify, {Auth, Storage } from 'aws-amplify';

export function configureAmplify() {
  Amplify.configure(
  {
   Auth: {
     identityPoolId: 'us-east-2:c3dd0838-ad1b-4337-af6f-cf48f4f1a7a4',
     region: 'us-east-2',
     userPoolId: 'us-east-2_bAPQO8XG4',
     userPoolWebClientId: '6k290d3ip91l10m904658idjn1',
    },
    Storage: {
      AWSS3: { 
        bucket: 'www.teachertoolbox.net',
        region: 'us-east-2',
        identityPoolId: 'us-east-2:c3dd0838-ad1b-4337-af6f-cf48f4f1a7a4'
    }
  }
});
} 
export function SetS3Config(bucket, level){
  Storage.configure({ 
         bucket: bucket,
         level: level,
         region: 'us-east-2',  
         identityPoolId: process.env.REACT_APP_identityPoolId 
      });
}

