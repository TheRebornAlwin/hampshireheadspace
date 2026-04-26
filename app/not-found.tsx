import Container from "@/components/Container";
import Button from "@/components/Button";
import CloudBlob from "@/components/illustrations/CloudBlob";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <CloudBlob
        variant="yellow"
        className="pointer-events-none absolute -top-12 right-[-6rem] h-64 w-[24rem] opacity-25"
      />
      <Container>
        <div className="text-center">
          <p className="text-[13px] font-semibold uppercase tracking-wider text-navy/60">
            404
          </p>
          <h1 className="mt-3 text-balance text-[2rem] font-semibold leading-[1.15] text-navy sm:text-[2.5rem]">
            We couldn&apos;t find that page.
          </h1>
          <p className="mx-auto mt-5 max-w-md text-pretty leading-relaxed text-navy/85">
            Probably nothing important. Let&apos;s get you back somewhere
            useful.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/">Back to home</Button>
            <Button href="/contact/" variant="secondary">
              Get in touch
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
