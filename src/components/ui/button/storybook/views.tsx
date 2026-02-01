import * as React from "react";
import { Button } from "../button";

export function Icon({ label }: { label: string }) {
  return (
    <span
      aria-hidden="true"
      className="inline-flex h-4 w-4 items-center justify-center rounded bg-zinc-200 text-[10px] font-bold text-zinc-700 dark:bg-zinc-700 dark:text-zinc-100"
      title={label}
    >
      {label}
    </span>
  );
}

export function PlaygroundView(args: React.ComponentProps<typeof Button>) {
  return (
    <div className="flex flex-col gap-4">
      <Button
        {...args}
        leftIcon={(args as any).leftIcon ?? <Icon label="L" />}
        rightIcon={(args as any).rightIcon ?? <Icon label="R" />}
      />
      <p className="text-sm text-zinc-600 dark:text-zinc-300">
        Подсказка: переключи <code>asChild</code> — и кнопка станет ссылкой (см.
        story ниже).
      </p>
    </div>
  );
}

export function VariantsAndSizesView() {
  const variants = [
    "primary",
    "secondary",
    "outline",
    "ghost",
    "destructive",
    "link",
  ] as const;

  const sizes = ["sm", "md", "lg"] as const;

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
          Variants
        </h3>
        <div className="flex flex-wrap gap-3">
          {variants.map((v) => (
            <Button key={v} variant={v}>
              {v}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
          Sizes
        </h3>
        <div className="flex flex-wrap items-center gap-3">
          {sizes.map((s) => (
            <Button key={s} size={s} variant="primary">
              size: {s}
            </Button>
          ))}
          <Button size="icon" aria-label="icon button" title="icon">
            ⚙️
          </Button>
        </div>
      </div>
    </div>
  );
}

export function StatesView() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
          Loading
        </h3>
        <div className="flex flex-wrap items-center gap-3">
          <Button loading>Loading</Button>
          <Button loading variant="secondary">
            Loading
          </Button>
          <Button loading variant="outline">
            Loading
          </Button>
          <Button loading hideSpinner>
            Loading (spinner hidden)
          </Button>
        </div>
        <p className="text-sm text-zinc-600 dark:text-zinc-300">
          Loading автоматически делает кнопку disabled и ставит{" "}
          <code>aria-busy</code>.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
          Disabled
        </h3>
        <div className="flex flex-wrap items-center gap-3">
          <Button disabled>Disabled</Button>
          <Button disabled variant="secondary">
            Disabled
          </Button>
          <Button disabled variant="outline">
            Disabled
          </Button>
          <Button disabled variant="destructive">
            Disabled
          </Button>
          <Button disabled variant="link">
            Disabled link
          </Button>
        </div>
      </div>
    </div>
  );
}

export function IconsView() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center gap-3">
        <Button leftIcon={<Icon label="L" />}>Left icon</Button>
        <Button rightIcon={<Icon label="R" />}>Right icon</Button>
        <Button leftIcon={<Icon label="L" />} rightIcon={<Icon label="R" />}>
          Both
        </Button>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
          Icon-only (size="icon")
        </h3>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="icon" aria-label="settings" title="Settings">
            ⚙️
          </Button>
          <Button size="icon" variant="secondary" aria-label="star" title="Star">
            ★
          </Button>
          <Button size="icon" variant="outline" aria-label="add" title="Add">
            +
          </Button>
          <Button size="icon" variant="ghost" aria-label="more" title="More">
            ⋯
          </Button>
        </div>
        <p className="text-sm text-zinc-600 dark:text-zinc-300">
          Для icon-only обязательно задавай <code>aria-label</code>.
        </p>
      </div>
    </div>
  );
}

export function LayoutView() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Button fullWidth>Full width</Button>
      <Button fullWidth variant="outline">
        Full width outline
      </Button>
      <Button className="rounded-3xl">Custom className (rounded-3xl)</Button>
    </div>
  );
}

export function AsChildView() {
  return (
    <div className="flex flex-col gap-4">
      <Button asChild variant="primary">
        <a href="#as-child-primary">Link styled as primary button</a>
      </Button>

      <Button asChild variant="outline">
        <a href="#as-child-outline">Link styled as outline button</a>
      </Button>

      <Button asChild variant="link">
        <a href="#as-child-link">Real link look</a>
      </Button>

      <p className="text-sm text-zinc-600 dark:text-zinc-300">
        <code>asChild</code> ожидает один React-элемент ребёнком (например{" "}
        <code>{"<a />"}</code> или <code>{"<Link />"}</code>).
      </p>
    </div>
  );
}

export function ExamplesView() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
          Toolbar actions
        </h3>
        <div className="flex flex-wrap items-center gap-3">
          <Button leftIcon={<Icon label="↻" />}>Refresh</Button>
          <Button variant="secondary" leftIcon={<Icon label="＋" />}>
            New
          </Button>
          <Button variant="outline" rightIcon={<Icon label="→" />}>
            Continue
          </Button>
          <Button variant="destructive" leftIcon={<Icon label="!" />}>
            Delete
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
          Form submit
        </h3>
        <div className="flex flex-wrap items-center gap-3">
          <Button type="submit">Submit</Button>
          <Button type="submit" loading>
            Submitting
          </Button>
          <Button type="reset" variant="ghost">
            Reset
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
          Link CTA
        </h3>
        <div className="flex flex-wrap items-center gap-3">
          <Button asChild variant="primary" rightIcon={<Icon label="↗" />}>
            <a href="#pricing">Go to pricing</a>
          </Button>
          <Button asChild variant="link">
            <a href="#learn-more">Learn more</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
