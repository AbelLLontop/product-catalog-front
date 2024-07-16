import { Label, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { ModeloApi } from "./services/endpoints";

const ProductCard = ({id,name,refreshData}:{id:number,name:string,refreshData:()=>void}) => {
  const [openUpdateModal,setOpenUpdateModal] = useState(false);
  const handleSubmit = async ()=>{
    await ModeloApi.delete({id});
    refreshData();
  }
  return (
    <div className="w-48 overflow-hidden rounded-md shadow-md">
 
      <div className="p-2 py-6 bg-white">
        <h4 className="font-semibold text-center">{name}</h4>
      </div>
      <div className="flex flex-col gap-2">
      <button className="px-4 py-2 bg-slate-300" onClick={()=>setOpenUpdateModal(true)}>Editar</button>
      <button className="px-4 py-2 bg-slate-300" onClick={handleSubmit}>Eliminar</button>
      </div>
      {openUpdateModal && <ModalProductEditar close={()=>setOpenUpdateModal(false)} refreshData={refreshData}  id={id} name={name} />}
    </div>
  );
};

const ModalProductEditar = ({close,id,name,refreshData}:{close:()=>void,id:number,name:string,refreshData:()=>void}) => {

  const [name_,setName_] = useState('');
  useEffect(()=>{
    setName_(name)
  },[])
  const handleSubmit = async ()=>{
    await ModeloApi.update({name:name_,id});
    refreshData();
    close();
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white min-w-[24rem] p-4 rounded-md">
        <h2 className="font-semibold">Editar Producto</h2>
        <div>
          <div className="block mb-2">
            <Label htmlFor="email1" value="Nombre" />
          </div>
          <TextInput
            id="email1"
            value={name_}
            onChange={(e)=>setName_(e.target.value)}
            type="email"
            placeholder="Zapatillas, polos, etc."
            required
          />
        </div>
      
        <div className="flex justify-between gap-4 mt-4">
            <button className="flex-1 px-4 py-2 rounded-md bg-slate-300" onClick={close}>Cancelar</button>
            <button className="flex-1 px-4 py-2 rounded-md bg-slate-300" onClick={handleSubmit}>Guardar</button>
        </div>
      </div>
    </div>
  );
};
const ModalProduct = ({close,refreshData}:{close:()=>void,refreshData:()=>void}) => {
  const [name,setName] = useState('');
  const handleSubmit = async ()=>{
    await ModeloApi.create({name});
    refreshData();
    close();
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white min-w-[24rem] p-4 rounded-md">
        <h2 className="font-semibold">Agregar Producto</h2>
        <div>
          <div className="block mb-2">
            <Label htmlFor="email1" value="Nombre" />
          </div>
          <TextInput
            id="email1"
            type="email"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            placeholder="Zapatillas, polos, etc."
            required
          />
        </div>

        <div className="flex justify-between gap-4 mt-4">
            <button className="flex-1 px-4 py-2 rounded-md bg-slate-300" onClick={close}>Cancelar</button>
            <button onClick={handleSubmit} className="flex-1 px-4 py-2 rounded-md bg-slate-300">Guardar</button>
        </div>
      </div>
    </div>
  );
};

const ModeloPage = () => {
    const [openCreateModal,setOpenCreateModal] = useState(false);
    
    const [colors,setColors] = useState([]);
    useEffect(()=>{
      const fetchData = async ()=>{
        const data = await ModeloApi.get();
        setColors(data.data.data)
      }
      fetchData()
    },[])
    const refreshData = async ()=>{
      const data = await ModeloApi.get();
      setColors(data.data.data)
    }

  return (
    <div>
      <div className="flex justify-center mb-4">
        <button onClick={()=>setOpenCreateModal(true)} className="px-4 py-2 rounded-md bg-slate-300">Agregar Color</button>
        {openCreateModal && <ModalProduct refreshData={refreshData}  close={()=>setOpenCreateModal(false)} />}
      

      </div>
      <div className="flex flex-wrap gap-4">
        {colors?.map((color:{id:number,name:string})=>(
          <ProductCard name={color.name} key={color.id} refreshData={refreshData}  id={color.id}/>

        ))}
        
      </div>
    </div>
  );
};

export default ModeloPage;
