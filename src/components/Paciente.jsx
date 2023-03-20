//destructure paciente in different variables

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
  const {nombre, propietario, email, fecha, sintomas} = paciente

  const handleDelete = ()=> {
    const rta = confirm('Deseas eliminar este paciente?')
    if (rta){
      eliminarPaciente(paciente.id)
    }
  }

  return (
    <div className="mx-5 bg-white shadow-md px-5 py-10 rounded-xl mb-3">
    <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {""}  
    <span className="font-normal normal-case">{nombre}</span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {""}  
    <span className="font-normal normal-case">{propietario}</span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">Email: {""}  
    <span className="font-normal normal-case">{email}</span>
    </p>
   
    <p className="font-bold mb-3 text-gray-700 uppercase">Fecha alta: {""}  
    <span className="font-normal normal-case">{fecha}</span>
    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {""}  
    <span className="font-normal normal-case">{sintomas}</span>
    </p>

    <div className="flex justify-between">
       <button className="bg-indigo-600 text-white font-bold py-2 px-5 rounded-lg hover:bg-indigo-700 
       uppercase"
       onClick={()=> setPaciente(paciente)}
       >Editar 
      </button>
      
      <button type="button" 
      className="bg-red-600 text-white font-bold py-2 px-5 rounded-lg hover:bg-red-700 uppercase"
      onClick={handleDelete}
      >Eliminar 
      </button>
    
    </div>

    </div>

  )
}

export default Paciente