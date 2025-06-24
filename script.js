const data = {
  foro: [],
  donacion: [],
  usuario: [],
  recompensa: [],
};

function registrar(tipo) {
  const input = document.getElementById(`${tipo}Input`);
  const valor = input.value.trim();

  if (valor === "") {
    alert("Por favor ingresa un valor.");
    return;
  }

  data[tipo].push(valor);
  input.value = "";
  listar(tipo); // actualizar tabla automáticamente
}

function listar(tipo) {
  const container = document.getElementById(`${tipo}TablaContainer`);
  container.innerHTML = "";

  if (data[tipo].length === 0) {
    container.innerHTML = "<p>No hay registros aún.</p>";
    return;
  }

  const tabla = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");

  thead.innerHTML = `
    <tr>
      <th>#</th>
      <th>${tipo.charAt(0).toUpperCase() + tipo.slice(1)}</th>
      <th>Acciones</th>
    </tr>
  `;

  data[tipo].forEach((item, index) => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${index + 1}</td>
      <td>${item}</td>
      <td><button class="eliminar-btn" onclick="eliminar('${tipo}', ${index})">Eliminar</button></td>
    `;
    tbody.appendChild(fila);
  });

  tabla.appendChild(thead);
  tabla.appendChild(tbody);
  container.appendChild(tabla);
}

function eliminar(tipo, index) {
  if (confirm("¿Seguro que deseas eliminar este elemento?")) {
    data[tipo].splice(index, 1);
    listar(tipo);
  }
}
