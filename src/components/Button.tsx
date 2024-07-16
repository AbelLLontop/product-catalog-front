import { ComponentProps, ReactNode } from "react";
import { FaSave } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { MdDelete, MdModeEditOutline } from "react-icons/md";
import { HiOutlinePlusSm } from "react-icons/hi";
import { FiRefreshCcw } from "react-icons/fi";
import { Button } from "flowbite-react";
import { Spinner } from "flowbite-react";

export type TypeButton =
  | "guardar"
  | "cancelar"
  | "editar"
  | "eliminar"
  | "registrar"
  | "recargar";

const getContent = (
  mode?: TypeButton,
  children?: ReactNode,
  loading?: boolean
) => {
  switch (mode) {
    case "guardar":
      if (loading)
        return (
          <>
            <Spinner className="w-5 h-5 mr-2" />
            Guardando
          </>
        );
      return (
        <>
          <FaSave className="w-5 h-5 mr-2" />
          Guardar
        </>
      );
    case "cancelar":
      return (
        <>
          <IoClose className="w-5 h-5 mr-2" />
          Cancelar
        </>
      );
    case "editar":
      if (loading)
        return (
          <>
            <Spinner className="w-5 h-5 mr-2" />
            Guardando
          </>
        );
      return (
        <>
          <MdModeEditOutline className="w-5 h-5 mr-2" />
          Editar
        </>
      );
    case "eliminar":
      if (loading)
        return (
          <>
            <Spinner className="w-5 h-5 mr-2" />
            Eliminando
          </>
        );
      return (
        <>
          <MdDelete className="w-5 h-5 mr-2" />
          Eliminar
        </>
      );
    case "registrar":
      if (loading)
        return (
          <>
            <Spinner className="w-5 h-5 mr-2" />
            Guardando
          </>
        );
      return (
        <>
          <HiOutlinePlusSm className="w-5 h-5 mr-2" />
          Registrar
        </>
      );
    case "recargar":
      return (
        <>
          <FiRefreshCcw className="w-5 h-5 mr-2" />
          Recargar
        </>
      );
    default:
      return children;
  }
};
const CustomButton = ({
  type,
  onClick,
  disabled,
  isLoading,
  mode,
  children,
}: ComponentProps<"button"> & { mode?: TypeButton; isLoading?: boolean }) => {
  return (
    <Button type={type} onClick={onClick} disabled={disabled}>
      {getContent(mode, children, isLoading)}
    </Button>
    // <button
    //   onClick={onClick}
    //   disabled={disabled}
    //   className={cn(
    //     "flex items-center gap-1 px-6 py-2 font-semibold leading-5 text-left text-white rounded-md bg-primary",
    //     className
    //   )}
    // >

    // </button>
  );
};
export default CustomButton;
