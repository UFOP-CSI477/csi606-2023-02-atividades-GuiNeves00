import React from 'react'
import Link from 'next/link'

export default function NavbBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900 text-gray-300 p-4 flex justify-between items-center">
      <div>
        <Link href="/" legacyBehavior>
          <a className="text-xl font-bold">Gestão RH</a>
        </Link>
      </div>
      <div className="flex space-x-4">
        <Link href="/cadastro" legacyBehavior>
          <a className="hover:text-gray-400">Cadastro de Colaboradores</a>
        </Link>
        <Link href="/parametrizacao" legacyBehavior>
          <a className="hover:text-gray-400">Parametrização</a>
        </Link>
      </div>
    </nav>
  )
}
