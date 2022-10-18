
const display = document.querySelector(".display-info")
const procurarBTN = document.querySelector(".procurar")
procurarBTN.addEventListener("click",()=>{
  checkCep()
})
const showData = (data) =>{
  for(const field in data){
    console.log(field)
    if(document.querySelector("#"+field)){
      document.querySelector("#"+field).value = data[field]
    }
   
  }
  
}
function checkCep(){
    const cep = document.querySelector("#cep")
    let mainCEP = cep.value.replace("-","")
    const options = {
      method : 'GET',
      mode: 'cors',
      cache: 'default'
  }
  let fetchAPI = fetch(`https://viacep.com.br/ws/${mainCEP}/json/`,options)
  .then(res => {
    if(!res.ok){
      throw error('error')
    }
    return res.json()
  })
  .then(data => {
    showData(data)
  })
}
 