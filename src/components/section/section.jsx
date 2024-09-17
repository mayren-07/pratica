import Card from '../card/card';
import style from './section.css'

function Section({title, color}) {

    return (
      <div className="section">
        <h1>{title}</h1>
        <p className={color}>{color}</p>
        <div className='cards'>
            <Card color={{color}} title='free' contentOne='PNG templates' contentOneContains='1' contentTwo='PNG templates' contentTwoContains='0' contentTree='PNG templates' contentTreeContains='0' contentFour='PNG templates' contentFourContains='1' price='0'/>
            <Card color={{color}} title='free' contentOne='PNG templates' contentOneContains='1' contentTwo='PNG templates' contentTwoContains='0' contentTree='PNG templates' contentTreeContains='0' contentFour='PNG templates' contentFourContains='1' price='0'/>
            <Card color={{color}} title='free' contentOne='PNG templates' contentOneContains='1' contentTwo='PNG templates' contentTwoContains='0' contentTree='PNG templates' contentTreeContains='0' contentFour='PNG templates' contentFourContains='1' price='0'/>
        </div>
      </div>
    );
  }
  
  export default Section;