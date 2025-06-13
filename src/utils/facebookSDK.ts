// src/utils/facebookSDK.ts

declare global {
    interface Window {
      FB: any;
      fbAsyncInit: () => void;
    }
  }
  
  export function loadFacebookSDK(): Promise<any> {
    const appId = import.meta.env.VITE_FACEBOOK_APP_ID as string;
    return new Promise((resolve) => {
      if (window.FB) {
        resolve(window.FB);
        return;
      }
      window.fbAsyncInit = function () {
        window.FB.init({
          appId,
          cookie: true,
          xfbml: true,
          version: 'v23.0',
        });
        resolve(window.FB);
      };
      // Load the SDK script
      if (!document.getElementById('facebook-jssdk')) {
        const script = document.createElement('script');
        script.id = 'facebook-jssdk';
        script.src = 'https://connect.facebook.net/en_US/sdk.js';
        document.body.appendChild(script);
      }
    });
  }
  
  interface FacebookAuthResponse {
    accessToken: string;
    expiresIn: number;
    reauthorize_required_in: number;
    signedRequest: string;
    userID: string;
  }
  
  interface FacebookLoginResponse {
    status: string;
    authResponse?: FacebookAuthResponse;
  }
  
  export function facebookLogin(): Promise<FacebookLoginResponse> {
    return new Promise((resolve, reject) => {
      const permissions = 'public_profile,email,catalog_management';
      window.FB.login(
        (response: FacebookLoginResponse) => {
          if (response.authResponse) {
            resolve(response);
          } else {
            reject(new Error('User cancelled login or did not fully authorize.'));
          }
        },
        { scope: permissions }
      );
    });
  }