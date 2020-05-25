export default function getDateString(time, direct = false) {
    const date = new Date(time);
    var Difference_In_Time = date.getTime() - new Date().getTime(); 
    // To calculate the no. of days between two dates 
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
    
    if(Difference_In_Days > -1 && (date.getDay() === new Date().getDay())){
      if(direct)
        return getHour(date);
      return "HOY";
    }
    else if(Difference_In_Days > -2 && (date.getDay() === new Date().getDay() - 1))
      return "AYER";
    else if(Difference_In_Days > -7){
      let days = ['DOMINGO', 'LUNES', 'MARTES', 'MIÉRCOLES', 'JUEVES', 'VIERNES', 'SÁBADO'];
      return days[date.getDay()];
    }
      else
    return date.getDate() + "/" + (date.getMonth() + 1) + "/"+ date.getFullYear();
  }

  const getHour = (time) => {
    const date = new Date(time);
    return date.toLocaleTimeString(navigator.language, {
      hour: "2-digit",
      minute: "2-digit",
    });
  };