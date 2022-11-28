import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

const inputClsn =
  'w-full h-10 outline-0 appearance-none pl-9 pr-2 py-1 border border-gray-300 hover:border-pink-300 rounded leading-none text-black duration-300';

const gradientText =
  'relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-white to-white before:bg-gradient-to-r before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:z-0 before:bg-clip-text before:transition before:duration-500';

const beforeOpacity0 = 'before:opacity-0';
const beforeOpacity1 = 'before:opacity-1';

function LoginComponent() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isSubmit, setIsSubmit] = useState(false);

  const [opacity1, setOpacity1] = useState(beforeOpacity0);
  const [opacity2, setOpacity2] = useState(beforeOpacity0);
  const [opacity3, setOpacity3] = useState(beforeOpacity0);

  const persist = 1000;

  useEffect(() => {
    for (const id of [0, 1, 2]) {
      handleTimeout(id, id + 1);
    }
  }, []);

  const handleOpacity = (id: number, isOpcity: boolean) => {
    if (id === 1) {
      setOpacity1(() => (isOpcity ? beforeOpacity1 : beforeOpacity0));
    } else if (id === 2) {
      setOpacity2(() => (isOpcity ? beforeOpacity1 : beforeOpacity0));
    } else {
      setOpacity3(() => (isOpcity ? beforeOpacity1 : beforeOpacity0));
    }
  };

  const handleTimeout = (idx: number, id: number) => {
    setTimeout(() => {
      handleOpacity(id, true);
      setTimeout(() => {
        handleOpacity(id, false);
      }, persist);

      setInterval(() => {
        handleOpacity(id, true);
        setTimeout(() => {
          handleOpacity(id, false);
        }, persist);
      }, persist * 3);
    }, idx * persist);
  };

  const onSubmit = async (data: any) => {
    setIsSubmit(() => true);
    try {
      const response = await fetch('http://api-side.sooldamhwa.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const { data: result, message, statusCode } = await response.json();

      if (statusCode > 399) {
        throw Error(message);
      } else {
        localStorage.setItem('accessToken', result.accessToken);
        router.replace('/loading');
      }
    } catch (error: any) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: { whiteSpace: 'nowrap' },
        theme: 'light',
      });
    }
    setIsSubmit(() => false);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen px-5 bg-[url('/images/bg-image.jpeg')]">
      <div
        className={`mb-8 text-4xl font-bold ${gradientText} ${opacity1} before:from-blue-400 before:to-cyan-400 before:content-['2022']`}
      >
        2022
      </div>
      <div
        className={`mb-8 text-3xl font-semibold ${gradientText} ${opacity2} before:from-[#7928ca] before:to-[#ff0080] before:content-['마셔보고서']`}
      >
        마셔보고서
      </div>
      <div
        className={`mb-16 text-2xl font-semibold ${gradientText} ${opacity3} before:from-[#ff4d4d] before:to-[#f9cb28] before:content-['담쟁이인증']`}
      >
        담쟁이인증
      </div>
      <form
        className="flex flex-col items-center w-full max-w-xs gap-6 mb-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="relative w-full h-8 text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 absolute top-2 left-1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
          <input
            type="email"
            className={inputClsn}
            placeholder="이메일"
            {...register('email', { required: true })}
          />
        </div>
        {errors.email && <span>This field is required</span>}

        <div className="relative w-full h-8 text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 absolute top-2 left-1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
            />
          </svg>

          <input
            type="password"
            placeholder="비밀번호"
            className={inputClsn}
            {...register('password', { required: true })}
          />
        </div>
        {errors.password && <span>This field is required</span>}
        <input
          type="submit"
          value="입장"
          disabled={isSubmit}
          className={`w-48 h-10 mt-4 font-semibold text-white ${
            isSubmit
              ? 'disabled:bg-gray-300 disabled:animate-none'
              : 'bg-gradient-to-r from-green-400 to-blue-400 hover:from-pink-400 hover:to-yellow-400'
          }  rounded  hover:cursor-pointer animate-gradient-xy`}
        />
      </form>
    </div>
  );
}

export default LoginComponent;
