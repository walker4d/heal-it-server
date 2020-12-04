const got  = require('got');

const headers = {
       
    'content-type': 'application/json',
    'json': true
  };



const daily_quotes =  async(req,res) => {

    const {body} = await got(`https://type.fit/api/quotes`,{headers : headers});
   


   
        res.status(200).send( body );
    
    
    }

    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
      }

    const daily_news =  async(req,res) => {

        const {body} = await got(`http://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=${process.env.health_news}`,{headers : headers});
       
            res.status(200).send( body );
        
        
        }
        const covid =  async(req,res) => {

     
        const {body} = await got(`https://covid19-api.weedmark.systems/api/v1/stats`,{headers : headers});
         
              res.status(200).send( body );
          
          
          }
module.exports = {
    daily_quotes , daily_news,covid
}