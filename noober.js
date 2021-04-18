// Code that runs when the page finishes loading
document.addEventListener('DOMContentLoaded', async function() {
  // retrieves data from rides API endpoint
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // selects a random ride
  let ride = json[Math.floor(Math.random() * json.length)]

  // writes random ride to the JavaScript console
  console.log(ride)

  // 🔥 YOUR CODE GOES HERE 🔥
  // Write the recipe (algorithm) in the comments. Then, write the code.

 // Parse the data given in the random ride Object
 let passengerFirst = ride.passengerDetails.first
 let passengerLast = ride.passengerDetails.last
 let phoneNumber = ride.passengerDetails.phoneNumber

 let pickupAddress = ride.pickupLocation.address
 let pickupCity = ride.pickupLocation.city
 let pickupState = ride.pickupLocation.state
 let pickupZip= ride.pickupLocation.zip

 let dropoffAddress = ride.dropoffLocation.address
 let dropoffCity = ride.dropoffLocation.city
 let dropoffState = ride.dropoffLocation.state
 let dropoffZip= ride.dropoffLocation.zip

 let numberPassenger = ride.numberOfPassengers
 let purpleRequested = ride.purpleRequested

// Present it in human-readable format


if (purpleRequested == true) {
  // If the rider has requested the luxury "Purple" level of service, i.e. purpleRequested, display "Noober Purple". Display "Noober Purple" as the level of service.
  // If a Noober Purple has been requested, it doesn't matter the number of passengers.
  console.log(`Noober Purple Passenger:`)
} else if (purpleRequested == false && numberPassenger > 3) {
  // If the numberOfPassengers in a single ride request is greater than 3, we'll need to upgrade to a larger car. Display "Noober XL" as the level of service.
  console.log(`Noober XL Passenger:`)
} else {
  // Anything else is the normal level of service
  console.log(`Noober X Passenger:`)
}

console.log(`${passengerFirst} ${passengerLast} - ${phoneNumber}. Pickup at 
${pickupAddress} ${pickupCity}, ${pickupState} ${pickupZip}. Drop-off at ${dropoffAddress} ${dropoffCity}, ${dropoffState} ${dropoffZip}.`)

  // 🔥 YOUR CODE ENDS HERE 🔥
})
