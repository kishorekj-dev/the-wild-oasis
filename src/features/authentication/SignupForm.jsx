import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import useSignup from "./useSignup";

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { signup, isLoading } = useSignup();
  const { errors } = formState;

  function onSubmit({ fullName, email, password }) {
    signup(
      { fullName, email, password },
      {
        onSettled: reset,
      }
    );
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <FormRow label="Full name" error={errors?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          disabled={isLoading}
          placeholder="Enter your full name"
          {...register("fullName", { required: "This Field is required" })}
        />
      </FormRow>

      <FormRow label="Email address" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          disabled={isLoading}
          placeholder="Enter your email address"
          autoComplete="off"
          {...register("email", {
            required: "This Field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please enter a valid email address",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Password (min 8 characters)"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          disabled={isLoading}
          placeholder="Enter your password"
          autoComplete="new-password"
          {...register("password", {
            required: "This Field is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long",
            },
          })}
        />
      </FormRow>

      <FormRow label="Repeat password" error={errors?.passwordConfirm?.message}>
        <Input
          type="password"
          id="passwordConfirm"
          disabled={isLoading}
          placeholder="Repeat your password"
          {...register("passwordConfirm", {
            required: "This Field is required",
            validate: (value) =>
              value === getValues().password || "Passwords do not match",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button>Create new user</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
