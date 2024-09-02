export interface Itestimoial {
  name: string;
  rating: number;
  testimonial: string;
  _id: string;
}

// types.ts
export interface IPartnerTestimony {
  _id: string;
  icon: string;
  title: string;
  text: string;
}

export interface IHomepageScreen {
  title: string;
  description: string;
  photoUrl: string;
}

export interface IReasonWhyChooseUs {
  _id: string;
  title: string;
  icon: string;
  text: string;
}

export interface IFeature {
  _id: string;
  text: string;
  icon: string;
  color: string;
}

export interface IPartner {
  _id: string;
  name: string;
  logoUrl: string;
}

export interface IStatistic {
  _id: string;
  name: string;
  number: number;
  icon: string;
  sufix: string;
}

export interface ICountry {
  _id: string;
  countryName: string;
  countryCode: string;
  isActive: boolean;
}

export interface Image {
  _id: string;
  imageUrl: string;
}

export interface IMessage {
  _id: string;
  name: string;
  phone: string;
  message: string;
  createdAt: string;
}
export enum EUserRoles {
  ADMIN = "admin",
  SUPPORT = "support",
}

export interface IUserLocation {
  calling_code: string;
  city: string;
  connection_type: string;
  continent_code: string;
  continent_name: string;
  country_capital: string;
  country_code2: string;
  country_code3: string;
  country_emoji: string;
  country_flag: string;
  country_name: string;
  country_name_official: string;
  country_tld: string;
  currency: {
    code: string;
    name: string;
    symbol: string;
  };
  district: string;
  geoname_id: string;
  ip: string;
  is_eu: boolean;
  isp: string;
  languages: string;
  latitude: string;
  longitude: string;
  organization: string;
  state_code: string;
  state_prov: string;
  time_zone: {
    name: string;
    offset: number;
    offset_with_dst: number;
    abbreviation: string;
    current_time: string;
  };
  zipcode: string;
  createdAt: string;
}
