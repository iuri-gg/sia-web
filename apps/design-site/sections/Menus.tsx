import { Button, Flex, Section } from '@siafoundation/design-system'
import { ExampleMenu } from '../components/ExampleMenu'
import { SectionHeading } from '../components/SectionHeading'
import { SubsectionHeading } from '../components/SubsectionHeading'

export function Menus() {
  return (
    <>
      <Section size="1">
        <SectionHeading>Menus</SectionHeading>
      </Section>
      <Section>
        <SubsectionHeading>DropdownMenu</SubsectionHeading>
        <Flex direction="row" gap="1">
          <ExampleMenu>
            <Button>Auto</Button>
          </ExampleMenu>
          <ExampleMenu align="start">
            <Button>Start</Button>
          </ExampleMenu>
          <ExampleMenu align="center">
            <Button>Center</Button>
          </ExampleMenu>
          <ExampleMenu align="end">
            <Button>End</Button>
          </ExampleMenu>
        </Flex>
      </Section>
    </>
  )
}
