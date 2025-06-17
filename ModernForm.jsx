import React, { useState } from "react";
import "./ModernForm.css";

const categorias = ["Categoría 1", "Categoría 2", "Categoría 3"];
const lineas = ["Línea 1", "Línea 2", "Línea 3"];
const modalidades = ["Modalidad 1", "Modalidad 2"];
const organos = ["Órgano 1", "Órgano 2"];
const controlarEn = ["Lugar 1", "Lugar 2"];

const ModernForm = () => {
  const [form, setForm] = useState({
    categoria: "",
    linea: "",
    modalidad: "",
    organo: "",
    fechaInicio: "",
    fechaFin: "",
    controlarEn: "",
    nombreCaso: "",
    medidas: [""],
    fundamentacion: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleMedidaChange = (idx, value) => {
    const medidas = [...form.medidas];
    medidas[idx] = value;
    setForm({ ...form, medidas });
  };

  const addMedida = () => {
    setForm({ ...form, medidas: [...form.medidas, ""] });
  };

  const removeMedida = (idx) => {
    const medidas = form.medidas.filter((_, i) => i !== idx);
    setForm({ ...form, medidas });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validación y lógica de envío aquí
    alert("Formulario enviado (demo)");
  };

  return (
    <form className="modern-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label>Categoría</label>
          <select
            name="categoria"
            value={form.categoria}
            onChange={handleChange}
            required
          >
            <option value="">Selecciona una</option>
            {categorias.map((c, i) => (
              <option key={i} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Fecha Inicio</label>
          <input
            type="date"
            name="fechaInicio"
            value={form.fechaInicio}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Línea Enfrentamiento</label>
          <select
            name="linea"
            value={form.linea}
            onChange={handleChange}
            required
          >
            <option value="">Selecciona una</option>
            {lineas.map((l, i) => (
              <option key={i} value={l}>{l}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Fecha Fin</label>
          <input
            type="date"
            name="fechaFin"
            value={form.fechaFin}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Modalidad</label>
          <select
            name="modalidad"
            value={form.modalidad}
            onChange={handleChange}
            required
          >
            <option value="">Selecciona una</option>
            {modalidades.map((m, i) => (
              <option key={i} value={m}>{m}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Controlar en</label>
          <select
            name="controlarEn"
            value={form.controlarEn}
            onChange={handleChange}
            required
          >
            <option value="">Selecciona una</option>
            {controlarEn.map((c, i) => (
              <option key={i} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Órgano que Propone</label>
          <select
            name="organo"
            value={form.organo}
            onChange={handleChange}
            required
          >
            <option value="">Selecciona una</option>
            {organos.map((o, i) => (
              <option key={i} value={o}>{o}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Nombre Caso/Operativo</label>
          <input
            type="text"
            name="nombreCaso"
            value={form.nombreCaso}
            onChange={handleChange}
            placeholder="Nombre del caso"
          />
        </div>
      </div>

      <div className="form-row medidas-row">
        <label>Medida a Tomar</label>
        <div className="medidas-list">
          {form.medidas.map((medida, idx) => (
            <div key={idx} className="medida-item">
              <input
                type="text"
                value={medida}
                onChange={e => handleMedidaChange(idx, e.target.value)}
                placeholder={`Medida #${idx + 1}`}
                className="medida-input"
              />
              <button
                type="button"
                className="icon-btn eliminar"
                onClick={() => removeMedida(idx)}
                disabled={form.medidas.length === 1}
                title="Eliminar"
              >
                &minus;
              </button>
            </div>
          ))}
          <button
            type="button"
            className="icon-btn insertar"
            onClick={addMedida}
            title="Insertar nuevo"
          >
            +
          </button>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group full-width">
          <label>Fundamentación</label>
          <textarea
            name="fundamentacion"
            value={form.fundamentacion}
            onChange={handleChange}
            rows={3}
            placeholder="Describe la fundamentación..."
          />
        </div>
      </div>

      <div className="form-actions">
        <button type="submit" className="main-btn aceptar">Aceptar</button>
        <button type="button" className="main-btn cancelar" onClick={() => window.location.reload()}>Cancelar</button>
      </div>
    </form>
  );
};

export default ModernForm;
