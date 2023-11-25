import React, { useState } from 'react';
import ReactDOM from 'react-dom';


export function Example() {



    const [password, setpassword] = useState('');
  
    return (
      <div>
        <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} />
        <p>{password.length < 4 ? "Password must contain at least 4 characters" : ""}</p>
      </div>
    );
  }