import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Test for different unicode characters in links for Next.js</h1>
      <ol>
        <li>
          Latin, no space: <Link href={'/hello'}>link</Link> - works
        </li>
        <li>
          Latin, space: <Link href={'/hello world1'}>link</Link> - error 404
        </li>
        <li>
          Latin, %20: <Link href={'/hello world2'}>link</Link> - works
        </li>
        <hr/>
        <li>
          Latin, unicode symbol: <Link href={'/hé1'}>link</Link> - error 404
        </li>
        <li>
          Latin, encoded symbol: <Link href={'/hé2'}>link</Link> - works
        </li>
        <hr/>
        <li>
          Cyrillic, plain text: <Link href={'/привет1'}>link</Link> - error 404
        </li>
        <li>
          Cyrillic, encoded name: <Link href={'/привет2'}>link</Link> - works
        </li>
        <hr/>
        <li>
          Chinese, plain text: <Link href={'/嘿1'}>link</Link> - error 404
        </li>
        <li>
          Chinese, encoded name: <Link href={'/嘿2'}>link</Link> - works
        </li>
      </ol>
      <p>General rule: <br/>
        All names in folder structure <strong>must</strong> consist of basic latin characters and/or numbers. <br/>
        If path name requires other characters, they <strong>must</strong> be encoded in file name/path. <br/>
        Href attribute for link component <strong>may</strong> have them as plain text.</p>
    </div>
  )
}
