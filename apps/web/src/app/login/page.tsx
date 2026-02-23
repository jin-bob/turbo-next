import { redirect } from 'next/navigation';
import GoogleLoginButton from '@/src/components/global/google-login-button';
import { getUser } from '@/src/lib/firebase/get-user';

export default async function Login() {
  const user = await getUser();

  if (user) {
    redirect('/dashboard');
  }

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <GoogleLoginButton />
    </div>
  );
}
