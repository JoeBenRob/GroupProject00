const urlBase = "http://localhost:9966/petclinic/";

function makeRequest(requestType, url, sendData) {
    return new Promise((res, rej) => {
        let req = new XMLHttpRequest();
        req.onload = () => {
            if (req.status >= 200 && req.status <= 299) {
                res(req);
            } else {
                rej(req);
            }
        }
        req.open(requestType, url);

        req.send(sendData);
    });
}

//Function called by button
function onPressUpdateVet(id, firstName, lastName, specIDs) {
    let vet = vetMaker(firstName, lastName, specIDs);
    updateVet(id, vet);
}

//Make put request for vet
function updateVet(id, vetUpdate) {
    makeRequest("PUT", `http://localhost:9966/petclinic/vets/${id}`, JSON.stringify(vetUpdate)).then((req) => {
        console.log("Vet updated!");
    }).catch(() => { console.log("Vet didn't update.") });
}

//Create vet object
function vetMaker(firstName, lastName, specialityIDs) {
    let specialities = specialitiesMaker(specialityIDs);

    const vet = {
        firstName: firstName,
        lastName: lastName,
        specialities: specialities
    };

    return vet;
}

//Create specialities for vet
function specialitiesMaker(specialityIDs) {
    let specialities = [];
    for (let i = 0; i < specialityIDs; i++) {
        specialities.push(JSON.parse(getSpeciality(specialityIDs[i])));
    }
    return specialities;
}

//====GET REQUESTS====
function getSpeciality(id) {
    makeRequest("GET", `http://localhost:9966/petclinic/specialities/${id}`).then((req) => {
        console.log("It worked!");
    }).catch(() => { console.log("Didn't work.") });
}

function getPet(id) {
    makeRequest("GET", `http://localhost:9966/petclinic/pets/${id}`).then((req) => {
        console.log("It worked!");
    }).catch(() => { console.log("Didn't work.") });
}

function getPetType(id) {
    makeRequest("GET", `http://localhost:9966/petclinic/pettypes/${id}`).then((req) => {
        console.log("It worked!");
    }).catch(() => { console.log("Didn't work.") });
}

function getOwner(id) {
    makeRequest("GET", `http://localhost:9966/petclinic/owners/${id}`).then((req) => {
        console.log("It worked!");
    }).catch(() => { console.log("Didn't work.") });
}
function getVisits(id) {
    makeRequest("GET", `http://localhost:9966/petclinic/visits/${id}`).then((req) => {
        console.log("It worked!");
    }).catch(() => { console.log("Didn't work.") });
}

function getVet(id) {
    makeRequest("GET", `http://localhost:9966/petclinic/vets/${id}`).then((req) => {
        console.log("It worked!");
    }).catch(() => { console.log("Didn't work.") });
}
//====================


function createOwner() {

    let pets = createPets

    const anOwner = {



        address: address.value,
        city: city.value,
        firstname: fistname.value,
        id: id.value,
        lastName: lastName.value,
        //pets:
        telephone: telephone.value

    }
    return anOwner;
}

function createPet() {
    const aPet = {
        birthDate: birthdate.value,
        id: id.value,
        name: name.value,
        owner: owner.value,
        //type: type.value
    }
    return aPet;
}

function createType() {
    const aType = {
        id: id.value,
        name: name.value
    }
    return aType;
}

function createVisit() {
    const aVisit = {
        date: date.value,
        description: description.value,
        id: id.value,
        pet: pet.value
    }
    return aVisit;
}