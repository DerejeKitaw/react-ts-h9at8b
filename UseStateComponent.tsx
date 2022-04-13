import React, { useState } from 'react';
import { CharactersCollection } from './CharactersCollection';
import { Sorter } from './Sorter';

const UseStateComponent = () => {
  const [arr, arrSet] = useState<number[]>([]);
  const [name, nameSet] = useState('asbw');
  const charactersCollection = new CharactersCollection(name);
  const sorter = new Sorter(charactersCollection);
  sorter.sort();
  console.log(charactersCollection.data);
  return (
    <div>
      <div>
        <button onClick={() => arrSet([...arr, arr.length + 1])}>
          Add to array
        </button>
        {JSON.stringify(arr)}
      </div>
      <div>
        <button onClick={() => nameSet(charactersCollection.data)}>
          Set Name
        </button>
        {JSON.stringify(name)}
      </div>
    </div>
  );
};
export default UseStateComponent;
