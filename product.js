let indiID = localStorage.getItem("indi-id");

let mainsection = document.getElementById("data-list")
let pagination = document.getElementById("pagination")
let baseServerURL = "https://good-rose-bass-ring.cyclic.app"
async function FetchUserList(page) {
  try {
    const userList_request = await fetch(`${baseServerURL}/data?_limit=9&_page=${page === false ? 1 : page}`)
     const totalitem=userList_request.headers.get('X-Total-Count')
    let total_pages= Math.ceil(totalitem/10)
    const data = await userList_request.json();
    RenderUserData(data)
    paginationbtns(total_pages);
    console.log(data)
  }
  catch (error) {
    console.log(error)
  }
}
FetchUserList()
function RenderUserData(userlistarray) {
  const cardList = 
    userlistarray.map((item) => getcard(item.id, item.image, item.name, item.address, item.deal, item.price, item.bought)).join(' ')
  //console.log(cardList)
  mainsection.innerHTML = cardList
}
function getcard(id, image, name, address, deal, price, bought) {
  const card =
    `<div data-id=${id} onclick="getIndi(${id})"> 
      <div class='card_img'>
        <img width="99%" src= ${image} alt = '${name} image'/>
      </div>
      <div class='card_body'>
        <h3 class='card_title'>${name}<h3>
        <div class='card_location'>${address}</div>
        <div class='card_deal'> <button id="btn">Deals</button> ${deal} from ₹${price}</div> 
        <div class='card_bought'>${bought} bought </div>
      </div>
    </div>
    `
  return card;
}
function paginationbtns(page){
  let btn_arr=[]
for(let i=1;i<=page;i++){
  btn_arr.push(`<button class='pagination-button' data-page-number=${i}>${i}</button>`)
}
pagination.innerHTML=btn_arr.join(" ")
//console.log(btn_arr.join(" "));
let allbtn=document.querySelectorAll('#pagination button')
//console.log(allbtn)
for(let btn of allbtn){
  btn.addEventListener('click',(e)=>{
    FetchUserList(e.target.dataset.pageNumber)
  })
}
}
paginationbtns()

function getIndi(ID) {
  indiID = ID;
  localStorage.setItem("indi-id",indiID);
  location.href = "./indv_product.html";
}
