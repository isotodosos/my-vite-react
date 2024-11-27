import { useEffect, useState } from "react";
import useChuck from "../hooks/useChuck";

export default function Home() {
  const [answerChuck, setAnswerChuck] = useState<string | undefined>(undefined); // Tipo adecuado para el estado
  const { getRandomChuck } = useChuck();

  useEffect(() => {
    const fetchJoke = async () => {
      const joke = await getRandomChuck(); // Espera a que se resuelva la promesa
      setAnswerChuck(joke); // Actualiza el estado con la broma obtenida
    };

    fetchJoke(); // Llama a la función para obtener la broma
  }, []); // Dependencia para asegurar que no se ejecute de nuevo innecesariamente

  return (
    <div>
      <h1>Zascarrillo Chuck Norris</h1>
      <p role="listitem">{answerChuck ?? "Cargando..."}</p>{" "}
      {/* Muestra 'Cargando...' mientras se obtiene la broma */}
    </div>
  );
}
