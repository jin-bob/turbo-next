import { cn } from '@/src/lib/utils';

export default function Logo({ className }: { className?: string }) {
  return (
    <div className={cn('relative inline-block text-white', className)}>
      <h1 className="[font-family:'Brush_Script_MT','Segoe_Script',cursive] text-[32px] leading-none">
        Recall
      </h1>

      <div className="absolute top-[35%] left-1/2 h-[22px] w-[100px] -translate-x-1/2 rounded-[40%] border-b-[2px] border-white" />
    </div>
  );
}
