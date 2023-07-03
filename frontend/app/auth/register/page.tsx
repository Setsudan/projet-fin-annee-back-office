import Input from "@components/input/input.component";
import Button from "@components/button/button.component";
import Hero from "@components/hero/hero.component";

export default function LoginPage() {
  return (
    <>
      <Hero image="https://images.unsplash.com/photo-1687226013074-5d59ffeb2625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80">
        <h1>Login</h1>
        <Input label="first_name" name="first_name" placeholder="First Name" />
        <Input label="last_name" name="last_name" placeholder="Last Name" />
        <Input type="email" label="mail" name="mail" placeholder="Mail" />
        <Input
          type="password"
          label="password"
          name="password"
          placeholder="Password"
        />
        <Input
          type="password"
          label="password_confirmation"
          name="password_confirmation"
          placeholder="ConfirmPassword"
        />
        <Input
          type="select"
          label="role"
          name="role"
          options={["teach", "student", "editor", "transcriptor", "recorder"]}
        />
        <Input type="file" label="avatar" name="avatar" placeholder="Avatar" />

        <Button type="primary" text="Login" />
      </Hero>
    </>
  );
}
