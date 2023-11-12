import RecipeCard from './components/Recipe Card/recipeCard'

import './styles/App.css'
import './components/Recipe Card/navbar.scss'

import useFetch from './hooks/useFetch'

export default function App(){
  const { data, isLoading, error, refetch } = useFetch("random")

  if (isLoading) return <h2>Sto caricando...</h2>;
  if (error) return <h2>Errore: {error}</h2>;
  if (!data || !data.recipes) return <h2>Nessuna ricetta trovata</h2>;

  const { image, title, readyInMinutes, dishTypes, instructions } = data.recipes[0]

  const handleClick = () => {
    refetch()
  }

  return (
      <>
        <RecipeCard 
          img={image ? image : null}
          title={title}
          readyInMinutes={readyInMinutes}
          dishType={dishTypes ? dishTypes : "Con tutto"}
          instructions={instructions ? instructions : "Nessuna istruzione"}
        />
        <footer className='navbar'>
            <button onClick={handleClick}>Nuova ricetta ⟳</button>
        </footer>
      </>
  )
}
