

window.onscroll = () => {
    if (window.innerWidth >= 950) {

        const contactbtn = document.querySelector("#contactbtn");
        const sociosbtn = document.querySelector("#sociosbtn");
        const areasbtn = document.querySelector("#areasbtn");
        const burgerbtn = document.querySelector("#burgerbtn");
        const estudiobtn = document.querySelector("#estudiobtn");
        const guiasbtn = document.querySelector("#guiasbtn");
        const logo = document.querySelector(".logotype");
        const logosonscroll = document.querySelector(".logotypeonscroll");
        const logotype = document.querySelector(".logotype");


        if (window.scrollY >= window.innerHeight - 100) {

            document.querySelector(".topheader").style.background = '#1d1d1d';
            contactbtn.style.color = '#f5f5f5';
            sociosbtn.style.color = '#f5f5f5';
            areasbtn.style.color = '#f5f5f5';
            estudiobtn.style.color = '#f5f5f5';
            guiasbtn.style.color = '#f5f5f5';
            logo.style.color = '#f5f5f5';
            burgerbtn.fill = '#f5f5f5';
            logosonscroll.style.cssText = "display: inline";
            logotype.style.cssText = "display: none";
        }


        else {

            document.querySelector(".topheader").style.background = '#00000000';
            contactbtn.style.color = '#1d1d1d';
            sociosbtn.style.color = '#1d1d1d';
            areasbtn.style.color = '#1d1d1d';
            estudiobtn.style.color = '#1d1d1d';
            guiasbtn.style.color = '#1d1d1d';
            logo.style.color = '#1d1d1d';
            burgerbtn.fill = '#1d1d1d';
            logosonscroll.style.cssText = "display: none";
            logotype.style.cssText = "display: none";
        }

    }

}