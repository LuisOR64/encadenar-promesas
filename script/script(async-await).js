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

    // async, sirve para convertir una funcion a una funcion promesa
    // con la diferencia, de que esta usa return como un resolve
    // y un throw como un reject
    // teniendo al final un comportamiento normal como una funcion
    // cabe resaltar que este tipo de funciones devuelven una promesa
    var get_student_by_id = async (id)=>{

                for(let cont=0;cont < student.length;++cont){
                    if(student[cont].id == id){
                        return student[cont];
                    }
                }
                throw "Student not found";
    }

    var get_course_by_id_student = async (id_student)=>{

            for(let cont=0;cont<course.length;++cont){
                if(course[cont].id_student == id_student){
                    return course[cont];
                }
            }
            throw "Cursos no encontrados";
    }

    var kimi_comand = ()=>{

    }

    // get_student_by_id(2).then(data=>console.log(data))
    //                      .catch(data=>console.error(data));;

    // await permite obtener un valor directo de una
    // promesa(incluye el tiempo de respuesta), 
    // sin embargo, requiere que esta se encuentre dentro de
    // una funcion async 

    var get_data = async (id)=>{
        var student_temp = await get_student_by_id(id);
        var course_temp = await get_course_by_id_student(id);
        return [student_temp, course_temp];
    }

    get_data(1).then(([student, course])=>{
        console.log(student);
        console.log(course.course);
    }).catch((data)=>{
        console.error(data);
    });

})