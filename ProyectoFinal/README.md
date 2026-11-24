🌿 E-commerce Frontend

Aplicación web de comercio electrónico desarrollada con React y Vite, conectada a un Backend mediante una API REST.

🛠️ Tecnologías utilizadas

⚛️ React 18

⚡ Vite

💻 JavaScript

🎨 Tailwind CSS

🔍 Lucide React

🔗 Fetch API

✨ Funcionalidades principales

🪴 Visualización y consulta de productos.

🏷️ Filtrado por categoría.

🔎 Búsqueda de productos por ID.

🛒 Carrito de compras.

📡 Inspector para visualizar peticiones y respuestas del servidor.

🔌 Endpoints consumidos

La comunicación con el Backend se centraliza en src/services/productsApi.js.

El Frontend consume la siguiente estructura de respuesta:

res.status(200).send({
  message: "Productos encontrados",
  data: products
});

Endpoints disponibles:

Obtener todos los productos:

GET ${VITE_API_URL}/api/products

Filtrar productos por categoría (Query Params):

GET ${VITE_API_URL}/api/products?category=nombre_categoria

Buscar un producto por ID (Path Params):

GET ${VITE_API_URL}/api/products/:id

🚀 Instalación y ejecución

1. Instalar dependencias:

npm install

2. Configurar variables de entorno:

Crear un archivo .env en la raíz del proyecto:

VITE_API_URL=http://localhost:3000

3. Iniciar el servidor de desarrollo:

npm run de