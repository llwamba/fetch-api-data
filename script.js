fetch('https://jsonplaceholder.typicode.com/users')
    .then(data=>data.json())
    .then((objectData) => {
        console.log(objectData[0].name); 
        let tableData = "";
        objectData.map((values) => {
                tableData += `<tr>
                <td>${values.id}</td>
                <td>${values.name}</td>
                <td>${values.email}</td>
                <td>${values.address.suite}, ${values.address.street}, ${values.address.city} ${values.address.zipcode}</td>
                <td>${values.phone}</td>
                <td>${values.company.name}</td>
                <td>${values.company.bs}</td>
                <td>${values.website}</td>
              </tr>`;
            })
            document.getElementById("table_body").innerHTML = tableData;
        });

