// // Acceso al servicio de la base de datos
// var database = firebase.database();
// // Acceso a un documento
// var ref = database.ref('customer');
//
// var body = $('#table_customer tbody');
//
// ref.on('value', function(ss) {
//     var customers = ss.val();
//     console.log(customers.adress);
//     $.each(customers, function(index, element) {
//         // newRowCustomer(element);
//     });
// });
//
// function newRowCustomer(customer) {
//     return '<tr>'+
//                 '<td>' + customer.id + '</td>' +
//                 '<td>' + customer.names + '</td>' +
//                 '<td>' + customer.lastname + '</td>' +
//                 '<td>' + customer.address + '</td>' +
//                 '<td>' + customer.city + '</td>' +
//                 '<td>' +
//                     '<a href="#" class="btn btn-default">' +
//                         '<span class="glyphicon glyphicon glyphicon-pencil" aria-hidden="true"></span>' +
//                     '</a>' +
//                     '<a href="#" class="btn btn-default">' +
//                         '<span class="glyphicon glyphicon glyphicon-trash" aria-hidden="true"></span>' +
//                     '</a>' +
//                 '</td>' +
//             '</tr>';
// }
//
// var refCar = database.ref('car');
//
// refCar.on('child_added', function(ss) {
//     var cars = ss.val();
// });
