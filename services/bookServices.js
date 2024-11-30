const prisma= require("../config/db")

class BookService {
    async creatBook(data){
        return await prisma.book.create({data})
    }

    async getAllbooks(){
        return await prisma.book.findMany()
    }

    async getBookById(id){
        return await prisma.book.findUnique({where:{id}})
    }

    async updateBookById(id,data){
        return await prisma.book.update({where:{id},data})
    }

    async deleteBookById(id){
        return await prisma.book.delete({where:{id}})
    }
}

module.exports= new BookService()