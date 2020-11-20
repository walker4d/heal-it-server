const { response } = require('express');
const got  = require('got');

const headers = {
       
      'content-type': 'application/json',
      'App-Id': process.env.infermedica_App_Id,
      'App-Key': process.env.infermedica_App_Key,
      'json': true
    };
  

 const  parse = async (data) =>{
    return  response = await got.post(`${process.env.infermedica_API}/parse`,{
        json:data,
        responseType: "json",
        headers: headers
      }
      
    
    
      
    );
  }
 const  loadRiskFactors = async() => {

    const {body} = await got(`${process.env.infermedica_API}/info`,{headers : headers});
   
    console.log(body);
     return body;
  }

  const  Symptoms = async(data) => {

    console.log(data,'data');
    const {body} = await  got(`https://api.infermedica.com/v2/search?phrase=${data.search}&sex=${data.gender}&age.value=${data.age}&age.unit=year&max_results=10&type=symptom`,{headers : headers});
   
    console.log("body",body);
     return body;
  }
 const suggest= (data) =>{
    return axios({
      method: 'post',
      url: `${process.env.infermedica_API}/suggest`,
      headers: headers,
      data
    });
  }
 const diagnosis = async (data) =>{
     console.log(process.env.infermedica_API);
    const  {body} = await got.post(`${process.env.infermedica_API}/diagnosis`,{
        json:data,
        responseType: "json",
        headers: headers
      }
      
    
    
      
    );
    console.log(body);
    return body;
   
  }
 const explain = (data) =>{
    return axios({
      method: 'post',
      url: `${process.env.infermedica_API}/explain`,
      headers: headers,
      data
    });
  }
  const triage = (data) =>{
    return axios({
      method: 'post',
      url: `${process.env.infermedica_API}/triage`,
      headers: headers,
      data
    });
  }
  const test =  async() =>{
    const {body} = await got('https://sindresorhus.com');
    return body;
  }

  const Question = async(data) => {

   
  }

//   get(url) {
//     return this.request('GET', url);
//   }

//   post(url, data) {
//     return this.request('POST', url, data);
//   }

//   getSymptoms() {
//     return this.get('symptoms');
//   }

//   getRiskFactors() {
//     return this.get('risk_factors');
//   }

//   parse(text) {
//     return this.post('parse', JSON.stringify({text}));
//   }

//   getSuggestedSymptoms(data) {
//     return this.post('suggest', JSON.stringify(data));
//   }

//   diagnosis(data) {
//     return this.post('diagnosis', JSON.stringify(data));
//   }

//   explain(data) {
//     return this.post('explain', JSON.stringify(data));
//   }

  module.exports = {
    triage ,headers, parse ,loadRiskFactors,  explain ,  diagnosis ,suggest, test, Symptoms
}