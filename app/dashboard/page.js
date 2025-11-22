import { currentUser } from '@clerk/nextjs/server'

export default async function Page() {
  const user = await currentUser()
  if (!user) return <div>Not signed in</div>

  return (
    <div className="flex justify-center items-center min-h-screen">
      <h1 className="text-5xl font-bold text-center">
        Hello {user?.firstName}
      </h1>
    </div>
  )
}
