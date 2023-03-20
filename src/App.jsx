import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"
import { useState, useEffect } from "react"


function App() {

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  const eliminarPaciente = id => {
    const newPacientes = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(newPacientes)
  }

  // importa el orden de los effect!!!!!!!!!!!!

  useEffect(() => {
   const getLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLS)   
    }
    getLS();
  }, []);

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
}, [pacientes])


  return (
    <div className="container lg:mx-16 sm:mx-4 mt-20">
    <Header />

      <div className="mt-20 md:flex">
        <Formulario 
        setPacientes={setPacientes}
        pacientes={pacientes}
        paciente={paciente}
        setPaciente={setPaciente}
        />
        <ListadoPacientes 
        pacientes={pacientes}
        setPaciente={setPaciente}
        eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
