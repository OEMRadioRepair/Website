import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'

export function Footer() {
  return (
    <footer className="bg-blue-50">
      <Container>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">
          </div>
          <p className="mt-6 text-xs sm:text-sm text-blue-900 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} OEM Radio Repair. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
