import Input from '@/components/forms/Input'
import AuthLayout from '@/components/layout/authLayout'
import React from 'react';
import Button from '@/components/button';

const Login = () => {
  return (
   <AuthLayout heading='Login to your account'>
      <div className="w-full flex flex-col gap-y-5">
        <Input type="email" label='email address' placeholder='email address'/>
        <Input type="password" label='password' placeholder='password'/>
        <div className='flex items-center gap-x-2'>
            <input type="checkbox" id="remember me" /> <label htmlFor="remember me" className='text-[#111827] text-sm leading-5'>Remember me</label>
        </div>
        <div className="mt-4">
        <Button
          className="w-full bg-[#0D703C] rounded-md py-[10px] font-medium text-[18px] leading-[28px] text-white"
          type="button"
          onClick={() => {}}
        >
          Save
        </Button>
        </div>
        <div className="flex items-center justify-center gap-x-1 text-center mt-5">
          <h3 className="text-[#808080] text-sm leading-5">
          Forgotten Your Password? 
          </h3>
          <Button className="text-sm leading-5 font-medium text-[#006A4E]">
          Reset Now
          </Button>
        </div>
    </div>

   </AuthLayout>
  )
}

export default Login