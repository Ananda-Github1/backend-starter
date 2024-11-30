const bookServices =  require("../services/bookServices")
class BookController{
    async creatBook(req,res){
        try{
            const book = await bookServices.creatBook(req.body)
            res.status(201).json({success:true,book,message:"Booke created Successfully"})
        }catch(error){
            res.status(500).json({success:false,data:[],message:error.message})
        }
    }

    async getAllbooks(req,res){
        try{
            const books = await bookServices.getAllbooks()
            res.status(200).json({success:true,data:books,message:"Booke fetched Successfully"})
        }catch(error){
            res.status(500).json({success:false,data:[],message:error.message})
        }
    }
    async getBookByid(req,res){
        try{
            const book = await bookServices.getBookById(req.params.id)

            if(!book){
                res.status(404).json({success:false,data:[],message:"Booke not found"})
            }
            res.status(200).json({success:true,book,message:"Booke fetched Successfully"})
        }catch(error){
            res.status(500).json({success:false,data:[],message:error.message})
        }
    }
    async updateBook(req,res){
        try{
            const book = await bookServices.updateBookById(req.params.id,req.body)
            res.status(200).json({success:true,data:book,message:"Booke updated Successfully"})
        }catch(error){
            res.status(500).json({success:false,data:[],message:error.message})
        }
    }
    async deleteBook(req,res){
        try{
            const book = await bookServices.deleteBookById(req.params.id)
            res.status(200).json({success:true,data:[],message:"Booke deleted Successfully"})
        }catch(error){
            res.status(500).json({success:false,data:[],message:error.message})
        }
    }
}

module.exports = new BookController();