const reservOfId = (arr,id)=>{
    const reserv = arr.filter((obj)=>obj.id===id);
    return reserv;
}
exports.reservOfId = reservOfId;