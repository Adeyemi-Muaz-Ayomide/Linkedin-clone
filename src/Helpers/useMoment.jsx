import Moment from "moment-timezone";


export const getCurrentTimeStamp = (timeFormat) => {
  return Moment().format(timeFormat);
};
