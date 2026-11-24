import type { ReactNode } from 'react'

type ContainerSize = 'sm' | 'md' | 'lg' | 'xl'

interface ContainerProps {
  children: ReactNode
  className?: string
  size?: ContainerSize
}

const sizeClasses: Record<ContainerSize, string> = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl',
  lg: 'max-w-6xl',
  xl: 'max-w-7xl',
}

export default function Container({ children, className = '', size = 'md' }: ContainerProps) {
  return (
    <div className={`mx-auto w-full ${sizeClasses[size]} px-5 sm:px-8 ${className}`}>{children}</div>
  )
}
