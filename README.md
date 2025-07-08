---

# 🛠️ API REST de Productos con Node.js y Firebase

Este proyecto consiste en el desarrollo de una **API REST** para la gestión de productos de un catálogo online, permitiendo **Leer, Crear, Actualizar y Eliminar** productos de forma segura desde una tienda oficial, con autenticación y base de datos en la nube mediante **Firestore de Firebase**.

---

## 🚀 Tecnologías Utilizadas

- **Node.js**
- **Express**
- **Firebase Firestore**
- **JWT (jsonwebtoken)**
- **dotenv**
- **cors**
- **body-parser**

---

## 🗂️ Estructura del Proyecto

```

/projecto_final
├── src/
  ├── controllers/
  ├── data/
  ├── middleware/
  ├── models/
  ├── routes/
  ├── services/
  └── utils/
├── .env
├── index.js
├── package-lock.json
└── package.json

````

---

## ✅ Requerimientos cumplidos

### 1️⃣ Configuración Inicial
- Proyecto iniciado con `npm init -y`.
- Configurado `"type": "module"` para **ESModules**.
- Script `start` configurado en `package.json` para `node index.js`.

### 2️⃣ Instalación de dependencias
Instaladas con:
```bash
npm install express cors body-parser dotenv firebase jsonwebtoken
````

### 3️⃣ Configuración del servidor

* Configuración de **Express** en `index.js`.
* Habilitado **CORS** para peticiones cross-origin.
* Middleware global de `body-parser` para JSON.
* Middleware para rutas no definidas (`404`).
* Archivo `.env` para variables de entorno.

### 4️⃣ Rutas

#### `products.routes.js`

* `GET /api/products` → Devuelve todos los productos.
* `GET /api/products/:id` → Devuelve un producto por ID.
* `POST /api/products/create` → Crea un nuevo producto.
* `DELETE /api/products/:id` → Elimina un producto por ID.

#### `auth.routes.js`

* `POST /auth/login` → Recibe credenciales y devuelve un **Bearer Token**.

### 5️⃣ Controladores y Servicios

* Se implementaron controladores y servicios para manejar la lógica de cada ruta y separar responsabilidades.

### 6️⃣ Acceso a los datos

* Se creó y configuró un **proyecto de Firestore en Firebase**.
* Se añadió una colección de productos con estructura inicial.
* Se creó la capa de modelos para interactuar con Firebase.
* Los servicios se conectan a los modelos para manipular datos de forma ordenada.

### 7️⃣ Autenticación y protección de rutas

* Implementado **JWT** en el proyecto.
* Middleware de autenticación para proteger rutas sensibles.
* El login valida credenciales y genera un **Bearer Token** para autenticar al usuario.

---

## ⚡ Instalación y ejecución

1️⃣ Clona el repositorio:

```bash
git clone https://github.com/fariasgustavo313/proyecto_final_talento_tech.git
cd proyecto_final_talento_tech
```

2️⃣ Instala las dependencias:

```bash
npm install
```

3️⃣ Configura el archivo `.env`:

```env
PORT=3000
FIREBASE_API_KEY=...
FIREBASE_AUTH_DOMAIN=...
FIREBASE_PROJECT_ID=...
FIREBASE_STORAGE_BUCKET=...
FIREBASE_MESSAGING_SENDER_ID=...
FIREBASE_APP_ID=...
JWT_SECRET_KEY=tu_clave_secreta
```

4️⃣ Ejecuta el servidor:

```bash
npm run start
```

---

## 🛡️ Seguridad y manejo de errores

* **404**: Rutas no definidas.
* **401 / 403**: Errores de autenticación y autorización.
* **400**: Peticiones inválidas.
* **500**: Errores internos del servidor o servicios externos (Firebase).

---

## 📧 Contacto

**Gustavo Farias** [LinkedIn](https://www.linkedin.com/in/gustavoef)

---
