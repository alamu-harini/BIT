
//Dropdown code
const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");


selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
    load_img(o.querySelector("label").id);
  });
});

const nav_selected = document.querySelector(".nav-selected");
const nav_optionsContainer = document.querySelector(".nav-options-container");



const navview =document.querySelector(".route");

function changeview(){
    navview.classList.toggle("nav-active");
}




function load_img(file) { 
    //var file=document.getElementById("drop").value;
    var orinal_img=document.getElementById("map");
    orinal_img.src='img/'+file+'.png'; 
    load_route(file)  
    //console.log(file);
}
const   mapprdistance = document.getElementById("distance");
const mListElement= document.getElementById("directions");

  function load_route(file_ck) {
    console.log(file_ck)

    if(!navview.classList.contains("nav-active")){
      navview.classList.toggle("nav-active");
    }
     
      // Edit the instruction here
      if(file_ck=='main_gate_to_boys_hostel'){
        var direction={
              one:{id:"1",icon:"forward", text:"Walk Stright 175Mtrs from gate  ", isDone :false},
              two:{id:"2",icon:"left", text:"Take the sixth left  ", isDone :false},
              // three:{icon:"forward", text:"Walk Straight 50Mtrs", isDone :false},
              // four:{icon:"right", text:"To your right is Boys Hostel", isDone :false}
            }
        var Est_distance='200 Mtrs'
    
      }
      else if(file_ck=='main_gate_to_girls_hostel' ){
        var direction={
          one:{id:"1",icon:"forward", text:"Walk Stright 150Mtrs from gate  ", isDone :false},
          two:{id:"2",icon:"right", text:"Take the third right  ", isDone :false},
          //three:{icon:"forward", text:"main_gate_to_girls_hostel", isDone :false},
          //four:{icon:"right", text:"main_gate_to_girls_hostel", isDone :false},
          // five:{icon:"right", text:"main_gate_to_girls_hostel", isDone :false},
          // six:{icon:"left", text:"main_gate_to_girls_hostel", isDone :false},
          // seven:{icon:"forward", text:"main_gate_to_girls_hostel", isDone :false},
          // eight:{icon:"right", text:"main_gate_to_girls_hostel", isDone :false},
          // nine:{icon:"right", text:"main_gate_to_girls_hostel", isDone :false}
        }
        var Est_distance='250 Mtrs'
      }
  
      else if(file_ck== 'main_gate_to_parking'){
        var direction={
          one:{id:"1",icon:"forward", text:"Walk Stright 40 Mtrs from gate  ", isDone :false},
          two:{id:"2",icon:"left", text:"Take the second left ", isDone :false},
          // three:{icon:"forward", text:"main_gate_to_parking", isDone :false},
          // four:{icon:"right", text:"main_gate_to_parking", isDone :false}
        }
        var Est_distance='50 Mtrs'
      }
  
      else if(file_ck=='main_gate_to_principal_office' ){
        var direction={
          one:{id:"1",icon:"forward", text:"Walk Stright 70Mtrs from gate ", isDone :false},
          two:{id:"2",icon:"left", text:"Take the third left  ", isDone :false},
          // three:{icon:"forward", text:"main_gate_to_principal_office", isDone :false},
          // four:{icon:"right", text:"main_gate_to_principal_office", isDone :false}
        }
        var Est_distance='75 Mtrs'
      }
  
      else if (file_ck=='parking_to_principal_office'){
        var direction={
          one:{id:"1",icon:"forward", text:"Take a left and wallk Stright 20Mtrs from gate  ", isDone :false},
          two:{id:"2",icon:"left", text:"Take the first left  ", isDone :false},
          // three:{icon:"forward", text:"parking_to_principal_office", isDone :false},
          // four:{icon:"right", text:"parking_to_principal_office", isDone :false}
        }
        var Est_distance='25 Mtrs'
      }
      
      if(mListElement.innerHTML!=null){mListElement.innerHTML = " ";}
      if(mapprdistance.innerHTML!=null){mapprdistance.innerHTML =" ";}
      //mListElement.innerHTML = "";
      //
      for(let val in direction){
        console.log(direction[val]);
        var listElement = document.createElement("li");
        var id_name="list"+direction[val].id;
        console.log(id_name);
        listElement.setAttribute("id", id_name );
        var pass_para="load_icon("+direction[val]+")"
        listElement.setAttribute("onclick", pass_para);
        listElement.innerHTML = direction[val].text;
        mListElement.appendChild(listElement);
      }
      mapprdistance.innerHTML = "Approximate Distance :" +" " + Est_distance;
    }
  
  
    function load_icon(list_id){
      console.log(list_id)
      var mlistid = list_id[val].id
      var mlisttext = list_id[val].text
      var icon=document.createElement("i");
      icon.setAttribute("class", "fas fa-check-circle");
      icon.style.fontSize="35px";
      icon.style.color="green";
      icon.style.padding = "0px 0px 0px 20px"
      nlist_id="list"+mlistid
      document.getElementById(nlist_id).innerHTML=" ";
      document.getElementById(nlist_id).innerHTML = mlisttext;
      document.getElementById(nlist_id).appendChild(icon);
    }