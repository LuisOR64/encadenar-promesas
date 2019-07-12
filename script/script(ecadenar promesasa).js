$(()=>{
    
        var student = [
            {
                id:0,
                name: "student_name_00",
                last_name: "student_last_name_00"
            },{
                id:1,
                name: "student_name_01",
                last_name: "student_last_name_01"
            },{
                id:2,
                name: "student_name_02",
                last_name: "student_last_name_02"
            }
        ];
    
        var course = [
            {
                id_student:0,
                course: ["POO", "Intelligence business"]
            },{
                id_student:1,
                course: ["ED", "Estructuras discretas"]
            },{
                id_student:2,
                course: ["CS", "Computer science"]
            }
        ];


        var get_student_by_id = (id)=>{
         
            return new Promise((resolve, reject)=>{
                // 

                setTimeout(()=>{
                
                    // console.timeline();

                    for(let cont=0;cont < student.length;++cont){
                        if(student[cont].id == id){
                            resolve(student[cont]);
                            // console.log("kimi");
                            // console.timelineEnd();
                            return;
                        }
                        // console.log("function");
                    }
                    // console.log("kimi");
                    // call_back_function("Student not found", null);
    
                    reject("Student not found");
                    
                }, 1000);
            })
        }
    
    

    
        var get_course_by_id_student = (id_student)=>{
            
            return new Promise((resolve, reject)=>{

                setTimeout(()=>{

                for(let cont=0;cont<course.length;++cont){
                    if(course[cont].id_student == id_student){
                        resolve(course[cont]);        
                        return;
                    }
                }
                reject("Cursos no encontrados");
                }, 1000);
            })
    
        }
    
        // get_student_by_id(2, (message, student_selected)=>{
        //     if(message==null){
        //         var {id, name, last_name} = student_selected;
        //         console.log(`Id: ${id}, Name: ${name}, Last Name: ${last_name}`);
    
        //         get_course_by_id_student(id, (message, cursos)=>{
        //             if(message==null){
        //                 var {course:[abbreviation, name_c]} = cursos;
        //                 console.log(`Ab: ${abbreviation}, Course: ${name_c}`);
        //             }else{
        //                 console.log(message);
        //             }
        //         });
    
        //     }else{
        //          console.log(message);
        //     }
        // });
        // console.log("call2");
    

        // get_course_by_id_student(2).then((data)=>{
        //     console.log(data);
        // }).catch((data)=>{
        //     console.log(data);
        // })

        var temp = 1;

        // get_student_by_id(temp).then((data)=>{
        //     console.log(data);

        //     get_course_by_id_student(temp).then(({course})=>{
        //         console.log(course);
        //     }).catch((data)=>{
        //         console.error(data);
        //     });

        // }).catch((data)=>{
        //     console.error(data);
        // });

        get_student_by_id(temp).then(data=>{
            console.log(data);
            return get_course_by_id_student(temp);
        }).then(({course})=>{
            console.log(course);
        }).catch(data=>{
            console.error(data); 
        });

        // get_student_by_id(temp).then(data=>{
        //     console.log(data);
        //     return get_course_by_id_student(temp);
        // }).then(({course})=>{
        //     console.log(course);
        // }).catch(data=>{
        //     console.error(data);
        // }).catch(data=>{
        //     console.error(data); 
        // });

})