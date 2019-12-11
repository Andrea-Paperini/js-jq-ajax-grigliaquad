$(document).ready(function() {
    // mi aggangio al DOM uso l'evento on per specificare oltre all'evento del click, il figlio specifico che essendo dentro l'handlebars non si vede nel codice fino quando l'intero ciclo al rigo 33 non viene completato
    $(document).on('click', '.quadratini', function() {
        var that = this;
        // interrogo l'API di boolean che genera un numero con le seguenti chiavi/valori
        // accetta solo numeri, l'url di boolean, in modalità richiesta, se la richiesta ha un esito positivo allora aggiungi le classi yellow/green, altrimenti restituisci un errore.
        $.ajax({
            accepts: 'number',
            'url': "https://flynn.boolean.careers/exercises/api/random/int",
            'methods': 'GET',
            success: function(data) {
                console.log(data.response);
                // Verifico se il numero è uguale o inferiore a 5 così gli attribuisco la classe yellow, altrimenti green
                if (data.response <= 5) {

                    $(that).addClass('yellow');

                } else {
                    $(that).addClass('green');
                }
            },
            // se la richiesta restituisce un errore inserisco un alert per segnalare il problema
            error: function() {

                alert("Verifica se l'API è stata inserita correttamente o è stata spostata");
            }
        });
    });
    // Creo i quadratini con la classe "quadratini" apposita facendolo compilare da handlebars nell'html
    var template_html = $('#template').html();
    var template_function = Handlebars.compile(template_html);
    // ne faccio 36 esatti partendo da 1 con il ciclo for appendendoli nella funzione template che modifica l'html
    for (var i = 1; i < 37; i++) {
        $('.container').append(template_function());
    }
});
