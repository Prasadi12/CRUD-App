const StudentModel = require('../models/StudentModel')

module.exports.getStudents = async(req,res) =>{
    try {
        const Student = await StudentModel.find({})
        res.status(200).json(Student)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports.getStudent = async(req,res) => {
    try {
        const {id} = req.params;
        const Student = await StudentModel.findById({_id:id})
        if(!Student){
            return res.status(404).json(`Can not find any student with id ${id}`)
        }
        res.status(200).json(Student)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports.createStudent = async(req,res) =>{
    try {
        const Student = await StudentModel.create(req.body)
        res.status(200).json(Student)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

module.exports.updateStudent = async(req,res) =>{
    try {
        const {id} = req.params;
        const Student = await StudentModel.findByIdAndUpdate(id, req.body)
        if(!Student){
            res.status(404).json(`Can not find any student with id ${id}`)
        }
        res.status(200).json(Student)
    } catch (error) {
       res.status(500).json({message:error.message}) 
    }
}

module.exports.deleteStudent = async(req,res) =>{
    try {
        const {id} = req.params;
        const Student = await StudentModel.findByIdAndDelete(id)
        if(!Student){
            res.status(404).json(`Can not find any student with id ${id}`)
        }
        res.status(200).json(Student)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}