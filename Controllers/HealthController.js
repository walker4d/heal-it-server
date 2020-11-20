
const { diagnosis, test,loadRiskFactors, Symptoms}  = require('../helpers/informatica');
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

module.exports = {
    health , Symtomps
}