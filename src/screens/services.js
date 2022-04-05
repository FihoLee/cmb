import Amplify from '@aws-amplify/core';
import Storage from '@aws-amplify/storage';

export function configureAmplify() {
  Amplify.configure(
  {
   Auth: {
     identityPoolId: process.env.REACT_APP_identityPoolId,
     region: process.env.REACT_APP_region,
     userPoolId: process.env.REACT_APP_userPoolId,
     userPoolWebClientId: process.env.REACT_APP_userPoolWebClientId,
    },
    Storage: {
      AWSS3: { 
        bucket: process.env.REACT_APP_bucket,
        region: process.env.REACT_APP_region,
        identityPoolId: process.env.REACT_APP_identityPoolId
    }
  }
});
} 
export function SetS3Config(bucket, level){
  Storage.configure({ 
         bucket: bucket,
         level: level,
         region: process.env.REACT_APP_region,  
         identityPoolId: process.env.REACT_APP_identityPoolId 
      });
}

