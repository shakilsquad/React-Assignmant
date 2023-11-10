const getStoredDonate = () =>{
    const storedDonate = localStorage.getItem('donation-cart');
    if(storedDonate){
        return JSON.parse(storedDonate);
    }
    return[];
}

const saveDonationCart =  id =>{

    const getStoredDonates = getStoredDonate();
    const exists = getStoredDonates.find(donateId => donateId === id);
    if(!exists){
        getStoredDonates.push(id);
        localStorage.setItem('donation-cart',JSON.stringify(getStoredDonates));
    }

}

export{getStoredDonate,saveDonationCart}