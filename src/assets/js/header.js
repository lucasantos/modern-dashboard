const searchBar = document.querySelector('#search-bar');
const toggleSearchBar = document.querySelector('#toggle-search-bar');

// Add and remove provided class names
function toggleClassName(el, className) {
    if (el.classList.contains(className)) {
        el.classList.remove(className);
    } else {
        el.classList.add(className);
    }
}

toggleSearchBar.addEventListener("click", (e) => {
    toggleClassName(searchBar, 'open');
});