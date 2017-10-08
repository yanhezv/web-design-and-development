window.onload = initialize;

var formCustomer,
    refCustomer,
    bodyTableCustomer,
    refCustomerEdit,
    CREATE = 'Nuevo cliente',
    UPDATE = 'Modificar cliente',
    modo = CREATE;

function initialize() {
    formCustomer      = document.getElementById('form_customer');
    bodyTableCustomer = document.getElementById('body_customer');
    formCustomer.addEventListener('submit', sendCustomerFirebase, false);

    refCustomer = firebase.database().ref().child('customer');

    showCustomerFirebase();
}

function sendCustomerFirebase(e) {
    e.preventDefault();
    console.log(formCustomer);
    var datosCustomer = {
        id       : e.target.id.value,
        name     : e.target.name.value,
        lastname : e.target.lastname.value,
        address  : e.target.address.value,
        city     : e.target.city.value
    };
    switch (modo) {
        case CREATE:
            refCustomer.push(datosCustomer);
            break;
        case UPDATE:
            refCustomerEdit.update(datosCustomer);
            modo = CREATE;
            document.getElementById('button_save').innerHTML = CREATE;
            break;
        default:

    }
    formCustomer.reset();
}

function showCustomerFirebase() {
    refCustomer.on('value', function(snap) {
        var datos    = snap.val(),
            showRows = "";
        for(var key in datos) {
            showRows += '<tr>'+
                            '<td>' + datos[key].id + '</td>' +
                            '<td>' + datos[key].name + '</td>' +
                            '<td>' + datos[key].lastname + '</td>' +
                            '<td>' + datos[key].address + '</td>' +
                            '<td>' + datos[key].city + '</td>' +
                            '<td>'+
                                '<button class="btn btn-default edit" data-customer = "' + key + '">' +
                                    '<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>' +
                                '</button>' +
                            '</td>' +
                            '<td>'+
                                '<button class="btn btn-danger delete" data-customer = "' + key + '">' +
                                    '<span class="glyphicon glyphicon-trash" aria-hidden="true"></span>' +
                                '</button>' +
                            '</td>' +
                        '</tr>'
        }
        bodyTableCustomer.innerHTML = showRows;
        if (showRows != "") {
            var allButtonEdit = document.getElementsByClassName('edit');
            for (var i = 0; i < allButtonEdit.length; i++) {
                allButtonEdit[i].addEventListener('click', editCustomerFirebase, false);
            }

            var allButtonDelete = document.getElementsByClassName('delete');
            for (var i = 0; i < allButtonDelete.length; i++) {
                allButtonDelete[i].addEventListener('click', deleteCustomerFirebase, false);
            }
        }
    })
}

function editCustomerFirebase(){
    var keyCustomer     = this.getAttribute('data-customer');

    refCustomerEdit = refCustomer.child(keyCustomer);

    refCustomerEdit.once('value', function(snap) {
        var datos = snap.val();
        document.getElementById('id_customer').value = datos.id;
        document.getElementById('name').value        = datos.name;
        document.getElementById('lastname').value    = datos.lastname;
        document.getElementById('address').value     = datos.address;
        document.getElementById('city').value        = datos.city;
    });

    modo = UPDATE;
    document.getElementById('button_save').innerHTML = UPDATE;
}
function deleteCustomerFirebase() {
    var keyCustomer = this.getAttribute('data-customer'),
        refCustomerDelete = refCustomer.child(keyCustomer);

    refCustomerDelete.remove();
}
