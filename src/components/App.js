import React from 'react';
import Dog from './Dog';
import Header from './Header';

export default function App() {
  return (
    <>
      <Header />
      <Dog name="Marty" age={42} weight="14 stones" />
    </>
  );
}
