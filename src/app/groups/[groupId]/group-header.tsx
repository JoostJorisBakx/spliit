'use client'

import { GroupTabs } from '@/app/groups/[groupId]/group-tabs'
import { ShareButton } from '@/app/groups/[groupId]/share-button'
import { Skeleton } from '@/components/ui/skeleton'
import Link from 'next/link'
import { useCurrentGroup } from './current-group-context'

export const GroupHeader = () => {
  const { isLoading, groupId, group } = useCurrentGroup()

  return (
    <div className="surface-in flex flex-col justify-between gap-4 border-b pb-5">
      <h1 className="font-display text-3xl font-bold leading-none text-foreground">
        <Link
          href={`/groups/${groupId}`}
          className="transition-colors hover:text-primary"
        >
          {isLoading ? (
            <Skeleton className="mt-1.5 mb-1.5 h-5 w-32" />
          ) : (
            <span className="flex">{group.name}</span>
          )}
        </Link>
      </h1>

      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <GroupTabs groupId={groupId} />
        {group && <ShareButton group={group} />}
      </div>
    </div>
  )
}
