import { defineComponent } from "vue"
import { FieldPropsDefine } from '../types'
import { useContext } from '../context'

export default defineComponent({
  name: 'ObjectField',
  
  props: FieldPropsDefine,

  setup (props) {
    const context = useContext()

    const ObjectFieldChange = (key: string, val: any) => {
      const value: any = typeof props.value === 'object' ? props.value :  {}
      if (!value) return

      if (val === undefined) {
        delete value[key]
      } else {
        value[key] = val
      }

      props.onChange(value)
    }

    return () => {
      const { SchemaItem } = context
      const { schema, value } = props
      const properties = schema.properties || {}
      const currentValue: any = value || {}

      return Object.keys(properties).map((key, index) => {
        return <SchemaItem 
          schema={properties[key]} 
          value={currentValue[key]} 
          key={index}
          onChange={(v: any) => ObjectFieldChange(key, v)}
        />
      })
    }
  }
})
