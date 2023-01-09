import { Formik, Form } from 'formik'
import { MySelect, MyTextInput } from '../components'
import formJson from '../data/custom-form.json'
import * as Yup from 'yup'

const initialValues: { [x: string]: any } = {}
const requiredFields: { [x: string]: any } = {}

for (const input of formJson) {
  initialValues[input.name] = input.value || ''
  if (!input.validations) continue

  let schema = Yup.string()
  for (const rule of input.validations) {
    if (rule.type === 'required') {
      schema = schema.required('Requerido')
    }
    if (rule.type === 'minLength') {
      schema = schema.min(
        (rule as any).value,
        `Debe tener minimo ${rule.value} caracteres`
      )
    }
    if (rule.type === 'email') {
      schema = schema.email(`Debe ser un email valido`)
    }
  }
  requiredFields[input.name] = schema
}
const validationSchema = Yup.object({ ...requiredFields })

export const DynamicFormPage = () => {
  return (
    <div>
      <h1>DynamicFormPage</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values)
        }}
        validationSchema={validationSchema}
      >
        {() => (
          <Form noValidate>
            {formJson.map(({ type, name, placeholder, label, options }) => {
              if (type === 'text' || type === 'password' || type === 'email') {
                return (
                  <MyTextInput
                    key={name}
                    type={type as any}
                    name={name}
                    label={label}
                    placeholder={placeholder}
                  />
                )
              } else if (type === 'select') {
                return (
                  <MySelect key={name} label={label} name={name}>
                    <option value=''>Select an option</option>
                    {options?.map(({ id, label }) => (
                      <option key={id} value={label}>
                        {label}
                      </option>
                    ))}
                  </MySelect>
                )
              }
              throw Error(`El type ${type}, no esta soportado`)
            })}
            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
