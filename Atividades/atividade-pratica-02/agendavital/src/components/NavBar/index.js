import React from 'react'
import Link from 'next/link'

export default function NavbBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-red-900 text-gray-300 p-4 flex justify-between items-center">
      <div>
        <Link href="/" legacyBehavior>
          <a className="text-xl font-bold">Agenda Vital</a>
        </Link>
      </div>
      <div className="flex space-x-4">
        <Link href="/doadores" legacyBehavior>
          <a className="hover:text-gray-400">Doadores</a>
        </Link>
        <Link href="/locaiscoleta" legacyBehavior>
          <a className="hover:text-gray-400">Locais de coleta</a>
        </Link>
        <Link href="/parametrizacao" legacyBehavior>
          <a className="hover:text-gray-400">Parametrização</a>
        </Link>
      </div>
    </nav>
  )
}
