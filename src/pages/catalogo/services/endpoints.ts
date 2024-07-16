import api from "../../../services/config";
interface ProductCreate{
  name:string
  brandId:number
  modelId:number
  colorId:number
  sizeId:number
  image:string
  salePrice:number


}
export const ProductoApi = {
  get: async () => {
    console.log(import.meta.env.VITE_HOST)
    return await api.get("/products");
  },
  create: async (data:ProductCreate) => {
    return await api.post("/products", data);
  },
  update: async ({ data, id }: { data: ProductCreate; id: number }) => {
    return await api.patch(`/products/${id}`, data);
  },
  delete: async ({ id }: { id: number }) => {
    return await api.delete(`/products/${id}`);
  },
};
export const MarcaApi = {
  get: async () => {
    return await api.get("/catalogs/brands");
  },
  create: async ({ name }: { name: string }) => {
    return await api.post("/catalogs/brands", {
      name,
    });
  },
  update: async ({ name, id }: { name: string; id: number }) => {
    return await api.patch(`/catalogs/brands/${id}`, {
      name,
    });
  },
  delete: async ({ id }: { id: number }) => {
    return await api.delete(`/catalogs/brands/${id}`);
  },
};

export const ModeloApi = {
  get: async () => {
    return await api.get("/catalogs/models");
  },
  create: async ({ name }: { name: string }) => {
    return await api.post("/catalogs/models", {
      name,
    });
  },
  update: async ({ name, id }: { name: string; id: number }) => {
    return await api.patch(`/catalogs/models/${id}`, {
      name,
    });
  },
  delete: async ({ id }: { id: number }) => {
    return await api.delete(`/catalogs/models/${id}`);
  },
};

export const ColorApi = {
  get: async () => {
    return await api.get("/catalogs/colors");
  },
  create: async ({ name }: { name: string }) => {
    return await api.post("/catalogs/colors", {
      name,
    });
  },
  update: async ({ name, id }: { name: string; id: number }) => {
    return await api.patch(`/catalogs/colors/${id}`, {
      name,
    });
  },
  delete: async ({ id }: { id: number }) => {
    return await api.delete(`/catalogs/colors/${id}`);
  },
};
export const TallaApi = {
  get: async () => {
    return await api.get("/catalogs/sizes");
  },
  create: async ({ name }: { name: string }) => {
    return await api.post("/catalogs/sizes", {
      name,
    });
  },
  update: async ({ name, id }: { name: string; id: number }) => {
    return await api.patch(`/catalogs/sizes/${id}`, {
      name,
    });
  },
  delete: async ({ id }: { id: number }) => {
    return await api.delete(`/catalogs/sizes/${id}`);
  },
};
