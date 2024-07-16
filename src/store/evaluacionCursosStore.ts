import { create } from "./store.config";


type State = {
    estudiantes:{
        id:string,
        nombre:string,
        competencias:{
            nombre:string,
            nota:string
        }[]
    }[]
};

type Actions = {
    fetchApiEstudiantes:(estudiantes)=>void;
    changeNota:(idEstudiante:string, idCompetencia:string, nota:string)=>void;
};

const evaluacionCursosStore = create<State & Actions>((set) => ({
    estudiantes:[],
    fetchApiEstudiantes:(estudiantes)=>{
        set({estudiantes});
    },
    changeNota:(idEstudiante, idCompetencia, nota)=>{
        set((state)=>{
            const estudiantes = state.estudiantes.map((estudiante)=>{
                if(estudiante.id === idEstudiante){
                    const competencias = estudiante.competencias.map((competencia)=>{
                        if(competencia.nombre === idCompetencia){
                            return {...competencia, nota}
                        }
                        return competencia;
                    });
                    return {...estudiante, competencias}
                }
                return estudiante;
            });
            return {estudiantes};
        });
    }

}));

export default evaluacionCursosStore;
