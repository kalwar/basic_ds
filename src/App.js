import React, { useMemo, useState, useRef } from 'react';
import { useStackState, useQueueState } from 'rooks';
import Home from './components/Home/Home';
import './App.css';

function App() {
  const [word, setWord] = useState('');

  const isPalindrome = useMemo(() => {
    return word === word.split('').reverse().join('');
  }, [word]);

  const numberToPushRefStack = useRef(3);
  const [, { push, pop }, listInReverse] = useStackState([1, 2, 3]);
  function addToStack() {
    numberToPushRefStack.current = numberToPushRefStack.current + 1;
    push(numberToPushRefStack.current);
  }

  const numberToPushRefQueue = useRef(3);
  const [list, { enqueue, dequeue, peek, length }] = useQueueState([1, 2, 3]);
  function addToQueue() {
    numberToPushRefQueue.current = numberToPushRefQueue.current + 1;
    enqueue(numberToPushRefQueue.current);
  }

  return (
    <div className="App">
      <form>
        <div>
          <h1 className="container">Word to check</h1>
          <input value={word} onChange={(e) => setWord(e.target.value)} />
        </div>
      </form>
      <div>Is Palindrome:{isPalindrome ? 'Yes' : 'No'}</div>
      <Home />
      <div>
        <h1 style={{ color: 'blue', margin: '20px' }}>Stack</h1>
        <div
          style={{
            display: 'block',
            fontSize: '20px',
            margin: '20px',
          }}
        >
          {listInReverse.map((item) => {
            return (
              <div
                style={{
                  width: '30px',
                  height: '30px',
                  background: '#a3fc9d',
                  borderRadius: '5px',
                  margin: '10px',
                  textAlign: 'center',
                }}
                key={item}
              >
                {item}
              </div>
            );
          })}
        </div>
        <button
          style={{
            margin: '20px',
            background: '#f8e1ee',
            width: '200px',
            borderRadius: '5px',
            padding: '10px',
          }}
          onClick={addToStack}
        >
          Push
        </button>
        <button
          style={{
            margin: '20px',
            background: '#bbfdd8',
            width: '200px',
            borderRadius: '5px',
            padding: '10px',
          }}
          onClick={pop}
          warning
        >
          Pop
        </button>
      </div>
      <div>
        <h1 style={{ color: 'blue', margin: '20px' }}>Queue</h1>
        <div
          style={{
            display: 'flex',
            flexDirection: 'horizontal',
            width: '400px',
            height: '60px',
            fontSize: '20px',
            margin: '20px',
            borderTop: '2px solid green',
            borderBottom: '2px solid green',
          }}
        >
          {list.map((item) => {
            return (
              <div
                style={{
                  width: '30px',
                  height: '30px',
                  background: '#a3fc9d',
                  borderRadius: '5px',
                  margin: '10px',
                  textAlign: 'center',
                }}
                key={item}
              >
                {item}
              </div>
            );
          })}
        </div>
        <button
          style={{
            margin: '20px',
            background: '#f69dfc',
            width: '200px',
            borderRadius: '5px',
          }}
          onClick={addToQueue}
        >
          enqueue
        </button>
        <button
          style={{
            margin: '20px',
            background: '#f69dfc',
            width: '200px',
            borderRadius: '5px',
          }}
          onClick={dequeue}
          warning
        >
          dequeue
        </button>
        <p
          style={{
            color: '#e84917',
            fontSize: '20px',
            margin: '20px',
          }}
        >
          Front Element : {peek()}
        </p>

        <p
          style={{
            color: '#175ce8',
            fontSize: '20px',
            margin: '20px',
          }}
        >
          Length of Queue : {length}
        </p>
      </div>
    </div>
  );
}

export default App;
