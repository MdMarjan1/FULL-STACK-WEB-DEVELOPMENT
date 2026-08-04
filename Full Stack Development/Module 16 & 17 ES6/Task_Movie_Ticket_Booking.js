const bookTicket = (movie, seats=1, pricePerSeat=300) =>{
    if(typeof movie !== "string"){
        return `Invalid`
    }
    
    if(seats < 1 || pricePerSeat < 1){
        return `Invalid`
    }

    if(typeof movie === "string"){
        let total = seats * pricePerSeat 
        return `${movie}: ${seats} seat(s), Total ৳${total}`
    }
    else{
        return `Invalid`
    }
}
console.log(bookTicket("Dune"));
console.log(bookTicket("Dune", 3));
console.log(bookTicket("Dune", 2, 450));
console.log(bookTicket(123,2));
