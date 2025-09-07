import React, { useContext, useState } from 'react'
import bg from "../assets/image2.jpg"
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { userDataContext } from '../context/UserContext';
import axios from "axios"

function SignUp() {
  const [showPassword, setShowPassword] = useState(false)
  const { serverUrl, setUserData } = useContext(userDataContext)
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [password, setPassword] = useState("")
  const [err, setErr] = useState("")
  const [focusedField, setFocusedField] = useState("")

  const handleSignUp = async (e) => {
    e.preventDefault()
    setErr("")
    setLoading(true)
    try {
      let result = await axios.post(`${serverUrl}/api/auth/signup`, {
        name, email, password
      }, { withCredentials: true })
      setUserData(result.data)
      setLoading(false)
      navigate("/customize")
    } catch (error) {
      console.log(error)
      setUserData(null)
      setLoading(false)
      setErr(error.response?.data?.message || "An error occurred")
    }
  }

  return (
    <div className='w-full h-[100vh] bg-cover bg-center bg-no-repeat flex justify-center items-center relative overflow-hidden' style={{ backgroundImage: `url(${bg})` }}>
      {/* Blurred Background Overlay */}
      <div className='absolute inset-0 backdrop-blur-md bg-black/20'></div>
      
      {/* Animated Grid Pattern */}
      <div className='absolute inset-0 opacity-20'>
        <div className='grid grid-cols-12 grid-rows-12 h-full w-full'>
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className='border border-cyan-400/30 animate-pulse' style={{ animationDelay: `${i * 0.1}s` }}></div>
          ))}
        </div>
      </div>

      {/* Floating Particles */}
      <div className='absolute inset-0 overflow-hidden'>
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className='absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse'
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>
      
      <form 
        className='w-[85%] max-w-[380px] bg-gradient-to-br from-gray-900/80 via-gray-800/90 to-black/80 backdrop-blur-xl shadow-2xl shadow-cyan-500/20 rounded-2xl flex flex-col items-center justify-center gap-4 p-6 relative z-10 border border-cyan-400/30' 
        onSubmit={handleSignUp}
        style={{
          boxShadow: '0 0 50px rgba(6, 182, 212, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
        }}
      >
        {/* AI Header with Glowing Effect */}
        <div className='text-center mb-4 relative'>
          <div className='absolute -inset-3 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-xl blur-xl'></div>
          <h1 className='text-white text-3xl font-bold mb-1 relative z-10 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent'>
            AI REGISTRATION
          </h1>
          <p className='text-cyan-300/80 text-xs font-mono tracking-wider'>
            INITIALIZE VIRTUAL ASSISTANT PROTOCOL
          </p>
          <div className='flex justify-center mt-1'>
            <div className='w-12 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent'></div>
          </div>
        </div>

        {/* Name Input with Robotic Styling */}
        <div className='w-full relative group'>
          <div className='absolute -inset-0.5 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-sm'></div>
          <input 
            type="text" 
            placeholder='FULL NAME' 
            className={`w-full h-12 outline-none border-2 transition-all duration-500 rounded-2xl text-white placeholder-cyan-300/60 px-4 text-sm bg-gray-900/50 backdrop-blur-sm font-mono tracking-wider ${
              focusedField === 'name' 
                ? 'border-cyan-400/60 shadow-md shadow-cyan-400/20 bg-gray-800/60' 
                : 'border-cyan-400/30 hover:border-cyan-400/50'
            }`} 
            required 
            onChange={(e) => setName(e.target.value)} 
            value={name}
            onFocus={() => setFocusedField('name')}
            onBlur={() => setFocusedField('')}
          />
          <div className='absolute top-1/2 right-3 transform -translate-y-1/2 text-cyan-400/60'>
            <div className='w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse'></div>
          </div>
        </div>

        {/* Email Input with Robotic Styling */}
        <div className='w-full relative group'>
          <div className='absolute -inset-0.5 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-sm'></div>
          <input 
            type="email" 
            placeholder='EMAIL_ADDRESS' 
            className={`w-full h-12 outline-none border-2 transition-all duration-500 rounded-2xl text-white placeholder-cyan-300/60 px-4 text-sm bg-gray-900/50 backdrop-blur-sm font-mono tracking-wider ${
              focusedField === 'email' 
                ? 'border-cyan-400/60 shadow-md shadow-cyan-400/20 bg-gray-800/60' 
                : 'border-cyan-400/30 hover:border-cyan-400/50'
            }`} 
            required 
            onChange={(e) => setEmail(e.target.value)} 
            value={email}
            onFocus={() => setFocusedField('email')}
            onBlur={() => setFocusedField('')}
          />
          <div className='absolute top-1/2 right-3 transform -translate-y-1/2 text-cyan-400/60'>
            <div className='w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse'></div>
          </div>
        </div>

        {/* Password Input with Robotic Styling */}
        <div className='w-full relative group'>
          <div className='absolute -inset-0.5 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-sm'></div>
          <input 
            type={showPassword ? "text" : "password"} 
            placeholder='SECURE_PASSWORD' 
            className={`w-full h-12 outline-none border-2 transition-all duration-500 rounded-2xl text-white placeholder-cyan-300/60 px-4 pr-12 text-sm bg-gray-900/50 backdrop-blur-sm font-mono tracking-wider ${
              focusedField === 'password' 
                ? 'border-cyan-400/60 shadow-md shadow-cyan-400/20 bg-gray-800/60' 
                : 'border-cyan-400/30 hover:border-cyan-400/50'
            }`} 
            required 
            onChange={(e) => setPassword(e.target.value)} 
            value={password}
            onFocus={() => setFocusedField('password')}
            onBlur={() => setFocusedField('')}
          />
          <button
            type="button"
            className='absolute top-1/2 right-3 transform -translate-y-1/2 text-cyan-400/50 hover:text-cyan-400/80 transition-colors duration-300'
            onClick={() => setShowPassword(!showPassword)}
          >
            {!showPassword ? (
              <IoEye className='w-5 h-5' />
            ) : (
              <IoEyeOff className='w-5 h-5' />
            )}
          </button>
        </div>

        {/* Error Message with Robotic Styling */}
        {err.length > 0 && (
          <div className='w-full bg-red-900/30 border border-red-500/50 rounded-xl p-3 animate-pulse'>
            <div className='flex items-center gap-2'>
              <div className='w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse'></div>
              <p className='text-red-300 text-xs text-center font-mono tracking-wider'>
                ERROR: {err.toUpperCase()}
              </p>
            </div>
          </div>
        )}

        {/* AI Registration Button */}
        <button 
          className={`w-full h-12 mt-4 text-white font-bold rounded-2xl text-sm transition-all duration-500 transform font-mono tracking-wider relative overflow-hidden ${
            loading 
              ? 'bg-gray-600 cursor-not-allowed' 
              : 'bg-gradient-to-r from-cyan-600/80 via-blue-600/80 to-purple-600/80 hover:from-cyan-600 hover:via-blue-600 hover:to-purple-600 hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg'
          }`} 
          disabled={loading}
          style={{
            boxShadow: loading ? 'none' : '0 0 20px rgba(6, 182, 212, 0.2)'
          }}
        >
          {loading ? (
            <div className='flex items-center justify-center gap-2'>
              <div className='w-5 h-5 border-2 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin'></div>
              <span>INITIALIZING...</span>
            </div>
          ) : (
            <div className='relative'>
              <span className='relative z-10'>REGISTER AI PROTOCOL</span>
              <div className='absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 animate-pulse'></div>
            </div>
          )}
        </button>

        {/* Robotic Divider */}
        <div className='w-full flex items-center gap-3 my-2'>
          <div className='flex-1 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent'></div>
          <div className='flex items-center gap-1'>
            <div className='w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse'></div>
            <span className='text-cyan-300/60 text-xs font-mono tracking-widest'>OR</span>
            <div className='w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse'></div>
          </div>
          <div className='flex-1 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent'></div>
        </div>

        {/* Sign In Link with Robotic Styling */}
        <p className='text-cyan-300/80 text-xs text-center font-mono tracking-wider'>
          EXISTING PROTOCOL DETECTED?{' '}
          <span 
            className='text-cyan-400/80 hover:text-cyan-400 cursor-pointer font-bold transition-colors duration-200 underline-offset-2 hover:underline' 
            onClick={() => navigate("/signin")}
          >
            ACCESS TERMINAL
          </span>
        </p>

        {/* Bottom Status Bar */}
        <div className='w-full mt-3 flex justify-between items-center text-xs font-mono text-cyan-400/40'>
          <div className='flex items-center gap-1'>
            <div className='w-1 h-1 bg-green-400 rounded-full animate-pulse'></div>
            <span>SYSTEM ONLINE</span>
          </div>
          <div className='flex items-center gap-1'>
            <div className='w-1 h-1 bg-cyan-400 rounded-full animate-pulse'></div>
            <span>AI READY</span>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SignUp
