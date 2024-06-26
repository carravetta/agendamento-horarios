AOS.init();

const btnAgendamento = document.querySelector(".header-button");
const modal = document.querySelector("dialog");
const btnCancel = document.querySelector(".btn-cancel");

btnAgendamento.addEventListener("click", e=>{

    modal.showModal();

});

btnCancel.addEventListener("click", ()=>{
    modal.close();
})