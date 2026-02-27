import { defineQuery } from 'next-sanity';
import { PortableText } from '@portabletext/react';
import { simpleComponent } from '@/src/components/global/simple-components';
import { client } from '@/src/lib/sanity/client';

export const dynamic = 'force-static';

const contactPageQuery = defineQuery(`*[_type=="contactPage"][0]{
content
}`);

export default async function ContactPage() {
  const data = await client.fetch(contactPageQuery);

  return (
    <div className="prose prose-neutral dark:prose-invert mx-auto max-w-4xl px-6 py-16">
      <PortableText
        value={data?.content ? data.content : []}
        components={simpleComponent}
      />
    </div>
  );
}
