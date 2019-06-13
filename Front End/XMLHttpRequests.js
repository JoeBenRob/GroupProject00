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

function createOwner() {

    const anOwner = {

        address: address.value,
        city: city.value,
        firstname: fistname.value,
        id: id.value,
        lastName: lastName.value,
        pets: pets.value,
        telephone: telephone.value

    }
    return anOwner;
}

function createPets() {
    const aPet = {

        birthDate: birthdate.value,
        id: id.value,
        name: name.value,
        owner: owner.value,
        //type: type.value
    }
}

function createType() {
    const aType = {

        id: id.value,
        name: name.value
    }
}

function createVisits() {
    const aVisits = {

        date: date.value,
        description: description.value,
        id: id.value,
        pet: pet.value
    }
}