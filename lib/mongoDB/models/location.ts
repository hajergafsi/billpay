import mongoose, { Document, Schema } from "mongoose";

// Define the interface for the user location data
export interface IUserLocation extends Document {
  calling_code?: string;
  city?: string;
  connection_type?: string;
  continent_code?: string;
  continent_name?: string;
  country_capital?: string;
  country_code2?: string;
  country_code3?: string;
  country_emoji?: string;
  country_flag?: string;
  country_name?: string;
  country_name_official?: string;
  country_tld?: string;
  currency?: {
    code?: string;
    name?: string;
    symbol?: string;
  };
  district?: string;
  geoname_id?: string;
  ip?: string;
  is_eu?: boolean;
  isp?: string;
  languages?: string;
  latitude?: string;
  longitude?: string;
  organization?: string;
  state_code?: string;
  state_prov?: string;
  time_zone?: {
    name?: string;
    offset?: number;
    offset_with_dst?: number;
    abbreviation?: string;
    current_time?: string;
  };
  zipcode?: string;
}

// Define the schema for the user location data
const UserLocationSchema: Schema = new Schema(
  {
    calling_code: { type: String },
    city: { type: String },
    connection_type: { type: String },
    continent_code: { type: String },
    continent_name: { type: String },
    country_capital: { type: String },
    country_code2: { type: String },
    country_code3: { type: String },
    country_emoji: { type: String },
    country_flag: { type: String },
    country_name: { type: String },
    country_name_official: { type: String },
    country_tld: { type: String },
    currency: {
      code: { type: String },
      name: { type: String },
      symbol: { type: String },
    },
    district: { type: String },
    geoname_id: { type: String },
    ip: { type: String },
    is_eu: { type: Boolean },
    isp: { type: String },
    languages: { type: String },
    latitude: { type: String },
    longitude: { type: String },
    organization: { type: String },
    state_code: { type: String },
    state_prov: { type: String },
    time_zone: {
      name: { type: String },
      offset: { type: Number },
      offset_with_dst: { type: Number },
      abbreviation: { type: String },
      current_time: { type: String },
    },
    zipcode: { type: String },
  },
  { timestamps: true }
);

// Create the model from the schema
export const UserLocation =
  mongoose.models?.UserLocation ||
  mongoose.model<IUserLocation>("UserLocation", UserLocationSchema);
