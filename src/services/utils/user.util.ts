import CryptoJS from "crypto-js";
import { jwtDecode, JwtPayload } from "jwt-decode";
// export const decryptAESValueWithPrivateKey = (
//   cipherText: string = ""
// ): string => {
//   const bytes = CryptoJS.AES.decrypt(
//     cipherText,
//     import.meta.env.VITE_PRIVATE_KEY_ENCRYPT as string
//   );
//   return bytes.toString(CryptoJS.enc.Utf8);
// };
// console.log("giá trj import", import.meta.env.VITE_PRIVATE_KEY_ENCRYPT);

export const encryptAESValueWithPrivateKey = (
  plainText: string = ""
): string => {
  return CryptoJS.AES.encrypt(
    plainText,
    import.meta.env.VITE_PRIVATE_KEY_ENCRYPT as string
  ).toString();
};

export const decodedToken = (token: string) => {
  if (!token) return null;
  return jwtDecode(token);
};

export const tokenIsExpired = (token: string) => {
  if (!token) return true;
  const decoded = decodedToken(token) as JwtPayload;
  const currentDate = new Date();
  return (decoded.exp as number) < currentDate.getTime() / 1000;
};
