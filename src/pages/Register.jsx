import { useState } from 'react';
import { Eye, EyeSlash } from 'react-bootstrap-icons';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import useAxios from '../hooks/useAxios';


function Register() {
  const [showPin, setShowPin] = useState(false)
  const { handleSubmit, register, formState: { errors } } = useForm()
  const {axiosPublic} = useAxios()

  // submit form to create new user  
  const onSubmit = async (data) => {
    try {
      const res = await axiosPublic.post('/users/register', data)
      toast.success('Registration request successful! Wait for admin approval!')
    }
    catch (err) {
      // email already exist in server
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
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">Register</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="block mb-4">
            <span className="block mb-1 text-sm text-gray-600 dark:text-gray-400">Your name</span>
            <input type="text" {...register('name', { required: true })} className="border w-full min-w-0 px-3 py-2 rounded-md bg-gray-50 shadow dark:text-gray-700" placeholder="ali" />
            {errors.name && <p className="text-sm text-red-500 mt-2">This field is required</p>}
          </label>

          <label className="block mb-4">
            <span className="block mb-1 text-sm text-gray-600 dark:text-gray-400">Your email</span>
            <input type="email" {...register('email', { required: true })} className="border w-full min-w-0 px-3 py-2 rounded-md bg-gray-50 shadow dark:text-gray-700" placeholder="example@mail.com" />
            {errors.email && <p className="text-sm text-red-500 mt-2">This field is required</p>}
          </label>

          <label className="block mb-4">
            <span className="block mb-1 text-sm text-gray-600 dark:text-gray-400">Your telephone</span>
            <input type="tel" {...register('telephone', { required: true })} className="border w-full min-w-0 px-3 py-2 rounded-md bg-gray-50 shadow dark:text-gray-700" placeholder="" />
            {errors.telephone && <p className="text-sm text-red-500 mt-2">This field is required</p>}
          </label>

          <label className="block mb-4">
            <span className="block mb-1 text-sm text-gray-600 dark:text-gray-400">Your role:</span>
            <select {...register("role")} className='border w-full min-w-0 px-3 py-2 rounded-md bg-gray-50 shadow dark:text-gray-700'>
              <option value="user">user</option>
              <option value="agent">agent</option>
              <option value="admin">admin</option>
            </select>
            {errors.role && <p className="text-sm text-red-500 mt-2">This field is required</p>}
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
            <button type="submit" className="bg-indigo-600 text-white w-full px-4 py-2 rounded-md hover:opacity-90">Register account</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Register;