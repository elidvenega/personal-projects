import { useState } from 'react';
import { sculptureList } from './data';

export default function GalleryPractice() {
  const [index, setIndex] = useState(0);
  const [isShown, setIsShown] = useState(false);

  const currentIndex = index < sculptureList.length - 1;
  const handleIndex = () => {
    if(currentIndex) {
      setIndex(index + 1)
    } else {
      setIndex(0)
    }
    
  }

  const handleShow = () => setIsShown(!isShown);

  const artWorks = sculptureList[index]
  return (
    <div>
      <button onClick={handleIndex}>Next</button>
      <h2>{artWorks.name } by {artWorks.artist}</h2>
      <h3>({index + 1} of {sculptureList.length})</h3>
        <img src={artWorks.url} alt={artWorks.alt} />
       <div>
         <button>Show Details</button>
       </div>
    </div>
  )
}
