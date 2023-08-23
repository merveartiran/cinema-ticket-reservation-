const container = document.querySelector('.container');
const count = document.getElementById('count');
const amount = document.getElementById('amount');
const select = document.getElementById('movie');
const seats = document.querySelectorAll('.seat:not(.reserved)');
container.addEventListener('click', function (e) {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('reserved')) {
        e.target.classList.toggle('selected');
        Calculatetotal();

    }

});
select.addEventListener('change', function (e) {
    Calculatetotal();
});

function Calculatetotal() {
    const selectedSeats = container.querySelectorAll('.seat.selected');
    const selectedSeatsArr = [];
    const seatsArr = [];

    selectedSeats.forEach(function (seat) {

        selectedSeatsArr.push(seat);
    });

    seats.forEach(function (seat) {
        seatsArr.push(seat);
    });
    let selectedSeatIndexs = selectedSeatsArr.map(function (seat) {
        return seatsArr.indexOf(seat);
    })


    //spread operatörü aracılığı ile kolay bir şekilde yapılır.


    let SelectedSeatCount = container.querySelectorAll('.seat.selected').length;
    //hem seat hem selected classına sahip koltuk sayısını alıyoruz.
    let price = select.value;

    count.innerText = SelectedSeatCount;
    amount.innerText = SelectedSeatCount * select.value;

    saveTolocalStorage(selectedSeatIndexs);
}

function saveTolocalStorage(indexs) {
    localStorage.setItem('selectedSeats', JSON.stringify(indexs));
    localStorage.setItem('selectedMovieIndex', select.selectedIndex);
}