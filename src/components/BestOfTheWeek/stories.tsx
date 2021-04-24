import { Story, Meta } from '@storybook/react/types-6-0'

import BestOfTheWeek from '.'

export default {
  title: 'BestOfTheWeek',
  component: BestOfTheWeek
} as Meta

export const Basic: Story = (args) => <BestOfTheWeek {...args} />
