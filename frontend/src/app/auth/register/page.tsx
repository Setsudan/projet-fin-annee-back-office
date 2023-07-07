import Input from "@components/input/input.component";
import Button from "@components/button/button.component";
import Hero from "@components/hero/hero.component";

export default function LoginPage() {
  return (
    <>
      <Hero image="https://images.unsplash.com/photo-1687226013074-5d59ffeb2625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80">
        <h1>Register</h1>
        <Input label="name" name="name" placeholder="Name" />
        <Input type="email" label="email" name="email" placeholder="EMail" />

        <Input
          type="password"
          label="password"
          name="password"
          placeholder="Password"
        />
        <Input
          type="password"
          label="repeatPassword"
          name="repeatPassword"
          placeholder="Repeat Password"
        />
        <Input
          type="file"
          label="file"
          name="file"
          placeholder="Profile Picture"
        />
        <Button type="primary" text="Register" />
      </Hero>
    </>
  );
}
