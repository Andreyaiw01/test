var axios = require('axios'); // connect axios

// function return the right date in format dd.mm.yyyy 
function createDate(days, months, years) {
    var now = new Date();
    var MyDateString;
    now.setDate(now.getDate() + days);
    now.setMonth(now.getMonth() + months);
    now.setFullYear(now.getFullYear() + years);

    MyDateString = ('0' + now.getDate()).slice(-2) + '.'
    + ('0' + (now.getMonth()+1)).slice(-2) + '.'
    + now.getFullYear();

    return MyDateString;    
}

//  numDay - number of day 
let numDay = 7;

// in cycle we are decuding object from privatBank api, numDay ago   
for(var i = 0; i < numDay; i++) {

  var newdate = createDate(0 - i,0,0); 
  axios.get('https://api.privatbank.ua/p24api/exchange_rates?json&date='+ newdate)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });

}
