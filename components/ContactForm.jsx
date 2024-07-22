import React, { useState } from "react";
import { z } from "zod";
import axios from "axios";
import dynamic from "next/dynamic";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Spinner from "./ui/loading/spinner/Spinner";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

const MapComponent = dynamic(() => import("./Map"), {
  ssr: false,
});

const schema = z.object({
  email: z
    .string()
    .min(1, { message: "لطفا ایمیل خود را وارد کنید" })
    .email({ message: "ایمیل صحیح نیست" }),
  subject: z
    .string()
    .min(1, { message: "لطفا موضوع خود را وارد کنید" })
    .max(50, { message: "موضوع نباید بیش از 50 کاراکتر باشد" }),
  body: z
    .string()
    .min(1, { message: "لطفا متن خود را وارد کنید" })
    .max(1000, { message: "متن نباید بیش از 1000 کاراکتر باشد" }),
});

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [explosion, setExplosion] = useState(false);
  const { width, height } = useWindowSize();

  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const submitHandler = async (data) => {
    setLoading(true);
    await axios
      .post("https://ink-byte.vercel.app/api/send-message", data, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        if (res.data.status === "success") {
          setValue("email", "");
          setValue("subject", "");
          setValue("body", "");
          toast.success(res.data.text, {
            position: "top-center",
          });
          setLoading(false);
          window.scrollTo(0, 0);
          setExplosion(true);
          setTimeout(() => {
            setExplosion(false);
          }, 5000);
        } else return;
      })
      .catch((err) => {
        toast.error("مشکل در برقراری ارتباط", {
          position: "top-center",
        });
        setLoading(false);
      });
  };

  return (
    <section className='w-full mx-auto flex justify-center sm:py-14 md:py-10'>
      <div className='w-full flex flex-col md:container sm:px-10 xl:px-48'>
        <h2 className='mb-4 text-4xl text-center text-gray-900 dark:text-white'>
          با من در ارتباط باشید
        </h2>
        <p className='mb-8 lg:mb-16 text-center text-gray-500 dark:text-gray-400 sm:text-xl'>
          ایده جالبی دارید که میخواید به واقعیت تبدیلش کنید؟
        </p>
        <form
          onSubmit={handleSubmit(submitHandler)}
          className='space-y-8 mb-14'>
          <div>
            <label
              htmlFor='email'
              className='block mb-2 text-sm font-medium text-gray-900'>
              ایمیلتون
            </label>
            <input
              {...register("email")}
              type='email'
              id='email'
              className='shadow-md bg-gray-50  text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5'
              placeholder='name@email.com'
              required
            />
          </div>
          <div>
            <label
              htmlFor='subject'
              className='block mb-2 text-sm font-medium text-gray-900'>
              موضوع
            </label>
            <input
              {...register("subject")}
              type='text'
              id='subject'
              className='block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg  shadow-md focus:ring-primary-500 focus:border-primary-500'
              placeholder='در چه مورد احتیاج به کمک دارید؟'
              required
            />
          </div>
          <div className='sm:col-span-2'>
            <label
              htmlFor='message'
              className='block mb-2 text-sm font-medium text-gray-900'>
              پیامتون
            </label>
            <textarea
              {...register("body")}
              id='body'
              rows='6'
              className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-md  focus:ring-primary-500 focus:border-primary-500'
              placeholder='توضیح بدید...'></textarea>
          </div>
          <button
            type='submit'
            className='px-8 py-2 bg-primary text-light hover:shadow-lg transition-all ease-in-out duration-150 rounded-2xl flex items-center'>
            {loading ? <Spinner /> : <> بفرست!</>}
            {explosion && (
              <Confetti
                width={width}
                height={height}
                recycle={false}
                numberOfPieces={300}
              />
            )}
          </button>
        </form>
        <MapComponent />
      </div>
    </section>
  );
}
