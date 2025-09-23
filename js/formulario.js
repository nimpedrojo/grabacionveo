// =============================
// JS para formularios grabacion.html y scouting.html
// =============================

// --- GRABACION.HTML ---
// Lógica específica para el formulario de grabación
if (window.location.pathname.includes("grabacion.html") && document.getElementById('categoria') && document.getElementById('local')) {
    const equiposPorCategoria = {
        prebenjamin: ["Prebenjamín A", "Prebenjamín B"],
        benjamin: ["Benjamín preferente", "1 Benjamín", "2 Benjamín"],
        alevin: ["Alevín preferente", "2 Alevín A", "2 Alevín B"],
        infantil: ["Primera Infantil", "3 Infantil A", "3 Infantil B"],
        cadete: ["Primera Cadete", "3 Cadete A", "3 Cadete B"],
        juvenil: ["Juvenil preferente", "1 Juvenil"],
        femenino: ["Juvenil femenino", "Infantil/Alevin femenino", "Alevin/Benjamín femenino"]
    };
    const categoriaSelect = document.getElementById("categoria");
    const equipoLocalSelect = document.getElementById("local");
    categoriaSelect.addEventListener("change", () => {
        const categoria = categoriaSelect.value;
        equipoLocalSelect.innerHTML = '<option value="">Selecciona el equipo local</option>';
        if (!categoria || !equiposPorCategoria[categoria]) {
            equipoLocalSelect.disabled = true;
            return;
        }
        equiposPorCategoria[categoria].forEach(eq => {
            const opt = document.createElement("option");
            opt.value = eq;
            opt.textContent = eq;
            equipoLocalSelect.appendChild(opt);
        });
        equipoLocalSelect.disabled = false;
    });
}

// --- FORMULARIO ENVÍO (COMPARTIDO) ---
if (document.getElementById('miFormulario')) {
    const form = document.getElementById('miFormulario');
    const btn = document.getElementById('btnEnviar');
    const btnTexto = document.getElementById('btnTexto');
    const spinner = document.getElementById('spinner');
    form.addEventListener("submit", async function (e) {
        e.preventDefault();
        btn.disabled = true;
        btnTexto.textContent = "Enviando...";
        spinner.style.display = "inline-block";
        try {
            const data = Object.fromEntries(new FormData(this).entries());
            // Endpoint diferente según el formulario
            let endpoint = "";
            if (window.location.pathname.includes("grabacion.html")) {
                endpoint = "https://script.google.com/macros/s/AKfycbzfyo24AZKfvz4NQPwv0JoZAE9zHoQeKVuT0brm3Vn4CoUcuTXE-uOfAgLRwfOEERF9Cw/exec";
            } else if (window.location.pathname.includes("scouting.html")) {
                endpoint = "https://script.google.com/macros/s/AKfycbxXgMQDG0ipS6TglXaaj-FkVZWXCSjg2KZElOe4tVP2E1Ezu1wwAvcYvPKwieivetIfcQ/exec";
            }
            await fetch(endpoint, {
                method: "POST",
                body: JSON.stringify(data),
                mode: 'no-cors'
            });
            alert("Solicitud enviada con éxito. Nos pondremos en contacto contigo pronto.");
            this.reset();
        } catch (error) {
            alert("Ocurrió un error al enviar la información. Intenta de nuevo.");
            console.error(error);
        } finally {
            btn.disabled = false;
            btnTexto.textContent = "Enviar solicitud";
            spinner.style.display = "none";
        }
    });
}
