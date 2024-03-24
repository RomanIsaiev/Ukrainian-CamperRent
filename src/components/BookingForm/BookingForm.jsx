import React from "react";
import { useForm } from "react-hook-form";
import {
  Data,
  FormTitle,
  Input,
  MainContainer,
  Span,
  SubTitle,
  Submit,
  TextAria,
} from "./BookingForm.styled";

export const BookingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    window.location.reload();
  };

  return (
    <MainContainer>
      <div>
        <FormTitle>Book your campervan now</FormTitle>
        <SubTitle>Stay connected! We are always ready to help you.</SubTitle>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          {errors.name && <Span>This field is required</Span>}
          <Input {...register("name", { required: true })} placeholder="Name" />
        </label>
        <label>
          {errors.email && (
            <Span>This field is required and should be a valid email</Span>
          )}
          <Input
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            placeholder="Email"
          />
        </label>
        <label>
          {errors.bookingDate && <Span>This field is required</Span>}
          <Data
            type="date"
            {...register("bookingDate", { required: true })}
            placeholder="Booking Date"
          />
        </label>
        <label>
          <TextAria {...register("comment")} placeholder="Comment" />
        </label>
        <Submit type="submit" value="Send" />
      </form>
    </MainContainer>
  );
};
