import { useState } from 'react';
import { sculptureList } from './data';

export default function GalleryPractice() {
  const [index, setIndex] = useState(0);
  const [isShown, setIsShown] = useState(false);

  const currentIndex = index < sculptureList.length - 1;
  const handleIndex = () => {
    
  }

  const handleShow = () => setIsShown(!isShown);

  const art = sculptureList[currentIndex]
  return (
    <div>

    </div>
  )
}
