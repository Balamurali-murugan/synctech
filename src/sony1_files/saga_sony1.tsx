// import { commonConstant } from "../constants/common-constants";
// import { call, put, takeLatest } from "redux-saga/effects";
// import {
//   getDebitNoteReasonsSuccess,
//   getStatementDataSuccess,
//   setLoading,
//   setOpenToast,
//   getUserCurrenciesSuccess,
//   createDebitNoteSuccess,
//   creditItemsSuccess,
//   getPaymentHistorySuccess,
//   getPaidItemsDataSuccess,
//   debitItemsSuccess,
//   getPaidItemDetailsDataSuccess,
//   getPaymentDetailsDataSuccess,
//   getEnquiryTableDetailsDataSuccess,
//   getDisputedItemsSuccess,
//   getBankDescriptionDataSuccess,
//   getMakePaymentTableDataSuccess,
//   submitPaymentSuccess,
//   getCommentsSuccess,
//   saveCommentSuccess,
//   getCreditManagementInfoSuccess,
//   loginUserSuccess,
//   getSalesAreaMappingSuccess,
//   getAddressListSuccess,
//   getSAPEnvDetailsSuccess,
//   validateAccountNumberSuccess,
//   fetchReferenceDataSuccess,
//   registerUserSuccess,
//   userDetailsWithoutPasswordSuccess,
//   resetPasswordRequestSuccess,
//   getUserInfoFromURLIDSuccess,
//   getResetPasswordSucess,
//   getTranslationActionSuccess,
//   changePasswordActionSuccess,
//   getBusinessGroupSuccess,
//   validateDealerSuccess,
//   getPriceChangeDataSuccess,
//   getDealerDetailsSuccess,
//   updateProfileSuccess,
//   fetchSiteSectionDetailsSuccess,
//   homePageButtonsConfigSuccess,
//   getReportingfilteredDataSuccess,
//   getOrderDetailsSuccess,
//   createNewReportSuccess,
//   getAllReportsSuccess,
//   getSelectedReportDataSuccess,
//   updateReportSuccess,
//   searchDataDownloadProductsSuccess,
//   getCaptchaValidationSuccess,
//   getLoginCaptchaValidationSuccess,
//   getProductVisibilityDataSuccess,
//   checkSalesRepSuccess,
//   checkContactEmailSuccess,
//   checkSalesRepBySalesOrgSuccess,
//   checkSalesRepDealerSuccess,
//   checkSalesOrgAccountsSuccess,
//   getArticlesFromCMSSuccess,
//   fetchProdCategoryResponseSuccess,
//   fetchGlobalSearchSuggestionsSuccess,
//   fetchProductDetailsDataSuccess,
//   getTermsAndConditionSuccess,
//   getRelatedItemArticlesSuccess,
//   getPricingInfoArticlesSuccess,
//   getQuotationsDataSuccess,
//   getCartProductsSuccess,
//   getLoginCMSDataSuccess,
//   getGradedStockDetailsSuccess,
//   getOrderChangeReportSuccess,
//   getOrderChangeHistoryDataSuccess,
//   getRelatedToolsArticlesSuccess,
//   getPrimeSupportArticlesSuccess,
//   getCurrentDealerSuccess,
//   // startProductFlow,
//   startProductFlowSuccess,
//   getNewProductsSuccess,
//   getCategoryProductSuccess,
//   // fetchLiveAvailability,
//   fetchLiveAvailabilitySuccess,
//   getContextDetailsSuccess,
//   getCalendarDataSuccess,
//   myQuotationsSFDCPlaceOrderSuccess,
//   editOrderReportSuccess,
//   getProductsByMaterialNameSuccess,
//   sendProductDetailsMailSuccess,
//   getPremiumServiceDataSuccess,
//   downloadDataFileSuccess,
//   getCartTotalProductsCountSuccess,
//   getProductListSuccess,
//   getQuoteSuccess,
//   getProductGroupSuccess,
//   deleteproductGroupSuccess,
//   updateproductGroupSuccess,
//   saveproductGroupSuccess,
//   clearCartOrderSuccess,
//   updateCartActionSuccess,
//   deleteSelectedItemCartSuccess,
//   addToCartSuccess,
//   placeSAPOrderSuccess,
//   getMultiQuoteSuccess,
//   cartFileUploadSuccess,
//   getProductImagesSuccess,
//   getAccountInfoCMSSuccess,
// } from "../actions";
// // import { apiClient, createCredentialsIAM } from "../interceptors/index";
// import { apiClient } from "../interceptors/index";

// import { ENDPOINTS } from "../constants/endpoints";
// import {
//   TOAST_MESSAGES,
//   TOAST_SEVERITY,
// } from "../../constants/commonConstants";
// import logger from "../../components/helper/logger";
// // import axios from "axios";
// const API_DATA = require("../../state/apiData.json");
// const FileSaver = require("file-saver");

// export interface ResponseGenerator {
//   success?: boolean;
//   message?: string;
//   data?: any;
//   error_code?: any;
//   status?: number;
// }

// export interface IAMSignGenerator {
//   authorization?: any;
//   ["x-amz-content-sha256"]?: any;
//   ["x-amz-date"]?: any;
//   host?: any;
// }

// const fetchPayload = (request: any) => {
//   if (request?.payload) {
//     request.payload.type = request?.type;
//     if (request?.payload.count === undefined) {
//       request.payload.count = 0;
//     }
//     if (window.sessionStorage.getItem("st")) {
//       request.payload.st = window.sessionStorage.getItem("st");
//     }
//   }
//   return request?.payload;
// };

// function* callAuthAPI(body: any, path: any, method: any = "POST") {
//   const payload = {
//     body,
//     path,
//     method,
//   };
//   try {
//     // yield put(setLoading(true));
//     logger.info("Calling Auth API");
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: process.env?.REACT_APP_DYNAMODB_URL + "options",
//       data: JSON.stringify(payload),
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", payload?.body?.type);
//     const authSign = response?.data?.data;
//     return authSign;
//   } catch (err) {
//     logger.error("Error occured in API call", payload?.body?.type, err);
//   } finally {
//     // yield put(setLoading(false));
//   }
// }

// function* getStatementsData(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     //used in all saga methods to create the AWS signature for the API request
//     // const signedObj: IAMSignGenerator = yield call(
//     //   createCredentialsIAM,
//     //   payload,
//     //   ENDPOINTS.GET_STATEMENTS_API
//     // );
//     const url =
//       process.env?.REACT_APP_DYNAMODB_URL + ENDPOINTS.GET_STATEMENTS_API;
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url,
//       data: JSON.stringify(payload),
//       // headers: {
//       //   Authorization: signedObj.authorization,
//       //   "X-Amz-Date": signedObj["x-amz-date"],
//       //   "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       // },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", request?.type);
//     yield put(getStatementDataSuccess(response?.data?.data));
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* downloadInvoicePdf(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.DOWNLOAD_INVOICE_PDF
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.DOWNLOAD_INVOICE_PDF,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });

