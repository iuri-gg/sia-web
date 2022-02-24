import React from 'react'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '../primitives/DropdownMenu'
import { ThemeMenu } from './ThemeMenu'
import { IconButton } from '../primitives/IconButton'

type Props = React.ComponentProps<typeof IconButton> & {
  trigger?: React.ReactNode
  children?: React.ReactNode
}

export function UserDropdownMenu({ trigger, children, ...props }: Props) {
  const triggerEl = trigger || (
    <IconButton size="1" {...props} css={{ transform: 'scale(1.5)' }}>
      <HamburgerMenuIcon />
    </IconButton>
  )

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{triggerEl}</DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {children}
        <ThemeMenu />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}