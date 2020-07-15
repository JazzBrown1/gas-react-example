import React, { useState, useEffect } from 'react';
import { client } from 'gas-react';

function HelloWorld() {
  const [val, setVal] = useState('Waiting');
  useEffect(() => {
    const makeCall = async () => {
      try {
        const { body } = await client.call('helloWorld');
        setVal(body);
      } catch (err) {
        console.error(err);
        setVal('Error');
      }
    };
    makeCall();
  }, []);
  return (
    <div className="hello-world">{val}</div>
  );
}

export default HelloWorld;
