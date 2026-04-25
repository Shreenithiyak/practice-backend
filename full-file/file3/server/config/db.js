import mongoose from 'mongoose'


const conectdb =async()=>{
    try {
        const db =await mongoose.connect(process.env.MONGO_URI)
        console.log(`crt flow of connecting db`)
    } catch (error) {
        console.log('some conection went wrong',error)
    }
}

export default conectdb