import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import NumberItem from '@/components/NumberItem'

describe('NumberItem', () => {
  it('renders properly', () => {
    const wrapper = mount(NumberItem, { props: { id: 1, isVisible: false, number: 10 } })
    expect(wrapper.text()).toContain('10')
  })
})
