//array degli oggetti


let teamMembers = [
    {
        nome: "wayne",
        cognome : "bernett",
        job: "Founder & CEO"
    },{
        nome: "angela",
        cognome : "carroll",
        job: "Chief Editor"
    },{
        nome: "Angela",
        cognome : "Lopez",
        job: "Social Media Manager"
    },{
        nome: "Walter ",
        cognome : "Gordon",
        job: "Office Manager"
    },{
        nome: "Scott",
        cognome : "Estrada",
        job: "Developer"
    },{
        nome: "Barbara",
        cognome : "Ramos",
        job: "Graphic Designer"
    }


];



//stampo in console ogni oggetto
for (let i = 0; i<teamMembers.length; i++){
    
    const node= teamMembers[i];
    for (let key in node){
        console.log(node[key]);
    }

}


