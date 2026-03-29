import { Button } from '@/src/components/ui/button';
import { GithubIcon, Linkedin } from 'lucide-react';
import PhoneButton from '@/src/components/global/phone-button';
import EmailButton from '@/src/components/global/email-button';

export default function ContactSection() {
  return (
    <div>
      <h3 className="text-header mb-16 text-3xl font-semibold uppercase">
        Contact
      </h3>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-18">
        <div className="space-y-9">
          <p className="text-[22px]">
            Open to remote frontend opportunities and interested in building
            modern, high-quality product experiences.
          </p>

          <div className="space-y-6">
            <div className="text-2xl text-zinc-500">Ukraine, Kyiv</div>

            <div className="flex gap-4">
              <PhoneButton />

              <EmailButton />

              <Button asChild variant="outline" className="text-header">
                <a
                  href="https://www.linkedin.com/in/mdbobskiy"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Linkedin />
                </a>
              </Button>

              <Button asChild variant="outline" className="text-header">
                <a
                  href="https://github.com/jin-bob"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <GithubIcon />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div>
          <form className="space-y-8">
            <div className="flex w-full items-center justify-between gap-2">
              <input
                type="text"
                placeholder="Name"
                className="border-foreground w-full min-w-0 rounded-md border px-4 py-2"
              />

              <input
                type="text"
                placeholder="Email"
                className="border-foreground w-full min-w-0 rounded-md border px-4 py-2"
              />
            </div>

            <textarea
              placeholder="Message"
              className="border-foreground h-[calc(0.25rem*38)] min-h-16 w-full resize-none rounded-md border px-4 py-2"
            />

            <Button>Send</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
