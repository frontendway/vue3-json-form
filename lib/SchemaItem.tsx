import { defineComponent } from "vue"
import { SchemaTypes, FieldPropsDefine } from './types'
import StringField from "./fields/StringField.vue"
import NumberField from "./fields/NumberField.vue"
import ObjectField from './fields/ObjectField'
import ArrayField from './fields/ArrayField'

export default defineComponent({
  name: 'SchemaItem',
  
  props: FieldPropsDefine,

  setup (props) {
    return () => {
      const { schema: { type } } = props
      let Component: any = null

      switch (type) {
        case SchemaTypes.STRING:
          Component = StringField
          break
        case SchemaTypes.NUMBER:
          Component = NumberField
          break
        case SchemaTypes.OBJECT:
          Component = ObjectField
          break
        case SchemaTypes.ARRAY:
          Component = ArrayField
          break
        default:
          console.warn(`${type} is not supported`)
      }

      return <Component { ...props } />
    }
  }
})
