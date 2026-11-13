import { cn } from "@/lib/utils";

type DishImageProps = {
  src: string;
  alt: string;
  label: string;
  ratio?: string;
  className?: string;
  imageClassName?: string;
  loading?: "lazy" | "eager";
  interactive?: boolean;
};

export function DishImage({
  src,
  alt,
  label,
  ratio = "aspect-[4/5]",
  className,
  imageClassName,
  loading = "lazy",
  interactive = true,
}: DishImageProps) {
  return (
    <figure
      tabIndex={interactive ? 0 : undefined}
      aria-label={interactive ? label : undefined}
      className={cn(
        "group relative isolate m-0 overflow-hidden rounded-2xl bg-muted outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background",
        ratio,
        className,
      )}
    >
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        className={cn(
          "h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]",
          imageClassName,
        )}
      />
      <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-caption px-5 pb-4 pt-14 text-primary-foreground opacity-100 transition-all duration-300 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus-visible:translate-y-0 md:group-focus-visible:opacity-100">
        <span className="block text-sm font-medium tracking-wide md:text-base">{label}</span>
      </figcaption>
    </figure>
  );
}
