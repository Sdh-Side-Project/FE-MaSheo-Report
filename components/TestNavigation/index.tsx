import Link from 'next/link';
import React from 'react';
const paths = [
  { name: '가장 많이 주문한 주종', path: '/most-ordered-beverage' },
  { name: '가장 많이 주문한 전통주', path: '/most-ordered-drink' },
];

function TestNavigation() {
  return (
    <div className="flex flex-col">
      {paths.map(({ name, path }) => (
        <Link href={path}>{name}</Link>
      ))}
    </div>
  );
}

export default TestNavigation;
