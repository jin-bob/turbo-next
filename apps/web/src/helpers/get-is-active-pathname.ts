type GetIsActiveProps = {
  pathName: string;
  to: string;
};

export default function getIsActivePathname({
  pathName,
  to,
}: GetIsActiveProps) {
  if (to === '/' && pathName === '/dashboard') return true;

  const endPath = pathName.split('/')?.[2];

  return to === `/${endPath}`;
}
