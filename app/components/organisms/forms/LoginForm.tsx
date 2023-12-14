"use client";
import React, { useState } from "react";
import { Eye, Input, Mail, Button } from "../../atomic";
import { useRouter } from "next/navigation";

export const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });
  const [typePassword, setTypePassword] = useState(false);

  const router = useRouter();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="w-full flex flex-col gap-[24px] mt-14">
      <Input
        value={formData.email}
        label="Email:"
        error={formErrors.email}
        onChange={onChange}
        name="email"
        icon={<Mail />}
        placeholder="jhondoe@gmail.com"
      />
      <Input
        value={formData.password}
        label="Contraseña:"
        error={formErrors.password}
        onChange={onChange}
        name="password"
        icon={<Eye onClick={() => setTypePassword(!typePassword)} />}
        placeholder="********"
        type={typePassword ? "text" : "password"}
      />
      <Button onClick={() => router.push("/dashboard")}>Login</Button>
    </div>
  );
};
