import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <SignIn
          path="/connexion"
          routing="path"
          signUpUrl="/inscription"
          redirectUrl="/"
          appearance={{
            elements: {
              rootBox: "mx-auto",
              card: "bg-white shadow-lg rounded-lg p-8",
            },
          }}
        />
      </div>
    </div>
  );
} 