import React from "react";
import FormLogo from "./assets/form-logo.png";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import "./App.css";

const schema = yup
  .object({
    Name: yup.string().required("O nome é obrigatório"),
    FirstName: yup.string().required("O sobre nome é obrigatório"),
    CPF: yup.number("Somente numeros").required("O CPF é obrigatório"),
    Email: yup.string().email().required("O Email é obrigatório"),
    PhoneNumber: yup
      .string()
      .required("O telefone é obrigatório"),
    Password: yup.string().min(6).required("A senha é obrigatória"),
    ConfirmPassword: yup
      .string()
      .required("Confirmar a senha é obrigatória")
      .oneOf([yup.ref("Password", "As senhas devem ser iguais.")]),
  })
  .required();

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  console.log(errors);

  const onSubmit = (userData) => {
    console.log(userData);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <img src={FormLogo} alt="logo-forms" />
      <label>
        Nome
        <input {...register("Name", { required: true })} />
        <span>{errors.Name?.message}</span>
      </label>
      <label>
        Sobre Nome
        <input {...register("FirstName")} />
        <span>{errors.FirstName?.message}</span>
      </label>
      <label>
        CPF
        <input {...register("CPF")} />
        <span>{errors.CPF?.message}</span>
      </label>
      <label>
        Email
        <input {...register("Email")} />
        <span>{errors.Email?.message}</span>
      </label>
      <label>
        Numero Telefone
        <input
          type="tel"
          placeholder="(xx) xxxxx-xxxx"
          {...register("PhoneNumber")}
        />
        <span>{errors.PhoneNumber?.message}</span>
      </label>
      <label>
        Senha
        <input {...register("Password")} />
      </label>
      <span>{errors.Password?.message}</span>
      <label>
        Confirmar Senha
        <input {...register("ConfirmPassword")} />
        <span>{errors.ConfirmPassword?.message}</span>
      </label>

      <button type="submit">Cadastrar Usuário</button>
    </form>
  );
}

export default App;
