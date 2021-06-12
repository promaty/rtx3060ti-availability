chrome.runtime.onInstalled.addListener(() => {
  chrome.alarms.create('refresh', { periodInMinutes: 0.1 })
  chrome.notifications.onClicked.addListener(() => { 
    chrome.tabs.create({ url: STORE_URL }) 
  })
})

chrome.alarms.onAlarm.addListener(async () => {
  const products = await fetch(API_URL).then(res => res.json())
  if (!JSON.stringify(products).includes(JSON.stringify(OUT_OF_STOCK_RESPONSE))) {
    chrome.notifications.create('BUY NOW', { 
      type: 'basic',
      title: 'BUY NOW',
      message: 'BUY NOW',
      iconUrl: 'alert.png'
    })
  }
})

const API_URL = 'https://api.nvidia.partners/edge/product/search?page=1&limit=9&locale=fr-fr&gpu=RTX%203060,RTX%203060%20Ti&category=GPU'
const STORE_URL = 'https://shop.nvidia.com/fr-fr/geforce/store/gpu/?page=1&limit=9&locale=fr-fr&gpu=RTX%203060,RTX%203060%20Ti&category=GPU'
const OUT_OF_STOCK_RESPONSE = {
  "displayName": "NVIDIA RTX 3060 Ti",
  "totalCount": 1,
  "productID": 33825,
  "imageURL": "https://assets.nvidia.partners/images/png/nvidia-geforce-rtx-3060-ti.png",
  "productTitle": "NVIDIA GEFORCE RTX 3060 Ti",
  "digitialRiverID": "",
  "productSKU": "NVGFT060T",
  "productUPC": "NVGFT060T_FR",
  "productUPCOriginal": "NVGFT060T",
  "productPrice": "€419.00",
  "productAvailable": false,
  "productRating": null,
  "customerReviewCount": null,
  "isFounderEdition": true,
  "isFeaturedProduct": true,
  "certified": false,
  "manufacturer": "NVIDIA",
  "locale": "FR",
  "isFeaturedProdcutFoundInSecondSearch": false,
  "category": "GPU",
  "gpu": "RTX 3060 Ti",
  "purchaseOption": "",
  "prdStatus": "out_of_stock",
  "minShipDays": null,
  "maxShipDays": null,
  "shipInfo": null,
  "isOffer": false,
  "offerText": "",
  "retailers": [
    {
      "productId": 33825,
      "productTitle": "NVIDIA GEFORCE RTX 3060 Ti",
      "logoUrl": "https://media.ldlc.com/cms/2020-11/logo-site-noel-2.png",
      "isAvailable": true,
      "salePrice": "419.00",
      "directPurchaseLink": null,
      "purchaseLink": "https://www.ldlc.com/fiche/PB78454578.html",
      "hasOffer": false,
      "offerText": null,
      "partnerId": "45",
      "storeId": "45",
      "upc": "NVGFT060T_FR",
      "sku": "NVGFT060T",
      "stock": 0,
      "retailerName": "https://www.ldlc.com",
      "type": 80
    }
  ],
  "productInfo": [
    {
      "name": "cooling_system",
      "value": "Fan"
    },
    {
      "name": "gpu_boost_clock_speed",
      "value": "1.67 GHz"
    },
    {
      "name": "gpu_memory_size",
      "value": "8 GB"
    }
  ],
  "compareProductInfo": [
    {
      "name": "cooling_system",
      "value": "Fan"
    },
    {
      "name": "gpu_clock_speed",
      "value": "1.41 GHz"
    },
    {
      "name": "gpu_boost_clock_speed",
      "value": "1.67 GHz"
    },
    {
      "name": "gpu_memory_size",
      "value": "8 GB"
    }
  ]
}
