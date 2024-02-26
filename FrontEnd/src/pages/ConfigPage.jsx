import React, { useEffect, useState } from "react";
import axios from "../api/axios.js";

function ConfigPage() {
  const [portNumber, setPortNumber] = useState(null);

  useEffect(() => {
    async function fetchConfig() {
      try {
        const response = await axios.get("/config");
        setPortNumber(response.data.port);
      } catch (error) {
        console.error("Error al obtener la configuración:", error);
      }
    }
    fetchConfig();
  }, []);

  return (
    <div>
      {portNumber && <p>El número de puerto del backend es: {portNumber}</p>}
    </div>
  );
}

export default ConfigPage;
