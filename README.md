# 🛒 MarketCali

Sistema de gestión administrativa para supermercados con funcionalidades de ventas, inventario, usuarios y facturación. Desarrollado con tecnologías modernas: **React** en el frontend y **Spring Boot** en el backend.

---

## 📦 Tecnologías

- **Frontend:** React, TailwindCSS, Axios, React Router, Zustand o Redux
- **Backend:** Spring Boot, Spring Data JPA, Spring Security, JWT
- **Base de datos:** PostgreSQL o MySQL
- **Otros:** Docker (opcional), Lector de códigos de barras (integración futura)

---

## 🎯 Objetivo del Proyecto

Desarrollar una aplicación web que permita la gestión integral de un supermercado, incluyendo ventas, control de inventario, administración de usuarios, generación de reportes y facturación al cliente.

---

## ⚙️ Funcionalidades Principales

### 👩‍💼 Administrador

- Gestionar usuarios y roles
- Asignar permisos a empleados
- Visualizar reportes de ventas
- Realizar backups periódicos

### 👨‍💻 Empleado

- Registrar productos vendidos
- Gestionar y visualizar inventario
- Procesar compras con lector de código de barras
- Generar facturación para el cliente

### 👥 Cliente

- Visualizar productos y su facturación
- Ver resumen de su compra antes del pago

---

## 🗂️ Estructura del Repositorio

marketcali/
├── backend/ # Proyecto Spring Boot
│ ├── src/main/java/
│ ├── src/main/resources/
│ └── pom.xml
├── frontend/ # Proyecto React
│ ├── public/
│ ├── src/
│ └── package.json
└── README.md

---

## 🧪 Casos de Uso (Resumen)

1. **Administrar el software**: agregar/modificar usuarios y asignar permisos
2. **Gestionar ventas**: registro y control de productos vendidos
3. **Facturación**: impresión de facturas con desglose por producto
4. **Visualización de compra**: mostrar productos al cliente en pantalla
5. **Inventario**: organización por categoría, marca, fecha, etc.
6. **Reportes**: generación mensual de reportes de ventas

---

## 🔐 Roles de Usuario

| Rol           | Permisos                                                                   |
| ------------- | -------------------------------------------------------------------------- |
| Administrador | Gestión total del sistema, control de usuarios, acceso a todos los módulos |
| Empleado      | Gestión de ventas, facturación, inventario                                 |
| Cliente       | Solo visualización de su compra y factura                                  |

---

## 🚀 Cómo Ejecutar el Proyecto

### Backend - Spring Boot

````bash
cd backend
./mvnw spring-boot:run


## 🚀 Cómo Ejecutar el Proyecto

### Backend - Spring Boot

```bash
cd backend
./mvnw spring-boot:run

Frontend - React
bash
Copiar
Editar
cd frontend
npm install
npm run dev
Asegúrate de tener configuradas las variables de entorno para la conexión a la base de datos y las APIs.

💡 Requisitos del Sistema
Java 17

Node.js 18+

PostgreSQL o MySQL

Docker (opcional)

📈 Pendientes y Mejoras Futuras
Integración con métodos de pago

Registro y autenticación de clientes

Sistema de fidelización

Panel de estadísticas gráficas

Soporte multiusuario simultáneo (más de 15 usuarios)

👨‍💻 Autores y Colaboradores
Miguel Ángel Ortiz Escobar

Proyecto SENA – Redes y Seguridad

Instructor: Diego Alexander Campiño Toro

📄 Licencia
Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más información.

yaml
Copiar
Editar

---

¿Te gustaría que genere también la estructura inicial del proyecto o te ayudo a crear algún archivo como `package.json`
````
