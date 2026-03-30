import type { GetHomePageQueryResult } from '@/src/schema';
import { GithubIcon, Linkedin, MailIcon, Phone } from 'lucide-react';
import TelegramIcon from '@/src/components/global/icons/telegram-icon';

type ContactSections = {
  data:
    | NonNullable<GetHomePageQueryResult>['contactSection']
    | null
    | undefined;
};

const linkCss =
  'flex items-center justify-center gap-2 hover:underline hover:underline-offset-1 text-header';

const linkIconCss = 'size-6 text-header';

export default function ContactSection({ data }: ContactSections) {
  if (!data) {
    return null;
  }

  return (
    <div className="mb-6 md:mb-16">
      <h3 className="text-header mb-16 text-3xl font-semibold uppercase">
        {data?.slug?.current}
      </h3>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-18">
        <div className="space-y-9">
          <p className="text-[22px]">{data?.mainText}</p>

          <p className="text-foreground/35 text-[22px]">
            If you have an opportunity, project, or collaboration in mind, I’d
            be glad to connect.
          </p>
        </div>

        <div className="flex flex-col items-start justify-between gap-4">
          <div className="flex items-center justify-center gap-2">
            <Phone className={linkIconCss} />

            <div className="text-foreground/60">{data?.phoneNumber}</div>
          </div>

          <div className="flex items-center justify-center gap-2">
            <MailIcon className={linkIconCss} />

            <div className="text-foreground/60">{data?.email}</div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <a
              href={data?.linkedinLink}
              rel="noopener noreferrer"
              target="_blank"
              className={linkCss}
            >
              <Linkedin className={linkIconCss} />

              <div>LinkedIn</div>
            </a>

            <a
              href={data?.githubLink}
              rel="noopener noreferrer"
              target="_blank"
              className={linkCss}
            >
              <GithubIcon className={linkIconCss} />

              <div>GitHub</div>
            </a>

            <a
              href="https://t.me/mdbobskiy"
              target="_blank"
              rel="noreferrer noopener"
              className={linkCss}
            >
              <TelegramIcon className={linkIconCss} />

              <div>Telegram</div>
            </a>
          </div>

          <div className="space-y-6">
            <div className="text-foreground/35 text-[22px]">
              {data?.locationText}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
