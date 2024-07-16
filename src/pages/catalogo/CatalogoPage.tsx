import { Label, Select, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { ProductoApi } from "./services/endpoints";

const ProductCard = ({openModalEdit,product}:{openModalEdit:()=>void,product:{id:number,name:string,image:string,salePrice:number}}) => {
  return (
    <div className="w-48 overflow-hidden rounded-md shadow-md">
      <div className="w-48 bg-red-600 h-44">
        <img
          className="object-cover w-full h-full"
          src={product.image}
          alt=""
        />
      </div>
      <div className="p-2 bg-white">
        <h4 className="font-semibold">{product.name}</h4>
        <p className="">
          <span>S/. {product.salePrice}</span>
        </p>
      </div>
      <div className="flex flex-col gap-2">
      <button className="px-4 py-2 bg-slate-300" onClick={openModalEdit}>Editar</button>
      <button className="px-4 py-2 bg-slate-300">Eliminar</button>
      </div>
    </div>
  );
};

const ModalProductEditar = ({close}:{close:()=>void}) => {
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
            type="email"
            placeholder="Zapatillas, polos, etc."
            required
          />
        </div>
        <div>
          <div className="block mb-2">
            <Label htmlFor="countries" value="Marca" />
          </div>
          <Select id="countries" required>
            <option>United States</option>
            <option>Canada</option>
            <option>France</option>
            <option>Germany</option>
          </Select>
        </div>
        <div>
          <div className="block mb-2">
            <Label htmlFor="countries" value="Modelo" />
          </div>
          <Select id="countries" required>
            <option>United States</option>
            <option>Canada</option>
            <option>France</option>
            <option>Germany</option>
          </Select>
        </div>
        <div>
          <div className="block mb-2">
            <Label htmlFor="countries" value="Color" />
          </div>
          <Select id="countries" required>
            <option>United States</option>
            <option>Canada</option>
            <option>France</option>
            <option>Germany</option>
          </Select>
        </div>
        <div>
          <div className="block mb-2">
            <Label htmlFor="countries" value="Talla" />
          </div>
          <Select id="countries" required>
            <option>United States</option>
            <option>Canada</option>
            <option>France</option>
            <option>Germany</option>
          </Select>
        </div>
        <div>
          <div className="block mb-2">
            <Label htmlFor="email1" value="Imagen" />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="Zapatillas, polos, etc."
            required
          />
        </div>
        <div>
          <div className="block mb-2">
            <Label htmlFor="email1" value="Precio S/." />
          </div>
          <TextInput
            id="email1"
            type="number"
            placeholder="0.00"
            required
          />
        </div>
        <div className="flex justify-between gap-4 mt-4">
            <button className="flex-1 px-4 py-2 rounded-md bg-slate-300" onClick={close}>Cancelar</button>
            <button className="flex-1 px-4 py-2 rounded-md bg-slate-300">Guardar</button>
        </div>
      </div>
    </div>
  );
};
const ModalProduct = ({close}:{close:()=>void}) => {
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
            placeholder="Zapatillas, polos, etc."
            required
          />
        </div>
        <div>
          <div className="block mb-2">
            <Label htmlFor="countries" value="Marca" />
          </div>
          <Select id="countries" required>
            <option>United States</option>
            <option>Canada</option>
            <option>France</option>
            <option>Germany</option>
          </Select>
        </div>
        <div>
          <div className="block mb-2">
            <Label htmlFor="countries" value="Modelo" />
          </div>
          <Select id="countries" required>
            <option>United States</option>
            <option>Canada</option>
            <option>France</option>
            <option>Germany</option>
          </Select>
        </div>
        <div>
          <div className="block mb-2">
            <Label htmlFor="countries" value="Color" />
          </div>
          <Select id="countries" required>
            <option>United States</option>
            <option>Canada</option>
            <option>France</option>
            <option>Germany</option>
          </Select>
        </div>
        <div>
          <div className="block mb-2">
            <Label htmlFor="countries" value="Talla" />
          </div>
          <Select id="countries" required>
            <option>United States</option>
            <option>Canada</option>
            <option>France</option>
            <option>Germany</option>
          </Select>
        </div>
        <div>
          <div className="block mb-2">
            <Label htmlFor="email1" value="Imagen" />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="Zapatillas, polos, etc."
            required
          />
        </div>
        <div>
          <div className="block mb-2">
            <Label htmlFor="email1" value="Precio S/." />
          </div>
          <TextInput
            id="email1"
            type="number"
            placeholder="0.00"
            required
          />
        </div>
        <div className="flex justify-between gap-4 mt-4">
            <button className="flex-1 px-4 py-2 rounded-md bg-slate-300" onClick={close}>Cancelar</button>
            <button className="flex-1 px-4 py-2 rounded-md bg-slate-300">Guardar</button>
        </div>
      </div>
    </div>
  );
};

const CatalogoPage = () => {
    const [openCreateModal,setOpenCreateModal] = useState(false);
    const [openUpdateModal,setOpenUpdateModal] = useState(false);
    const [products,setProducts] = useState([]);
    useEffect(()=>{
      const fetchData = async ()=>{
        const data = await ProductoApi.get();
        setProducts(data.data.data)
      }
      fetchData()
    },[])
  return (
    <div>
      <div className="flex justify-center mb-4">
        <button onClick={()=>setOpenCreateModal(true)} className="px-4 py-2 rounded-md bg-slate-300">Agregar Producto</button>
        {openCreateModal && <ModalProduct close={()=>setOpenCreateModal(false)} />}
        {openUpdateModal && <ModalProductEditar close={()=>setOpenUpdateModal(false)} />}

      </div>
      <div className="flex flex-wrap gap-4">
        {products.map((product:{id:number,name:string,salePrice:number,image:string}) => (
          <ProductCard product={product} key={product.id} openModalEdit={()=>setOpenUpdateModal(true)}/>
        ))}
      </div>
    </div>
  );
};

export default CatalogoPage;
