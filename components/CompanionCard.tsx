import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { subjectsColors } from '@/constants'
import Link from 'next/link'

interface Companion {
  id: string
  subject: string
  name: string
  topic: string
  duration: number
  color: string
}

interface CompanionCardProps {
  data: Companion
  signedIn?: boolean
}

const subjectIconMap: Record<string, string> = {
  'computer networks': 'cn',
  dbms: 'dbms',
  'data structures & algorithms': 'dsa',
  oop: 'oops',
  'operating systems': 'os',
  'software engineering': 'sde',
}

const CompanionCard = ({ data, signedIn = true }: CompanionCardProps) => {
  const iconName = subjectIconMap[data.subject] ?? data.subject.replace(/\s+/g, '_')
  const bgColor = data.color ?? subjectsColors[data.subject as keyof typeof subjectsColors] ?? '#FFFFFF'
  return (
    <div
      className="relative companion-card"
      style={{ backgroundColor: bgColor }}
    >
      {/* Bookmark icon */}
      <Image
        src="/icons/bookmark.svg"
        alt="bookmark"
        width={20}
        height={20}
        className="absolute top-3 left-3"
      />
      {/* Subject icon */}
      <Image
        src={`/icons/${iconName}.png`}
        alt={data.subject}
        width={24}
        height={24}
        className="absolute top-3 right-3"
      />

      <div className="flex flex-col gap-2 pt-8">
        <span className="text-xs uppercase tracking-wide opacity-70">
          {data.subject}
        </span>
        <h3 className="text-lg font-semibold leading-tight">{data.name}</h3>
        <p className="text-sm text-muted-foreground">{data.topic}</p>
      </div>

      <div className="mt-auto flex items-center justify-between pt-4">
        <span className="flex items-center gap-1 text-sm">
          <Image src="/icons/clock.svg" alt="duration" width={16} height={16} />
          {data.duration} min
        </span>
        <Button
          asChild
          size="sm"
          className="bg-red-500 hover:bg-red-600 text-white shadow"
        >
          <Link href={signedIn ? `/companions/${data.id}` : `/sign-in?redirect_url=/companions/${data.id}`}>
            {signedIn ? 'Launch lesson' : 'Sign in to launch'}
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default CompanionCard