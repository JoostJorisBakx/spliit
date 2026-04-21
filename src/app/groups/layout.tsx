import { PropsWithChildren, Suspense } from 'react'

export default function GroupsLayout({ children }: PropsWithChildren<{}>) {
  return (
    <Suspense>
      <main className="mx-auto flex w-full max-w-screen-md flex-1 flex-col gap-6 px-4 py-8 sm:px-6 sm:py-10">
        {children}
      </main>
    </Suspense>
  )
}
