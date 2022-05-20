import { inject } from 'vue'

export const SchemaFormKey = Symbol()

type contextType = { SchemaItem: any } | undefined

export function useContext (): { SchemaItem: any } {
  const context: contextType = inject(SchemaFormKey)
  if (!context) throw Error('SchemaForm should be used')
  
  return context
}
