
const urlBase = "http://localhost:9966/petclinic/api/";


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
    let vet = createVet(firstName, lastName, specIDs);
    updateVet(id, vet);
}

function onPressGetAll(url){
    getAll(url);
}
//================

//====PUT REQUESTS====

function updateVet(id, vetUpdate) {
    makeRequest("PUT", `${urlBase}vets/${id}`, JSON.stringify(vetUpdate)).then((req) => {
        console.log("Vet updated!");
    }).catch(() => { console.log("Vet didn't update.") });
}

//================

//====GET REQUESTS====
function get(url, id) {
    makeRequest("GET", `${urlBase}${url}/${id}`).then((req) => {
        console.log("It worked!");
        return req.responseText;
    }).catch(() => { console.log("Didn't work.") });
}

function getAll(url) {
    makeRequest("GET", `${urlBase}${url}`).then((req) => {
        console.log("It worked!");
        return req.responseText;
    }).catch(() => { 
        console.log("Didn't work.") });
}

function getSpeciality(id) {
    makeRequest("GET", `${urlBase}specialities/${id}`).then((req) => {
        console.log("It worked!");
    }).catch(() => { console.log("Didn't work.") });
}

function getPet(id) {
    makeRequest("GET", `${urlBase}pets/${id}`).then((req) => {
        console.log("It worked!");
    }).catch(() => { console.log("Didn't work.") });
}

function getPetType(id) {
    makeRequest("GET", `${urlBase}pettypes/${id}`).then((req) => {
        console.log("It worked!");
    }).catch(() => { console.log("Didn't work.") });
}

function getOwner(id) {
    makeRequest("GET", `${urlBase}owners/${id}`).then((req) => {
        console.log("It worked!");
    }).catch(() => { console.log("Didn't work.") });
}
function getVisits(id) {
    makeRequest("GET", `${urlBase}visits/${id}`).then((req) => {
        console.log("It worked!");
    }).catch(() => { console.log("Didn't work.") });
}

function getVet(id) {
    makeRequest("GET", `${urlBase}vets/${id}`).then((req) => {
        console.log("It worked!");
    }).catch(() => { console.log("Didn't work.") });
}
//================


//====POST REQUESTS=====
function postOwner() {
    let anOwner = createOwner();
    makeRequest("POST", `${urlBase}/owners/`, JSON.stringify(anOwner)).then((req) => {
        console.log("It worked!");
    }).catch(() => { console.log("Didn't work.") });
}

function postSpeciality() {
    let aSpeciality = createSpecialties();
    makeRequest("POST", `${urlBase}specialties`, JSON.stringify(aSpeciality)).then((req) => {
        console.log("It worked!");
    }).catch(() => { console.log("Didn't work.") });
}

function postVisit() {
    let aVisit = createVisits();
    makeRequest("POST", `${urlBase}visits/`, JSON.stringify(aVisit)).then((req) => {
        console.log("It worked!");
    }).catch(() => { console.log("Didn't work.") });
}

function postPet() {
    let aPet = createPets();
    makeRequest("POST", `${urlBase}pets/`, JSON.stringify(aPet)).then((req) => {
        console.log("It worked!");
    }).catch(() => { console.log("Didn't work.") });
}

function postVet() {
    let aVet = createVet();
    makeRequest("POST", `${urlBase}vets/`, JSON.stringify(aVet)).then((req) => {
        console.log("It worked!");
    }).catch(() => { console.log("Didn't work.") });
}

function postPetType() {
    let aType = createType();
    makeRequest("POST", `${urlBase}pettypes/`, JSON.stringify(aType)).then((req) => {
        console.log("It worked!");
    }).catch(() => { console.log("Didn't work.") });
}
//================

//====DELETE REQUESTS====
function deleteOwner() {
    let ownerID = document.getElementById("idToDelete").value
    let url = `${urlBase}owners/` + ownerID;
    makeRequest("DELETE", url).then((req) => {
        console.log("It worked!");
    }).catch(() => { console.log("Didn't work.") });
}

function deletePet() {
    let petID = document.getElementById("idToDelete").value
    let url = `${urlBase}pets/` + petID;
    makeRequest("DELETE", url).then((req) => {
        console.log("It worked!");
    }).catch(() => { console.log("Didn't work.") });
}

function deletePetType() {
    let petTypeID = document.getElementById("idToDelete").value
    let url = `${urlBase}pettypes/` + petTypeID;
    makeRequest("DELETE", url).then((req) => {
        console.log("It worked!");
    }).catch(() => { console.log("Didn't work.") });
}

function deleteSpeciality() {
    let specialityID = document.getElementById("idToDelete").value
    let url = `${urlBase}specialties/` + specialityID;
    makeRequest("DELETE", url).then((req) => {
        console.log("It worked!");
    }).catch(() => { console.log("Didn't work.") });
}

function deleteVet() {
    let vetID = document.getElementById("idToDelete").value
    let url = `${urlBase}vets/` + vetID;
    makeRequest("DELETE", url).then((req) => {
        console.log("It worked!");
    }).catch(() => { console.log("Didn't work.") });
}

function deleteVisit() {
    let visitID = document.getElementById("idToDelete").value
    let url = `${urlBase}visits/` + visitID;
    makeRequest("DELETE", url).then((req) => {
        console.log("It worked!");
    }).catch(() => { console.log("Didn't work.") });
}

//================



//====OBJECT CREATORS====

function createVet(firstName, lastName, specialityIDs) {
    let specialities = createSpecialities(specialityIDs);

    const vet = {

        firstName: firstName,
        lastName: lastName,
        specialities: specialities
    };
    return vet;
}

function createSpecialties(specialityIDs) {
    let specialities = [];
    for (let i = 0; i < specialityIDs; i++) {
        specialities.push(JSON.parse(getSpeciality(specialityIDs[i])));
    }
    return specialities;
}

function createOwner() {
    let pets = createPets();


    const anOwner = {
        address: address.value,
        city: city.value,
        firstname: fistname.value,
        id: id.value,
        lastName: lastName.value,
        pets: pets,
        telephone: telephone.value
    }
    return anOwner;
}

function createPets() {
    let type = createType();
    let visits = createVisits();

    const aPet = {
        birthDate: birthdate.value,
        id: id.value,
        name: name.value,
        owner: owner.value,
        type: type,
        visits: visits
    }
    return aPet;
}

function createType() {
    const aType = {
        id: id.value,
        name: name.value
    };
    return aType;
}

function createVisits() {
    const aVisits = {

        date: date.value,
        description: description.value,
        id: id.value,
        pet: pet.value
    };
}
