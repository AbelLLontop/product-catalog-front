import { create } from "./store.config";

type InfoError = {
  type: string;
  error: boolean;
  message: string;
};

type State = {
  type: string;
  error: boolean;
  message: string;
  showErrorMessage: (infoError: InfoError) => void;
  reset: () => void;
};
const initialState = {
  type: "",
  error: false,
  message: "",
};

const useErrorStore = create<State>((set) => ({
  ...initialState,
  showErrorMessage: (infoError: InfoError) => {
    set({
      type: infoError.type,
      error: infoError.error,
      message: infoError.message,
    });
    // if (infoError.type == "TOKEN INVALID") {
    //   useloginStore.getState().logout();
    // }
  },
  reset: () => {
    set({ ...initialState });
  },
}));

export default useErrorStore;
