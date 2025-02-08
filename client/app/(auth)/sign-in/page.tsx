'use client'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormMessage, } from '@/components/ui/form'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { LoginSchema } from '@/lib/validetion'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Separator } from '@/components/ui/separator'


const SignInPage = () => {
	const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
			password: "",
    },
  })
	function onSubmit(values: z.infer<typeof LoginSchema>) {

    console.log(values)
  }

	return <Card className='w-1/2 p-4' >
			<h1 className='text-xl font-bold' >Sign in</h1>
			<p className='text-sm text-muted-foreground'>  Welcome back! place sign in ot your account.</p>
			<Separator className='my-3'/>
			<Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem className='space-y-0'>
              <Label className='text-fuchsia-950'>Email</Label>
              <FormControl>
                <Input placeholder="example@gmail.com" {...field} />
              </FormControl>
              <FormMessage className='text-xs ' />
            </FormItem>
          )}
        />
				<FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem className='space-y-0'>
              <Label className='text-fuchsia-950'>password</Label>
              <FormControl>
                <Input placeholder="*********" type='password' {...field} />
              </FormControl>
              <FormMessage className='text-xs ' />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
		<div className='mt-4'>
				<div className='text-sm text-muted-foreground'>
					Don&apos;t have an account?{' '}
					<Button asChild variant={'link'} className='p-0'>
						<Link href='/sign-up'>Sign up</Link>
					</Button>
				</div>
			</div>
	</Card>
}

export default SignInPage