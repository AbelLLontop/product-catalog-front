import { Label, Select, TextInput } from "flowbite-react";
import { ComponentProps } from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="w-full h-screen bg-slate-50 grid grid-cols-[auto,1fr]">
      <aside className="w-[16rem] h-full bg-white p-6">
        <div className="pb-4">
          <h1 className="text-xl font-semibold">FootLoose</h1>
          <p>Catalogo de productos</p>
        </div>
        <div>
          <div className=" flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="email1"
                  value="Buscar por nombre del Producto"
                />
              </div>
              <TextInput
                id="email1"
                type="email"
                placeholder="Zapatillas, polos, etc."
                required
              />
            </div>
            <div className="my-2 mt-4">
              <h2 className="font-bold">Filtros</h2>
            </div>

            <div className="space-y-3">
              <InputSelect text="Marca" />
              <InputSelect text="Modelo" />
              <InputSelect text="Color" />
              <InputSelect text="Talla" />
            </div>
          </div>
        </div>
      </aside>
      <div className="w-full h-full p-8 space-y-4">
        <div className="bg-slate-500 text-white w-full p-4 rounded-lg flex justify-between">
          <div>
            <div className="font-semibold"> Modo Edicion</div>
            <p className="mb-4">Configuraciones</p>
            <div className="flex gap-2">
              <Link
                to="/catalogo"
                className="bg-white text-black px-8 py-2 rounded-md"
              >
                Productos
              </Link>
              <Link
                to="/catalogo/marca"
                className="bg-white text-black px-8 py-2 rounded-md"
              >
                Marcas
              </Link>
              <Link
                to="/catalogo/modelo"
                className="bg-white text-black px-8 py-2 rounded-md"
              >
                Modelos
              </Link>
              <Link
                to="/catalogo/color"
                className="bg-white text-black px-8 py-2 rounded-md"
              >
                Colores
              </Link>
              <Link
                to="/catalogo/talla"
                className="bg-white text-black px-8 py-2 rounded-md"
              >
                Tallas
              </Link>
            </div>
          </div>
          <div>
            <button className="bg-white text-black px-8 py-2 rounded-md">
              Salir
            </button>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

interface InputSelectInterface {
  text: string;
}
const InputSelect = ({
  text,
}: ComponentProps<"select"> & InputSelectInterface) => {
  return (
    <div>
      <div className="mb-2 block">
        <Label htmlFor="countries" value={text} />
      </div>
      <Select id="countries" required>
        <option>United States</option>
        <option>Canada</option>
        <option>France</option>
        <option>Germany</option>
      </Select>
    </div>
  );
};
export default Layout;
