import { PrismaClient } from '@prisma/client';
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export const QueryLiv = async () => {
    try {
        const listl = await prisma.specialites.findMany();
        return listl
    } catch (error) {
        console.log(error)
    }
    finally {
        prisma.$disconnect()
    }
}
export async function GET() {
    const specialites = await QueryLiv()
    return NextResponse.json(specialites);
}

// CREATE DATA
export async function POST(request) {
    try {

        const json = await request.json();
        const specialites = await prisma.specialites.create({
            data: json,
        });
        return NextResponse.json(specialites);
    } catch (error) {
        return new NextResponse(JSON.stringify(error), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}