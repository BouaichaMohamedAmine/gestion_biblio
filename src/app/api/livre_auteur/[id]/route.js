import { PrismaClient } from '@prisma/client';
import { NextResponse } from "next/server";
const prisma = new PrismaClient();
export const GET=async(req,{params})=> {
try {
const id=parseInt(params.id)
const result =await prisma.livre_auteur.findUnique({
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
    const liv_aut = await req.json();
    const id=parseInt(params.id)
    const result = await prisma.livre_auteur.update({
    where:{
    id
    },
    data: liv_aut,
    });
    return NextResponse.json( result )
    } catch (error) {
    console.log(error)
    }
    }

    export const DELETE=async(req,{params})=> {
        try {
        const id=parseInt(params.id)
        await prisma.livre_auteur.delete({
        where:{
        id
        },
        });
        return NextResponse.json( "article deleted successfully." )
        } catch (error) {
        console.log(error)
        }
        
        }