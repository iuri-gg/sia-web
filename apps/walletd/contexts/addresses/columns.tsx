import {
  Text,
  TableColumn,
  ValueCopyable,
  Tooltip,
  Paragraph,
  Button,
} from '@siafoundation/design-system'
import { Draggable16 } from '@siafoundation/react-icons'
import { AddressContextMenu } from '../../components/WalletAddresses/AddressContextMenu'
import { AddressData, CellContext, TableColumnId } from './types'

type AddressesTableColumn = TableColumn<
  TableColumnId,
  AddressData,
  CellContext
> & {
  fixed?: boolean
  category?: string
}

export const columns: AddressesTableColumn[] = [
  {
    id: 'actions',
    label: '',
    fixed: true,
    cellClassName: 'w-[50px] !pl-2 !pr-4 [&+*]:!pl-0',
    render: ({ data }) => (
      <AddressContextMenu
        trigger={
          <Button variant="ghost" icon="hover">
            <Draggable16 />
          </Button>
        }
        contentProps={{ align: 'start' }}
        address={data}
      />
    ),
  },
  {
    id: 'address',
    label: 'address',
    category: 'general',
    fixed: true,
    render: ({ data: { address, description }, context }) => {
      return (
        <div className="flex flex-col gap-2">
          <ValueCopyable
            maxLength={40}
            value={address}
            type="address"
            siascanUrl={context.siascanUrl}
          />
          {description && (
            <Tooltip
              content={
                <pre>
                  <Paragraph size="12" className="w-full whitespace-pre-wrap">
                    {description}
                  </Paragraph>
                </pre>
              }
            >
              <Paragraph size="12">{description.split('\n')[0]}</Paragraph>
            </Tooltip>
          )}
        </div>
      )
    },
  },
  {
    id: 'index',
    label: 'index',
    category: 'general',
    render: ({ data: { index } }) => {
      if (index === undefined) {
        return null
      }
      return (
        <div className="flex flex-col gap-2">
          <Text>{index.toLocaleString()}</Text>
        </div>
      )
    },
  },
]
