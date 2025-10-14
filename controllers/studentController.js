import Student from "../models/student.js";
export function getAllStudents(req,res){
   Student.find().then(
       (students)=>{
           res.json(students);
       }
   ).catch(
       ()=>{
           res.json({
               message:"student not found"});
       }

   )    
    
}

export function saveStudent(req,res){
    const student= new Student(req.body)
    student.save().then(
        ()=>{
            res.json({
                message:"student saved"
            });
        }
    ).catch(
        ()=>{
            res.json({
                message:"student not saved" 
            });
        }
    )
}

export function updateStudent(req,res){
    res.json({
        message:"student updated"
    })
}

export function deleteStudent(req,res){
    res.json({
        message:"student deleted"
    })    
      
}

