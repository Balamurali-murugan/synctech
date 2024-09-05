// import axios from "axios";
// // import { SignatureV4 } from "@aws-sdk/signature-v4";
// // import { Sha256 } from "@aws-crypto/sha256-js";
// // import sha256 from "crypto-js/sha256";
// import { commonConstant } from "../constants/common-constants";
// import {
//   TOAST_MESSAGES,
//   TOAST_SEVERITY,
// } from "../../constants/commonConstants";
// import logger from "../../components/helper/logger";


// let BASE_URL: string;
// if (process.env.REACT_APP_API_URL) {
//   BASE_URL = process.env.REACT_APP_API_URL;
// }


// // to create AWS signature, used in all API calls
// // export const createCredentialsIAM = (
// //   payload: any,
// //   path: any,
// //   method: any = "POST"
// // ) => {
// //   const hostnameBase = BASE_URL.split("/");
// //   const host = hostnameBase[hostnameBase.length - 2];


// //   const sigv4 = new SignatureV4({
// //     service: "execute-api",
// //     region: AWS_REGION,
// //     credentials: {
// //       accessKeyId: ACCESS_KEY,
// //       secretAccessKey: SECRET_KEY,
// //     },
// //     sha256: Sha256,
// //   });
// //   const signed = sigv4.sign({
// //     method,
// //     hostname: host,
// //     path: `/${path}`,
// //     protocol: "https:",
// //     headers: {
// //       host: host,
// //     },
// //     body: JSON.stringify(payload),
// //   });
// //   // const hash = sha256(JSON.stringify(payload)).toString();
// //   return new Promise((resolve, reject) => {
// //     signed.then((response) => resolve(response.headers));
// //   });
// // };


// //Instance of axios, used across app to make API calls
// export const apiClient = axios.create({
//   baseURL: process.env.REACT_APP_API_URL,
//   timeout: 2000000,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });


// const TOKEN_EXPIRED = "Token expired";


// export const interceptor = (store: any) => {
//   //Piece of code which executes soon after the API call returns response
//   apiClient.interceptors.response.use(
//     (response: any) => {
//       if (response?.status === 200) {
//         if (response?.data?.success) return response;
//         else {
//           if (response?.data?.message === TOKEN_EXPIRED) {
//             // navigate(`/${ROUTES_LABEL.LOGIN}`)
//           } else if (response?.config?.url?.includes("auth/login")) {
//             // if response is from login, we are returning respons as is, since all the messages recieved from BE should be displayed in UI
//             return response;
//           } else if (
//             response?.config?.url?.includes(
//               "auth/getResetPasswordTicketDetails"
//             )
//           ) {
//             // if response is from reset password page, we are returning respons as is as URL expired or deleted, since all the messages recieved from BE should be displayed in UI
//             return response;
//           } else if (response?.config?.url?.includes("auth/changePassword")) {
//             // if response is from reset password page, we are returning respons as is as URL expired or deleted, since all the messages recieved from BE should be displayed in UI
//             return response;
//           } else if (response?.config?.url?.includes("salesrepvisibility")) {
//             // if response is from any of sales rep visibility, we are returning response as is bcoz the errors received as part of SFDC has to be shown in UI.
//             return response;
//           } else {
//             // if API is sending response with success as false then API failure toast message is displayed
//             logger.error("Message with status false ", response?.data?.message);
//             store.dispatch({
//               type: commonConstant.SET_OPEN_TOAST,
//               payload: {
//                 openToast: true,
//                 severity: TOAST_SEVERITY.ERROR,
//                 // message: response?.data?.message,
//                 message: TOAST_MESSAGES.API_FAILURE,
//               },
//             });
//           }
//         }
//       } else if (response?.status === 401) {
//         store.dispatch({
//           type: commonConstant.SET_UNAUTH_USER,
//           payload: {
//             isUserAuthorized: false,
//           },
//         });
//       } else {
//         // any request with status apart from 200 will be considered as API failure and toast message will be shown
//         store.dispatch({
//           type: commonConstant.SET_OPEN_TOAST,
//           payload: {
//             openToast: true,
//             severity: TOAST_SEVERITY.ERROR,
//             message: TOAST_MESSAGES.API_FAILURE,
//           },
//         });
//       }
//     },
//     (error: any) => {
//       //if any error is recieved then we should retry the API call for 3 times, this logic is implemented here based on count field
//       if (error.config.data) {
//         const payload = JSON.parse(error.config.data);
//         payload.count++;
//         if (payload.count < 3) {
//           store.dispatch({
//             type: payload.type,
//             payload,
//           });
//         } else if (payload.count === 3 && error?.response?.status === 401) {
//           store.dispatch({
//             type: commonConstant.SET_UNAUTH_USER,
//             payload: {
//               isUserAuthorized: false,
//             },
//           });
//         } else {
//           store.dispatch({
//             type: commonConstant.SET_OPEN_TOAST,
//             payload: {
//               openToast: true,
//               severity: TOAST_SEVERITY.ERROR,
//               message: TOAST_MESSAGES.API_FAILURE,
//             },
//           });
//         }
//       }
//     }
//   );
// };



