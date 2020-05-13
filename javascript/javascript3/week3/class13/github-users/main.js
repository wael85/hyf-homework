let url = "https://api.github.com/search/repositories?q=user:"
const getRepo =async (user)=>{
    const res = await fetch(url+user);
    const results  = await res.json();
    return {results,user};
}
console.log(getRepo("wael85"));
const runderRepo = async (user1 , user2 ,user3)=>{
   const getRes = await Promise.all([getRepo(user1),getRepo(user2),getRepo(user3)]);
   console.log (getRes);
  getRes.forEach((res) => {
    const dl = document.createElement('dl');
    const h2 = document.createElement('h2');    
    h2.innerText = `This is ${res.user}`+"'s repositories:";
    dl.appendChild(h2);
    res.results.items.forEach((item)=> {
        const ld = document.createElement('ld');
        const dd = document.createElement('dd');
        ld.innerText = item.name+":"
        dd.innerText = item.clone_url;
        ld.appendChild(dd);
        dl.appendChild(ld);
    });    
    document.body.appendChild(dl);
   });
}

runderRepo("benna100","wael85","tariqjavid");
