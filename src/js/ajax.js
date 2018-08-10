// AJAX GET Call
// Parameters : URL and callback function in case of success
function ajaxGet(url, callback) {
    var req = new XMLHttpRequest();
    req.open("GET", url);
    req.addEventListener("load", function () {
        if (req.status >= 200 && req.status < 400) {
            // Call of callback function
            callback(req.responseText);
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });
    req.addEventListener("error", function () {
        console.error("Erreur réseau avec l'URL " + url);
    });
    req.send(null);
}

// En ES6 on utilise plutôt fetch pour faire des requetes AJAX
// La doc est ici https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch
// Tu récupères les données de l'API et on va en faire des Objets de station Vélov

// Exemple:

fetch("https://swapi.co/api/people/")
  .then(response => response.json())
  .then((data) => {
    console.log(data);
  });
