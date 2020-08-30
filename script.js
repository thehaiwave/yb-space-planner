const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');

function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.occupied');
    const selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;
}

function addSeats() {
    const seats = document.querySelectorAll('.row .seat.selected');
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    if(selectedSeats !== null && selectedSeats.length > 0){
        seats.forEach((seat, index) => {
            seat.classList.add('occupied');
        });
    } 
    updateSelectedCount();
} 

function checkCapacity(){
    var n = document.getElementById('rows').value;
    var p = document.getElementById('people').value;
    var c = document.getElementById('capacity').value;
    
    if(p > ((c/100) * n*4)){
        return false;
    }
    return true;
}

function addRows() {  
    const b = checkCapacity();
    if(b == true){
        for(let i = 0; i < document.getElementById("rows").value; i++){
            var r = document.createElement("div");
            r.className = 'row';
            for(let j = 0; j < 4; j++){
                var s = document.createElement("div");
                s.className = 'seat';
                r.appendChild(s);
            }
            cnt.append(r);
        }
    }else{
      var r = document.createElement('div');
      r.className = 'no-can-do';
      let textNode = document.createTextNode('Can not place that many people');
      r.appendChild(textNode);
      cnt.append(r);
    }
    
} 

function restartSeats(){
    location.reload(true);
}

function blockSeats() {
    var s = document.querySelectorAll('.row .seat');
    var onecnt = document.getElementById('people').value;
    var it = s.length;
    var percentage = onecnt * document.getElementById('capacity').value;
    var zerocnt = it - onecnt;
    var ones = 1;
    var zeros = 1;

    s.forEach((seat, index) => {
        
        if(ones*zerocnt < zeros*onecnt){
            ones += 1;
            seat.classList.add('selected');
        }else{
            zeros += 1;
            seat.classList.add('blocked');
        }
    });
}

container.addEventListener('click', e => {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        console.log(e.target);
        e.target.classList.toggle('selected');
        updateSelectedCount();
    }
});

