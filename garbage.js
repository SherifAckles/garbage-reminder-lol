const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  
  const garbageDays = ['Saturday', 'Tuesday', 'Thursday'];
  const garbageOut = new Date();
  let today = weekday[garbageOut.getDay()];
  
    if (
      today === garbageDays[0] ||
      today === garbageDays[1] ||
      today === garbageDays[2]
    ) {
      console.log(`today at 7 AM you have to get the garbage out`);
    }
    else{
      console.log("...No garbage to take out today... RELAX mate..." ,"\n", "\n", "...Hoy no hay basura que sacar... RELAJATE compañero...")
    }