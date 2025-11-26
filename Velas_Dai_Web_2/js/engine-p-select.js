// -----------------------------------------------------
// SELECCIÓN DE PRODUCTOS
// -----------------------------------------------------

// Todos los circulitos de selección
const selectButtons = document.querySelectorAll(".product-select");

// Array donde se guardan los IDs de los productos seleccionados
const selectedProducts = [];


// -----------------------------------------------------
// BARRA INFERIOR DINÁMICA
// -----------------------------------------------------

const barraCompra = document.getElementById("barra-compra");
const cantidadSeleccionados = document.getElementById("cantidad-seleccionados");


// Actualiza visibilidad + cantidad mostrada
function actualizarBarraCompra() {
    if (selectedProducts.length === 0) {
        barraCompra.classList.add("d-none");
    } else {
        barraCompra.classList.remove("d-none");
        cantidadSeleccionados.textContent =
            `Productos seleccionados: ${selectedProducts.length}`;
    }
}


// -----------------------------------------------------
// LIMPIAR SELECCIÓN (para después de comprar)
// -----------------------------------------------------

function limpiarSeleccion() {
    // Vaciar array
    selectedProducts.length = 0;

    // Quitar selección visual de todos los circulitos
    selectButtons.forEach(btn => btn.classList.remove("selected"));

    actualizarBarraCompra();
}


// -----------------------------------------------------
// VALIDAR STOCK ANTES DE COMPRAR
// -----------------------------------------------------

function validarStockAntesDeComprar() {
    for (let id of selectedProducts) {

        // Buscar el botón correspondiente
        const btn = document.querySelector(`[data-id="${id}"]`);
        if (!btn) continue;

        const stock = parseInt(btn.dataset.stock);

        // Si un producto seleccionado NO tiene stock → bloquear compra
        if (stock === 0) {
            alert("Un producto seleccionado no tiene stock. No se puede continuar.");
            return false;
        }
    }
    return true;
}


// -----------------------------------------------------
// GENERAR MENSAJE PARA WHATSAPP
// -----------------------------------------------------

function generarMensajeCompra() {
    let texto = "👋 Hola! Quisiera comprar los siguientes productos:\n";

    selectedProducts.forEach(id => {
        const btn = document.querySelector(`[data-id="${id}"]`);

        // Nombre del producto
        const nombre = btn.dataset.nombre || "Producto sin nombre";

        // Se puede agregar el ID al mensaje, pero por el momento solo el nombre
        texto += `- ${nombre}\n`;
    });

    return encodeURIComponent(texto);
}


// -----------------------------------------------------
// LISTENERS PARA CADA CIRCULITO DE PRODUCTO
// -----------------------------------------------------

if (selectButtons.length > 0) {
    selectButtons.forEach(button => {
        button.addEventListener("click", () => {

            const productId = button.dataset.id;
            const stock = parseInt(button.dataset.stock);

            // Evitar selección si NO hay stock
            if (stock === 0) {
                alert("No se permite seleccionar este producto porque no hay stock.");
                return;
            }

            // Agregar o quitar del array
            const index = selectedProducts.indexOf(productId);

            if (index === -1) {
                selectedProducts.push(productId);
                button.classList.add("selected");
            } else {
                selectedProducts.splice(index, 1);
                button.classList.remove("selected");
            }

            actualizarBarraCompra();
        });
    });
}


// -----------------------------------------------------
// BOTONES DE COMPRA (verificación de existencia)
// -----------------------------------------------------

const btnWpp = document.getElementById("btn-whatsapp");
const btnMP = document.getElementById("btn-mercadopago");


// --------------------------------------------
// WHATSAPP: Validar, abrir, limpiar
// --------------------------------------------
if (btnWpp) {
    btnWpp.addEventListener("click", () => {

        // Bloquear compra si hay productos seleccionados SIN STOCK
        if (!validarStockAntesDeComprar()) return;

        const mensaje = generarMensajeCompra();
        const numero = "59891613796"; // Número de la empresa

        // Abrir WhatsApp
        window.open(`https://wa.me/${numero}?text=${mensaje}`, "_blank");

        // Resetear selección
        limpiarSeleccion();
    });
}


// --------------------------------------------
// MERCADOPAGO: Validar, mostrar, limpiar
// --------------------------------------------
if (btnMP) {
    btnMP.addEventListener("click", () => {

        if (!validarStockAntesDeComprar()) return;

        alert("Acá irá MercadoPago.\n\nProductos seleccionados:\n" +
            selectedProducts.join(", "));

        limpiarSeleccion();
    });
}