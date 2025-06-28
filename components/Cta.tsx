import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Cta = () => {
  return (
    <div className="cta-section mx-auto">
      <span className="cta-badge text-sm font-semibold">Free Beta</span>
      <h3 className="text-2xl font-bold max-w-md">
        Join thousands of learners building their knowledge with Convotutor.
      </h3>
      <Link href="/sign-in">
        <Button size="lg" variant="secondary">
          Get started — it&apos;s free
        </Button>
      </Link>
    </div>
  )
}

export default Cta