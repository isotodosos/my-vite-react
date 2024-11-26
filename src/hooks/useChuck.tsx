export default function useChuck() {
  const getRandomChuck = async () => {
    try {
      const response = await fetch("https://api.chucknorris.io/jokes/random");
      const data = await response.json();
      return data.value;
    } catch (error) {
      console.error("Error fetching joke:", error);
      throw error; // Puedes lanzar el error o manejarlo de alguna otra forma
    }
  };

  return { getRandomChuck };
}
