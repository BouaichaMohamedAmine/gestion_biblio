import { PrismaClient } from '@prisma/client';
import { NextResponse } from "next/server";
const prisma = new PrismaClient();
export const GET = async (req, { params }) => {
    try {
        const id = parseInt(params.id)
        const result = await prisma.editeurs.findUnique({
            where: {
                id
            },
        });
        return NextResponse.json(result)
    } catch (error) {
        console.log(error)
    }

}
export const PUT = async (req, { params }) => {
    try {
        const editeur = await req.json();
        const id = parseInt(params.id)
        const result = await prisma.editeurs.update({
            where: {
                id
            },

            data: editeur,
        });
        return NextResponse.json(result)
    } catch (error) {
        console.log(error)
    }
}
export const DELETE = async (req, { params }) => {
    try {
        const id = parseInt(params.id)
        await prisma.editeurs.delete({
            where: {
                id
            },
        });
        return NextResponse.json("article deleted successfully.")
    } catch (error) {
        console.log(error)
    }

}