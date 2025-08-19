interface Props {
    title?: string;
    subtitle?: string;
}
/**
 * Componente funcional de React que representa un "Jumbotron" personalizado para la tienda.
 * 
 * @remarks
 * Este componente recibe propiedades para mostrar un título y un subtítulo en una sección destacada.
 * Si no se proporcionan, utiliza valores predeterminados. Utiliza tipado de TypeScript para asegurar
 * la correcta recepción de las props y aprovecha las ventajas de React para renderizar contenido dinámico.
 * 
 * @param props - Objeto con las siguientes propiedades:
 * @param props.title - Título principal a mostrar en el Jumbotron. Si no se especifica, se usa un valor por defecto.
 * @param props.subtitle - Subtítulo descriptivo a mostrar debajo del título. Si no se especifica, se usa un valor por defecto.
 * 
 * @returns Un elemento JSX que renderiza una sección estilizada con el título y subtítulo proporcionados.
 */
const CustomJumbotron = ({ title, subtitle }: Props) => {

    const defaultTitle = "Welcome to Our Store";
    const defaultSubtitle = "Discover our collection of unique products.";

    return (
        <section className="py-10 px-4 lg:px-8 bg-muted/30">
            <div className="container mx-auto text-center">
                <h1 className="font-montserrat text-2xl lg:text-5xl tracking-tight mb-6">
                    {title || defaultTitle}
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                    {subtitle || defaultSubtitle}
                </p>
            </div>
        </section>
    )
}

export default CustomJumbotron;