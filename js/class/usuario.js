class usuarioFirus{

    constructor(id, name, username, pass, email, imageURL, headerImage, desc, location, bday, role, joinDate, mascotas){
        this.id             = id            || "";
        this.name           = name          || "name";
        this.username       = username      || "username";
        this.pass           = pass          || "pass";
        this.email          = email         || "email";
        this.imageURL       = imageURL      || "https://i.imgur.com/EZEbxMP.png";
        this.headerImage    = headerImage   || "https://i.imgur.com/3OVEMsW.jpeg";
        this.desc           = desc          || "Ingresar descripción.";
        this.location       = location      || "Ingresar ubicación";
        this.bday           = bday          || "Ingresar Fecha de Nacimiento";
        this.role           = role          || "Sin rango";
        this.joinDate       = joinDate      || "";   
    }
}