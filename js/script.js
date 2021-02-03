// setup
const navbar_Btn=document.querySelector(".nav-bras-icon");
const menue_Mobile=document.querySelector(".menue-mobile");
const navbar=document.querySelector(".navbar");
const search_Icon=document.getElementById("search-icon");
const search_Page=document.getElementById("search-page");
const close_Search=document.getElementById("close-search");
const filter_Btn=document.getElementById("filter-btn");
const filter_Icon=document.getElementById("filter-icon");
const close_Filter_Icon=document.getElementById("close-filter-icon");
const pannel_Filter=document.getElementById("pannel-filter");
const discover=document.getElementById("discover");
const products=document.getElementById("products");


// ***********************************navbar*************************************
navbar_Btn.onclick=()=>{
    menue_Mobile.classList.toggle("disactive");
}

window.onscroll=()=>{
    if(document.documentElement.scrollTop > "70")
    {
        navbar.classList.add("mobile");
    }
    else
    {
        navbar.classList.remove("mobile");
    }
}

// ***********************************discover*************************************
discover.onclick=()=>{
    if(products.offsetWidth > 992)
    {
        document.documentElement.scrollTop=products.offsetTop - "86";
    }
    else
    {
        document.documentElement.scrollTop=products.offsetTop;
    }
}


// ************************************search******************************************
function toggle_Search()
{
    search_Page.classList.toggle("active");
}
search_Icon.onclick=()=>{
    toggle_Search();
}
close_Search.onclick=()=>{
    toggle_Search()
}

// ************************************filter******************************************
filter_Btn.onclick=()=>{
    filter_Btn.classList.toggle("active");
    pannel_Filter.classList.toggle("active");
    if(filter_Icon.classList.contains("active"))
    {
        filter_Icon.classList.remove("active")
        close_Filter_Icon.classList.add("active")
    }
    else
    {
        filter_Icon.classList.add("active")
        close_Filter_Icon.classList.remove("active")
    }
}