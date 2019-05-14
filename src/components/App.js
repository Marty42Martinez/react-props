import React from 'react';
import Color from './Color';

export default function App() {
  return (
    <>
      <Color name="dark orchid" hex="#9932CC" rgb={{ red: 153, green: 50, blue: 204 }} />
      <Color hex="#7FFF00" rgb={{ red: 127, green: 255, blue: 0 }} />
    </>
  );
}
