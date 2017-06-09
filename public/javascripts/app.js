// GLOBAL VARIABLES
var dataCount = 0;
var dataValue = "";
var listDiv = "";
var lastCount = 0;

// FOR DRAWER ANIMATION
// function openNav(bValid) {	
function switchNav(bValid) {	
	if(document.getElementById("mySidenav").style.width !== "250px" && bValid){		
		document.getElementById("mySidenav").style.width = "250px";
	} else{		
		document.getElementById("mySidenav").style.width = "0";
	}
    
}

function closeNav() {
	console.log("----",document.getElementById("mySidenav").style.width);
    document.getElementById("mySidenav").style.width = "0";
}


// FOR PAGINATION
function navigatePage(type,bInit){
	if(bInit){
		dataCount = document.getElementById("quantityCount").value;
		dataValue = document.getElementById("categoryList").value;		
		if(!dataCount){
			document.getElementById("quantityCount").focus();	
			return 0;
		}
		
		lastCount = 0;
		document.getElementById("right-bottom-nav").style.display = "block";
	}
	listDiv = "";
	document.getElementById("right-content").innerHTML = listDiv;
	if(type == 'nxt'){
		if(lastCount  >= parseInt(dataCount)){
			document.getElementById("right-content").innerHTML = "<div class='itemlist text-center'><b>Sorry! No More Data To Display! :( </b></div>"
			return 0;		
		} else{					
			for(iter=lastCount+1;iter<=lastCount+3;iter++){			
				if(iter <= parseInt(dataCount)) listDiv =  listDiv + "<div class='itemlist text-center'><span class='circle itemName'>"+(iter)+"</span><span class='itemName'>Item "+dataValue+(iter)+"</span></div>";		
			}
			preCount = iter-3;
			lastCount = iter-1;	
			if(dataCount<=3) preCount = 4;
			else if(dataCount <=iter) preCount = iter;		
			document.getElementById("right-content").innerHTML = listDiv;
			return 0;
		}		
	}
	else if(type == 'pre'){		
		if(preCount <= 1){
			document.getElementById("right-content").innerHTML = "<div class='itemlist text-center'><b>Sorry! No More Data To Display! :( </b></div>"
			lastCount = 0;
			return 0;		
		}
		else{			
			for(iter=(preCount-3);iter<preCount;iter++){				
				if(iter >0 && iter<= parseInt(dataCount)) listDiv =  listDiv + "<div class='itemlist text-center'><span class='circle itemName'>"+(iter)+"</span><span class='itemName'>Item "+dataValue+(iter)+"</span></div>";
			}
			lastCount = iter-1; 
			preCount = iter-3;
			document.getElementById("right-content").innerHTML = listDiv;
			return 0;
		}
	}		
}