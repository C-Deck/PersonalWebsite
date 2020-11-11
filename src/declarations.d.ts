// This file is used to hold ambient type declarations, as well as type shims
// for npm module without type declarations, and assets files.

// For example, to shim modules without declarations, use:
// declare module "package-without-declarations"

// And to shim assets, use (one file extension per `declare`):
// declare module "*.png"

declare module "*.svg" {
  const content: any
  export default content
}

declare module "*.png"

declare module "react-anchor-link-smooth-scroll" {
  interface Props {
    href: string
    offset?: function | number
    onClick?: (e: Event) => void
    [key: string]: any
  }

  export default class AnchorLink extends React.Component<Props> {}
}

declare module "*.json" {
  const value: any
  export default value
}
