import React from 'react';

const HelloWorld = () => {
  
  function sayHello() {
    let a=10;
    alert(a);
  }
  
  return (
    <button onClick={sayHello}>Click me!</button>
  );
};

export default HelloWorld;