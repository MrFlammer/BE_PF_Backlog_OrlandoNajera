let info = '';
fetch(info)
    .then(response => response.json())
    .then(data => cargarDatos(data))
    .catch(error => console.log(error))

const cargarDatos = (data) => {
    let datos = '';
    for (var i = 0; i < data.length; i++) {
        datos += `
            <tr>
                <td>${data[i].id}</td>
                <td>${data[i].titulo}</td>
                <td>${data[i].nombre}, ${data[i].apellidos}</td>
                <td>${data[i].paginas}</td>
                <td>${data[i].fecha_publicacion}</td>
                <td>${data[i].editorial}</td>
                <td>
                    <button class="table_btn_ed"><i class="fa-regular fa-pen-to-square"></i></button>
                    <button class="table_btn_dlt"><i class="fa-sharp fa-solid fa-trash"></i></button>
                </td>
            </tr>
        `
    };

    document.getElementsByClassName('data').innerHTML = datos;
};