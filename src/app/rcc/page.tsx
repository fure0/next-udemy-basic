'use client'
import {useState} from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ClientComponent(){
  const [count, setCount] = useState(0);
  const router = useRouter();
  console.log('Client')
  return (
    <div>
    Client
    <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    <div><Link href="/about">About</Link></div>
      <div><button onClick={() => router.push('/about')}>About</button></div>
    </div>
  )
}