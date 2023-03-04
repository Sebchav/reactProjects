const Paciente = () => {
  return (
    <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl'>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: {""}
                <span className='font-normal normal-case'>Hook</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario: {""}
                <span className='font-normal normal-case'>Chava</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>Email: {""}
                <span className='font-normal normal-case'>sebchav130@gmail.com</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha Alta: {""}
                <span className='font-normal normal-case'>10 Diciembre de 2022</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>Sintomas: {""}
                <span className='font-normal normal-case'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde id tenetur aperiam recusandae, maiores fuga officia eligendi nesciunt quis iure deserunt corporis doloribus esse porro vero similique exercitationem veritatis voluptates?</span>
            </p>
    </div>
  )
}

export default Paciente