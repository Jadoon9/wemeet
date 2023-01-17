import { useForm } from "react-hook-form";
import * as yup from "yup";
import InputField from "./InputField";
import Button from "../../UiElements/Button";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  userName: yup.string().required("User Name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(schema),
    // validationSchema: schema,
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  console.log(errors, "errorss");
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField
        label="User Name"
        name="userName"
        type="input"
        register={register}
        errors={errors}
      />

      <InputField
        label="Email"
        name="email"
        type="email"
        register={register}
        errors={errors}
      />

      <InputField
        label="Password"
        name="password"
        type="password"
        register={register}
        errors={errors}
      />

      <InputField
        label="Confirm Password"
        name="confirmPassword"
        type="password"
        register={register}
        errors={errors}
      />

      <Button type="submit" text="Submit" />
    </form>
  );
};

export default RegistrationForm;
