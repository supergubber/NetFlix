import { useState } from 'react'
import { Link } from 'react-router-dom'

const SignupPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  // const [data, setData] = useState({
  //   username: '',
  //   email: '',
  //   password: '',
  // })
  // const [multiData, setMultiData] = useState([])
  // const getData = (e) => {
  //   setData({ ...data, [e.target.name]: e.target.value })
  //   // let value = e.target.value
  //   // let name = e.target.name

  //   // setData((prev) => {
  //   //   return {
  //   //     ...prev,
  //   //     [e.target.value]: e.target.name,
  //   //   }
  //   // })

  //   // console.log(name, value)
  // }
  const handleChange = (e) => {
    e.preventDefault()
    console.log(email, password, username)
  }
  return (
    <div className='w-full h-screen hero-bg'>
      <header className='flex items-center justify-between max-w-6xl p-4 mx-auto'>
        <Link to={'/'}>
          <img src='/netflix-logo.png' alt='logo' className='w-52' />
        </Link>
      </header>
      <div className='flex items-center justify-center mx-3 mt-20'>
        <div className='w-full max-w-md p-8 space-y-6 rounded-lg shadow-md bg-black/60'>
          <h1 className='mb-4 text-2xl font-bold text-center text-white'>
            Sign up
          </h1>
          <form className='space-y-4' onSubmit={handleChange}>
            <div>
              <label
                htmlFor='email'
                className='block text-sm text-gray-300 fond-medium'
              >
                Email
              </label>
              <input
                type='email'
                className='w-full px-3 py-2 mt-1 text-white bg-transparent border-gray-700 rounded-md focus:outline-none focus:ring'
                placeholder='you@gmail.com'
                id='email'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor='username'
                className='block text-sm text-gray-300 fond-medium'
              >
                Username
              </label>
              <input
                type='text'
                className='w-full px-3 py-2 mt-1 text-white bg-transparent border-gray-700 rounded-md focus:outline-none focus:ring'
                placeholder='jhondeo'
                id='username'
                name='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor='password'
                className='block text-sm text-gray-300 fond-medium'
              >
                Password
              </label>
              <input
                type='password'
                className='w-full px-3 py-2 mt-1 text-white bg-transparent border-gray-700 rounded-md focus:outline-none focus:ring'
                placeholder='**********'
                id='password'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className='w-full py-2 font-semibold text-white bg-red-600 rounded-md hover:bg-bg-red-700'
              type='submit'
            >
              Sign up
            </button>
          </form>
          <div className='text-center text-gray-400'>
            Already a member?{' '}
            <Link to={'/login'} className='text-red-500 hover:underline'>
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupPage
