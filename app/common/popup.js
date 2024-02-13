const bs = chrome || browser;
bs.tabs.create({ url: bs.runtime.getURL('./index.html') }, (tab) => console.log(tab));

window.open("./index.html")

function fLoad(){
    window.open("./index.html")
    console.log("fLoad")
}
