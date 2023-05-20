"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneVolume,
  faEnvelope,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const containerStyle = {
  width: "100%",
  height: "800px",
};

const center = {
  lat: 37.506089,
  lng: -121.950789,
};

type FormData = {
  ciName: string;
  ciEmail: string;
  ciAddress01: string;
  ciAddress02: string;
  ciCity: string;
  ciPhone: string;
  ciUSState: string;
  ciZip: string;
  slCompany: string;
  slAddress01: string;
  slAddress02: string;
  slCity: string;
  slUSState: string;
  slZip: string;
  slPointContact: string;
  slPointContactNumber: string;
  slAdditionalComment: string;
};

const Content = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyB-Og1uzNQZVJ6Onne-56491DlQ1IMlovY",
  });
  const renderMap = () => {
    return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        zoom={14}
        center={center}
        mapContainerClassName="lg:max-h-[450px]"
      >
        <Marker
          position={{
            lat: 37.506089,
            lng: -121.950789,
          }}
        />
      </GoogleMap>
    ) : (
      <></>
    );
  };
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
      subject: "Service Request Form",
      message: `<p>Someone submitted a service request form in your website https://fremontsigncompany.com/contact</p>
            <p><b>Customer Information</b></p>
            <p>Name: <b>${data.ciName}</b></p>
            <p>Email: <b>${data.ciEmail}</b></p>
            <p>Customer Address 01: <b>${data.ciAddress01}</b></p>
            <p>Customer Address 02: <b>${data.ciAddress02}</b></p>
            <p>City: <b>${data.ciCity}</b></p>
            <p>US States: <b>${data.ciUSState}</b></p>
            <p>Zip: <b>${data.ciZip}</b></p>
            <p>Phone: <b>${data.ciPhone}</b></p>
            <p><b>Service Location</b></p>
            <p>Company: <b>${data.slCompany}</b></p>
            <p>Customer Address 01: <b>${data.slAddress01}</b></p>
            <p>Customer Address 02: <b>${data.slAddress02}</b></p>
            <p>City: <b>${data.slCity}</b></p>
            <p>US States: <b>${data.slUSState}</b></p>
            <p>Zip: <b>${data.slZip}</b></p>
            <p>Point of Contact: <b>${data.slPointContact}</b></p>
            <p>Point of Contact Number: <b>${data.slPointContactNumber}</b></p>
            <p>Additional Comments: <b>${data.slAdditionalComment}</b></p>`,
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
    <div className="py-20 px-6 xl:px-80">
      <div className="flex flex-col-reverse xl:flex-row gap-12">
        <div className="basis-1/2">{renderMap()}</div>
        <div className="basis-1/2 bg-light-blue p-5 rounded-lg space-y-5 font-semibold text-oxford-blue">
          <p className="font-bold tracking-[0.2em] text-giants-orange">
            Do not hesitate to contact us anytime.
          </p>
          <h2 className="text-3xl lg:text-5xl">Get in Touch </h2>
          <p className="font-medium leading-relaxed text-darker-gray">
            Our service pros are here and ready to discuss your specific
            branding challenges, work with you on estimates and provide whatever
            information you may need. Just give us a call, email or fill out the
            brief form below and well get right back to you.
          </p>
          <p className="flex items-center">
            <FontAwesomeIcon
              icon={faMapLocationDot}
              className="w-7 h-7 mr-4 text-giants-orange"
            />
            <span>
              Singh Signs Company 44279 <br /> Fremont Blvd. Unit P Fremont
              <br /> CA 94538
            </span>
          </p>
          <p className="flex items-center">
            <FontAwesomeIcon
              icon={faPhoneVolume}
              className="w-7 h-7 mr-4 text-giants-orange"
            />
            <span>510-573-3162</span>
          </p>
          <Link
            href="mailto:singhsignsca@gmail.com"
            className="text-giants-orange hover:text-gray-500"
          >
            <p className="flex items-center mt-5">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="w-7 h-7 mr-4 text-giants-orange"
              />
              <span>singhsignsca@gmail.com</span>
            </p>
          </Link>
        </div>
      </div>
      <div className="mt-32">
        {!isSuccess && errorMessage ? (
          <p className="text-red-500 mt-4 mb-4">{errorMessage}</p>
        ) : null}
        {Object.keys(errors).length > 0 ? (
          <p className="text-red-500 mt-4 mb-4">
            Some required fields are empty
          </p>
        ) : null}
        <h3 className="text-2xl text-oxford-blue">Service Request Form</h3>
        <p className="text-darker-gray mt-6">
          Fields marked with an * are required
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
          <h5 className="text-oxford-blue font-bold">Service Location</h5>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
            <div>
              <label className="text-sm text-giants-orange">Name *</label>
              <input
                type="text"
                placeholder="Your Name"
                {...register("ciName", { required: true })}
                className="w-full bg-inputfield-bg border font-medium placeholder:text-light-gray border-light-gray p-2 mt-2 disabled:opacity-80 disabled:cursor-progress"
                disabled={isSubmitLoading}
              />
            </div>
            <div>
              <label className="text-sm text-giants-orange">Email *</label>
              <input
                {...register("ciEmail", { required: true })}
                className="w-full bg-inputfield-bg border font-medium placeholder:text-light-gray border-light-gray p-2 mt-2 disabled:opacity-80 disabled:cursor-progress"
                type="email"
                placeholder="Your Email"
                disabled={isSubmitLoading}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
            <div>
              <label className="text-sm text-giants-orange">
                Customer Address 01 *
              </label>
              <input
                type="text"
                placeholder="your Address 01"
                {...register("ciAddress01", { required: true })}
                className="w-full bg-inputfield-bg border font-medium placeholder:text-light-gray border-light-gray p-2 mt-2 disabled:opacity-80 disabled:cursor-progress"
                disabled={isSubmitLoading}
              />
            </div>
            <div>
              <label className="text-sm text-giants-orange">
                Customer Address 02
              </label>
              <input
                {...register("ciAddress02")}
                className="w-full bg-inputfield-bg border font-medium placeholder:text-light-gray border-light-gray p-2 mt-2 disabled:opacity-80 disabled:cursor-progress"
                type="text"
                placeholder="your Address 02"
                disabled={isSubmitLoading}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-6">
            <div>
              <label className="text-sm text-giants-orange">City *</label>
              <input
                type="text"
                placeholder="your City"
                {...register("ciCity", { required: true })}
                className="w-full bg-inputfield-bg border font-medium placeholder:text-light-gray border-light-gray p-2 mt-2 disabled:opacity-80 disabled:cursor-progress"
                disabled={isSubmitLoading}
              />
            </div>
            <div>
              <label className="text-sm text-giants-orange">US States *</label>
              <input
                {...register("ciUSState", { required: true })}
                className="w-full bg-inputfield-bg border font-medium placeholder:text-light-gray border-light-gray p-2 mt-2 disabled:opacity-80 disabled:cursor-progress"
                type="text"
                placeholder="your US States"
                disabled={isSubmitLoading}
              />
            </div>

            <div>
              <label className="text-sm text-giants-orange">Zip * </label>
              <input
                {...register("ciZip", { required: true })}
                className="w-full bg-inputfield-bg border font-medium placeholder:text-light-gray border-light-gray p-2 mt-2 disabled:opacity-80 disabled:cursor-progress"
                type="text"
                placeholder="your Zip"
                disabled={isSubmitLoading}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-1 gap-6 mt-6">
            <div>
              <label className="text-sm text-giants-orange">Phone *</label>
              <input
                type="text"
                placeholder="your Phone Number"
                {...register("ciPhone", { required: true })}
                className="w-full bg-inputfield-bg border font-medium placeholder:text-light-gray border-light-gray p-2 mt-2 disabled:opacity-80 disabled:cursor-progress"
                disabled={isSubmitLoading}
              />
            </div>
          </div>
          <h5 className="text-oxford-blue font-bold mt-12">Service Location</h5>
          <div className="grid grid-cols-1 xl:grid-cols-1 gap-6 mt-6">
            <div>
              <label className="text-sm text-giants-orange">Company *</label>
              <input
                type="text"
                placeholder="your Company"
                {...register("slCompany", { required: true })}
                className="w-full bg-inputfield-bg border font-medium placeholder:text-light-gray border-light-gray p-2 mt-2 disabled:opacity-80 disabled:cursor-progress"
                disabled={isSubmitLoading}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
            <div>
              <label className="text-sm text-giants-orange">
                Customer Address 01 *
              </label>
              <input
                type="text"
                placeholder="your Address 01"
                {...register("slAddress01", { required: true })}
                className="w-full bg-inputfield-bg border font-medium placeholder:text-light-gray border-light-gray p-2 mt-2 disabled:opacity-80 disabled:cursor-progress"
                disabled={isSubmitLoading}
              />
            </div>
            <div>
              <label className="text-sm text-giants-orange">
                Customer Address 02
              </label>
              <input
                {...register("slAddress02")}
                className="w-full bg-inputfield-bg border font-medium placeholder:text-light-gray border-light-gray p-2 mt-2 disabled:opacity-80 disabled:cursor-progress"
                type="text"
                placeholder="your Address 02"
                disabled={isSubmitLoading}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-6">
            <div>
              <label className="text-sm text-giants-orange">City *</label>
              <input
                type="text"
                placeholder="your City"
                {...register("slCity", { required: true })}
                className="w-full bg-inputfield-bg border font-medium placeholder:text-light-gray border-light-gray p-2 mt-2 disabled:opacity-80 disabled:cursor-progress"
                disabled={isSubmitLoading}
              />
            </div>
            <div>
              <label className="text-sm text-giants-orange">US States *</label>
              <input
                {...register("slUSState", { required: true })}
                className="w-full bg-inputfield-bg border font-medium placeholder:text-light-gray border-light-gray p-2 mt-2 disabled:opacity-80 disabled:cursor-progress"
                type="text"
                placeholder="your US States"
                disabled={isSubmitLoading}
              />
            </div>

            <div>
              <label className="text-sm text-giants-orange">Zip *</label>
              <input
                {...register("slZip", { required: true })}
                className="w-full bg-inputfield-bg border font-medium placeholder:text-light-gray border-light-gray p-2 mt-2 disabled:opacity-80 disabled:cursor-progress"
                type="text"
                placeholder="your Zip"
                disabled={isSubmitLoading}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-1 gap-6 mt-6">
            <div>
              <label className="text-sm text-giants-orange">
                Point of Contact *
              </label>
              <input
                type="text"
                placeholder="your Contact"
                {...register("slPointContact", { required: true })}
                className="w-full bg-inputfield-bg border font-medium placeholder:text-light-gray border-light-gray p-2 mt-2 disabled:opacity-80 disabled:cursor-progress"
                disabled={isSubmitLoading}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-1 gap-6 mt-6">
            <div>
              <label className="text-sm text-giants-orange">
                Point of Contact Number *
              </label>
              <input
                type="text"
                placeholder="your Contact Number"
                {...register("slPointContactNumber", { required: true })}
                className="w-full bg-inputfield-bg border font-medium placeholder:text-light-gray border-light-gray p-2 mt-2 disabled:opacity-80 disabled:cursor-progress"
                disabled={isSubmitLoading}
              />
            </div>
          </div>
          <hr className="mt-8" />
          <div className="grid grid-cols-1 xl:grid-cols-1 gap-6 mt-6">
            <div>
              <label className="text-sm text-giants-orange">
                Additional Comments
              </label>
              <textarea
                rows={4}
                placeholder="Comments..."
                {...register("slAdditionalComment")}
                className="w-full bg-inputfield-bg border font-medium placeholder:text-light-gray border-light-gray p-2 mt-4 disabled:opacity-80 disabled:cursor-progress"
                disabled={isSubmitLoading}
              ></textarea>
            </div>
          </div>
          <button className="shadow-lg bg-oxford-blue text-shady-white px-6 py-3 hover:bg-oxford-blue/80 rounded transition ease-in-out hover:scale-90 mt-6 disabled:opacity-80 disabled:cursor-progress">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Content;
