import { useState } from 'react'
import { Link } from 'react-router-dom'

const AuthScreen = () => {
  const [email, setEmail] = useState('')
  const handleChange = (e) => {}
  return (
    <div className='relative hero-bg'>
      {/* Navbar */}
      <header className='flex items-center justify-between max-w-6xl p-4 pb-10 mx-auto'>
        <img
          src='/netflix-logo.png'
          alt='netflix-logo'
          className='w-32 md:w-52'
        />
        <Link to={'/login'} className='px-2 py-1 text-white bg-red-600 rounded'>
          Sign In
        </Link>
      </header>
      {/* Hero Section */}
      <div className='flex flex-col items-center justify-center max-w-6xl py-40 mx-auto text-center text-white'>
        <h1 className='mb-4 text-4xl font-bold md:text-6xl'>
          Unlimited movies, TV shows, and more
        </h1>
        <p className='mb-4 text-lg '>Watch anywhere. Cancel anytime.</p>
        <p className='mb-4'>
          Ready to watch? Enter yout email to create or restart your membership.
        </p>
        <form
          className='flex flex-col w-1/2 gap-4 md:flex-row'
          onSubmit={handleChange}
        >
          <input
            type='email'
            placeholder='Email address'
            className='flex-1 p-2 border border-gray-700 rounded bg-black/80'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className='flex items-center justify-center px-2 py-1 text-xl bg-red-600 rounded lg:text-2xl lg:px-6 md:py-2 '>
            Get Started
          </button>
        </form>
      </div>
      {/* separator */}
      <div className='h-2 w-full bg-[#232332]' />
    </div>
  )
}

export default AuthScreen
