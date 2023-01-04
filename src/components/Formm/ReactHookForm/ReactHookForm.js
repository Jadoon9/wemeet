import { useForm, Controller } from "react-hook-form";
import InputField from "./InputField";
import SelectField from "./SelectField";
import Button from "../../UiElements/Button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const options = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
  { label: "Other", value: "other" },
];

const regexpUrl =
  /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;

const validationSchema = yup.object({
  userName: yup.string().required("User Name field is required"),

  eventName: yup.string().required("Event Name field is required"),

  eventColor: yup.string().required("Event Name field is required"),

  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email field is required"),

  password: yup.string().required("Password field is required"),

  search: yup.string().required("Search field is required"),

  text: yup.string().required("Text field is required"),

  date: yup.date().required("Date field is required"),

  number: yup.number().required("Number field is required"),

  url: yup
    .string()
    .matches(regexpUrl, "Enter correct url!")
    .required("Please enter website"),

  telephone: yup.number().required("Please enter valid phone number"),

  month: yup.date().required("Please select valid month"),

  month: yup.date().required("Please select valid month"),

  week: yup.string().required("Please select valid Week"),

  time: yup.string().required("Please select Time"),

  color: yup.string().required("Please select color"),
});

const ReactFormHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      email: "",
      password: "",
      search: "",
      text: "",
      url: "",
      telephone: "",
      number: "",
      date: "",
      dateandtime: "",
      month: "",
      week: "",
      time: "",
      gender: "",
    },
  });

  const onSubmit = (data) => console.log(data, "dataa");
  console.log(errors, "errororo");
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="email"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <InputField
            label="Eamil"
            name="email"
            type="email"
            register={register}
            {...field}
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <InputField
            label="Password"
            name="password"
            register={register}
            type="password"
            {...field}
          />
        )}
      />
      <Controller
        name="search"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <InputField
            label="Search"
            name="search"
            register={register}
            type="search"
            {...field}
          />
        )}
      />
      <Controller
        name="text"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <InputField
            label="Text"
            name="text"
            register={register}
            type="text"
            {...field}
          />
        )}
      />
      <Controller
        name="url"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <InputField
            label="Url"
            name="url"
            register={register}
            type="url"
            {...field}
          />
        )}
      />
      <Controller
        name="telephone"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <InputField
            label="Telephone"
            name="telephone"
            register={register}
            type="tel"
            {...field}
          />
        )}
      />
      <Controller
        name="number"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <InputField
            label="Number"
            name="number"
            register={register}
            type="number"
            {...field}
          />
        )}
      />
      <Controller
        name="date"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <InputField
            label="Date"
            name="date"
            register={register}
            type="date"
            {...field}
          />
        )}
      />
      <Controller
        name="dateandtime"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <InputField
            label="Date And Time"
            name="dateandtime"
            register={register}
            type="datetime-local"
            {...field}
          />
        )}
      />

      <Controller
        name="month"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <InputField
            label="Month"
            name="month"
            register={register}
            type="month"
            {...field}
          />
        )}
      />
      <Controller
        name="week"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <InputField
            label="Week"
            name="week"
            register={register}
            type="week"
            {...field}
          />
        )}
      />
      <Controller
        name="time"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <InputField
            label="Time"
            name="time"
            register={register}
            type="time"
            {...field}
          />
        )}
      />
      {/* <Controller
        name="gender"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <SelectField
            options={options}
            register={register}
            label="Gender"
            {...field}
          />
        )}
      /> */}
      {/* 
  
      {/*  */}

      <Button type="submit" text="Submit" control={control} />
    </form>
  );
};

export default ReactFormHook;
