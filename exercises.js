// ------------------------- Tables ---------------------------------
/*const tableBody = document.getElementById('Table-body');
let table = false;
// All Cars
function printAll(){
    tableBody.innerHTML = '';
    cars.forEach(element => { 
        const row = `<tr>
                <td> ${element.brand} </td>
                <td> ${element.model} </td>
                <td> ${element.color} </td>
                <td> ${element.age} </td>
                <td> ${ '$' + element.price} </td>
                <td class="button edit" onclick="editCarButton(${element.id})"> <span class="material-icons"> create </span> </td>
                <td class="button remo" onclick="removeCar(${element.id})"> <span class="material-icons"> delete_forever </span> </td>
            </tr> `;
        tableBody.innerHTML += row;
    });
    table = "all"; 
}
// Nissan Model 
function printNissan(){
    tableBody.innerHTML = '';
    let cleanNissan = cars.filter(cars => cars.brand == 'Nissan' || cars.brand == 'nissan');
    cleanNissan.forEach(element => { 
        const row = `<tr>
                <td> ${element.brand} </td>
                <td> ${element.model} </td>
                <td> ${element.color} </td>
                <td> ${element.age} </td>
                <td> ${ '$' + element.price} </td>
                <td class="button edit" onclick="editCarButton(${element.id})"> <span class="material-icons"> create </span> </td>
                <td class="button remo" onclick="removeCar(${element.id})"> <span class="material-icons"> delete_forever </span> </td>
            </tr> `;
        tableBody.innerHTML += row;
    });
    table = "nissan"; 
}
// Ford Model 
function printFord(){
    tableBody.innerHTML = '';
    let cleanFord = cars.filter(cars => cars.brand == 'Ford' || cars.brand == 'ford');
    cleanFord.forEach(element => { 
        const row = `<tr>
                <td> ${element.brand} </td>
                <td> ${element.model} </td>
                <td> ${element.color} </td>
                <td> ${element.age} </td>
                <td> ${ '$' + element.price} </td>
                <td class="button edit" onclick="editCarButton(${element.id})"> <span class="material-icons"> create </span> </td>
                <td class="button remo" onclick="removeCar(${element.id})"> <span class="material-icons"> delete_forever </span> </td>
            </tr> `;
        tableBody.innerHTML += row;
    });
    table = "ford"; 
} 
// Chevrolet Model 
function printChevrolet(){
    tableBody.innerHTML = '';
    let cleanChevrolet = cars.filter(cars => cars.brand == 'Chevrolet' || cars.brand == 'chevrolet' );
    cleanChevrolet.forEach(element => { 
        const row = `<tr>
                <td> ${element.brand} </td>
                <td> ${element.model} </td>
                <td> ${element.color} </td>
                <td> ${element.age} </td>
                <td> ${ '$' + element.price} </td>
                <td class="button edit" onclick="editCarButton(${element.id})"> <span class="material-icons"> create </span> </td>
                <td class="button remo" onclick="removeCar(${element.id})"> <span class="material-icons"> delete_forever </span> </td>
            </tr> `;
        tableBody.innerHTML += row;
    });
    table = "chevrolet"; 
}
// More Age Model 
function printAgeMore(){
    tableBody.innerHTML = '';
    let cleanAgeMore = cars.filter(cars => cars.age >= 2000);
    cleanAgeMore.forEach(element => { 
        const row = `<tr>
                <td> ${element.brand} </td>
                <td> ${element.model} </td>
                <td> ${element.color} </td>
                <td> ${element.age} </td>
                <td> ${ '$' + element.price} </td>
                <td class="button edit" onclick="editCarButton(${element.id})"> <span class="material-icons"> create </span> </td>
                <td class="button remo" onclick="removeCar(${element.id})"> <span class="material-icons"> delete_forever </span> </td>
            </tr> `;
        tableBody.innerHTML += row;
    });
    table = "ageM"; 
}
// Less Age Model 
function printAgeLess(){
    tableBody.innerHTML = '';
    let cleanAgeLess = cars.filter(cars => cars.age < 2000);
    cleanAgeLess.forEach(element => { 
        const row = `<tr>
                <td> ${element.brand} </td>
                <td> ${element.model} </td>
                <td> ${element.color} </td>
                <td> ${element.age} </td>
                <td> ${ '$' + element.price} </td>
                <td class="button edit" onclick="editCarButton(${element.id})"> <span class="material-icons"> create </span> </td>
                <td class="button remo" onclick="removeCar(${element.id})"> <span class="material-icons"> delete_forever </span> </td>
            </tr> `;
        tableBody.innerHTML += row;
    });
    table = "ageL"; 
}
// More Price Model 
function printPriceMore(){
    tableBody.innerHTML = '';
    let cleanPriceLess = cars.filter(cars => cars.price > 50000);
    cleanPriceLess.forEach(element => { 
        const row = `<tr>
                <td> ${element.brand} </td>
                <td> ${element.model} </td>
                <td> ${element.color} </td>
                <td> ${element.age} </td>
                <td> ${ '$' + element.price} </td>
                <td class="button edit" onclick="editCarButton(${element.id})"> <span class="material-icons"> create </span> </td>
                <td class="button remo" onclick="removeCar(${element.id})"> <span class="material-icons"> delete_forever </span> </td>
            </tr> `;
        tableBody.innerHTML += row;
    });
    table = "priceM"; 
}
// Less Price Model 
function printPriceLess(){
    tableBody.innerHTML = '';
    let cleanPriceLess = cars.filter(cars => cars.price <= 50000);
    cleanPriceLess.forEach(element => { 
        const row = `<tr>
                <td> ${element.brand} </td>
                <td> ${element.model} </td>
                <td> ${element.color} </td>
                <td> ${element.age} </td>
                <td> ${ '$' + element.price} </td>
                <td class="button edit" onclick="editCarButton(${element.id})"> <span class="material-icons"> create </span> </td>
                <td class="button remo" onclick="removeCar(${element.id})"> <span class="material-icons"> delete_forever </span> </td>
            </tr> `;
        tableBody.innerHTML += row;
    });
    table = "priceL";
}
// ------------------------------ Form ----------------------------------
let editingCar = false;
function submitCar(){
    if(editingCar){
        editCar();
    }else{
        addCar();
    }
}
function addCar(){
    // Recibo de values
    const Brand = document.getElementById('Brand').value;
    const Model = document.getElementById('Model').value;
    const Color = document.getElementById('Color').value;
    const Age = document.getElementById('Age').value;
    const Price = document.getElementById('Price').value;
    const Id = cars.length + 1;
    // Push new car
    const newCar = {id: Id, brand: Brand, age: Age, color: Color, model: Model, price: Price};
    cars.push(newCar);
    console.log(cars);
    // Print all car
    printAll();   
}
function removeCar(id){
    // Position on Array
    const position =  cars.findIndex((car) => car.id === id);
    // Delete Car 
    cars.splice(position, 1);
    // Print all car
    switch (table){
        case "all":
            printAll();
        break;
        case "nissan":
            printNissan();
        break;
        case "ford":
            printFord();
        break;
        case "chevrolet":
            printChevrolet();
        break;
        case "ageM":
            printPriceMore();
        break;
        case "ageL":
            printAgeLess();
        break;
        case "priceM":
            printPriceMore();
        break;
        case "priceL":
            printPriceLess();
        break;
    }
}
function editCarButton(id){
    // Position on Array
    const car =  cars.find((car) => car.id === id);
    // Value on array
    document.getElementById('Brand').value = car.brand;
    document.getElementById('Model').value = car.model;
    document.getElementById('Color').value = car.color;
    document.getElementById('Age').value = car.age;
    document.getElementById('Price').value = car.price;
    // Reture Selet Car 
    editingCar = car;
}
function editCar(){
    // Recibo de values
    const Brand = document.getElementById('Brand').value;
    const Model = document.getElementById('Model').value;
    const Color = document.getElementById('Color').value;
    const Age = document.getElementById('Age').value;
    const Price = document.getElementById('Price').value;
    // asginación 
    editingCar.brand = Brand;
    editingCar.model = Model;
    editingCar.color = Color;
    editingCar.age = Age;
    editingCar.price = Price;
    printAll();
    editingCar = false;
    document.getElementById('Brand').value = ' ';
    document.getElementById('Model').value = ' ';
    document.getElementById('Color').value = ' ';
    document.getElementById('Age').value = ' ';
    document.getElementById('Price').value = ' ';
}
printAll();
// ------------------------- PrintWindow ---------------------------------
window.printAll = printAll;
window.printNissan = printNissan;
window.printFord = printFord;
window.printChevrolet = printChevrolet;
window.printAgeMore = printAgeMore;
window.printAgeLess = printAgeLess;
window.printPriceMore = printPriceMore;
window.printPriceLess = printPriceLess;
window.addCar = addCar;
window.submitCar = submitCar;
window.removeCar = removeCar;
window.editCarButton = editCarButton;
window.editCar = editCar;
*/