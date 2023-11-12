import './recipeCard.scss'

export default function RecipeCard({ img, title, readyInMinutes, dishType, instructions }){
    return (
        <div className='recipe-card-container'>
            <img src={img} alt="Recipe Image" className='card-image'/>
            <div className='recipe-info'>
                <div className='card-title-prep-container'>
                    <h1 className='card-title'>{title}</h1>
                    <div>
                        <h1 className='card-prep-time'>{readyInMinutes}</h1>
                        <span>Minuti</span>
                    </div>
                </div>
                <ul className='card-dish-type'>
                    {dishType.map((type, index) => (
                        <li key={index}>{type}</li>
                    ))}
                </ul>
                <div className='card-instructions' dangerouslySetInnerHTML={{ __html: instructions }} />
            </div>
        </div>
    )
}