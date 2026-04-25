import express from 'express'
import modelconnect from '../model/registermodel.js'
import bcrypt from 'bcrypt'


export const handler = async(req,res)=>{
    console.log(req.body)
    try {
        const { name, email, password } = req.body;
        const checkemail = await modelconnect.findOne({ email });
        if (checkemail) {
            return res.status(400).json({ msg: "email already exist" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const take = await modelconnect.create({ name, email, password: hashedPassword });
        res.status(200).json({ msg: "data inserted successfully", data: take });
    } catch (error) {
        res.status(400).json({ msg: "data not inserted", error: error.message });
    }
}