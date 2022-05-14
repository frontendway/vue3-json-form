import { defineComponent, reactive, Ref, ref, watchEffect } from "vue"
import { createUseStyles } from "vue-jss"
import MonacoEditor from "./components/MonacoEditor"
import demos from "./demos"
// import SchemaForm from './lib/index'

type Schema = any
type UISchema = any

const toJson = (params: any) => {
  return JSON.stringify(params, null, 2) // 保留格式的json转换
}

const useStyles = createUseStyles({
  menu: {
    paddingBottom: 10
  },
  menuButton: {
    padding: '10px 20px',
    color: '#fff',
    background: '#ccc',
    margin: '0px 10px',
    border: 'none',
    borderRadius: 4,
    cursor: 'pointer'
  },
  outer: {
    overflow: 'hidden'
  },
  content: {
    height: 'calc(100% - 20px)',
    float: 'left',
    width: '60%'
  },
  codePanel: {
    height: 400
  },
  twoPannel: {
    display: 'flex',
    marginTop: 10
  },
  pannel1: {
    height: 400,
    minWidth: '50%'
  },
  pannel2: {
    height: 400,
    minWidth: '50%'
  },
  form: {
    width: '40%',
    float: 'left'
  }
})

export default defineComponent({
  setup() {
    const selectedRef: Ref<number> = ref(0)

    const demo: {
      schema: Schema | null
      data: any
      uiSchema: UISchema | null
      schemaCode: string
      dataCode: string
      uiSchemaCode: string
    } = reactive({
      schema: null,
      data: {},
      uiSchema: {},
      schemaCode: '',
      dataCode: '',
      uiSchemaCode: ''
    })

    watchEffect(() => {
      const index = selectedRef.value
      const d = demos[index]
      demo.schema = d.schema
      demo.data = d.default
      demo.uiSchema = d.uiSchema
      demo.schemaCode = toJson(d.schema)
      demo.dataCode = toJson(d.default)
      demo.uiSchemaCode = toJson(d.uiSchema)
    })

    // const methodRef: Ref<any> = ref()

    // const handleChange = (v: any) => {
    //   demo.data = v
    //   demo.dataCode = toJson(v)
    // }

    const handleCodeChange = (
      filed: 'schema' | 'data' | 'uiSchema',
      value: string
    ) => {
      try {
        const json = JSON.parse(value)
        demo[filed] = json
        ;(demo as any)[`${filed}Code`] = value
      } catch (error) {
        // do something
      }
    }

    const schemaChange = (v: string) => handleCodeChange('schema', v)
    const dataChange = (v: string) => handleCodeChange('data', v)
    const uiSchemaChange = (v: string) => handleCodeChange('uiSchema', v)

    const classesRef = useStyles()
    return () => {
      const classes = classesRef.value
      // const selected = selectedRef.value

      return (
        <div>
          <div class={ classes.menu }>
            <h3>Vue3 Form</h3>
            <div>
              {demos.map((demo, idx) => {
                return (
                  <button 
                    class={ classes.menuButton } 
                    onClick={ () => selectedRef.value = idx }
                  >
                    { demo.name }
                  </button>
                )
              })}
            </div>
          </div>
          <div class={ classes.outer }>
            <div class={ classes.content }>
              <MonacoEditor 
                code={ demo.schemaCode } 
                class={ classes.codePanel } 
                onChange={ schemaChange }
                title='schema'
              />
              <div class={ classes.twoPannel }>
                <MonacoEditor 
                  code={ demo.uiSchemaCode } 
                  class={ classes.pannel1 } 
                  onChange={ uiSchemaChange }
                  title='uiSchema'
                />
                <MonacoEditor 
                  code={ demo.dataCode } 
                  class={ classes.pannel2 } 
                  onChange={ dataChange }
                  title='value'
                />
              </div>
            </div>
            <div class={ classes.form }>
              {/* <SchemaForm /> */}
            </div>
          </div>
        </div>
      )
    }
  }
})
