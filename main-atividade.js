$(document).ready(function(){

    $('form').on('submit', function(e) {
        e.preventDefault();
        const tarefaNova = $('#tarefa-nova').val();

        $('#lista-completa').append(`<li>${tarefaNova}</li>`);
        $('#tarefa-nova').val('');
    })

    $('#lista-completa').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
    });

