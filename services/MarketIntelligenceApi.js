import ServiceClass from "./Services";

class MarketIntelligenceApi {
    constructor() {
    }

    updateLead(params) {
        return new Promise(function (resolve, reject) {
            ServiceClass.postUpdateLead(params).then((resp) => {
                if (resp && resp.data) {
                    resolve(resp.data)
                } else {
                    reject({ message: "RESPONSE IS NOT AS EXPECTED", error: "INVALID" });
                }
            }).catch((err) => {
                reject({ message: "RESPONSE IS NOT AS EXPECTED", error: "INVALID" });
            })
        });
    }

    getLeadDetails(params) {
        return new Promise(function (resolve, reject) {
            ServiceClass.getLeadDetails(params).then((resp) => {
                if (resp && resp.data) {
                    resolve(resp.data)
                } else {
                    reject({ message: "RESPONSE IS NOT AS EXPECTED", error: "INVALID" });
                }
            }).catch((err) => {
                reject({ message: "RESPONSE IS NOT AS EXPECTED", error: "INVALID" });
            })
        });
    }


    getMI({ params }) {
        return new Promise(function (resolve, reject) {
            ServiceClass.getMI(params).then((resp) => {
                if (resp && resp.data) {
                    resolve(resp.data)
                } else {
                    reject({ message: "RESPONSE IS NOT AS EXPECTED", error: "INVALID" });
                }
            }).catch((err) => {
                reject({ message: "RESPONSE IS NOT AS EXPECTED", error: "INVALID" });
            })
        });
    }

    searchMIList({ params }) {
        return new Promise(function (resolve, reject) {
            ServiceClass.searchMIList(params).then((resp) => {
                if (resp && resp.data) {
                    resolve(resp.data)
                } else {
                    reject({ message: "RESPONSE IS NOT AS EXPECTED", error: "INVALID" });
                }
            }).catch((err) => {
                reject({ message: "RESPONSE IS NOT AS EXPECTED", error: "INVALID" });
            })
        });
    }

    createNewMI({ params }) {
        return new Promise(function (resolve, reject) {
            console.log(params)
            ServiceClass.createNewMI(params).then((resp) => {
                if (resp && resp.data) {
                    resolve(resp.data)
                } else {
                    reject({ message: "RESPONSE IS NOT AS EXPECTED", error: "INVALID" });
                }
            }).catch((err) => {
                reject({ message: "RESPONSE IS NOT AS EXPECTED", error: "INVALID" });
            })
        });
    }
}

export default MarketIntelligenceApi;