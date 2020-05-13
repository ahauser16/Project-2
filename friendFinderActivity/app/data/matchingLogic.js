


// Is it important for the user's significant other to share his/her/their significant other to share their taste?

// "Not at all" = 0 multiplier 
// "A little important" = 1 multiplier                 
// "Somewhat important" = 10 multiplier
// "Very Important" = 50 multiplier                   
// "Mandatory" = 250 multiplier




// // How many answers did A match with B?
// i.e. 50/51 or 98%

// // How many answers did B match with A?
// i.e. 10/11 or 91%

// //convert each score into decimals then multiply
// (.98 * .91) = 8918

// //Take the product and take the Nth root where N = the number of questions answered

function nthroot(x, n)
   {
    ng = n % 2;
    if((ng == 1) || x<0)
       x = -x;
    var r = Math.pow(x, 1 / n);
    n = Math.pow(r, n);
  
    if(Math.abs(x - n) < 1 && (x > 0 === n > 0))
      return ng ? -r : r; 
      console.log(nthroot(64, 2));
   }








module.exports = matchingLogic.js;