import { PrismaService } from './prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateProductDto): import("@prisma/client").Prisma.Prisma__ProductClient<{
        name: string;
        sku: string;
        price: number;
        stock_quantity: number;
        createdAt: Date;
        id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        name: string;
        sku: string;
        price: number;
        stock_quantity: number;
        createdAt: Date;
        id: number;
    }[]>;
    update(id: number, data: UpdateProductDto): import("@prisma/client").Prisma.Prisma__ProductClient<{
        name: string;
        sku: string;
        price: number;
        stock_quantity: number;
        createdAt: Date;
        id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: number): import("@prisma/client").Prisma.Prisma__ProductClient<{
        name: string;
        sku: string;
        price: number;
        stock_quantity: number;
        createdAt: Date;
        id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
