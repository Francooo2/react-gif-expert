import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifGrid = ({ category, onDeletedCategory }) => {
  const { gifs, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      <button type="button" onClick={onDeletedCategory} >Eliminar</button>

      {
        isLoading && <h2>Cargando...</h2> 
      }

      <div className='card-grid'>
        {gifs.map((image) => (
          <GifItem key={image.id} { ...image } />
        ))}
      </div>
    </>
  )
}
