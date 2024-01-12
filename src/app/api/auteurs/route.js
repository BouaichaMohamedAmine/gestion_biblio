import { PrismaClient } from '@prisma/client';
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export const QueryLiv = async () => {
    try {
        const listl = await prisma.auteurs.findMany();
        return listl
    } catch (error) {
        console.log(error)
    }
    finally {
        prisma.$disconnect()
    }
}
export async function GET() {
    const auteurs = await QueryLiv()
    return NextResponse.json(auteurs);
}

// CREATE DATA
export async function POST(request) {
    try {

        const json = await request.json();
        const auteurs = await prisma.auteurs.create({
            data: json,
        });
        return NextResponse.json(auteurs);
    } catch (error) {
        return new NextResponse(JSON.stringify(error), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}