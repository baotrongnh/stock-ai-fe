import React, { useEffect } from "react";
import axios from "axios";
import { Icon } from "@iconify/react";

declare global {
  interface Window {
    FB: any;
    fbAsyncInit: () => void;
  }
}

// Chuyển đổi hàm loadFacebookSDK và facebookLogin từ JavaScript sang TypeScript

export function loadFacebookSDK(): Promise<any> {
    const appId = import.meta.env.VITE_FACEBOOK_APP_ID as string; // Đảm bảo type assertion
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

export const FacebookButton = () => {
  const sendToken = async (token: string) => {
    await axios
      .post(`${import.meta.env.VITE_APP_API_URL}/auth/facebook`, {
        accessToken: token,
      })
      .then((response) => {
        console.log("Token sent successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error sending token:", error);
      });
  };

  const handleClick = () => {
    loadFacebookSDK().then(() => {
      facebookLogin()
        .then((response) => {
          if (response.authResponse) {
            sendToken(response.authResponse.accessToken);
          } else {
            console.error("Facebook login failed: No authResponse");
          }
        })
        .catch((error) => {
          console.error("Facebook login failed:", error);
        });
    });
  };

  return (
    <button className="flex items-center justify-start border border-gray-300 rounded-lg px-4 py-2 bg-white hover:bg-gray-50 w-40 h-12 pl-4" onClick={handleClick}>
        <Icon icon="logos:facebook" width="24" height="24" className="mr-2" />
        <span className="font-semibold">Facebook</span>
    </button>
  );
}; 