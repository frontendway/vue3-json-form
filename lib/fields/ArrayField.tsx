import { defineComponent } from "vue"
import { FieldPropsDefine, Schema } from '../types'
import { useContext } from '../context'

/**
 * items: { type: string }
 * items: [
 *   { type: string }
 *   { type: number }
 * ]
 * items: { type: string, enum: ['1', '2'] }
 */
export default defineComponent({
  name: 'ArrayField',
  
  props: FieldPropsDefine,

  setup (props) {
    const context = useContext()
    const SchemaItem = context.SchemaItem

    const arrayItemChange = (v: any, index: number) => {
      const { value } = props
      const arr = Array.isArray(value) ? value : []
      arr[index] = v
      props.onChange(arr)
    }

    return () => {
      const { schema, value } = props
      const isSelect = schema.items && (schema.items as any).enum
      const isMultiType = Array.isArray(schema.items)

      if (isMultiType) {
        const items: Schema[] = schema.items as any
        const arr = Array.isArray(value) ? value : []
        return items.map((s, index) => {
          return <SchemaItem 
            schema={s} 
            key={index} 
            value={arr[index]} 
            onChange={(v: any) => arrayItemChange(v, index)} 
          />
        })
      } else if (!isSelect) {
        const arr = Array.isArray(value) ? value : []
        return arr.map((item, index) => {
          return <SchemaItem 
            schema={schema.items as Schema} 
            key={index} 
            value={item} 
            onChange={(v: any) => arrayItemChange(v, index)} 
          />
        })
      }

    }
  }
})
