export let empleados_select = document.getElementById("empleados");
export let herramientas_select = document.getElementById("herramientas");
export let draw_empleado_info = document.getElementById("draw_empleado_info");
export let activadades_select = document.getElementById("actividades");
export let employees_actives =[];
export let card_cont = 0;
export let card_ul_item_cont = 0;
export let move_right_carrusel =0;
export let carousel_next = document.getElementById("carousel_next");
export let carousel_after = document.getElementById("carousel_after");

export function restar_employees_actives()
{
    employees_actives =[];
}
export function card_cont_more(){
    card_cont ++;
}
export function card_cont_less(){
    card_cont --;
}
export function card_ul_item_cont_more(){
    card_ul_item_cont ++;
}
export function move_right_carrusel_more(){
    move_right_carrusel = move_right_carrusel+4;
}
export function move_left_carrusel_more(){
    move_right_carrusel = move_right_carrusel-4;
}