import  { useEffect, useRef } from "react";
import axios from "axios";

export const GoogleButton = () => {
  const googleButtonRef = useRef<HTMLDivElement>(null);

  function decodeJWT(token: string) {
    let base64Url = token.split(".")[1];
    let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    let jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    return JSON.parse(jsonPayload);
  }

  const sendToken = async (token: string) => {
    await axios
      .post(`${import.meta.env.VITE_APP_API_URL}/auth/google`, {
        idToken: token,
      })
      .then((response) => {
        console.log("Token sent successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error sending token:", error);
      });
  };

  useEffect(() => {
    // Load Google Identity Services SDK
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.onload = () => {
      // @ts-ignore
      window.google.accounts.id.initialize({
        client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
        callback: (response: any) => {
          // Xử lý response ở đây
          const payload = decodeJWT(response.credential);
          console.log("Google user:", payload);
          sendToken(response.credential);
        },
      });
      // @ts-ignore
      window.google.accounts.id.renderButton(googleButtonRef.current, {
        theme: "outline",
        size: "large",
        width: 240,
      });
    };
    document.body.appendChild(script);
    // Cleanup
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div ref={googleButtonRef}></div>;
};