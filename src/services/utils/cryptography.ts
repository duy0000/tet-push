import CryptoJS from "crypto-js";
export const decryptAESWithKey = (cipherText = "") => {
  const bytes = CryptoJS.AES.decrypt(
    cipherText,
    `${import.meta.env.VITE_PRIVATE_KEY_ENCRYPT}`
  );
  return bytes.toString(CryptoJS.enc.Utf8);
};
