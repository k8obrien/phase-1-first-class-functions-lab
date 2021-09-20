const driversArray = new Array ("Max", "Jasper", "Brody", "Riley");
const returnFirstTwoDrivers = function(driversArray){
    return driversArray.slice(0,2)
}
const returnLastTwoDrivers = function(driversArray){
    return driversArray.slice(2,4)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(interger){
    return function price(){
        return (interger * interger)
    }
}
const fareDoubler = interger => interger * 2
const fareTripler = interger => interger * 3

function selectDifferentDrivers(driversArray, returnFirstTwoDrivers){
    return returnFirstTwoDrivers(driversArray)
}
