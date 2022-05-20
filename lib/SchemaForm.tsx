import { defineComponent, provide } from "vue"
import SchemaItem from './SchemaItem'
import { FieldPropsDefine } from './types'
import { SchemaFormKey } from './context'

export default defineComponent({
  name: 'SchemaForm',

  props: FieldPropsDefine,

  setup (props) {
    const handleChange = (value: any) => {
      props.onChange(value)
    }

    const context: any = {
      SchemaItem
    }
    provide(SchemaFormKey, context)

    return () => {
      const { schema, value } = props

      return <SchemaItem schema={schema} value={value} onChange={handleChange} />
    }
  }
})
