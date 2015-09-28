// Elemek kiválasztása
// @param selector: string az elemet kiválasztó szelektor
function _q( selector ){
    // Elemek kiválasztása.
    var elements = document.querySelectorAll( selector );
    return elements;
}

// Profil beviteli mező megjelenítése
function showProfile() {
    // Elemek kiválasztása.
    var div = document.querySelector( ".profile-div" );
    // console.log( div );
    if (div.classList.contains( "show" ) ) {
        div.classList.remove( "show" );
    } else {
        div.classList.add( "show" );
    }
}
