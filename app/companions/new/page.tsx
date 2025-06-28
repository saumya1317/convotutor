
import Navbar from '@/components/Navbar';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import Companionform from '@/components/Companionform';
import Image from 'next/image';
import Link from 'next/link';
import { newCompanionPermissions } from '@/lib/actions/companion.actions';

export default async function NewCompanionPage() {
    const { userId } = await auth();
    if (!userId) {
        redirect('/sign-in');
    }

    const canCreateCompanion = await newCompanionPermissions();

    return (
        <main className="pt-32 flex flex-col gap-8 items-center px-4">
            <Navbar />
            {canCreateCompanion ? (
                <div className="flex flex-col items-center gap-8">
                    <h1 className="text-3xl font-bold">Companion Builder</h1>
                    <Companionform />
                </div>
            ) : (
                <article className="companion-limit">
                    <Image
                        src="/images/limit.svg"
                        alt="Companion limit reached"
                        width={360}
                        height={230}
                    />
                    <div className="cta-badge">
                        upgrade your plan
                    </div>
                    <h1>You&apos;ve reached your limit</h1>
                    <p>You&apos;ve reached your companion limit. Upgrade to create more companions and premium features</p>
                    <Link href="/subscription" className="btn-primary w-full justify-center">
                        Upgrade right now
                    </Link>
                </article>
            )}
        </main>
    );
}