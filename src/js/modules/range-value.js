export function value(){
    const value = document.querySelector(".form__slider-value ");
    const input = document.querySelector(".form__slider");
    value.textContent = input.value + " %";
    input.addEventListener("input", (event) => {
        value.textContent = event.target.value + " %";
    });
}