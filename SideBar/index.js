const sidebarToggle = document.querySelector(".sidebar-toggle");
const sideBar = document.querySelector('.sidebar');
const closeBtn = document.querySelector(".close-btn")

sidebarToggle.addEventListener('click',function(){
     if(sideBar.classList.contains("show-sidebar"))
     {
         sideBar.classList.remove("show-sidebar");
     }else{
         sideBar.classList.add("show-sidebar");
     }
});

closeBtn.addEventListener('click',function () {
    sideBar.classList.remove('show-sidebar');
})