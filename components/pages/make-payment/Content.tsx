"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  reference: string;
  amount: number;
};

const Content = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const onSubmit = async (data: FormData) => {
    setIsSubmitLoading(true);
    const toSubmit = {
      email: "jepoyyy0225@gmail.com",
      subject: "Make Payment",
      message: `<p>Someone submitted a payment details in your website https://fremontsigncompany.com/make-payment</p><p>Reference: <b>${data.reference}</b></p><p>Amount: <b>${data.amount}</b></p>`,
    };
    const submit = await fetch("/api/mailer", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrer: "no-referrer",
      body: JSON.stringify(toSubmit),
    });
    const res = await submit.json();
    if (res.success) {
      setIsSuccess(true);
      setErrorMessage("");
      reset();
      alert("Form was submitted!");
    } else {
      setErrorMessage("Something went wrong");
    }
    setIsSubmitLoading(false);
  };
  return (
    <div className="flex flex-row justify-center gap-12 pt-20 px-6 xl:px-80">
      <div className="w-96">
        {!isSuccess && errorMessage ? (
          <p className="text-red-500 mb-4">{errorMessage}</p>
        ) : null}
        {errors.reference || errors.amount ? (
          <p className="text-red-500 mb-4">Some required fields are empty</p>
        ) : null}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mb-24 p-4 bg-light-blue rounded-lg text-oxford-blue"
        >
          <h2 className="text-5xl">Payment Form</h2>
          <h3 className="my-6 text-2xl">
            Enter the payment details and submit
          </h3>
          <label htmlFor="paymentref" className="text-giants-orange">
            Payment Reference
          </label>
          <input
            id="paymentref"
            {...register("reference", { required: true })}
            type="text"
            className="w-full bg-gray-100 p-2 mt-2 mb-4 disabled:opacity-80 disabled:cursor-progress"
            placeholder="Your Payment Reference"
            disabled={isSubmitLoading}
          />
          <label htmlFor="amountToPay" className="text-giants-orange">
            Amount to Pay
          </label>
          <input
            id="amountToPay"
            {...register("amount", { required: true })}
            type="number"
            className="w-full bg-gray-100 p-2 mt-2 disabled:opacity-80 disabled:cursor-progress"
            placeholder="Your Amount to Pay"
            disabled={isSubmitLoading}
          />
          <button
            className="w-full shadow-lg bg-oxford-blue text-shady-white px-6 py-3 hover:bg-oxford-blue/80 rounded transition ease-in-out hover:scale-90 mt-6 disabled:opacity-80 disabled:cursor-progress"
            disabled={isSubmitLoading}
          >
            Make Payment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Content;
