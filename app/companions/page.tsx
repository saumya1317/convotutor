import Navbar from '@/components/Navbar';
import CompanionCard from '@/components/CompanionCard';
import { createSupabaseClient } from '@/lib/supabase';
import { notFound } from 'next/navigation';
import Searchinput from '@/components/Searchinput';
import Subjectfilter from '@/components/Subjectfilter';
import { auth } from '@clerk/nextjs/server';
import CreateCompanionCTA from '@/components/CreateCompanionCTA';
import CompanionList from '@/components/CompanionList';
import { recentSessions } from '@/constants';

const NewCompanion =async ({searchParams}: SearchParams)=>{
  const { userId } = await auth();
  const signedIn = !!userId;

  const filters = await searchParams;
  const subject = filters.subject ? filters.subject :'';
  const topic = filters.topic ? filters.topic :'';
  
  const supabase = createSupabaseClient();
  let query = supabase.from('user').select('*');

  // Public vs user-specific companions
  if (userId) {
    // Show public companions (author is null) + user-owned companions
    query = query.or(`author.is.null,author.eq.${userId}`);
  } else {
    // Only public companions for signed-out users
    query = query.is('author', null);
  }

  if (subject) query = query.ilike('subject', `%${subject}%`);
  if (topic)   query = query.ilike('topic',   `%${topic}%`);

  const { data: fetchedCompanions, error } = await query;
  if (error) return notFound();

  // Use defaults if none fetched (e.g., signed-out and no public rows)
  let companions = fetchedCompanions ?? [];
  if (!companions.length && !signedIn && !subject && !topic) {
    companions = recentSessions;
  }

  const showcaseCompanions = companions.slice(0, 3);

  return (
    <main className="px-4 pt-28 flex flex-col items-center gap-10">
      <Navbar />

      {/* Header + filters */}
      <section className="w-full max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <h1 className="text-3xl font-bold">Companion Library</h1>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Searchinput />
          <Subjectfilter />
        </div>
      </section>

      {/* Showcase cards */}
      <section className="companions-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full">
        {showcaseCompanions.map((companion) => (
          <CompanionCard key={companion.id} data={companion} signedIn={signedIn} />
        ))}
      </section>

      {/* List + CTA side-by-side */}
      <section className="w-full max-w-5xl flex flex-col lg:flex-row gap-6">
        <CompanionList companions={companions} signedIn={signedIn} classNames="flex-1" />

        {/* CTA card on the right */}
        <div className="w-full lg:w-80 self-start">
          <CreateCompanionCTA />
        </div>
      </section>
    </main>
  );
}

export default NewCompanion;
  