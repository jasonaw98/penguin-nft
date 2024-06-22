import { cn } from "@/utils/cn";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[24rem] grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};
type Attribute = {
  value: string;
};

export const BentoGridItem = ({
  className,
  title,
  description,
  imageUrl,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  imageUrl?: string;
  icon?: Attribute[];
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-gray-800 dark:border-white/[0.2] bg-gray-100 border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div>
          <img src={imageUrl} alt="img" className=" rounded-2xl" />
        </div>
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="flex items-center w-full flex-wrap gap-y-2 gap-x-2">
          {icon &&
            icon.map((item, i) => (
              <div
                key={i}
                className={cn("text-neutral-600 dark:text-neutral-300")}
              >
                <span className="flex px-1 py-1 bg-gray-200 dark:bg-gray-700 rounded-md text-[11px] font-medium">
                  {item.value}
                </span>
              </div>
            ))}
        </div>
        <div className="font-sans text-neutral-600 text-xs dark:text-neutral-300 w-full justify-end flex font-bold">
          {description}
        </div>
      </div>
    </div>
  );
};
