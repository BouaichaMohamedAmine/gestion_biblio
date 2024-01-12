import { PrismaClient } from '@prisma/client';
import { NextResponse } from "next/server";
const prisma = new PrismaClient();
export const GET=async(req,{params})=> {
try {
const id=parseInt(params.id)
const result =await prisma.auteurs.findUnique({
where:{
id
},
});
return NextResponse.json( result)
} catch (error) {
console.log(error)
}

}

export const PUT=async(req, {params})=> {
    try {
    const auteur = await req.json();
    const id=parseInt(params.id)
    const result = await prisma.auteurs.update({
    where:{
    id
    },
    data: auteur,
    });
    return NextResponse.json( result )
    } catch (error) {
    console.log(error)
    }
    }

    export const DELETE=async(req,{params})=> {
        try {
        const id=parseInt(params.id)
        await prisma.auteurs.delete({
        where:{
        id
        },
        });
        return NextResponse.json( "article deleted successfully." )
        } catch (error) {
        console.log(error)
        }
        
        }