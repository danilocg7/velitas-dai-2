const catalogo = document.getElementById("catalogo");

const categorias = [...new Set(productos.map(p => p.categoria))];

categorias.forEach(categoria => {

    const categoriaID = categoria.replaceAll(" ", "-");

    catalogo.innerHTML += `
    
        <h2 class="text-center mb-4 mt-5">
        ${categoria}
        </h2>

        <div
        class="row row-cols-2 row-cols-md-3 g-4"
        id="${categoriaID}">
        </div>

    `;
});
productos.forEach((p, index) => {

    const categoriaID = p.categoria.replaceAll(" ", "-");

    const contenedor = document.getElementById(categoriaID);

    contenedor.innerHTML += `

<!-- Tarjeta -->
    <div class="col">
        <div class="card h-100 shadow-sm">

            <div class="product-select"
                data-id="${p.id}"
                data-stock="${p.stock ? 1 : 0}"
                data-nombre="${p.nombre}">
            </div>

            <img src="${p.imagen}" class="catalog-img" alt="${p.nombre}">

            <div class="card-body">
                <h5 class="card-title">${p.nombre}</h5>
                <p class="card-text">
                ${p.descripcion}
                </p>
                <p class="card-text ${p.stock ? 'text-success' : 'text-danger'}">
                ${p.stock ? 'Stock: Disponible' : 'Sin stock'}
                </p>
            </div>

            <div class="card-footer text-center bg-white">
                <button
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#modal-${index}">
                Ver más
                </button>
            </div>

        </div>
    </div>

<!-- Modal -->
    <div class="modal fade" id="modal-${index}">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">

                <div class="modal-header">
                    <h5 class="modal-title">${p.nombre}</h5>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal">
                    </button>
                </div>

                <div class="modal-body">
                    <div class="row align-items-center">
                        <div class="col-md-5">
                            <img
                                src="${p.imagen}"
                                class="img-fluid rounded">
                        </div>
                        <div class="col-md-7">
                            <p>${p.descripcion}</p>
                            <p>${p.precio ? `$${p.precio}` : 'Consultar precio.'}</p>
                        </div>
                    </div>
                </div>

                <div class="modal-footer">
                    <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal">
                        Cerrar
                    </button>
                    <a
                        href="https://wa.me/59891613796?text=Hola!%20Quisiera%20consultar%20por%20${encodeURIComponent(p.nombre)}"
                        class="btn btn-success"
                        target="_blank">
                        Comprar por WhatsApp
                    </a>
                    <button
                        type="button"
                        class="btn btn-info text-white">
                        Comprar por MercadoPago
                    </button>
                </div>

            </div>
        </div>
    </div>

    `;
});