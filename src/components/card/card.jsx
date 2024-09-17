import xImg from '../../assets/x-icon.png'
import checkImg from '../../assets/check-icon.png'
import styles from './card.css'

function Card({color, title, contentOne, contentOneContains, contentTwo, contentTwoContains, contentTree, contentTreeContains, contentFour, contentFourContains, price}) {

    return (
      <div className="card">
        <h2>{title}</h2>
        <div className='content'>
            <img src={!!contentOneContains ? checkImg : xImg}/>
            <p className={!!contentOneContains ? 'txt-enable' : undefined}>{contentOne}</p>
        </div>
        <div className='content'>
            <img src={!!contentTwoContains ? xImg : xImg}/>
            <p className={!!contentOneContains ? 'txt-enable' : undefined}>{contentTwo}</p>
        </div>
        <div className='content'>
            <img src={!!contentTreeContains ? checkImg : xImg}/>
            <p className={!!contentOneContains ? 'txt-enable' : undefined}>{contentTree}</p>
        </div>
        <div className='content'>
            <img src={!!contentFourContains ? checkImg : xImg}/>
            <p className={!!contentOneContains ? 'txt-enable' : undefined}>{contentFour}</p>
        </div>

        <h3>${price}</h3>
        <h5>Per month</h5>
        <button className={color.color}>Try now</button>
      </div>
    );
  }
  
  export default Card;