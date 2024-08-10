import { json, redirect } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const username = formData.get("username");
  const password = formData.get("password");

  if (username === "admin" && password === "password") {
    return redirect("/dashboard");
  }

  return json({ error: "Invalid credentials" });
};

export default function Login() {
  const actionData = useActionData<typeof action>();

  return (
    <Form method="post">
      <input type="text" name="username" placeholder="Username" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Login</button>
      {actionData?.error && <p>{actionData.error}</p>}
    </Form>
  );
}