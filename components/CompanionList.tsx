import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@/components/ui/table'
import { cn } from '@/lib/utils'
import Link from 'next/link'

interface Companion {
  id: string
  subject: string
  name: string
  topic: string
  duration: number
  color: string
}

interface CompanionListProps {
  title?: string;
  companions: Companion[];
  signedIn?: boolean;
  classNames?: string;
}

const subjectIconMap: Record<string, string> = {
  'computer networks': 'cn',
  dbms: 'dbms',
  'data structures & algorithms': 'dsa',
  oop: 'oops',
  'operating systems': 'os',
  'software engineering': 'sde',
}

const CompanionList = ({ title, companions, signedIn = true, classNames = "" }: CompanionListProps) => {
  const icon = (subject: string) =>
    subjectIconMap[subject] ?? subject.replace(/\s+/g, '_')

  return (
    <div className={cn("border border-black rounded-4xl p-2", classNames)}>
      {title && <h3 className="font-semibold mb-2">{title}</h3>}
      <Table className="rounded-border overflow-hidden">
        <TableHeader>
          <TableRow>
            <TableHead>Companion</TableHead>
            <TableHead>Topic</TableHead>
            <TableHead className="text-right">Duration</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companions.map((c) => (
            <TableRow key={c.id} style={{ backgroundColor: c.color }}>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Image
                    src={`/icons/${icon(c.subject)}.png`}
                    alt={c.subject}
                    width={20}
                    height={20}
                  />
                  {c.name}
                </div>
              </TableCell>
              <TableCell>{c.topic}</TableCell>
              <TableCell className="text-right">
                <span className="flex items-center gap-1 justify-end">
                  <Image src="/icons/clock.svg" alt="duration" width={16} height={16} />
                  {c.duration} min
                </span>
              </TableCell>
              <TableCell className="text-right">
                <Button asChild size="sm" className="bg-red-500 hover:bg-red-600 text-white">
                  <Link href={signedIn ? `/companions/${c.id}` : `/sign-in?redirect_url=/companions/${c.id}`}>
                    {signedIn ? 'Launch' : 'Sign in'}
                  </Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default CompanionList