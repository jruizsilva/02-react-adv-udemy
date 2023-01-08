import { useForm } from '../hooks/useForm'

import '../styles/styles.css'

export const RegisterPage = () => {
  const {
    onChange,
    onSubmit,
    name,
    email,
    password1,
    password2,
    resetForm,
    isValidEmail
  } = useForm({
    name: '',
    email: '',
    password1: '',
    password2: ''
  })

  return (
    <div>
      <h1>RegisterPage</h1>

      <form noValidate onSubmit={onSubmit}>
        <input
          type='text'
          name='name'
          placeholder='Name'
          value={name}
          onChange={onChange}
          className={`${name.trim().length <= 0 && 'has-error'}`}
        />
        {name.trim().length <= 0 && <span>Campo obligatorio</span>}
        <input
          type='email'
          name='email'
          placeholder='Email'
          value={email}
          onChange={onChange}
          className={`${!isValidEmail(email) && 'has-error'}`}
        />
        {!isValidEmail(email) && <span>Email no valido</span>}
        <input
          type='password'
          name='password1'
          placeholder='Password'
          value={password1}
          onChange={onChange}
        />
        {password1.trim().length <= 0 && <span>Campo obligatorio</span>}
        {password1.trim().length < 6 && password1.trim().length > 0 && (
          <span>Debe tener mas de 6 letras</span>
        )}

        <input
          type='password'
          name='password2'
          placeholder='Repeat Password'
          value={password2}
          onChange={onChange}
        />
        {password2.trim().length <= 0 && <span>Campo obligatorio</span>}
        {password2.trim().length > 0 && password1 !== password2 && (
          <span>Las contraseñas deben se iguales</span>
        )}

        <button type='submit'>Create</button>
        <button type='button' onClick={resetForm}>
          Reset
        </button>
      </form>
    </div>
  )
}