//     logger.info("Received response successfully from ", request?.type);
//     if (response?.data?.data?.length > 0) {
//       let bytes = new Uint8Array(response?.data?.data);
//       const fileName = "showPdf";
//       const file = new Blob([bytes], {
//         type: "application/pdf",
//       });
//       FileSaver.saveAs(file, fileName);
//       yield put(
//         setOpenToast({
//           openToast: true,
//           severity: TOAST_SEVERITY.SUCCESS,
//           message: TOAST_MESSAGES.DOWNLOAD_SUCCESSFUL,
//         })
//       );
//     } else {
//       yield put(
//         setOpenToast({
//           openToast: true,
//           severity: TOAST_SEVERITY.ERROR,
//           message: TOAST_MESSAGES.PDF_DOWNLOAD_ERROR,
//         })
//       );
//     }
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* setCreditAPIData(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.CREDIT_ITEMS_API
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.CREDIT_ITEMS_API,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", request?.type);
//     yield put(creditItemsSuccess(response?.data?.data));
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* setDebitAPIData(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.DEBIT_ITEMS_API
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.DEBIT_ITEMS_API,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", request?.type);
//     yield put(debitItemsSuccess(response?.data?.data));
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* getPaymentHistory(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.PAYMENT_HISTORY_API
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.PAYMENT_HISTORY_API,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", request?.type);
//     yield put(getPaymentHistorySuccess(response?.data?.data));
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* getPaidItemsData(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.PAID_ITEMS_API
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.PAID_ITEMS_API,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", request?.type);
//     yield put(getPaidItemsDataSuccess(response?.data?.data));
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* getPaidItemDetailsData(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.PAID_ITEM_DETAILS_API
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.PAID_ITEM_DETAILS_API,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", request?.type);
//     yield put(getPaidItemDetailsDataSuccess(response?.data?.data));
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* getPaymentDetailsData(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.PAYMENT_DETAILS_API
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.PAYMENT_DETAILS_API,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", request?.type);
//     yield put(getPaymentDetailsDataSuccess(response?.data?.data));
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* getEnquiryTableDetailsData(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.ENQUIRY_DETAILS_API
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.ENQUIRY_DETAILS_API,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", request?.type);
//     yield put(getEnquiryTableDetailsDataSuccess(response?.data?.data));
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* getDebitNoteReasons(request: any) {
//   try {
//     yield put(setLoading(true));
//     const response = API_DATA.debitNoteReasons;
//     logger.info("Calling API", request?.type);
//     // const signedObj: IAMSignGenerator = yield call(
//     //   createCredentialsIAM,
//     //   payload,
//     //   ENDPOINTS.GET_DEBIT_NOTE_REASONS
//     // );
//     // const response: ResponseGenerator = yield call(apiClient as any, {
//     //   url: ENDPOINTS.GET_DEBIT_NOTE_REASONS,
//     //   data: JSON.stringify(payload),
//     //   headers: {
//     //     Authorization: signedObj.authorization,
//     //     "X-Amz-Date": signedObj["x-amz-date"],
//     //     "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//     //   },
//     //   method: "POST",
//     // });
//     logger.info("Received response successfully from ", request?.type);
//     yield put(getDebitNoteReasonsSuccess(response?.data?.data));
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* getUserCurrencies(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.GET_USER_CURRENCIES
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.GET_USER_CURRENCIES,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", request?.type);
//     yield put(getUserCurrenciesSuccess(response?.data?.data));
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* createDebitNote(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.CREATE_DEBIT_NOTE
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.CREATE_DEBIT_NOTE,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", request?.type);
//     if (response?.data?.success === true) {
//       yield put(createDebitNoteSuccess(true));
//     } else {
//       yield put(
//         setOpenToast({
//           openToast: true,
//           severity: TOAST_SEVERITY.ERROR,
//           message: TOAST_MESSAGES.DEBIT_NOTE_CREATION_ERROR,
//         })
//       );
//     }
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* getDisputedItems(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.GET_DISPUTED_ITEMS
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.GET_DISPUTED_ITEMS,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", request?.type);
//     yield put(getDisputedItemsSuccess(response?.data?.data));
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* getReplyEnquiryComments(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.GET_REPLY_ENQUIRY_COMMENTS
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.GET_REPLY_ENQUIRY_COMMENTS,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", request?.type);
//     yield put(getCommentsSuccess(response?.data?.data));
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* saveComment(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.SAVE_COMMENT
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.SAVE_COMMENT,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", request?.type);
//     if (response?.data?.success === true) {
//       yield put(saveCommentSuccess(true));
//     } else {
//       yield put(
//         setOpenToast({
//           openToast: true,
//           severity: TOAST_SEVERITY.ERROR,
//           message: TOAST_MESSAGES.SAVE_COMMENT_ERROR,
//         })
//       );
//     }
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* getCreditMangement(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.GET_CREDIT_MANAGEMENT_INFO
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.GET_CREDIT_MANAGEMENT_INFO,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", request?.type);
//     yield put(getCreditManagementInfoSuccess(response?.data?.data));
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* getMakePaymentTableData(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.GET_MAKE_PAYMENT_DEATILS_API
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.GET_MAKE_PAYMENT_DEATILS_API,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", request?.type);
//     yield put(getMakePaymentTableDataSuccess(response?.data?.data));
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* getBankDescriptionData(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.GET_BANK_DESCRIPTION_API
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.GET_BANK_DESCRIPTION_API,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", request?.type);
//     yield put(getBankDescriptionDataSuccess(response?.data?.data));
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* submitPayment(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.SUBMIT_PAYMENT
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.SUBMIT_PAYMENT,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", request?.type);
//     if (response?.data?.success === true) {
//       yield put(submitPaymentSuccess(true));
//     } else {
//       yield put(
//         setOpenToast({
//           openToast: true,
//           severity: TOAST_SEVERITY.ERROR,
//           message: TOAST_MESSAGES.PAYMENT_ERROR,
//         })
//       );
//     }
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* login(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     //yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     // const signedObj: IAMSignGenerator = yield call(
//     //   createCredentialsIAM,
//     //   payload,
//     //   ENDPOINTS.LOGIN_USER
//     // );
//     const url = process.env?.REACT_APP_DYNAMODB_URL + ENDPOINTS.LOGIN_USER;
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url,
//       data: JSON.stringify(payload),
//       // headers: {
//       //   Authorization: signedObj.authorization,
//       //   "X-Amz-Date": signedObj["x-amz-date"],
//       //   "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       // },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", request?.type);
//     yield put(loginUserSuccess(response?.data));
//   } catch (err) {
//     yield put(setLoading(false));
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     //yield put(setLoading(false));
//   }
// }

// function* getAddressList(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     //yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.GET_DEALERS
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.GET_DEALERS,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     yield put(getAddressListSuccess(response?.data?.data));
//   } catch (err) {
//     yield put(setLoading(false));
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     //yield put(setLoading(false));
//   }
// }

// function* getSalesAreaMapping(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     //yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.SALES_AREA_MAPPING
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.SALES_AREA_MAPPING,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", request?.type);
//     yield put(getSalesAreaMappingSuccess(response?.data?.data));
//   } catch (err) {
//     yield put(setLoading(false));
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     //yield put(setLoading(false));
//   }
// }

// function* createInvoiceDebitNote(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.SAVE_COMMENT
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.SAVE_COMMENT,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", request?.type);
//     if (response?.data?.success === true) {
//       yield put(createDebitNoteSuccess(true));
//     } else {
//       yield put(
//         setOpenToast({
//           openToast: true,
//           severity: TOAST_SEVERITY.ERROR,
//           message: TOAST_MESSAGES.DEBIT_NOTE_CREATION_ERROR,
//         })
//       );
//     }
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* getSAPEnvDetails(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     //yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.GET_SAP_ENV_DETAILS
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.GET_SAP_ENV_DETAILS,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", request?.type);
//     yield put(getSAPEnvDetailsSuccess(response?.data?.data));
//   } catch (err) {
//     yield put(setLoading(false));
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     //yield put(setLoading(false));
//   }
// }

// function* userDetailsWithoutPassword(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     //yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.LOGIN_WITHOUT_PASSWORD
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.LOGIN_WITHOUT_PASSWORD,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", request?.type);
//     yield put(userDetailsWithoutPasswordSuccess(response?.data));
//   } catch (err) {
//     yield put(setLoading(false));
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     //yield put(setLoading(false));
//   }
// }

// function* resetPasswordRequest(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.RESET_PASSWORD
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.RESET_PASSWORD,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", request?.type);
//     yield put(resetPasswordRequestSuccess(response?.data?.success));
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* getUserInfoFromURLID(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.GET_USER_INFO_RESET_PASS_ID_API
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.GET_USER_INFO_RESET_PASS_ID_API,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", request?.type);
//     yield put(getUserInfoFromURLIDSuccess(response?.data));
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* getResetPassword(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.RESET_PASSWORD_API
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.RESET_PASSWORD_API,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", request?.type);
//     yield put(getResetPasswordSucess(response?.data?.success));
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* getTranslationAction(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     //yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.RETRIEVE_TRANSLATION
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.RETRIEVE_TRANSLATION,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", request?.type);
//     yield put(getTranslationActionSuccess(response?.data?.data));
//   } catch (err) {
//     yield put(setLoading(false));
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     //yield put(setLoading(false));
//   }
// }

// function* getPriceChangeData(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     // const response = API_DATA.priceChangeData;
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.PRICE_CHANGE
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.PRICE_CHANGE,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", request?.type);
//     yield put(getPriceChangeDataSuccess(response?.data?.data));
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* validateAccountNumber(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     // const response = API_DATA.accountDetails;
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.VALIDATE_ACCOUNT_NUMBER
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.VALIDATE_ACCOUNT_NUMBER,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", request?.type);
//     yield put(validateAccountNumberSuccess(response?.data?.data));
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* fetchReferenceData(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     //yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.FETCH_REFERENCE_DATA,
//       "GET"
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.FETCH_REFERENCE_DATA,
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "GET",
//     });
//     logger.info("Received response successfully from ", request?.type);
//     yield put(fetchReferenceDataSuccess(response?.data?.data));
//   } catch (err) {
//     yield put(setLoading(false));
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     //yield put(setLoading(false));
//   }
// }

// function* registerUser(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     // const response = API_DATA.registerResponse;
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.REGISTER_USER
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.REGISTER_USER,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", request?.type);
//     yield put(registerUserSuccess(response?.data?.data));
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* changePasswordAction(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.CHANGE_PASSWORD_API
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.CHANGE_PASSWORD_API,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", request?.type);
//     yield put(changePasswordActionSuccess(response?.data));
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* getBusinessGroupList(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     // const response = API_DATA.businessGroupList;
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.GET_BUSINESS_GROUP
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.GET_BUSINESS_GROUP,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", request?.type);
//     yield put(getBusinessGroupSuccess(response?.data?.data));
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* validateDealer(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     //yield put(setLoading(true));
//     // const response = API_DATA.validateDealer;
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.VALIDATE_DEALER
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.VALIDATE_DEALER,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", request?.type);
//     yield put(validateDealerSuccess(response?.data?.data));
//   } catch (err) {
//     yield put(setLoading(false));
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     //yield put(setLoading(false));
//   }
// }

// function* updateProfile(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     //yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.UPDATE_PROFILE
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.UPDATE_PROFILE,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", request?.type);
//     yield put(updateProfileSuccess(response?.data));
//   } catch (err) {
//     yield put(setLoading(false));
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     //yield put(setLoading(false));
//   }
// }
// function* fetchSiteSectionDetails(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     //yield put(setLoading(true));
//     // const response = API_DATA.siteSectionDetails;
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.FETCH_SITE_SECTION_DETAILS
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.FETCH_SITE_SECTION_DETAILS,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", request?.type);
//     yield put(fetchSiteSectionDetailsSuccess(response?.data?.data));
//   } catch (err) {
//     yield put(setLoading(false));
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     //yield put(setLoading(false));
//   }
// }

// // function* homePageButtonsConfig(request: any) {
// //   let payload = fetchPayload(request);
// //   try {
// //     //yield put(setLoading(true));
// //     logger.info("Calling API", request?.type);
// //     const signedObj: IAMSignGenerator = yield call(
// //       createCredentialsIAM,
// //       payload,
// //       ENDPOINTS.FETCH_JSON_CONFIG
// //     );
// //     const response: ResponseGenerator = yield call(apiClient as any, {
// //       url: ENDPOINTS.FETCH_JSON_CONFIG,
// //       data: JSON.stringify(payload),
// //       headers: {
// //         Authorization: signedObj.authorization,
// //         "X-Amz-Date": signedObj["x-amz-date"],
// //         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
// //       },
// //       method: "POST",
// //     });
// //     logger.info("Received response successfully from ", request?.type);
// //     yield put(homePageButtonsConfigSuccess(response?.data?.data));
// //   } catch (err) {
// //     yield put(setLoading(false));
// //     logger.error("Error occured in API call", request?.type, err);
// //   } finally {
// //     //yield put(setLoading(false));
// //   }
// // }

// function* homePageButtonsConfig(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     //yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.FETCH_JSON_CONFIG
//     );

//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.FETCH_JSON_CONFIG,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", request?.type);
//     yield put(homePageButtonsConfigSuccess(response?.data?.data));
//   } catch (err) {
//     yield put(setLoading(false));
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     //yield put(setLoading(false));
//   }
// }

// function* getDealerDetails(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.GET_DEALERS
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.GET_DEALERS,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     yield put(getDealerDetailsSuccess(response?.data?.data));
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* getReportingfilteredData(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     // const response = API_DATA.reportingDetails;
//     logger.info("Calling API", request?.type);
//     // const signedObj: IAMSignGenerator = yield call(
//     //   createCredentialsIAM,
//     //   payload,
//     //   ENDPOINTS.REPORT_FILTERED_DATA
//     // );
//     const url =
//       process.env?.REACT_APP_DYNAMODB_URL + ENDPOINTS.REPORT_FILTERED_DATA;
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url,
//       data: JSON.stringify(payload),
//       // headers: {
//       //   Authorization: signedObj.authorization,
//       //   "X-Amz-Date": signedObj["x-amz-date"],
//       //   "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       // },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", request?.type);
//     yield put(getReportingfilteredDataSuccess(response?.data?.data));
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* getOrderDetails(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     // const response = API_DATA.reportingOrderDetails;
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.FETCH_ORDER_DETAILS
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.FETCH_ORDER_DETAILS,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", request?.type);
//     yield put(getOrderDetailsSuccess(response?.data?.data));
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* createNewReport(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.CREATE_REPORT
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.CREATE_REPORT,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", request?.type);
//     yield put(createNewReportSuccess(response?.data));
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* getAllReports(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.FETCH_ALL_REPORTS
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.FETCH_ALL_REPORTS,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", request?.type);
//     yield put(getAllReportsSuccess(response?.data?.data));
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* getSelectedReportData(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.FETCH_SELECTED_REPORT
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.FETCH_SELECTED_REPORT,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", request?.type);
//     yield put(getSelectedReportDataSuccess(response?.data?.data));
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* updateReport(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.UPDATE_REPORT_API
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.UPDATE_REPORT_API,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", request?.type);
//     yield put(updateReportSuccess(response?.data));
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* searchDatadownloadProducts(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     // const response = API_DATA.productSearchResult;
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.GLOBAL_SEARCH_SUGGESTIONS
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.GLOBAL_SEARCH_SUGGESTIONS,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });

//     logger.info("Received response successfully from ", request?.type);
//     yield put(searchDataDownloadProductsSuccess(response?.data?.data));
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* downloadDataFile(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.DOWNLOAD_DATA_FILE
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.DOWNLOAD_DATA_FILE,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });

//     logger.info("Received response successfully from ", request?.type);
//     yield put(downloadDataFileSuccess(response?.data?.data));
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* getCaptchaValidation(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     //yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.VALIDATE_CAPTCHA_API
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.VALIDATE_CAPTCHA_API,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", request?.type);
//     if (payload?.from === "login") {
//       yield put(getLoginCaptchaValidationSuccess(response?.data?.data));
//     } else {
//       yield put(getCaptchaValidationSuccess(response?.data?.data));
//     }
//   } catch (err) {
//     yield put(setLoading(false));
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     //yield put(setLoading(false));
//   }
// }

// function* getProductVisibilityData(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     //const response = API_DATA.productVisibilityData;
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.PRODUCT_VISIBILITY
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.PRODUCT_VISIBILITY,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });

//     logger.info("Received response successfully from ", request?.type);
//     yield put(getProductVisibilityDataSuccess(response?.data?.data));
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* checkSalesRep(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     // const response = API_DATA.checkSalesRepData;
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.CHECK_SALES_REP
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.CHECK_SALES_REP,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });

//     logger.info("Received response successfully from ", request?.type);
//     yield put(checkSalesRepSuccess(response?.data));
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* checkContactEMail(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     // const response = API_DATA.checkContactEmailData;
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.CHECK_CONTACT_EMAILS
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.CHECK_CONTACT_EMAILS,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });

//     logger.info("Received response successfully from ", request?.type);
//     yield put(checkContactEmailSuccess(response?.data));
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* checkSalesRepBySalesOrg(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     // const response = API_DATA.checkSalesRepBySalesOrgData;
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.CHECK_SALES_REP_BY_SALES_ORG
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.CHECK_SALES_REP_BY_SALES_ORG,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });

//     logger.info("Received response successfully from ", request?.type);
//     yield put(checkSalesRepBySalesOrgSuccess(response?.data));
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* checkSalesRepDealer(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     // const response = API_DATA.checkSalesRepDealerData;
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.CHECK_SALES_REP_BY_SALES_ORG
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.CHECK_SALES_REP_BY_SALES_ORG,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });

//     logger.info("Received response successfully from ", request?.type);
//     yield put(checkSalesRepDealerSuccess(response?.data));
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* checkSalesOrgAccounts(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     // const response = API_DATA.checkSalesOrgAccountsData;
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.CHECK_SALES_ORG_ACCOUNTS
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.CHECK_SALES_ORG_ACCOUNTS,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });

//     logger.info("Received response successfully from ", request?.type);
//     yield put(checkSalesOrgAccountsSuccess(response?.data));
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* fetchProdCategoryResponse(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.FETCH_PROD_CATEGORY_RESPONSE
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.FETCH_PROD_CATEGORY_RESPONSE,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });

//     logger.info("Received response successfully from ", request?.type);
//     yield put(fetchProdCategoryResponseSuccess(response?.data));
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* fetchGlobalSearchSuggestions(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     // const response = API_DATA.globalSearchSuggestions;
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.GLOBAL_SEARCH_SUGGESTIONS
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.GLOBAL_SEARCH_SUGGESTIONS,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });

//     logger.info("Received response successfully from ", request?.type);
//     yield put(fetchGlobalSearchSuggestionsSuccess(response?.data?.data));
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* fetchProductDetailsData(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     // const response = API_DATA.productDetailsData;
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.FETCH_PRODUCT_DETAILS
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.FETCH_PRODUCT_DETAILS,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", request?.type);
//     if (typeof payload?.productNames === "string")
//       yield put(
//         fetchProductDetailsDataSuccess({
//           response: response?.data?.data,
//           compare: false,
//         })
//       );
//     else
//       yield put(
//         fetchProductDetailsDataSuccess({
//           response: response?.data?.data,
//           compare: true,
//         })
//       );
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }
// function* getArticlesFromCMS(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.CMS_ARTICLES_API
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.CMS_ARTICLES_API,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", request?.type);
//     yield put(getArticlesFromCMSSuccess(response?.data?.data));
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }
// function* getPricingInfoArticles(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     //yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.CMS_ARTICLES_API
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.CMS_ARTICLES_API,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", request?.type);
//     yield put(getPricingInfoArticlesSuccess(response?.data?.data));
//   } catch (err) {
//     yield put(setLoading(false));
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     //yield put(setLoading(false));
//   }
// }
// function* getRelatedItemArticles(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     //yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.CMS_ARTICLES_API
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.CMS_ARTICLES_API,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", request?.type);
//     yield put(getRelatedItemArticlesSuccess(response?.data?.data));
//   } catch (err) {
//     yield put(setLoading(false));
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     //yield put(setLoading(false));
//   }
// }

// function* getTermsAndCondition(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.TERMS_AND_CONDITION_API
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.TERMS_AND_CONDITION_API,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", request?.type);
//     yield put(getTermsAndConditionSuccess(response?.data?.data));
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* getQuotationsData(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     // const response = API_DATA.myQuotations;
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.QUOTATIONS_API
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.QUOTATIONS_API,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", request?.type);
//     yield put(getQuotationsDataSuccess(response?.data?.data));
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* getCartProducts(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     // const response = API_DATA.cartProducts;
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.CART_API
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.CART_API,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", request?.type);
//     yield put(getCartProductsSuccess(response?.data?.data?.shoppingContext));
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* clearCartOrder(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.CLEAR_ORDER
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.CLEAR_ORDER,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", request?.type);
//     yield put(clearCartOrderSuccess(response?.data?.data));
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* getLoginCMSData(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     //yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.CMS_ARTICLES_API
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.CMS_ARTICLES_API,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", request?.type);
//     yield put(getLoginCMSDataSuccess(response?.data?.data));
//   } catch (err) {
//     yield put(setLoading(false));
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     //yield put(setLoading(false));
//   }
// }

// function* getGradedStockDetails(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     // const response = API_DATA?.gradedStockData;
//     const url =
//       process.env?.REACT_APP_DYNAMODB_URL + ENDPOINTS.GET_GRADED_STOCK_API;
//     // const signedObj: IAMSignGenerator = yield call(
//     //   createCredentialsIAM,
//     //   payload,
//     //   ENDPOINTS.START_PRODUCT_FLOW_API,
//     // );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: url,
//       data: JSON.stringify(payload),
//       // headers: {
//       //   Authorization: signedObj.authorization,
//       //   "X-Amz-Date": signedObj["x-amz-date"],
//       //   "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       // },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", request?.type);
//     yield put(getGradedStockDetailsSuccess(response?.data?.data));
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* getOrderChangeReport(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     // const response = API_DATA?.orderChangeLineItems;
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.ORDER_CHANGE_REPORT_API
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.ORDER_CHANGE_REPORT_API,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", request?.type);
//     yield put(getOrderChangeReportSuccess(response?.data));
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* getOrderChangeHistoryData(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     // const response = API_DATA?.orderChangeHistoryData;
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.ORDER_CHANGE_HISTORY_API
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.ORDER_CHANGE_HISTORY_API,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", request?.type);
//     yield put(getOrderChangeHistoryDataSuccess(response?.data?.data));
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* getRelatedToolsArticles(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     //yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.CMS_ARTICLES_API
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.CMS_ARTICLES_API,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", request?.type);
//     yield put(getRelatedToolsArticlesSuccess(response?.data?.data));
//   } catch (err) {
//     yield put(setLoading(false));
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     //yield put(setLoading(false));
//   }
// }

// function* getPrimeSupportArticles(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.CMS_ARTICLES_API
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.CMS_ARTICLES_API,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", request?.type);
//     yield put(getPrimeSupportArticlesSuccess(response?.data?.data));
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* fetchLiveAvailabilityAPI(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     //const response: any = API_DATA?.liveAvailability;
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.LIVE_AVAILABILITY_API
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.LIVE_AVAILABILITY_API,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", request?.type);
//     yield put(fetchLiveAvailabilitySuccess(response?.data?.data));
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* setCurrentDealerInContext(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     //yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.SET_CURRENT_ACC
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.SET_CURRENT_ACC,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", request?.type);
//     yield put(getCurrentDealerSuccess(response?.data));
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     //yield put(setLoading(false));
//   }
// }

// function* getContextDetails(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.GET_CONTEXT_DETAILS_API
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.GET_CONTEXT_DETAILS_API,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", request?.type);
//     yield put(getContextDetailsSuccess(response?.data?.data));
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* getCalendarData(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.GET_CALENDAR_DETAILS_API
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.GET_CALENDAR_DETAILS_API,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", request?.type);
//     yield put(getCalendarDataSuccess(response?.data?.data));
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* myQuotationsSFDCPlaceOrder(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.SFDC_PLACE_ORDER
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.SFDC_PLACE_ORDER,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", request?.type);
//     yield put(myQuotationsSFDCPlaceOrderSuccess(response?.data));
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* startProductFlowAPI(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     const url =
//       process.env?.REACT_APP_DYNAMODB_URL + ENDPOINTS.START_PRODUCT_FLOW_API;
//     // const signedObj: IAMSignGenerator = yield call(
//     //   createCredentialsIAM,
//     //   payload,
//     //   ENDPOINTS.START_PRODUCT_FLOW_API,
//     // );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: url,
//       data: JSON.stringify(payload),
//       // headers: {
//       //   Authorization: signedObj.authorization,
//       //   "X-Amz-Date": signedObj["x-amz-date"],
//       //   "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       // },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", request?.type);
//     yield put(startProductFlowSuccess(response?.data));
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }
// function* fetchNewProducts(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.GET_NEW_PRODUCT_API
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.GET_NEW_PRODUCT_API,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", request?.type);
//     yield put(getNewProductsSuccess(response?.data?.data));
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* getCategoryProduct(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.GET_CATEGORY_PRODUCT_API
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.GET_CATEGORY_PRODUCT_API,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", request?.type);
//     let prodList: any = [];
//     response?.data?.data.forEach((category: any) => {
//       category?.forEach((subCategory: any) => {
//         prodList.push(subCategory);
//       });
//     });
//     let displayItem: any = [];
//     request?.payload?.categoryName.forEach((categoryName: any) => {
//       displayItem.push(categoryName);
//     });

//     yield put(
//       getCategoryProductSuccess({
//         displayItem: displayItem,
//         prodList: prodList,
//       })
//     );
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }
// function* editOrderReport(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.EDIT_REPORT_API
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.EDIT_REPORT_API,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", request?.type);
//     yield put(editOrderReportSuccess(response?.data));
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }
// function* getProductsByMaterialNameAPI(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.GET_PRODUCTS_MATERIAL_API
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.GET_PRODUCTS_MATERIAL_API,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", request?.type);

//     yield put(getProductsByMaterialNameSuccess(response?.data?.data));
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* sendProductDetailsMailAPI(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.SEND_PRODUCT_DETAILS_MAIL
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.SEND_PRODUCT_DETAILS_MAIL,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", request?.type);

//     yield put(sendProductDetailsMailSuccess(response?.data?.data));
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* getPremiumServiceData(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.PREMIUM_SERVICE_API
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.PREMIUM_SERVICE_API,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", response);
//     yield put(getPremiumServiceDataSuccess(response?.data?.data));
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* getCartTotalProductsCount(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     //yield put(setLoading(true));
//     // const response = API_DATA.cartTotalProducts;
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.CART_TOTAL_API
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.CART_TOTAL_API,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", response);
//     yield put(getCartTotalProductsCountSuccess(response?.data?.data));
//   } catch (err) {
//     yield put(setLoading(false));
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     //yield put(setLoading(false));
//   }
// }

// function* getProductList(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.GET_PRODUCT_LIST_API
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.GET_PRODUCT_LIST_API,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", response);
//     yield put(getProductListSuccess(response?.data?.data));
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* getQuote(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     // const response = API_DATA.getQuote;
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.GET_QUOTE_API
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.GET_QUOTE_API,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", response);
//     yield put(getQuoteSuccess(response?.data?.data));
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* logoutAction(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.LOGOUT_API
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.LOGOUT_API,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", response);
//     // yield put(logoutActionSuccess(response?.data?.data));
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* getProductGroupAPI(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.GET_PRODUCT_GROUP_API
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.GET_PRODUCT_GROUP_API,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", response);
//     yield put(getProductGroupSuccess(response?.data?.data));
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* updateProductGroupAPI(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.UPDATE_PRODUCT_GROUP_API
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.UPDATE_PRODUCT_GROUP_API,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", response);
//     yield put(updateproductGroupSuccess(response?.data));
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* saveProductGroupAPI(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.SAVE_PRODUCT_GROUP_API
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.SAVE_PRODUCT_GROUP_API,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", response);
//     yield put(saveproductGroupSuccess(response?.data));
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* deleteProductGroupAPI(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.DELETE_PRODUCT_GROUP_API
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.DELETE_PRODUCT_GROUP_API,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", response);
//     yield put(deleteproductGroupSuccess(response?.data));
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* updateCartAction(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     // yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.UPDATE_CART_ORDER_API
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.UPDATE_CART_ORDER_API,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", response);
//     yield put(updateCartActionSuccess(response?.data?.data?.shoppingContext));
//   } catch (err) {
//     yield put(setLoading(false));
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     // yield put(setLoading(false));
//   }
// }

// function* deleteSelectedItemCart(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.DELETE_SELECTED_CART_ORDER_API
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.DELETE_SELECTED_CART_ORDER_API,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", response);
//     yield put(
//       deleteSelectedItemCartSuccess(response?.data?.data?.shoppingContext)
//     );
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* addToCartAPI(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.ADD_TO_CART_API
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.ADD_TO_CART_API,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", response);
//     yield put(addToCartSuccess(response?.data));
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* placeSAPOrder(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     // const signedObj: IAMSignGenerator = yield call(
//     //   createCredentialsIAM,
//     //   payload,
//     //   ENDPOINTS.PLACE_SAP_ORDER_API
//     // );
//     const url =
//       process.env?.REACT_APP_DYNAMODB_URL + ENDPOINTS.PLACE_SAP_ORDER_API;
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: url,
//       data: JSON.stringify(payload),
//       // headers: {
//       //   Authorization: signedObj.authorization,
//       //   "X-Amz-Date": signedObj["x-amz-date"],
//       //   "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       // },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", response);
//     yield put(placeSAPOrderSuccess(response?.data));
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* getMultiQuote(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     //yield put(setLoading(true));
//     // const response = API_DATA.getQuote;
//     logger.info("Calling API", request?.type);
//     // const signedObj: IAMSignGenerator = yield call(
//     //   createCredentialsIAM,
//     //   payload,
//     //   ENDPOINTS.GET_MULTI_QUOTE_API
//     // );
//     const url =
//       process.env?.REACT_APP_DYNAMODB_URL + ENDPOINTS.GET_MULTI_QUOTE_API;
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url,
//       data: JSON.stringify(payload),
//       // headers: {
//       //   Authorization: signedObj.authorization,
//       //   "X-Amz-Date": signedObj["x-amz-date"],
//       //   "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       // },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", response);
//     yield put(getMultiQuoteSuccess(response?.data));
//   } catch (err) {
//     yield put(setLoading(false));
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     //yield put(setLoading(false));
//   }
// }

// function* cartFileUpload(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.UPLOAD_FILE_SHOPPING_CART
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.UPLOAD_FILE_SHOPPING_CART,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", response);
//     yield put(cartFileUploadSuccess(response?.data?.data?.shoppingContext));
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* getProductImagesAPI(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.GET_PRODUCT_IMAGES_API
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.GET_PRODUCT_IMAGES_API,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", response);
//     yield put(getProductImagesSuccess(response?.data));
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// function* getAccountInfoCMS(request: any) {
//   let payload = fetchPayload(request);
//   try {
//     yield put(setLoading(true));
//     logger.info("Calling API", request?.type);
//     const signedObj: IAMSignGenerator = yield call(
//       callAuthAPI,
//       payload,
//       ENDPOINTS.CMS_ARTICLES_API
//     );
//     const response: ResponseGenerator = yield call(apiClient as any, {
//       url: ENDPOINTS.CMS_ARTICLES_API,
//       data: JSON.stringify(payload),
//       headers: {
//         Authorization: signedObj.authorization,
//         "X-Amz-Date": signedObj["x-amz-date"],
//         "X-Amz-Content-Sha256": signedObj["x-amz-content-sha256"],
//       },
//       method: "POST",
//     });
//     logger.info("Received response successfully from ", request?.type);
//     yield put(getAccountInfoCMSSuccess(response?.data?.data));
//   } catch (err) {
//     logger.error("Error occured in API call", request?.type, err);
//   } finally {
//     yield put(setLoading(false));
//   }
// }

// export default function* saga() {
//   yield takeLatest(
//     commonConstant.SEND_PRODUCT_DETAILS_MAIL,
//     sendProductDetailsMailAPI
//   );
//   yield takeLatest(commonConstant.GET_STATEMENT_DATA, getStatementsData);
//   yield takeLatest(commonConstant.DOWNLOAD_INVOICE_PDF, downloadInvoicePdf);
//   yield takeLatest(commonConstant.GET_DEBIT_NOTE_REASONS, getDebitNoteReasons);
//   yield takeLatest(commonConstant.GET_USER_CURRENCIES, getUserCurrencies);
//   yield takeLatest(commonConstant.CREATE_DEBIT_NOTE, createDebitNote);
//   yield takeLatest(commonConstant.GET_CREDIT_ITEMS, setCreditAPIData);
//   yield takeLatest(commonConstant.GET_DEBIT_ITEMS, setDebitAPIData);
//   yield takeLatest(commonConstant.SET_PAYMENT_HISTORY, getPaymentHistory);
//   yield takeLatest(commonConstant.SET_PAID_ITEMS, getPaidItemsData);
//   yield takeLatest(
//     commonConstant.SET_PAID_ITEM_DETAILS,
//     getPaidItemDetailsData
//   );
//   yield takeLatest(
//     commonConstant.SET_PAYMENT_ITEM_DETAILS_DATA,
//     getPaymentDetailsData
//   );
//   yield takeLatest(
//     commonConstant.SET_ENQUIRY_TABLE_DATA,
//     getEnquiryTableDetailsData
//   );
//   yield takeLatest(commonConstant.GET_DISPUTED_ITEMS, getDisputedItems);
//   yield takeLatest(
//     commonConstant.GET_MAKE_PAYMENT_TABLE_DATA,
//     getMakePaymentTableData
//   );
//   yield takeLatest(
//     commonConstant.GET_BANK_DESCRIPTION_DATA,
//     getBankDescriptionData
//   );
//   yield takeLatest(commonConstant.SUBMIT_PAYMENT, submitPayment);
//   yield takeLatest(commonConstant.GET_COMMENTS, getReplyEnquiryComments);
//   yield takeLatest(commonConstant.SAVE_COMMENT, saveComment);
//   yield takeLatest(
//     commonConstant.GET_CREDIT_MANAGEMENT_INFO,
//     getCreditMangement
//   );
//   yield takeLatest(commonConstant.LOGIN_USER, login);
//   yield takeLatest(commonConstant.GET_ADDRESS_LIST, getAddressList);
//   yield takeLatest(commonConstant.GET_SALES_AREA_MAPPING, getSalesAreaMapping);
//   yield takeLatest(
//     commonConstant.CREATE_INVOICE_DEBIT_NOTE,
//     createInvoiceDebitNote
//   );
//   yield takeLatest(commonConstant.GET_SAP_ENV_DETAILS, getSAPEnvDetails);
//   yield takeLatest(
//     commonConstant.VALIDATE_ACCOUNT_NUMBER,
//     validateAccountNumber
//   );
//   yield takeLatest(commonConstant.FETCH_REFERENCE_DATA, fetchReferenceData);
//   yield takeLatest(commonConstant.REGISTER_USER, registerUser);
//   yield takeLatest(
//     commonConstant.GET_USER_DETAILS_WITHOUT_PASSWORD,
//     userDetailsWithoutPassword
//   );
//   yield takeLatest(commonConstant.RESET_PASSWORD_REQUEST, resetPasswordRequest);
//   yield takeLatest(
//     commonConstant.USER_DETAILS_FROM_URL_ID,
//     getUserInfoFromURLID
//   );
//   yield takeLatest(commonConstant.RESET_PASSWORD, getResetPassword);
//   yield takeLatest(commonConstant.CHANGE_TRANSLATION, getTranslationAction);
//   yield takeLatest(commonConstant.CHANGE_PASSWORD, changePasswordAction);
//   yield takeLatest(commonConstant.BUSINESS_GROUP, getBusinessGroupList);
//   yield takeLatest(commonConstant.VALIDATE_DEALER, validateDealer);
//   yield takeLatest(commonConstant.PRICE_CHANGE, getPriceChangeData);
//   yield takeLatest(commonConstant.UPDATE_PROFILE, updateProfile);
//   yield takeLatest(
//     commonConstant.FETCH_SITESECTION_DETAILS,
//     fetchSiteSectionDetails
//   );
//   yield takeLatest(
//     commonConstant.HOME_PAGE_BUTTONS_CONFIG,
//     homePageButtonsConfig
//   );
//   yield takeLatest(commonConstant.GET_DEALER_DETAILS, getDealerDetails);
//   yield takeLatest(
//     commonConstant.GET_REPORTING_FILTERED_DATA,
//     getReportingfilteredData
//   );
//   yield takeLatest(commonConstant.GET_ORDER_DETAILS, getOrderDetails);
//   yield takeLatest(commonConstant.CREATE_NEW_REPORT, createNewReport);
//   yield takeLatest(commonConstant.GET_ALL_REPORTS, getAllReports);
//   yield takeLatest(
//     commonConstant.GET_SELECTED_REPORT_DATA,
//     getSelectedReportData
//   );
//   yield takeLatest(commonConstant.UPDATE_REPORT, updateReport);
//   yield takeLatest(
//     commonConstant.SEARCH_DATADOWNLOAD_PRODUCT,
//     searchDatadownloadProducts
//   );
//   yield takeLatest(commonConstant.DOWNLOAD_DATA_FILE, downloadDataFile);
//   yield takeLatest(commonConstant.GET_CAPTCHA_VALIDATION, getCaptchaValidation);
//   yield takeLatest(
//     commonConstant.PRODUCT_VISIBILITY_DATA,
//     getProductVisibilityData
//   );
//   yield takeLatest(commonConstant.CHECK_SALES_REP, checkSalesRep);
//   yield takeLatest(commonConstant.CHECK_CONTACT_EMAIL, checkContactEMail);
//   yield takeLatest(
//     commonConstant.CHECK_SALES_REP_BY_SALES_ORG,
//     checkSalesRepBySalesOrg
//   );
//   yield takeLatest(commonConstant.CHECK_SALES_REP_DEALER, checkSalesRepDealer);
//   yield takeLatest(commonConstant.GET_CMS_ARTICLES, getArticlesFromCMS);
//   yield takeLatest(
//     commonConstant.CHECK_SALES_ORG_ACCOUNTS,
//     checkSalesOrgAccounts
//   );
//   yield takeLatest(
//     commonConstant.FETCH_PROD_CATEGORY_RESPONSE,
//     fetchProdCategoryResponse
//   );
//   yield takeLatest(
//     commonConstant.GLOBAL_SEARCH_SUGGESTIONS,
//     fetchGlobalSearchSuggestions
//   );
//   yield takeLatest(
//     commonConstant.PRODUCT_DETAILS_DATA,
//     fetchProductDetailsData
//   );
//   yield takeLatest(
//     commonConstant.GET_TERMS_AND_CONDITION,
//     getTermsAndCondition
//   );
//   yield takeLatest(
//     commonConstant.GET_RELATED_ITEMS_ARTICLES,
//     getRelatedItemArticles
//   );
//   yield takeLatest(
//     commonConstant.GET_PRICING_INFO_ARTICLES,
//     getPricingInfoArticles
//   );
//   yield takeLatest(commonConstant.GET_QUOTATIONS_DATA, getQuotationsData);
//   yield takeLatest(commonConstant.GET_CART_PRODUCTS, getCartProducts);
//   yield takeLatest(commonConstant.GET_LOGIN_CMS_DATA, getLoginCMSData);
//   yield takeLatest(commonConstant.GET_GRADED_STOCK_DATA, getGradedStockDetails);
//   yield takeLatest(
//     commonConstant.GET_ORDER_CHANGE_REPORT,
//     getOrderChangeReport
//   );
//   yield takeLatest(
//     commonConstant.GET_ORDER_CHANGE_HISTORY,
//     getOrderChangeHistoryData
//   );
//   yield takeLatest(
//     commonConstant.GET_RELATED_TOOLS_ARICLES,
//     getRelatedToolsArticles
//   );
//   yield takeLatest(
//     commonConstant.GET_PRIME_SUPPORT_REGISTRATION,
//     getPrimeSupportArticles
//   );
//   yield takeLatest(
//     commonConstant.SET_CURRENT_DEALER_IN_CONTEXT,
//     setCurrentDealerInContext
//   );
//   yield takeLatest(commonConstant.GET_CONTEXT_DETAILS, getContextDetails);
//   yield takeLatest(commonConstant.GET_CALENDAR_DETAILS, getCalendarData);
//   yield takeLatest(
//     commonConstant.SFDC_PLACE_ORDER_MY_QUOTATIONS,
//     myQuotationsSFDCPlaceOrder
//   );
//   yield takeLatest(commonConstant.EDIT_ORDER_REPORT, editOrderReport);
//   yield takeLatest(
//     commonConstant.FETCH_LIVE_AVAILABILITY,
//     fetchLiveAvailabilityAPI
//   );
//   yield takeLatest(commonConstant.START_PRODUCT_FLOW, startProductFlowAPI);
//   yield takeLatest(
//     commonConstant.FETCH_PRODUCT_CONTENT_DATA,
//     getCategoryProduct
//   );
//   yield takeLatest(commonConstant.GET_NEW_PRODUCTS, fetchNewProducts);
//   yield takeLatest(
//     commonConstant.GET_PRODUCTS_BY_MATERIAL,
//     getProductsByMaterialNameAPI
//   );
//   yield takeLatest(
//     commonConstant.GET_PREMIUM_SERVICE_DATA,
//     getPremiumServiceData
//   );
//   yield takeLatest(
//     commonConstant.GET_CART_PRODUCTS_TOTAL,
//     getCartTotalProductsCount
//   );
//   yield takeLatest(commonConstant.GET_ALL_PRODUCT_LIST, getProductList);
//   yield takeLatest(commonConstant.GET_QUOTE, getQuote);
//   yield takeLatest(commonConstant.CALL_LOGOUT, logoutAction);
//   yield takeLatest(commonConstant.GET_PRODUCT_GROUP, getProductGroupAPI);
//   yield takeLatest(commonConstant.DELETE_PRODUCT_GROUP, deleteProductGroupAPI);
//   yield takeLatest(commonConstant.UPDATE_PRODUCT_GROUP, updateProductGroupAPI);
//   yield takeLatest(commonConstant.SAVE_PRODUCT_GROUP, saveProductGroupAPI);
//   yield takeLatest(commonConstant.CLEAR_CART_ORDER, clearCartOrder);
//   yield takeLatest(commonConstant.UPDATE_CART_ORDER, updateCartAction);
//   yield takeLatest(
//     commonConstant.DELETE_SELECTED_CART_ORDER,
//     deleteSelectedItemCart
//   );
//   yield takeLatest(commonConstant.ADD_TO_CART, addToCartAPI);
//   yield takeLatest(commonConstant.PLACE_SAP_ORDER, placeSAPOrder);
//   yield takeLatest(commonConstant.GET_MULTI_QUOTE, getMultiQuote);
//   yield takeLatest(commonConstant.CART_FILE_UPLOAD, cartFileUpload);
//   yield takeLatest(commonConstant.GET_PRODUCT_IMAGES, getProductImagesAPI);
//   yield takeLatest(commonConstant.GET_ACCOUNT_INFO_CMS, getAccountInfoCMS);
// }

// export {
//   getStatementsData,
//   downloadInvoicePdf,
//   getDebitNoteReasons,
//   getUserCurrencies,
//   createDebitNote,
//   setCreditAPIData,
//   setDebitAPIData,
//   getPaymentHistory,
//   getPaidItemsData,
//   getPaidItemDetailsData,
//   getPaymentDetailsData,
//   getEnquiryTableDetailsData,
//   getDisputedItems,
//   getMakePaymentTableData,
//   getBankDescriptionData,
//   submitPayment,
//   getReplyEnquiryComments,
//   saveComment,
//   getCreditMangement,
//   login,
//   getAddressList,
//   getSalesAreaMapping,
//   createInvoiceDebitNote,
//   getSAPEnvDetails,
//   validateAccountNumber,
//   fetchReferenceData,
//   registerUser,
//   userDetailsWithoutPassword,
//   resetPasswordRequest,
//   getUserInfoFromURLID,
//   getResetPassword,
//   getTranslationAction,
//   changePasswordAction,
//   getBusinessGroupList,
//   validateDealer,
//   getPriceChangeData,
//   updateProfile,
//   fetchSiteSectionDetails,
//   homePageButtonsConfig,
//   getDealerDetails,
//   getReportingfilteredData,
//   getOrderDetails,
//   createNewReport,
//   getAllReports,
//   getSelectedReportData,
//   updateReport,
//   searchDatadownloadProducts,
//   downloadDataFile,
//   getCaptchaValidation,
//   getProductVisibilityData,
//   checkSalesRep,
//   checkContactEMail,
//   checkSalesRepBySalesOrg,
//   checkSalesRepDealer,
//   checkSalesOrgAccounts,
//   getArticlesFromCMS,
//   fetchProdCategoryResponse,
//   fetchGlobalSearchSuggestions,
//   fetchProductDetailsData,
//   getTermsAndCondition,
//   getPricingInfoArticles,
//   getRelatedItemArticles,
//   getQuotationsData,
//   getCartProducts,
//   getLoginCMSData,
//   getGradedStockDetails,
//   getOrderChangeReport,
//   getOrderChangeHistoryData,
//   getRelatedToolsArticles,
//   getPrimeSupportArticles,
//   setCurrentDealerInContext,
//   getContextDetails,
//   getCalendarData,
//   myQuotationsSFDCPlaceOrder,
//   editOrderReport,
//   getProductsByMaterialNameAPI,
//   getPremiumServiceData,
//   getCartTotalProductsCount,
//   getProductList,
//   getQuote,
//   logoutAction,
//   clearCartOrder,
//   updateCartAction,
//   deleteSelectedItemCart,
//   placeSAPOrder,
//   getMultiQuote,
//   cartFileUpload,
//   getAccountInfoCMS,
// };


