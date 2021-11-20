/* if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({path: '../.env'});
} */
export const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

export const get_diff_in_dates=(oldDate)=>{
  const currDate=new Date();
  let months, days, hours, years;
  years= currDate.getFullYear() - oldDate.getFullYear()
  if(years<=0){
    months = (currDate.getFullYear() - oldDate.getFullYear()) * 12;
    months -= oldDate.getMonth();
    months += currDate.getMonth();
    if (months <= 0){
      days=(currDate.getMonth()-oldDate.getMonth())*30
      days-=oldDate.getDate();
      days+=currDate.getDate();
      if(days<=0){
        hours=(currDate.getDate()-oldDate.getDate())*7;
        hours-=oldDate.getDate();
        hours+=currDate.getDate();
        return {"hours":hours}
      }
      else{
        return {"days":days}
      }
    }
    else{
      return {"months":months}
    }
  }
  else{
    return {"years":years}
  }
}