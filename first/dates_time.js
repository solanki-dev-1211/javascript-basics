// dates
let myDate = new Date()
// creates a current date and time object.

console.log(myDate.toDateString())
// Shows only the readable date.

console.log(myDate.toISOString())
// Returns date and time in international standard format (ISO format).

console.log(myDate.toJSON())
// Converts date into JSON format.

console.log(myDate.toLocaleDateString())
// Shows date according to your country/local format.

console.log(myDate.toLocaleString())
// Shows both date and time in local format.

console.log(myDate.getFullYear());//Gets the current year.

console.log(myDate.getDate());//Gets the day of the month.

console.log(myDate.getDay());//This returns the day number of week.

console.log(myDate.getHours());//Current hour in 24-hour format.

console.log(myDate.getMonth());//Months start from 0.

console.log(myDate.getTimezoneOffset());//Shows difference between local time and UTC time in minutes.

console.log(myDate.toLocaleString('default',{
    weekday:"long"
// Displays the full weekday name.
}))

