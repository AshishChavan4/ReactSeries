import React from 'react'

export default function App() {


  return (
    <>
      < nav >
        <div className="logo">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxCUQAsqJBCfCWvUlbUCSAXaXbv6_vrc-rCQ&s" alt="" width={"80px"} />
        </div>
        <div className="menu">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav >
      <Body />
    </>
  )
}

const restaurants = [

  {
    "info": {
      "id": "391191",
      "name": "Chaatwich",
      "cloudinaryImageId": "2a70d00cc10dd544a5c58529530b0213",
      "locality": "Kharghar",
      "areaName": "Kharghar",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "Snacks",
        "Chaat",
        "Fast Food",
        "Street Food",
        "Ice Cream",
        "Indian",
        "Jain",
        "Maharashtrian",
        "Pizzas",
        "Beverages"
      ],
      "avgRating": 4.6,
      "veg": true,
      "parentId": "5500",
      "avgRatingString": "4.6",
      "totalRatingsString": "1K+",
      "promoted": true,
      "adTrackingId": "cid=15984518~p=1~adgrpid=15984518#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=391191~eid=ef21d649-85ab-4b00-8ea9-139b5cb367e5~srvts=1723804573246~collid=45995",
      "sla": {
        "deliveryTime": 24,
        "lastMileTravel": 2.8,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "2.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-08-16 22:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Sandwiches.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "imageId": "Rxawards/_CATEGORY-Sandwiches.png",
                  "description": "Delivery!"
                }
              }
            ]
          },
          "textExtendedBadges": {

          },
          "textBased": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "25% OFF",
        "subHeader": "UPTO ₹65"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.7",
          "ratingCount": "50+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=391191",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "66810",
      "name": "Chinese Wok",
      "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
      "locality": "Sector 20",
      "areaName": "Kharghar",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Chinese",
        "Asian",
        "Tibetan",
        "Desserts"
      ],
      "avgRating": 4.1,
      "parentId": "61955",
      "avgRatingString": "4.1",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 20,
        "lastMileTravel": 2.1,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "2.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-08-17 02:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Chinese.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {

          },
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "imageId": "Rxawards/_CATEGORY-Chinese.png",
                  "description": "Delivery!"
                }
              }
            ]
          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹169"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=66810",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "64138",
      "name": "Pizza Hut",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/a69d6dab-f1e8-4f7f-893e-3af1ed50401a_64138.jpg",
      "locality": "Sector 7",
      "areaName": "Kharghar",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Pizzas"
      ],
      "avgRating": 4,
      "parentId": "721",
      "avgRatingString": "4.0",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 29,
        "lastMileTravel": 2.8,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "2.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-08-17 03:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Pizza.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textExtendedBadges": {

          },
          "textBased": {

          },
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "imageId": "Rxawards/_CATEGORY-Pizza.png",
                  "description": "Delivery!"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹189"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=64138",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "415194",
      "name": "Burger King",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/cab874d5-c7ed-4122-9eb9-935992f4bcee_415194.JPG",
      "locality": "Kharghar -ltile world",
      "areaName": "Little world Mall",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Burgers",
        "American"
      ],
      "avgRating": 4.3,
      "parentId": "166",
      "avgRatingString": "4.3",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 23,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-08-16 23:59:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Burger.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {

          },
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "imageId": "Rxawards/_CATEGORY-Burger.png",
                  "description": "Delivery!"
                }
              }
            ]
          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹99"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=415194",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "30885",
      "name": "Natural Ice Cream",
      "cloudinaryImageId": "jkjme12t0aa3foem14pi",
      "locality": "Near Shilp Chowk",
      "areaName": "Kharghar",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "Ice Cream",
        "Desserts"
      ],
      "avgRating": 4.8,
      "veg": true,
      "parentId": "2093",
      "avgRatingString": "4.8",
      "totalRatingsString": "10K+",
      "promoted": true,
      "adTrackingId": "cid=15960759~p=2~adgrpid=15960759#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=30885~eid=fc04fd29-7170-4a1e-b566-190f44b69089~srvts=1723804573246~collid=45995",
      "sla": {
        "deliveryTime": 21,
        "lastMileTravel": 1.8,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "1.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-08-17 00:55:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
            "description": "Delivery!"
          },
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {

          },
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
                  "description": "Delivery!"
                }
              },
              {
                "attributes": {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              }
            ]
          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "10% OFF",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=30885",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "353650",
      "name": "Theobroma",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/22/0bdfcdd2-da8d-4212-8211-13a02cd6f6d8_353650.jpg",
      "locality": "Sector 4",
      "areaName": "Kharghar",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Bakery",
        "Desserts"
      ],
      "avgRating": 4.6,
      "parentId": "1040",
      "avgRatingString": "4.6",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 23,
        "lastMileTravel": 2.8,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "2.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-08-16 23:59:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Desserts.png",
            "description": "Delivery!"
          },
          {
            "imageId": "newg.png",
            "description": "Gourmet"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "imageId": "Rxawards/_CATEGORY-Desserts.png",
                  "description": "Delivery!"
                }
              },
              {
                "attributes": {
                  "imageId": "newg.png",
                  "description": "Gourmet"
                }
              }
            ]
          },
          "textExtendedBadges": {

          },
          "textBased": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹99"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=353650",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "28793",
      "name": "Domino's Pizza",
      "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
      "locality": "Plot No. 18, Sector -20",
      "areaName": "Kharghar",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Pizzas",
        "Italian",
        "Pastas",
        "Desserts"
      ],
      "avgRating": 4.3,
      "parentId": "2456",
      "avgRatingString": "4.3",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 2,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "2.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-08-17 02:59:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Pizza.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textExtendedBadges": {

          },
          "textBased": {

          },
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "imageId": "Rxawards/_CATEGORY-Pizza.png",
                  "description": "Delivery!"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹150 OFF",
        "subHeader": "ABOVE ₹299",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {

    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=28793",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },

]

const RestaCard = ({ cloudinaryImageId, name, avgRating, locality }) => {
  // const {} = res;
  return (
    <div className='rest'>
      <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} width={"150px"} />
      <h3>{name}</h3>
      <h4>Rating {avgRating}</h4>
      <h4>{locality}</h4>
    </div>
  )
}

const Body = () => {
  return (

    <div className='card'>
      {
        restaurants.map((restaurant) => {
          return (
            <>
              <RestaCard {...restaurant.info} key={restaurant.info.id} />
            </>
          )
        })
      }
      {/* <RestaCard {...restaurants[0].info} />
      <RestaCard {...restaurants[1].info} />
      <RestaCard {...restaurants[2].info} />
      <RestaCard {...restaurants[3].info} />
      <RestaCard {...restaurants[4].info} />
      <RestaCard {...restaurants[5].info} />
      <RestaCard {...restaurants[6].info} /> */}
    </div>
  )
}