import { useState } from 'react';
import { instrumentsArr } from './instruments';

export default function MusicFilterTwo() {
    const [category, setCategory] = useState("all");
  
    const filteredList

  return (
     <main>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="all">All</option>
            <option value="woodwinds">Woodwinds</option>
            <option value="brass">Brass</option>
            <option value="percussion">Percussion</option>
        </select>
     </main>
  )
}
