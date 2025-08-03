import useAuth from '@/hooks/use-auth'
import { cn } from '@/lib/shadcn'
import { Task } from '@/schemas/task-schema'
import { EnvelopeClosedIcon } from '@radix-ui/react-icons'
import { Row } from '@tanstack/react-table'

export default function TaskColumnDisplay({ row }: { row: Row<Task> }) {
  const { user } = useAuth()
  const globalRemindByEmailEnabled = !!user?.settings?.remindByEmailEnabled
  const daysRepeat = Number(row.original.daysRepeat)
  const repeatGoalEnabled = daysRepeat > 0 && row.original.repeatGoalEnabled
  const remindByEmail = row.original.remindByEmail
  const willSendEmailReminder =
    globalRemindByEmailEnabled && repeatGoalEnabled && remindByEmail
  const taskName: string = row.getValue('name')

  return (
    <div>
      <p className='text-muted-foreground text-left text-sm font-light'>
        {taskName}
      </p>
      <p
        className={cn(
          'flex items-center gap-1 text-xs',
          !repeatGoalEnabled && 'text-muted-foreground'
        )}>
        {repeatGoalEnabled
          ? `every ${daysRepeat} day${daysRepeat === 1 ? '' : 's'}`
          : 'no goal'}
        {willSendEmailReminder && (
          <EnvelopeClosedIcon className='text-muted-foreground size-2.5' />
        )}
      </p>
    </div>
  )
}
