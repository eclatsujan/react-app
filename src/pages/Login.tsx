import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { useForm } from "react-hook-form";
import AppLayout from "../components/layout/AppLayout";
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod"
import { authUserLogin, mockApiLogin } from "../api/auth";
import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import { User } from "../types/Auth";
import { useNavigate } from "react-router";

const LoginFormSchema = z.object({
  email: z.string().nonempty('Email is required').email(),
  password: z.string().nonempty('Password is required').min(6, 'Password must at least 6 characters')
});

export default function Login() {
  const [error,setError] = useState("");
  const navigate = useNavigate();
  const {setAuthData} = useContext(AuthContext);
  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues:{
      email: "",
      password: ""
    }
  });
  
  const onSubmit = async (data: z.infer<typeof LoginFormSchema>) => {
      try{
        const response:User = await authUserLogin({
          email: data.email,
          password: data.password
        });
        if(!response){
          return;
        }
        setAuthData(response);
        navigate('/', { replace: true });
      }catch(e){
        const error = e as Error;
        setError(error.message);
      }
  }
  return (
    <AppLayout>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-1/4 space-y-6">
          <div className="">
            {error && <p className="text-red-500 font-bold">{error}</p>}
          </div>
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="password"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="*****" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </AppLayout>
  );
}
