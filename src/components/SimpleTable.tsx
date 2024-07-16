import { cn } from "../utils/cn";
import { useState } from "react";
import { createPortal } from "react-dom";
import Loading from "./Loading";
import Button from "./Button";

type Row = {
  id: string;
  [key: string]: string;
};
interface simpleTable {
  headers: {
    name: string;
    class?: string;
    nameRow?: string;
  }[];
  rows: Row[];
}

const ModalEdit = ({ closeModal }: { closeModal: () => void }) => {
  const [loading, setLoading] = useState(false);
  const saveData = () => {
    console.log("Guardando datos");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      closeModal();
    }, 500);
  };

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-screen bg-red bg-white/50">
        <div className="max-w-xl px-8 py-4 mx-auto mt-20 bg-white rounded-md shadow-md">
          <div className="text-2xl">Editar Item</div>
          <p>
            este es un modal de edicion, aqui se podra editar los datos de la
            tabla
          </p>
          <label htmlFor="">
            Nombre
            <input
              className="block w-full px-4 py-2 border rounded-sm border-slate-400"
              type="text"
            />
          </label>
          <div className="flex justify-end gap-2 mt-8">
            <Button onClick={closeModal} mode="cancelar" />
            <Button onClick={saveData} mode="guardar" />
          </div>
        </div>
      </div>
      {loading && <Loading />}
    </>
  );
};
const ModalRegistrar = ({ closeModal }: { closeModal: () => void }) => {
  const [loading, setLoading] = useState(false);
  const saveData = () => {
    console.log("Guardando datos");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      closeModal();
    }, 500);
  };

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-screen bg-red bg-white/50">
        <div className="max-w-xl px-8 py-4 mx-auto mt-20 bg-white rounded-md shadow-md">
          <div className="text-2xl">Registrar Item</div>
          <p>
            este es un modal de registro, aqui se podra registrar los datos de
            la tabla
          </p>
          <label htmlFor="">
            Nombre
            <input
              className="block w-full px-4 py-2 border rounded-sm border-slate-400"
              type="text"
            />
          </label>
          <div className="flex justify-end gap-2 mt-8">
            <Button onClick={closeModal} mode="cancelar" />
            <Button onClick={saveData} mode="guardar" />
          </div>
        </div>
      </div>
      {loading && <Loading />}
    </>
  );
};
const ModalDelete = ({ closeModal }: { closeModal: () => void }) => {
  const [loading, setLoading] = useState(false);
  const saveData = () => {
    console.log("Eliminado datos");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      closeModal();
    }, 500);
  };

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-screen bg-red bg-white/50">
        <div className="max-w-xl px-8 py-4 mx-auto mt-20 bg-white rounded-md shadow-md">
          <div className="text-2xl">Eliminar Item</div>
          <p>
            este es un modal de eliminacion, aqui se podra eliminar los datos de
            la tabla
          </p>
          <div className="flex justify-end gap-2 mt-8">
            <Button onClick={closeModal} mode="cancelar" />
            <Button onClick={saveData} mode="eliminar" />
          </div>
        </div>
      </div>
      {loading && <Loading />}
    </>
  );
};

const SimpleTable = (props: simpleTable) => {
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showModalRegistrar, setShowModalRegistrar] = useState(false);
  const [data, setData] = useState<Row | null>(null);

  const selectRow = (row: Row) => {
    if (data?.id === row.id) return setData(null);
    setData(row);
  };
  const btnRegistrar = () => {
    setData(null);
    setShowModalRegistrar(true);
  };
  const btnEditar = () => {
    console.log("Editar");
    setShowModalEdit(true);
  };
  const btnEliminar = () => {
    console.log("Eliminar");
    setShowModalDelete(true);
  };
  return (
    <section className="flex-1 p-8 bg-white rounded-md">
      <div className="flex justify-end gap-1">
        {data && (
          <Button
            onClick={btnEditar}
            disabled={!data}
            mode="editar"
          />
        )}

        {showModalEdit &&
          createPortal(
            <ModalEdit closeModal={() => setShowModalEdit(false)} />,
            document.body
          )}
        {data && (
          <Button
            onClick={btnEliminar}
            disabled={!data}
            mode="eliminar"
          />
        )}
        {showModalDelete &&
          createPortal(
            <ModalDelete closeModal={() => setShowModalDelete(false)} />,
            document.body
          )}
        <Button onClick={btnRegistrar} mode="registrar" />
        {showModalRegistrar &&
          createPortal(
            <ModalRegistrar closeModal={() => setShowModalRegistrar(false)} />,
            document.body
          )}
        <Button onClick={btnRegistrar} mode="recargar" />
        <Button onClick={btnRegistrar}>hola</Button>
      </div>
      <table className="w-full table-auto text-[#0C1C2C]">
        <thead>
          <tr className="border-b border-[#DBDEE1]">
            {props.headers.map((header, id) => (
              <th key={id} className={cn("w-10 pb-2", header?.class)}>
                {header.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.rows.map((row) => (
            <tr
              key={row.id}
              className={cn(
                "cursor-default text-center border-b border-[#DBDEE1] hover:bg-slate-100",
                {
                  "bg-primary hover:bg-primary text-white": data?.id === row.id,
                }
              )}
              onClick={() => selectRow(row)}
            >
              {props.headers.map((header, id) => (
                <td key={id} className={cn(header.class)}>
                  {row[header.nameRow ?? header.name] || " - "}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
export default SimpleTable;
