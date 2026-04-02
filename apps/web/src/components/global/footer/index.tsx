import Link from 'next/link';
import { GithubIcon, Linkedin } from 'lucide-react';
import Logo from '@/src/components/global/logo';
import TelegramIcon from '@/src/components/global/icons/telegram-icon';
import FooterLink from '@/src/components/global/footer/footer-link';

const YEAR = new Date().getFullYear();

const linkCss = 'dark:text-foreground size-[24px] text-white';

export default function Footer() {
  return (
    <footer className="bg-header bottom-0 mt-3 flex w-full">
      <div className="dark:text-foreground mx-auto box-border flex w-full max-w-[90rem] flex-col items-start justify-center gap-4 p-6 text-white md:gap-8 md:px-[120px] md:pt-6 md:pb-6">
        <div className="flex w-full items-center justify-between">
          <div className="flex gap-2">
            <Link href={'/'}>
              <Logo className="dark:text-foreground" />
            </Link>
          </div>

          <div className="space-y-2 text-center">
            <p className="text-base font-semibold">Find Me</p>

            <div className="flex gap-5">
              <a
                aria-label="Linkedin profile"
                href="https://www.linkedin.com/in/mdbobskiy/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Linkedin className={linkCss} />
              </a>

              <a
                aria-label="GitHub profile"
                href="https://github.com/jin-bob"
                target="_blank"
                rel="noreferrer noopener"
              >
                <GithubIcon className={linkCss} />
              </a>

              <a
                aria-label="Telegram profile"
                href="https://t.me/mdbobskiy"
                target="_blank"
                rel="noreferrer noopener"
              >
                <TelegramIcon className={linkCss} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex gap-4 md:gap-8">
          <FooterLink href="/about">About</FooterLink>

          <FooterLink href="/experience">Experience</FooterLink>

          <FooterLink href="/contact">Contact</FooterLink>
        </div>

        <div className="border-background/40 w-full border-t pt-8 md:flex md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <p className="dark:text-foreground text-xs leading-5 text-white">
              &copy; {YEAR} Recall
            </p>

            <FooterLink href="/terms" variant="small">
              Terms of Service
            </FooterLink>

            <FooterLink href="/contact-us" variant="small">
              Contact Us
            </FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
