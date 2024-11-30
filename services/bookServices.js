const prisma= require("../config/db")
const { v4: uuidv4 } = require('uuid');
class BookService {
    async creatBook(data){
        const bookId = uuidv4();
        return await prisma.book.create({
         data:{
            id:bookId,
            ...data
        }
    })
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