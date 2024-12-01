// function cinemaTickets(input) {
//     let day = input[0];
//     let ticketPrice = 0
//     switch (day) {
//         case 'Monday':
//         case 'Tuesday':
//         case 'Friday':
//             ticketPrice = 12
//             break;
//         case 'Wednesday':
//         case 'Thursday':
//             ticketPrice = 14
//             break;
//         case 'Saturday':
//         case 'Sunday':
//             ticketPrice = 16
//             break;

//     }
//     console.log(ticketPrice);
// }

// cinemaTickets(['Sunday'])




function cinemaTickets(input) {
    let day = input[0];
    let ticketPrice = 0

    if (day === 'Monday' || day === 'Tuesday' || day === 'Friday') {
        ticketPrice = 12
    } else if (day === 'Wednesday' || day === 'Thursday') {
        ticketPrice = 14
    } else if (day === 'Saturday' || day === 'Sunday') {
        ticketPrice = 16
    }

    console.log(ticketPrice);


}
cinemaTickets(['Sunday'])