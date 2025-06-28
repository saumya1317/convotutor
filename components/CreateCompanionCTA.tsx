import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const CreateCompanionCTA = () => {
  return (
    <div className="companion-card flex flex-col items-center justify-center text-center gap-4 h-full bg-black text-white">
      <Image
        src="/images/cta.svg"
        alt="cta illustration"
        width={160}
        height={160}
        className="object-contain"
      />
      <h3 className="text-lg font-semibold max-w-xs">
        Build and personalize your learning companion
      </h3>
      <p className="text-sm max-w-xs">
        Pick a name, subject, voice and personality. Start learning through voice
        conversation.
      </p>
      <Link href="/companions/new">
        <Button size="sm" className="bg-orange-500 text-white hover:bg-orange-600">
          Start building
        </Button>
      </Link>
    </div>
  )
}

export default CreateCompanionCTA
