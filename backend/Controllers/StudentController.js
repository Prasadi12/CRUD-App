const StudentModel = require('../models/StudentModel')

module.exports.getStudents = async (req,res) =>{
    try {
        const Student = await StudentModel.find({})
        res.status(200).json(Student)
        // res.send('hiiii')
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

module.exports.getStudent = async (req,res) =>{
    try {
        const {id} = req.params;
        const Student = await StudentModel.findById(id);
        res.status(200).json(Student)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports.postStudent = async(req,res) =>{
    try {
        const Student = await StudentModel.create(req.body)
        res.status(200).json(Student)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

module.exports.putStudent = async(req,res) =>{
    try {
        const {id} = req.params;
        const Student = await StudentModel.findByIdAndUpdate(id, req.body)
        if(!Student){
            return res.status(404).json(`Can not find any Student with id ${id}`)
        }
        const updateStudent = await StudentModel.findById(id)
        res.status(500).json(updateStudent)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports.deleteStudent = async(req,res) =>{
    try {
        const {id} = req.params;
        const Student = await StudentModel.findByIdAndDelete(id)
        if(!Student){
            return res.status(404).json(`Can not find any student with id ${id}`)
        }
        res.status(200).json(Student)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}