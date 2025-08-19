interface Props {
    title: string;
    subtitle?: string;
}

export const AdminTitle = ({ title, subtitle }: Props) => {
  return (
    <div className="scroll-m-20 text-center py-3">
      <h1 className="text-4xl font-extrabold tracking-tight text-balance">
        {title}
      </h1>
      {subtitle && (
        <h2 className="mt-2 text-lg font-semibold text-muted-foreground">
          {subtitle}
        </h2>
      )}
    </div>
  )
}