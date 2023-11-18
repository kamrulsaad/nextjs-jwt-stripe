// export const setToLocalStorage = (key: string, token: string) => {
//     if (!key || typeof window === "undefined") return "";

//     return localStorage.setItem(key, token);
//   };

//   export const getFromLocalStorage = (key: string) => {
//     if (!key || typeof window === "undefined") return "";

//     return localStorage.getItem(key);
//   };
export const getFromCookie = (key: string) => {
  if (!key || typeof window === "undefined") return "";

  const cookie = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${key}=`));

  return cookie ? cookie.split("=")[1] : "";
};
