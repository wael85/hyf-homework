const seriesDurations = [
    {
      title: 'Game of thrones',
      days: 3,
      hours: 1,
      minutes: 0,  
    },
    {
      title: 'Sopranos',
      days: 3,
      hours: 14,
      minutes: 0,
    },
    {
      title: 'The Wire',
      days: 2,
      hours: 12,
      minutes: 0,
    }
  ]
  seriesDurations.splice(2,1,{title:'Walking Dead',days:3,hours:19,minutes:41});
  let timeInPercent =[];
  for (let i =0;i<seriesDurations.length;i++){
     let minut = (seriesDurations[i].days * 1440)+
     (seriesDurations[i].hours * 1440)+
     (seriesDurations[i].minutes);
     var fromLife = (minut/42048000)*100;
     timeInPercent.push(fromLife);
     console.log(seriesDurations[i].title+" took "+fromLife+"% from my life!!" )
  }
  let sum = 0;
  for (let x= 0;x<timeInPercent.length;x++){
       sum +=timeInPercent[x];
  }
console.log("In total that is "+sum+"% of my life");