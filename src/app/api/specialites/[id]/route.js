import { PrismaClient } from '@prisma/client';
import { NextResponse } from "next/server";
const prisma = new PrismaClient();
export const GET=async(req,{params})=> {
try {
const id=parseInt(params.id)
const result =await prisma.specialites.findUnique({
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
    const specialite = await req.json();
    const id=parseInt(params.id)
    const result = await prisma.specialites.update({
    where:{
    id
    },
    data: specialite,
    });
    return NextResponse.json( result )
    } catch (error) {
    console.log(error)
    }
    }

    export const DELETE=async(req,{params})=> {
        try {
        const id=parseInt(params.id)
        await prisma.specialites.delete({
        where:{
        id
        },
        });
        return NextResponse.json( "article deleted successfully." )
        } catch (error) {
        console.log(error)
        }
        
        }