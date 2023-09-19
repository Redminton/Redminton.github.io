// comandos barra de navegação
const expandButton = document.getElementById('expandButton');
const botaoRedes = document.getElementById('botaoRedes')
const navigation = document.querySelector('.navigation');
const navigation2 = document.querySelector('.navigation2');
expandButton.addEventListener('click', () => {
    navigation.classList.toggle('expanded');
});
botaoRedes.addEventListener('click', () => {
    navigation2.classList.toggle('expanded2');
});