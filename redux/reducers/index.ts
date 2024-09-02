import { combineReducers } from "@reduxjs/toolkit";

import messageReducer from "./messageReducer";
import privacyPolicyReducer from "./privacyPolicyReducer";
import userRoleReducer from "./userRoleReducer";
import locationsReducer from "./locationsReducer";
import {
  countryReducer,
  featureReducer,
  homepageReducer,
  imageReducer,
  partnersReducer,
  statisticsReducer,
  testimonialReducer,
} from "./homepage";
import { partnerTestimonyReducer, reasonsChooseUsReducer } from "./business";

const rootReducer = combineReducers({
  testimonials: testimonialReducer,
  homepage: homepageReducer,
  features: featureReducer,
  partners: partnersReducer,
  statistics: statisticsReducer,
  countries: countryReducer,
  images: imageReducer,
  messages: messageReducer,
  privacyPolicy: privacyPolicyReducer,
  userRole: userRoleReducer,
  locations: locationsReducer,
  reasonsChooseUs: reasonsChooseUsReducer,
  partnerTestimony: partnerTestimonyReducer,
});

export default rootReducer;
