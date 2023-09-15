let list = [];
let dataList = sessionStorage.getItem("data")
var arr = JSON.parse(dataList)
const text = document.querySelector("#text")
list = arr ?? list

// 리스트 추가
function addList(){
    let item = text.value;
    
    if(item != ""){
        list.push(item);
        text.value = "";
        text.focus();
        
    }
    showList()

}
document.querySelector("#btn").addEventListener("click", addList)


function showList(){
    let data = "<ul>"

    list.forEach((e,i)=> {
        data += `<li><p>${i+1}</p> ${e} <img id="delete" src="./../images/xmark-solid.svg" alt= "x"/></li>`

    })
    data += "</ul>"
    document.querySelector("#list").innerHTML = data

  
    document.querySelectorAll("#delete").forEach((e,i)=>{
        e.addEventListener("click",()=>{
            removeList(i)
        })
    })


}

// 리스트 삭제
function removeList(i){
    list.splice(i,1)
    showList()
}

// 엔터키 입력 시 리스트 추가
text.addEventListener("key",function(e){
    let key = e.key
    if( key == 'Enter'){
    addList()
    }
 })

