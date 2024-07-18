import { useState } from 'react';
import { At, Eye, EyeSlash } from 'react-bootstrap-icons';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import useAxios from '../hooks/useAxios';
import { Link } from 'react-router-dom';

function Login() {
  const [showPin, setShowPin] = useState(false)
  const { handleSubmit, register, formState: { errors } } = useForm()
  const {axiosPublic} = useAxios()

  // submit form to create new user  
  const onSubmit = async (data) => {
    try {
      const isTelephone = /[0-9]+/g.test(data.emailOrTelephone)
      const isEmail = /\S+@\S+\.\S+/g.test(data.emailOrTelephone)
      
      // validate email or telephone
      if (!isEmail && !isTelephone) {
        toast.error('You must enter correct email or telephone!')
        return
      }

      // send login req
      const {data: user} = await axiosPublic.post('/user-login', data)
      
      // req to get auth token
      const {data: token} = await axiosPublic.get(`/get-auth-token?email=${user.email}`)
      localStorage.setItem('mobank:token', token)

      toast.success('login successful!')
    }
    catch (err) {
      if (err.response.status === 409) {
        toast.error(err.response.data.message);
        return
      }
      toast.error(err.message)
      console.log(err.message);
    }
  }

  return (
    <section className="flex-1 px-4 py-4 dark:bg-gray-800 dark:text-gray-200">
      <div className="max-w-md mx-auto p-6 border rounded-md shadow-2xl">
        <h2 className="text-3xl md:text-3xl font-semibold text-center mb-6">Login</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="block mb-4">
            <span className="block mb-1 text-sm text-gray-600 dark:text-gray-400">Your email or telephone:</span>
            <input type="text" {...register('emailOrTelephone', { required: true })} className="border w-full min-w-0 px-3 py-2 rounded-md bg-gray-50 shadow dark:text-gray-700" placeholder="" />
            {errors.emailOrTelephone && <p className="text-sm text-red-500 mt-2">This field is required</p>}
          </label>

          <label className="block mb-4 relative">
            <span className="block mb-1 text-sm text-gray-600 dark:text-gray-400">Your PIN (5 digits):</span>
            <input type={showPin ? "text" : "password"} {...register('pin', {required:true, pattern: /^\d{5}$/ })} className="border w-full min-w-0 px-3 py-2 rounded-md bg-gray-50 shadow dark:text-gray-700" />
            
            <button type="button" onClick={() => setShowPin(!showPin)} className="absolute top-8 right-1.5 p-1 text-xl">
              {showPin ? <Eye /> : <EyeSlash />}
            </button>

            {errors.pin?.type==='required' && <p className="text-sm text-red-500 mt-2">This field is required</p>}
            {errors.pin?.type==='pattern' && <p className="text-sm text-red-500 mt-2">Pin number must be 5 digits long</p>}
          </label>

          <div className="mt-6">
            <button type="submit" className="bg-indigo-600 text-white w-full px-4 py-2 rounded-md hover:opacity-90">Login</button>
          </div>

          <p className="mt-6 text-center">Don't have an account? <Link to="/register" className="text-indigo-600 hover:underline dark:text-indigo-500">Register now</Link></p>
        </form>
      </div>
    </section>
  );
}

export default Login;