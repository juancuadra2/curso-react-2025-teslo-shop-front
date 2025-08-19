import { AdminTitle } from "@/admin/components/AdminTitle"
import { CustomPagination } from "@/components/custom/CustomPagination"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TableCell, Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { PlusIcon, SquarePen, Trash } from "lucide-react"
import { Link } from "react-router"

export const AdminProductsPage = () => {
  return (
    <>
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">

            <AdminTitle title="Productos" subtitle="Aqui puedes gestionar tus productos" />

            <div className="">
              <Link to="/admin/products/new">
                <Button>
                  <PlusIcon />
                  Crear producto
                </Button>
              </Link>
            </div>

            <div className="py-4">
              <Table className="p-10 shadow-xs my-2">
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">ID</TableHead>
                    <TableHead>Imagen</TableHead>
                    <TableHead>Nombre</TableHead>
                    <TableHead className="text-right">Precio</TableHead>
                    <TableHead>Categoria</TableHead>
                    <TableHead>Inventario</TableHead>
                    <TableHead>Tallas</TableHead>
                    <TableHead className="text-right">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">1</TableCell>
                    <TableCell>
                      <img src="https://github.com/shadcn.png" alt="Product Image" className="w-10 h-10 object-cover rounded-md" />
                    </TableCell>
                    <TableCell>Product Name</TableCell>
                    <TableCell className="text-right">$250.00</TableCell>
                    <TableCell>Categoria 1</TableCell>
                    <TableCell>10</TableCell>
                    <TableCell>
                      <Badge variant="outline">M</Badge>
                      <Badge variant="outline">S</Badge>
                    </TableCell>
                    <TableCell className="text-right">

                      <Button className="mr-2" variant="outline" asChild>
                        <Link to="/admin/products/1">
                          <SquarePen />
                          Editar
                        </Link>
                      </Button>

                      <Button variant="destructive">
                        <Trash />
                        Eliminar
                      </Button>

                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <div className="mt-4">
                <CustomPagination totalPages={10} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
