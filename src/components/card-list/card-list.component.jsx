import './card-list.styles.css';
import Card from '../card/card.component';

const CardList = ({monsters}) =>(
    <div className={`card-list ${monsters.className}`}>
      {monsters.map( (monster) => {
        return (
          <Card
            key={monster.id}
            name={monster.name}
            id={monster.id}
            email={monster.email}/>
          )
        })
      }
    </div>
    )

export default CardList;
