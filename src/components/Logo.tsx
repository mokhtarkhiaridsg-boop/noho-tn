import Image from "next/image";

export default function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/brand/logo-trans.png"
      alt="NOHO Mailbox Tunisie"
      width={596}
      height={343}
      priority
      className={className}
    />
  );
}
