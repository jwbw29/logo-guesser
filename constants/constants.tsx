//Define Types

export type League = "NBA" | "NFL" | "MLB" | "MLS" | "NHL" | "WNBA" | "NCAA";

export type Conference =
  | "Western Conference"
  | "Eastern Conference"
  | "National League"
  | "American League"
  | "NFC"
  | "AFC"
  | "ACC"
  | "Big 10"
  | "Big 12"
  | "Pac 12"
  | "SEC";

export type Division =
  | "Atlantic"
  | "Central"
  | "Southeast"
  | "Northwest"
  | "Pacific"
  | "Southwest"
  | "East"
  | "West"
  | "North"
  | "South"
  | "Metropolitan";

export type State =
  | "Alabama"
  | "Alaska"
  | "Arizona"
  | "Arkansas"
  | "California"
  | "Colorado"
  | "Connecticut"
  | "Washington D.C."
  | "Delaware"
  | "Florida"
  | "Georgia"
  | "Hawaii"
  | "Idaho"
  | "Illinois"
  | "Indiana"
  | "Iowa"
  | "Kansas"
  | "Kentucky"
  | "Louisiana"
  | "Maine"
  | "Maryland"
  | "Massachusetts"
  | "Michigan"
  | "Minnesota"
  | "Mississippi"
  | "Missouri"
  | "Montana"
  | "Nebraska"
  | "Nevada"
  | "New Hampshire"
  | "New Jersey"
  | "New Mexico"
  | "New York"
  | "North Carolina"
  | "North Dakota"
  | "Ohio"
  | "Oklahoma"
  | "Oregon"
  | "Pennsylvania"
  | "Rhode Island"
  | "South Carolina"
  | "South Dakota"
  | "Tennessee"
  | "Texas"
  | "Utah"
  | "Vermont"
  | "Virginia"
  | "Washington"
  | "West Virginia"
  | "Wisconsin"
  | "Wyoming"
  | "Canada";

//Leagues
export const NBA: League = "NBA";
export const NFL: League = "NFL";
export const MLB: League = "MLB";
export const MLS: League = "MLS";
export const NHL: League = "NHL";
export const WNBA: League = "WNBA";
export const NCAA: League = "NCAA";

//Conferences
//NBA/NHL/WNBA/MLS
export const WESTERN_CONFERENCE: Conference = "Western Conference";
export const EASTERN_CONFERENCE: Conference = "Eastern Conference";

//MLB
export const NATIONAL_LEAGUE: Conference = "National League";
export const AMERICAN_LEAGUE: Conference = "American League";

//NFL
export const NFC: Conference = "NFC";
export const AFC: Conference = "AFC";

//NCAA
export const ACC: Conference = "ACC";
export const BIG_10: Conference = "Big 10";
export const BIG_12: Conference = "Big 12";
export const PAC_12: Conference = "Pac 12";
export const SEC: Conference = "SEC";

//Divisions
export const ATLANTIC: Division = "Atlantic";
export const CENTRAL: Division = "Central";
export const SOUTHEAST: Division = "Southeast";
export const NORTHWEST: Division = "Northwest";
export const PACIFIC: Division = "Pacific";
export const SOUTHWEST: Division = "Southwest";
export const EAST: Division = "East";
export const WEST: Division = "West";
export const NORTH: Division = "North";
export const SOUTH: Division = "South";
export const METROPOLITAN: Division = "Metropolitan";

//States
export const AL: State = "Alabama";
export const AK: State = "Alaska";
export const AZ: State = "Arizona";
export const AR: State = "Arkansas";
export const CA: State = "California";
export const CO: State = "Colorado";
export const CT: State = "Connecticut";
export const DC: State = "Washington D.C.";
export const DE: State = "Delaware";
export const FL: State = "Florida";
export const GA: State = "Georgia";
export const HI: State = "Hawaii";
export const ID: State = "Idaho";
export const IL: State = "Illinois";
export const IN: State = "Indiana";
export const IA: State = "Iowa";
export const KS: State = "Kansas";
export const KY: State = "Kentucky";
export const LA: State = "Louisiana";
export const ME: State = "Maine";
export const MD: State = "Maryland";
export const MA: State = "Massachusetts";
export const MI: State = "Michigan";
export const MN: State = "Minnesota";
export const MS: State = "Mississippi";
export const MO: State = "Missouri";
export const MT: State = "Montana";
export const NE: State = "Nebraska";
export const NV: State = "Nevada";
export const NH: State = "New Hampshire";
export const NJ: State = "New Jersey";
export const NM: State = "New Mexico";
export const NY: State = "New York";
export const NC: State = "North Carolina";
export const ND: State = "North Dakota";
export const OH: State = "Ohio";
export const OK: State = "Oklahoma";
export const OR: State = "Oregon";
export const PA: State = "Pennsylvania";
export const RI: State = "Rhode Island";
export const SC: State = "South Carolina";
export const SD: State = "South Dakota";
export const TN: State = "Tennessee";
export const TX: State = "Texas";
export const UT: State = "Utah";
export const VT: State = "Vermont";
export const VA: State = "Virginia";
export const WA: State = "Washington";
export const WV: State = "West Virginia";
export const WI: State = "Wisconsin";
export const WY: State = "Wyoming";
export const CAN: State = "Canada";
