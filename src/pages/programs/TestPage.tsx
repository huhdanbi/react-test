import React from 'react';

interface TestPageConfig {
  title: string,
  number: number,
}

export default function TestPage( {title, number}: TestPageConfig ){

  return (
    <div>
      title: {title}
      number: {number}
    </div>
  )
}

