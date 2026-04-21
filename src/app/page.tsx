import { Button } from '@/components/ui/button'
import { ArrowRight, Github, ReceiptText, UsersRound } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function HomePage() {
  const t = useTranslations()
  return (
    <main className="flex min-h-[calc(100svh-3.5rem)] flex-col justify-center px-4 py-14 sm:px-8">
      <section className="surface-in mx-auto flex w-full max-w-5xl flex-col gap-10">
        <div className="flex max-w-2xl flex-col gap-6">
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
            <span className="size-2 rounded-full bg-[hsl(var(--success))] shadow-[0_0_18px_hsl(var(--success)/0.55)]" />
            Private shared expenses
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-display text-5xl font-extrabold leading-none text-foreground sm:text-6xl md:text-7xl">
              Spliit
            </h1>
            <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
              Split dinners, trips, and household costs without accounts, ads,
              or ceremony. Built into jorisbakx.nl for the people who need it.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/groups">
                {t('Homepage.button.groups')}
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/groups/create">
                <ReceiptText className="mr-2 size-4" />
                Create a group
              </Link>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <Link href="https://github.com/spliit-app/spliit">
                <Github className="mr-2 size-4" />
                {t('Homepage.button.github')}
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-3 border-t pt-6 sm:grid-cols-3">
          <div className="flex items-start gap-3 rounded-lg border bg-card/70 p-4">
            <ReceiptText className="mt-0.5 size-4 text-primary" />
            <div className="flex flex-col gap-1">
              <h2 className="text-sm font-semibold text-foreground">
                Track expenses
              </h2>
              <p className="text-sm leading-6 text-muted-foreground">
                Add receipts, reimbursements, dates, and categories.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-lg border bg-card/70 p-4">
            <UsersRound className="mt-0.5 size-4 text-primary" />
            <div className="flex flex-col gap-1">
              <h2 className="text-sm font-semibold text-foreground">
                Share privately
              </h2>
              <p className="text-sm leading-6 text-muted-foreground">
                Send a group link and keep the workflow account-free.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-lg border bg-card/70 p-4">
            <ArrowRight className="mt-0.5 size-4 text-primary" />
            <div className="flex flex-col gap-1">
              <h2 className="text-sm font-semibold text-foreground">
                Settle up
              </h2>
              <p className="text-sm leading-6 text-muted-foreground">
                See balances and the shortest reimbursement path.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
