var request_body = JSON.parse($reqeust.body);
if(request_body["operationName"] === "processAppleReceipt") {
  var res = {
    "data": {
      "processAppleReceipt": {
        "error": 0,
        "subscription": {
          "productId": "com.gingerlabs.Notability.premium_subscription",
          "originalTransactionId": "570001184068302",
          "tier": "premium",
          "refundedDate": null,
          "refundedReason": null,
          "isInBillingRetryPeriod": false,
          "expirationDate": "2099-09-09T09:09:09.000Z",
          "gracePeriodExpiresAt": null,
          "overDeviceLimit": false,
          "expirationIntent": null,
          "__typename": "AppStoreSubscription",
          "user": null,
          "status": "canceled",
          "originalPurchaseDate": "2022-09-09T09:09:09.000Z"
        },
        "__typename": "SubscriptionResult"
      }
    }
  };
  var body = JSON.stringify(res);
  console.log(res)
  $done(body);
} else {
  $done($response.body);
}

