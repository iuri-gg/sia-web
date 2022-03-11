import { Box, Heading, NextLink, Link20 } from '@siafoundation/design-system'

type Props = {
  id?: string
  children: string
}

export function SubsectionHeading({ id, children }: Props) {
  const cId = id || encodeURI(children.toLowerCase())
  return (
    <Box
      css={{
        pb: '$3',
      }}
    >
      <NextLink
        href={`#${cId}`}
        id={cId}
        css={{
          color: '$brandGray11',
          position: 'relative',
          '&:hover, &:hover > *': {
            color: '$brandGray12',
          },
        }}
      >
        <Box
          css={{
            transition: 'color 0.1s linear',
            position: 'absolute',
            top: '-8px',
            left: '-22px',
            color: '$brandGray7',
          }}
        >
          <Link20 />
        </Box>
        <Heading size={'2'}>{children}</Heading>
      </NextLink>
    </Box>
  )
}
