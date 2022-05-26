import {
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Panel,
  Text,
} from '@siafoundation/design-system'
import { useNavigate } from 'react-router-dom'
import { AuthedLayout } from '../components/AuthedLayout'
import { routes } from '../config/routes'
import { useDialog } from '../contexts/dialog'
import { fakeWallets } from '../lib/fakeWallets'

export function WalletIndex() {
  const { openDialog } = useDialog()
  const navigate = useNavigate()
  return (
    <AuthedLayout
      title="Wallets"
      actions={
        <Button
          size="2"
          variant="accent"
          onClick={() => openDialog('addWallet')}
        >
          Add wallet
        </Button>
      }
    >
      <Container size="4">
        <Flex direction="column" gap="4" css={{ padding: '$5 0' }}>
          <Grid columns="2" gap="2">
            {fakeWallets.map((wallet) => (
              <Panel
                css={{ padding: '$3', height: '200px', cursor: 'pointer' }}
                onClick={() =>
                  navigate(routes.wallet.view.replace(':walletId', wallet.id))
                }
              >
                <Flex direction="column">
                  <Heading>{wallet.name}</Heading>
                  <Text>{wallet.type}</Text>
                  <Text>
                    {wallet.sc}
                    {wallet.sf && ` / ${wallet.sf}`}
                  </Text>
                </Flex>
              </Panel>
            ))}
          </Grid>
        </Flex>
      </Container>
    </AuthedLayout>
  )
}
