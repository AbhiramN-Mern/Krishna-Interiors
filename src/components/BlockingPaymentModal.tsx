import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";

const Overlay: React.FC<React.ComponentProps<typeof DialogPrimitive.Overlay>> = (props) => (
  <DialogPrimitive.Overlay
    {...props}
    className={cn("fixed inset-0 z-50 bg-black/80", props.className)}
  />
);

const Content: React.FC<React.ComponentProps<typeof DialogPrimitive.Content>> = ({ children, ...props }) => (
  <DialogPrimitive.Portal>
    <Overlay />
    <DialogPrimitive.Content
      {...props}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] rounded-lg bg-white p-6 shadow-lg",
        (props as any).className,
      )}
    >
      {children}
    </DialogPrimitive.Content>
  </DialogPrimitive.Portal>
);

export default function BlockingPaymentModal() {
  const [open, setOpen] = React.useState(false);
  const timerRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    // show after 4 seconds
    timerRef.current = window.setTimeout(() => setOpen(true), 4000);
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, []);

  function handleOpenChange(next: boolean) {
    // Prevent closing the modal by the user. It remains open until you decide programmatically.
    if (!next) {
      setOpen(true);
      return;
    }
    setOpen(next);
  }

  return (
    <DialogPrimitive.Root open={open} onOpenChange={handleOpenChange}>
      <Content>
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-xl font-semibold"></h2>
          <p className="text-sm text-muted-foreground">
            The owner has not paid the amount for this website. Please contact the Web Development team and completion of payment.
          </p>
        </div>
      </Content>
    </DialogPrimitive.Root>
  );
}
