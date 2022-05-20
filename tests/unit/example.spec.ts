import SchemaForm, { NumberField } from '../../lib/index'
import { mount } from '@vue/test-utils'

describe("SchemaForm", () => {
  it("should render number field", () => {
    let value = ''
    const wrapper = mount(SchemaForm, {
      props: {
        schema: { type: 'number' },
        value,
        onChange: (v: any) => { value = v }
      }
    })

    const numberField = wrapper.findComponent(NumberField)
    expect(numberField.exists()).toBeTruthy()
  })
})
