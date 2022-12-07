import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';
import { getPrevAndNextUrl } from '../../constants';
const paths = [
  { name: '가장 많이 주문한 주종', path: '/most-ordered-beverage' },
  { name: '가장 많이 주문한 전통주', path: '/most-ordered-drink' },
];

interface types {
  prev?: string;
  next?: string;
}

function BottomNavigation() {
  const router = useRouter();
  const { prevUrl, nextUrl } = getPrevAndNextUrl(router.pathname);
  const prevColor = prevUrl ? '#ffba00' : '#b2b2b2';
  const nextColor = nextUrl ? '#ffba00' : '#b2b2b2';

  return (
    <div className="flex justify-around h-10 pt-2">
      <Link href={prevUrl}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke={prevColor}
          className="w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </Link>
      <Link href={nextUrl}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke={nextColor}
          className="w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </Link>
    </div>
  );
}

export default BottomNavigation;
