var boxes = document.querySelectorAll("td");

var count = 1;

var clickHandler = function() {

        if (count === 1 && this.getAttribute("class") === "empty") {
            this.innerHTML = "X";
            count++;
            this.setAttribute("class", "taken");
            

            
        } else if (count === 2 && this.getAttribute("class") === "empty") {
            this.innerHTML = "O";
            count = 1;
            this.setAttribute("class", "taken");
            
        }
 	}
 

for (var i=0; i<boxes.length; i++) {
	boxes[i].addEventListener("click", clickHandler);
}



