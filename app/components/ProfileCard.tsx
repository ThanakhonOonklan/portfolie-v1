import Image from "next/image";

type ProfileCardProps = {
  name: string;
  title: string;
  handle: string;
  status: string;
  contactText: string;
  avatarUrl: string;
  showUserInfo?: boolean;
  enableTilt?: boolean;
  enableMobileTilt?: boolean;
  onContactClick?: () => void;
};

export default function ProfileCard({
  name,
  title,
  handle,
  status,
  contactText,
  avatarUrl,
  showUserInfo = true,
  onContactClick,
}: ProfileCardProps) {
  return (
    <div className="relative w-full max-w-sm mx-auto rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-900/80 to-black/80 p-6 shadow-2xl backdrop-blur-md">
      <div className="flex items-center gap-4 mb-4">
        <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-white/10 bg-zinc-800">
          <Image
            src={avatarUrl}
            alt={name}
            fill
            sizes="64px"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium text-zinc-400">
            @{handle}
          </span>
          <h2 className="text-xl font-semibold text-white">{name}</h2>
          <p className="text-sm text-zinc-400">{title}</p>
        </div>
      </div>

      {showUserInfo && (
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-xs font-medium text-emerald-300">
              {status}
            </span>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={onContactClick}
        className="mt-2 w-full rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-black shadow-lg transition hover:scale-[1.02] hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      >
        {contactText}
      </button>
    </div>
  );
}


