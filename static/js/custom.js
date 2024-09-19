// Função para validar CPF
function isValidCPF(cpf) {
    cpf = cpf.replace(/[^\d]/g, ""); // Remove caracteres não numéricos

    if (cpf.length !== 11) {
        return false;
    }

    // Validação do CPF
    var sum = 0;
    var remainder;
    for (var i = 1; i <= 9; i++) {
        sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
    remainder = (sum * 10) % 11;

    if (remainder === 10 || remainder === 11) {
        remainder = 0;
    }

    if (remainder !== parseInt(cpf.substring(9, 10))) {
        return false;
    }

    sum = 0;
    for (var i = 1; i <= 10; i++) {
        sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    remainder = (sum * 10) % 11;

    if (remainder === 10 || remainder === 11) {
        remainder = 0;
    }

    if (remainder !== parseInt(cpf.substring(10, 11))) {
        return false;
    }

    return true;
}

// Função para validar CNPJ
function isValidCNPJ(cnpj) {
    cnpj = cnpj.replace(/[^\d]/g, ""); // Remove caracteres não numéricos

    if (cnpj.length !== 14) {
        return false;
    }

    // Validação do CNPJ
    var size = cnpj.length - 2;
    var numbers = cnpj.substring(0, size);
    var digits = cnpj.substring(size);
    var sum = 0;
    var pos = size - 7;
    for (var i = size; i >= 1; i--) {
        sum += numbers.charAt(size - i) * pos--;
        if (pos < 2) {
            pos = 9;
        }
    }
    var result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    if (result != digits.charAt(0)) {
        return false;
    }
    size = size + 1;
    numbers = cnpj.substring(0, size);
    sum = 0;
    pos = size - 7;
    for (var i = size; i >= 1; i--) {
        sum += numbers.charAt(size - i) * pos--;
        if (pos < 2) {
            pos = 9;
        }
    }
    result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    if (result != digits.charAt(1)) {
        return false;
    }
    return true;
}

// =============  Data Table - (Start) ================= //

$(document).ready(function () {
    $("#tabelaPlanosSaude").DataTable({
        language: {
            decimal: "",
            emptyTable: "Sem dados disponíveis na tabela",
            info: "Mostrando _START_ a _END_ de _TOTAL_ registros",
            infoEmpty: "Mostrando 0 a 0 de 0 registros",
            infoFiltered: "(filtrado de _MAX_ registros totais)",
            infoPostFix: "",
            thousands: ",",
            lengthMenu: "Mostrar _MENU_ por página",
            loadingRecords: "Carregando...",
            processing: "",
            search: "Localizar:",
            zeroRecords: "Nenhum registro encontrado",
            paginate: {
                first: "Primeiro",
                last: "Último",
                next: "Próximo",
                previous: "Anterior",
            },
            aria: {
                sortAscending: ": ativar para classificar a coluna em ordem crescente",
                sortDescending: ": ativar para classificar a coluna decrescente",
            },
        },
        dom: "lBfrtip",
        buttons: [
            {
                extend: "pdfHtml5",
                text: "Exportar PDF",
                title: "Lista de Planos de saúde", // aqui você define o título desejado
                filename: "Plano_saude",
                exportOptions: {
                    columns: ":visible",
                },
            },
            {
                extend: "excelHtml5",
                text: "Exportar Excel",
                title: "Lista de Planos de saúde", // aqui você define o título desejado
                filename: "Plano_saude",
                exportOptions: {
                    columns: ":visible",
                },
            },
            {
                extend: "print",
                text: "Imprimir",
                title: "Lista de Planos de saúde", // aqui você define o título desejado
                exportOptions: {
                    columns: ":visible",
                },
            },
        ],
        lengthMenu: [
            [6, 10, 25, 50, -1],
            [6, 10, 25, 50, "Todos"],
        ],
        pageLength: 6,

        order: [[1, "desc"]],
        initComplete: function () {
            var table = $("#tabelaPlanosSaude").DataTable();
            table.page("last").draw(false);
        },
    });

    $(".dataTables_filter input[type=search]").css({ width: "300px" });
});

// =============  Data Table - (End) ================= //

$(document).ready(function () {
    $("#tabelaTiposExames").DataTable({
        language: {
            decimal: "",
            emptyTable: "Sem dados disponíveis na tabela",
            info: "Mostrando _START_ a _END_ de _TOTAL_ registros",
            infoEmpty: "Mostrando 0 a 0 de 0 registros",
            infoFiltered: "(filtrado de _MAX_ registros totais)",
            infoPostFix: "",
            thousands: ",",
            lengthMenu: "Mostrar _MENU_ por página",
            loadingRecords: "Carregando...",
            processing: "",
            search: "Localizar:",
            zeroRecords: "Nenhum registro encontrado",
            paginate: {
                first: "Primeiro",
                last: "Último",
                next: "Próximo",
                previous: "Anterior",
            },
            aria: {
                sortAscending: ": ativar para classificar a coluna em ordem crescente",
                sortDescending: ": ativar para classificar a coluna decrescente",
            },
        },

        dom: "lBfrtip",
        buttons: [
            {
                extend: "pdfHtml5",
                text: "Exportar PDF",
                title: "Lista de Tipos de exames", // aqui você define o título desejado
                filename: "Exames",
                exportOptions: {
                    columns: ":visible",
                },
            },
            {
                extend: "excelHtml5",
                text: "Exportar Excel",
                title: "Lista de Tipos de exames", // aqui você define o título desejado
                filename: "Exames",
                exportOptions: {
                    columns: ":visible",
                },
            },
            {
                extend: "print",
                text: "Imprimir",
                title: "Lista de Tipos de exames", // aqui você define o título desejado
                exportOptions: {
                    columns: ":visible",
                },
            },
        ],
        lengthMenu: [
            [6, 10, 25, 50, -1],
            [6, 10, 25, 50, "Todos"],
        ],
        pageLength: 6,

        order: [[1, "desc"]],
        initComplete: function () {
            var table = $("#tabelaTiposExames").DataTable();
            table.page("last").draw(false);
        },
    });

    $(".dataTables_filter input[type=search]").css({ width: "300px" });
});

// =============  Data Table - (Start) ================= //

$(document).ready(function () {
    $("#tabelaAlergias").DataTable({
        language: {
            decimal: "",
            emptyTable: "Sem dados disponíveis na tabela",
            info: "Mostrando _START_ a _END_ de _TOTAL_ registros",
            infoEmpty: "Mostrando 0 a 0 de 0 registros",
            infoFiltered: "(filtrado de _MAX_ registros totais)",
            infoPostFix: "",
            thousands: ",",
            lengthMenu: "Mostrar _MENU_ por página",
            loadingRecords: "Carregando...",
            processing: "",
            search: "Localizar:",
            zeroRecords: "Nenhum registro encontrado",
            paginate: {
                first: "Primeiro",
                last: "Último",
                next: "Próximo",
                previous: "Anterior",
            },
            aria: {
                sortAscending: ": ativar para classificar a coluna em ordem crescente",
                sortDescending: ": ativar para classificar a coluna decrescente",
            },
        },
        dom: "lBfrtip",
        buttons: [
            {
                extend: "pdfHtml5",
                text: "Exportar PDF",
                title: "Lista de Alergias", // aqui você define o título desejado
                filename: "Alergias",
                exportOptions: {
                    columns: ":visible",
                },
            },
            {
                extend: "excelHtml5",
                text: "Exportar Excel",
                title: "Lista de Alergias", // aqui você define o título desejado
                filename: "Alergias",
                exportOptions: {
                    columns: ":visible",
                },
            },
            {
                extend: "print",
                text: "Imprimir",
                title: "Lista de Alergias", // aqui você define o título desejado
                exportOptions: {
                    columns: ":visible",
                },
            },
        ],
        lengthMenu: [
            [6, 10, 25, 50, -1],
            [6, 10, 25, 50, "Todos"],
        ],
        pageLength: 6,
        order: [[1, "desc"]],
        initComplete: function () {
            var table = $("#tabelaAlergias").DataTable();
            table.page("last").draw(false);
        },
    });

    $(".dataTables_filter input[type=search]").css({ width: "300px" });
});

// =============  Data Table - (End) ================= //

// =============  Data Table - (Start) ================= //

// =======  Função para mudar de campo com a tecla ENTER ========== //

function enableFormTabbing() {
    document.addEventListener("DOMContentLoaded", function () {
        var form = document.querySelector("form");

        var fields = form.querySelectorAll('input[type="text"], input[type="email"], input[type="number"], select');
        for (var i = 0; i < fields.length; i++) {
            fields[i].addEventListener("keydown", function (e) {
                if (e.keyCode === 13) {
                    e.preventDefault();
                    var nextField = getNextVisibleField(this);
                    if (nextField) {
                        nextField.focus();
                    }
                }
            });
        }

        function getNextVisibleField(currentField) {
            var fields = Array.from(form.querySelectorAll('input[type="text"], input[type="email"], input[type="number"], select'));
            var currentIndex = fields.indexOf(currentField);
            for (var i = currentIndex + 1; i < fields.length; i++) {
                if (isElementVisible(fields[i])) {
                    return fields[i];
                }
            }
            return null;
        }

        function isElementVisible(el) {
            return el.offsetWidth > 0 || el.offsetHeight > 0;
        }
    });
}

// =======  Função para mudar de campo com a tecla ENTER - (End) ================= //
