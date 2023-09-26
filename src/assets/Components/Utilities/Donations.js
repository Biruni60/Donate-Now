

const getDonationId=()=>{
    const donationId=localStorage.getItem('donations');
    if(donationId){
        return JSON.parse(donationId);
    }
    return [];
}

const saveDonationId=id=>{
    const idDonations=getDonationId();
    const exists=idDonations.find(dId=>dId===id);
    if(!exists){
        idDonations.push(id);
        localStorage.setItem('donations',JSON.stringify(idDonations));

    }
}
export{getDonationId,saveDonationId}