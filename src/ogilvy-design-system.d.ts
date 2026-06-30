declare module 'ogilvy-design-system' {
  import { FC, ReactNode, ComponentProps } from 'react'

  export const Button: FC<any>
  export const Navbar: FC<any>
  export const NavItem: FC<any>
  export const Media: FC<any>
  export const Card: FC<any> & {
    Media: FC<any>
    Body: FC<any>
    Title: FC<any>
    Text: FC<any>
    Subtitle: FC<any>
    Header: FC<any>
    Icon: FC<any>
    Logo: FC<any>
    Stat: FC<any>
    Rating: FC<any>
    Person: FC<any>
    Alert: FC<any>
    Labels: FC<any>
    Label: FC<any>
    Actions: FC<any>
    Link: FC<any>
  }
}
