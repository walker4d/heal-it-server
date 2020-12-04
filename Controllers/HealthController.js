
const { diagnosis, test,Recomend, Symptoms,triage, condition}  = require('../helpers/informatica');
const health = async (req,res) => {
    console.log('diognostic',req.body)
const data =  await diagnosis(req.body);
    console.log('factors: ', data);

    res.status(200).send( data );


}
const Symtomps =  async(req,res) => {
    console.log(req.body);
   
    let data =   await Symptoms(req.body);

   
        res.status(200).send( data );
    
    
    }
const Triage =  async(req,res) => {
    console.log(req.body);
   
    let data =   await triage(req.body);

   
        res.status(200).send( data );
    
    
    }
    const recomend =  async(req,res) => {
        console.log(req.body);
       
        let data =   await Recomend(req.body);
    
       
            res.status(200).send( data );
        
        
        }
        const Condition =  async(req,res) => {
            console.log(req.body);
           
            let data =   await condition(req.body);
        
           
                res.status(200).send( data );
            
            
            }
module.exports = { 
    health , Symtomps, Triage, recomend, Condition
}