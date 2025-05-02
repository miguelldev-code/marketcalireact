import React, { useState } from "react";

function Login() {
  const [formulario, setFormulario] = useState({
    usuario: "",
    password: "",
  });

  const manejarCambio = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    // Aquí conectarías con tu API (Spring Boot)
    alert("Inicio de sesión no implementado aún");
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <div
        className="card p-4 shadow-sm"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <h2 className="text-center mb-4">Iniciar Sesión</h2>
        <form onSubmit={manejarEnvio}>
          <div className="mb-3">
            <label htmlFor="usuario" className="form-label">
              Usuario
            </label>
            <input
              type="text"
              className="form-control"
              id="usuario"
              name="usuario"
              placeholder="Usuario"
              value={formulario.usuario}
              onChange={manejarCambio}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="********"
              value={formulario.password}
              onChange={manejarCambio}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Ingresar
          </button>
        </form>
        <p
          className="text-center mt-3 text-muted"
          style={{ fontSize: "0.9rem" }}
        >
          Acceso exclusivo para empleados y administradores.
        </p>
      </div>
    </div>
  );
}

export default Login;
