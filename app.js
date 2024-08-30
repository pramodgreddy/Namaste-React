import React from "react";
import ReactDOM from "react-dom/client";

const Header = ( )=>{
    return(
        <div className="header">   
            <div className="logo-container">
                <img className="logo" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/aca4b064574437.5ad6dd725406f.jpg" />
            </div>
            <div className="nav-items">
                <ul>    
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const resList=[
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "81810",
            "name": "Tharavadu family restaurant",
            "cloudinaryImageId": "vysnsutwqhw2d2td7tjk",
            "locality": "Hosur Main Road",
            "areaName": "Bommanahalli",
            "costForTwo": "₹250 for two",
            "cuisines": [
              "Kerala",
              "Seafood",
              "Biryani",
              "South Indian"
            ],
            "avgRating": 4.3,
            "parentId": "13245",
            "avgRatingString": "4.3",
            "totalRatingsString": "10K+",
            "promoted": true,
            "adTrackingId": "cid=17601714~p=0~adgrpid=17601714#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=81810~eid=7678a909-3523-4932-84b8-42249a17ecb0~srvts=1725048075356~collid=83639",
            "sla": {
              "deliveryTime": 26,
              "lastMileTravel": 4.8,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "4.8 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-08-31 02:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textExtendedBadges": {
                  
                },
                "textBased": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹149"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
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
            "link": "swiggy://menu?restaurant_id=81810&source=collection&query=Biryani",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
          "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
          "sectionId": "MENU_RETURN_FOOD"
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "415042",
            "name": "Royal Biryani Kitchen",
            "cloudinaryImageId": "d40ee176a44cf2917fb887ed00a246c7",
            "locality": "1st  Stage",
            "areaName": "BTM Layout",
            "costForTwo": "₹250 for two",
            "cuisines": [
              "Biryani",
              "Chinese",
              "Tandoor",
              "Snacks",
              "Mughlai"
            ],
            "avgRating": 3.3,
            "parentId": "171864",
            "avgRatingString": "3.3",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 20,
              "lastMileTravel": 2.8,
              "serviceability": "SERVICEABLE",
              "slaString": "20-25 mins",
              "lastMileTravelString": "2.8 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-08-31 23:59:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "textBased": {
                  
                },
                "imageBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "ITEMS",
              "subHeader": "AT ₹109",
              "discountCalloutInfo": {
                "message": "Free Delivery",
                "logoCtx": {
                  "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                }
              }
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
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
            "link": "swiggy://menu?restaurant_id=415042&source=collection&query=Biryani",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
          "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
          "sectionId": "MENU_RETURN_FOOD"
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "229",
            "name": "Meghana Foods",
            "cloudinaryImageId": "iivuhjc2mswi9lublktf",
            "locality": "Koramangala",
            "areaName": "Koramangala",
            "costForTwo": "₹500 for two",
            "cuisines": [
              "Biryani",
              "Andhra",
              "South Indian",
              "Chinese",
              "Seafood"
            ],
            "avgRating": 4.5,
            "parentId": "635",
            "avgRatingString": "4.5",
            "totalRatingsString": "10K+",
            "promoted": true,
            "adTrackingId": "cid=16043246~p=1~adgrpid=16043246#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=229~eid=81ba1739-0424-46df-af6f-e6123d895b8b~srvts=1725048075356~collid=83639",
            "sla": {
              "deliveryTime": 19,
              "lastMileTravel": 1.4,
              "serviceability": "SERVICEABLE",
              "slaString": "15-20 mins",
              "lastMileTravelString": "1.4 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-08-31 02:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "Rxawards/_CATEGORY-Biryani.png",
                  "description": "Delivery!"
                }
              ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {
              
            },
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
                        "imageId": "Rxawards/_CATEGORY-Biryani.png",
                        "description": "Delivery!"
                      }
                    }
                  ]
                }
              }
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
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
                "rating": "4.3",
                "ratingCount": "10K+"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "swiggy://menu?restaurant_id=229&source=collection&query=Biryani",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
          "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
          "sectionId": "MENU_RETURN_FOOD"
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "428",
            "name": "Biryani Pot ",
            "cloudinaryImageId": "stcwjsd9zpxnbi8nnq8t",
            "locality": "BTM Layout",
            "areaName": "BTM Layout",
            "costForTwo": "₹500 for two",
            "cuisines": [
              "Biryani"
            ],
            "avgRating": 4.1,
            "parentId": "21798",
            "avgRatingString": "4.1",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 18,
              "lastMileTravel": 1.8,
              "serviceability": "SERVICEABLE",
              "slaString": "15-20 mins",
              "lastMileTravelString": "1.8 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-08-31 03:00:00",
              "opened": true
            },
            "badges": {
              "textExtendedBadges": [
                {
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available",
                  "fontColor": "#7E808C"
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
                  
                },
                "textExtendedBadges": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "fontColor": "#7E808C",
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "description": "",
                        "shortDescription": "options available"
                      }
                    }
                  ]
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹100 OFF",
              "subHeader": "ABOVE ₹299",
              "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
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
                "rating": "3.5",
                "ratingCount": "500+"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "swiggy://menu?restaurant_id=428&source=collection&query=Biryani",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
          "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
          "sectionId": "MENU_RETURN_FOOD"
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "530473",
            "name": "Madurai Biriyani Virundhu",
            "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/29/09faf355-4d13-4a7f-a56a-aba5ccc6f0b2_ea23940d-f491-45d7-98fd-fbdf04d6075f.jpg",
            "locality": "Muneshwara Layout",
            "areaName": "Bommanahalli",
            "costForTwo": "₹200 for two",
            "cuisines": [
              "Biryani",
              "Chettinad",
              "South Indian"
            ],
            "avgRating": 3.5,
            "parentId": "319325",
            "avgRatingString": "3.5",
            "totalRatingsString": "100+",
            "promoted": true,
            "adTrackingId": "cid=17654358~p=2~adgrpid=17654358#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=530473~eid=c16c54d5-14ab-4e7e-8ac0-c5f04fbe64ff~srvts=1725048075356~collid=83639",
            "sla": {
              "deliveryTime": 32,
              "lastMileTravel": 7.5,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "7.5 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-09-06 00:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "textBased": {
                  
                },
                "imageBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "15% OFF",
              "subHeader": "UPTO ₹80"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
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
            "link": "swiggy://menu?restaurant_id=530473&source=collection&query=Biryani",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
          "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
          "sectionId": "MENU_RETURN_FOOD"
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "310",
            "name": "Gongura Grand",
            "cloudinaryImageId": "351c27557cf23e4978a162eb07d35e44",
            "locality": "BTM Layout",
            "areaName": "HSR Layout",
            "costForTwo": "₹300 for two",
            "cuisines": [
              "Biryani",
              "Chinese",
              "Andhra",
              "Tandoor"
            ],
            "avgRating": 4,
            "parentId": "230716",
            "avgRatingString": "4.0",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 22,
              "lastMileTravel": 1.8,
              "serviceability": "SERVICEABLE",
              "slaString": "20-25 mins",
              "lastMileTravelString": "1.8 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-08-31 03:00:00",
              "opened": true
            },
            "badges": {
              "textExtendedBadges": [
                {
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available",
                  "fontColor": "#7E808C"
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
                  
                },
                "textExtendedBadges": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C",
                        "iconId": "guiltfree/GF_Logo_android_3x"
                      }
                    }
                  ]
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹100 OFF",
              "subHeader": "ABOVE ₹299",
              "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
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
                "rating": "3.8",
                "ratingCount": "100+"
              },
              "source": "GOOGLE",
              "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "swiggy://menu?restaurant_id=310&source=collection&query=Biryani",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
          "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
          "sectionId": "MENU_RETURN_FOOD"
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "656570",
            "name": "Chickpete Donne Biriyani House",
            "cloudinaryImageId": "536ac159ee10bae09790e2cfe626f106",
            "locality": "Kudlu main road",
            "areaName": "Jayappa Layout",
            "costForTwo": "₹300 for two",
            "cuisines": [
              "Biryani",
              "Desserts"
            ],
            "avgRating": 3.9,
            "parentId": "457052",
            "avgRatingString": "3.9",
            "totalRatingsString": "100+",
            "promoted": true,
            "adTrackingId": "cid=17654152~p=3~adgrpid=17654152#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=656570~eid=ba270d3a-18f8-40bf-a9bb-8bfdcb8fc86b~srvts=1725048075356~collid=83639",
            "sla": {
              "deliveryTime": 32,
              "lastMileTravel": 7.5,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "7.5 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-09-06 00:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "textBased": {
                  
                },
                "imageBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "15% OFF",
              "subHeader": "ABOVE ₹1000",
              "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
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
            "link": "swiggy://menu?restaurant_id=656570&source=collection&query=Biryani",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
          "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
          "sectionId": "MENU_RETURN_FOOD"
        }
      }
    }
  ];

const RestaurantCard =(props)=>{
    const {resData}=props;
    return (
        <div className="res-card">
            <img className="res-logo" alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.card.card.info.cloudinaryImageId }/>
            <h3>{resData.card.card.info.name}</h3>
            <h4>{resData.card.card.info.cuisines.join(", ")}</h4>
            <h4>{resData.card.card.info.avgRating}</h4>
            <h4>{resData.card.card.info.costForTwo}</h4>
            <h4>{resData.card.card.info.sla.deliveryTime} mins</h4>
        </div>
    )
}


const Body = ()=>{
    return (
        <div className="body">
            <div className="search">
                Search bar
            </div>
            <div className="res-container">
            {resList.map((restaurant)=> { return <RestaurantCard  key={restaurant.card.card.info.id} resData={restaurant}/>})}
            </div>
        </div>
    )
}

const AppLayout = ()=>{
    return <div className="app"> 
    <Header/> 
    <Body/>
    </div>
}

// const heading= React.createElement("h1", {id:"heading"},"Hello World from React!")
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
// root.render(heading);
