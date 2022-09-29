type Props = {
  size?: number
}

export function TestToolIcon({ size = 24 }: Props) {
  return (
    <svg
      version="1.1"
      id="icon"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width={size}
      height={size}
      fill="currentColor"
      viewBox="0 0 32 32"
    >
      <polygon points="23,9.2 20.4,6.6 19,8 23,12 30,5 28.6,3.6 " />
      <polygon points="12,5.4 10.6,4 8,6.6 5.4,4 4,5.4 6.6,8 4,10.6 5.4,12 8,9.4 10.6,12 12,10.6 9.4,8 " />
      <polygon points="12,21.4 10.6,20 8,22.6 5.4,20 4,21.4 6.6,24 4,26.6 5.4,28 8,25.4 10.6,28 12,26.6 9.4,24 " />
      <polygon points="17,15 17,2 15,2 15,15 2,15 2,17 15,17 15,30 17,30 17,17 30,17 30,15 " />
      <rect fill="none" width="32" height="32" />
    </svg>
  )
}
