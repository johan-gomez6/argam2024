(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    // Botón de WhatsApp
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.whatsapp-btn').addClass('whatsapp-btn-visible');
        } else {
            $('.whatsapp-btn').removeClass('whatsapp-btn-visible');
        }
    });


    // Barra menu fija
    $(document).ready(function () {
        var navbar = $(".navbar-fixed");
        var containerTop = $(".container-fluid").offset().top; // Obtén la posición superior del contenedor
    
        $(window).scroll(function () {
            if ($(this).scrollTop() > containerTop) {
                navbar.addClass("bg-scrolled fixed-top");
            } else {
                navbar.removeClass("bg-scrolled fixed-top");
            }
        });
    });
    
    // Manejar la redirección manualmente al hacer clic en SERVICIOS o tros en el menú
    $(".dropdown-toggle").on("click", function() {
        var href = $(this).attr("href");
        window.location.href = href;
    });


    // Al hacer clic en el botón de WhatsApp
    $('.whatsapp-btn').click(function () {
        var phoneNumber = '51947254491'; // Reemplaza con tu número de WhatsApp
        var message = 'Hola, quisiera realizar una consulta'; // Puedes personalizar el mensaje
        var whatsappLink = 'https://api.whatsapp.com/send?phone=' + phoneNumber + '&text=' + encodeURIComponent(message);

        // Abre en una nueva ventana o pestaña
        window.open(whatsappLink, '_blank');

        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });



    // MODAL DETALLES SFL
    $(document).ready(function () {
        $('.detailsButton').on('click', function () {
            // Obtén los datos específicos del botón clickeado
            var imageSrc = $(this).data('image-src');
            var title = $(this).data('title');
            var text = $(this).data('text');
            var subtitle = $(this).data('subtitle');
            var items = $(this).data('items'); // Suponiendo que 'items' es un array en tus datos
    
            // Llena el modal con los datos específicos
            $('#modal-image').attr('src', imageSrc);
            $('#modal-title').text(title);
            $('#modal-text').text(text);
            $('#modal-subtitle').text(subtitle);
    
            // Llenar la lista en viñetas
            var itemsList = $('#modal-items');
            itemsList.empty(); // Limpiar la lista antes de agregar nuevos elementos
    
            $.each(items, function (index, itemText) {
                var listItem = $('<li>').text(itemText);
                itemsList.append(listItem);
            });
    
            // Mostrar el modal dinámicamente con una clase de animación
            $('#dynamicModal').fadeIn().addClass('show');
    
            // Calcular y establecer la posición del modal
            var modal = $('#dynamicModal .modal-content');
            var topPosition = Math.max(0, ($(window).height() - modal.outerHeight()) / 2);
            var leftPosition = Math.max(0, ($(window).width() - modal.outerWidth()) / 2);
    
            modal.css({
                'top': topPosition + 'px',
                'left': leftPosition + 'px',
            });
        });
    
        // Cierra el modal dinámico si se hace clic en el botón de cerrar
        $(document).on('click', '.close-btn', function () {
            closeDynamicModal();
        });
    
        // Cierra el modal dinámico si se hace clic fuera de él
        $(document).on('click', function (event) {
            var modal = $('#dynamicModal');
            if (event.target == modal[0]) {
                closeDynamicModal();
            }
        });
    });
    
    // Función para cerrar el modal dinámico
    function closeDynamicModal() {
        $('#dynamicModal').fadeOut().removeClass('show');
    }
    
    

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });

    // Formulario de servicios -- Inmobiliaria
    $(document).ready(function() {
        // Función para mostrar u ocultar el formulario
        function mostrarFormulario(tipo) {
            var formularioVender = $("#formularioVender");
            var formularioComprar = $("#formularioComprar");
    
            if (tipo === 'vender') {
                formularioVender.show();
                formularioComprar.hide();
            } else if (tipo === 'comprar') {
                formularioComprar.show();
                formularioVender.hide();
            }
        }
    
        // Evento de clic en los botones
        $("#btnVender").on("click", function() {
            var formularioVender = $("#formularioVender");
            if (formularioVender.is(":visible")) {
                // Si ya está visible, oculta ambos formularios
                $("#formularioComprar").hide();
                formularioVender.hide();
            } else {
                mostrarFormulario('vender');
            }
        });
    
        $("#btnComprar").on("click", function() {
            var formularioComprar = $("#formularioComprar");
            if (formularioComprar.is(":visible")) {
                // Si ya está visible, oculta ambos formularios
                $("#formularioVender").hide();
                formularioComprar.hide();
            } else {
                mostrarFormulario('comprar');
            }
        });
    
        // Agrega la clase 'active' al botón clicado para indicarme en qué opción estoy -- ejemplo: vender o comprar en inmobiliaria
        $(".btn-custom").click(function() {
            $(".btn-custom").removeClass("active");
            $(this).addClass("active");
        });
    });

    /* TOPOGRAFIA --- SERVICIOS */
    /* Galería de imágenes */
    $(document).ready(function () {
        // Función para mostrar u ocultar el título en pantallas pequeñas al hacer scroll
        function toggleTitlesOnScroll() {
            var windowWidth = $(window).width();
    
            // Verificar si la pantalla es pequeña
            if (windowWidth <= 767) {
                var screenHeight = $(window).height();
                var screenTop = $(window).scrollTop();
                var screenBottom = screenTop + screenHeight;
    
                // Iterar sobre cada contenedor
                $('.topo-container').each(function () {
                    var containerTop = $(this).offset().top;
                    var containerBottom = containerTop + $(this).height();
    
                    // Determinar si el contenedor está en la vista
                    if (containerTop < screenBottom && containerBottom > screenTop) {
                        $(this).find('.image-titulo').fadeIn();
                    } else {
                        $(this).find('.image-titulo').fadeOut();
                    }
                });
            }
        }
    
        // Llamar a la función al cargar la página y al hacer scroll
        toggleTitlesOnScroll();
        $(window).scroll(toggleTitlesOnScroll);
    
        // Agregar evento hover para mostrar el título en pantallas grandes
        $('.topo-container').hover(
            function () {
                if ($(window).width() > 767) {
                    // En pantallas grandes, usar fadeIn y fadeOut al pasar el ratón
                    $(this).find('.image-titulo').fadeIn();
                }
            },
            function () {
                if ($(window).width() > 767) {
                    // En pantallas grandes, usar fadeIn y fadeOut al salir del ratón
                    $(this).find('.image-titulo').fadeOut();
                }
            }
        );
    });
    
    
    // Pasarela de Servicios
    $(document).ready(function() {
        var $myCarousel = $("#myCarousel");
        var $dots = $(".dot");
    
        $myCarousel.owlCarousel({
            autoplay: true,
            smartSpeed: 1000,
            margin: 10,
            dots: false,
            loop: true,
            nav: true,
            autoplayHoverPause: true,
            navText: [
                '<i class="bi bi-arrow-left"></i>',
                '<i class="bi bi-arrow-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 3
                }
            },
            onInitialized: function() {
                // Configuración de los puntos de navegación
                $dots.each(function(index) {
                    $(this).on("click", function() {
                        $myCarousel.trigger("to.owl.carousel", [index, 1000, true]);
                    });
                });
    
                // Establece el primer punto como activo al inicio
                $dots.removeClass("active").eq(0).addClass("active");
            },
            onTranslated: function(event) {
                // Actualiza el estado activo de los puntos
                var currentIndex = event.item.index - Math.floor(event.item.count / 2);
                currentIndex = (currentIndex < 0) ? event.item.count - 1 : currentIndex;
                $dots.removeClass("active").eq(currentIndex).addClass("active");
            }
        });
    }); 
    
    // Libro de Reclamaciones
    // Validacion de datos -- Libro de Reclamaciones
    $(document).ready(function() {
        // Agrega la lógica de validación para el campo 'nombre'
        $('#nombreLR').on('blur', function() {
            validarCampoVacio('nombreLR', 'nombreErrorLR', 'El Nombre es obligatorio.');
        });
        $('#apellidoPaternoLR').on('blur', function() {
            validarCampoVacio('apellidoPaternoLR', 'apellidoPErrorLR', 'El Primer apellido es obligatorio.');
        });
        $('#apellidoMaternoLR').on('blur', function() {
            validarCampoVacio('apellidoMaternoLR', 'apellidoMErrorLR', 'El Segundo apellido es obligatorio.');
        });
        $('#numeroDocumentoLR').on('blur', function() {
            validarCampoVacio('numeroDocumentoLR', 'numDocErrorLR', 'El Número de Documento es obligatorio.');
        });
        $('#emailLR').on('blur', function() {
            validarCampoVacio('emailLR', 'gmailErrorLR', 'El email es obligatorio.');
        });
        $('#telefonoLR').on('blur', function() {
            validarCampoVacio('telefonoLR', 'TelefonoErrorLR', 'El Número de Telefono(WhatsApp) es obligatorio.');
        });
        $('#domicilioLR').on('blur', function() {
            validarCampoVacio('domicilioLR', 'domicilioErrorLr', 'La Dirección es obligatoria.');
        });
    
    });
    
    // Función para validar si un campo está vacío y mostrar un mensaje de error
    function validarCampoVacio(campoId, errorId, mensajeError) {
        var valorCampo = $('#' + campoId).val();
        var errorSpan = $('#' + errorId);
    
        if (valorCampo.trim() === '') {
            errorSpan.text(mensajeError);
        } else {
            errorSpan.text('');
        }
    }

    // Adjuntos -- LR
    $(document).ready(function () {
        window.validarTamanioArchivos = function (input, maxMB) {
            const archivos = input.files;
            for (let i = 0; i < archivos.length; i++) {
                const archivo = archivos[i];
                const tamanioMB = archivo.size / (1024 * 1024); // Convertir bytes a megabytes
                if (tamanioMB > maxMB) {
                    alert(`El archivo "${archivo.name}" supera el tamaño máximo permitido de ${maxMB}MB.`);
                    input.value = ''; // Limpiar la selección del archivo
                    return;
                }
            }
        };
    });

    // Fecha -- LR
    $(document).ready(function() {
        var fechaActual = new Date().toLocaleDateString('es-PE');
        $('#fechaActualLR').val(fechaActual);
        $('#fechaActualLR').prop('readonly', true); // Establecer el campo como solo lectura
    });

    // PREGUNTAS FRECUENTES
    $(document).ready(function () {
        $('.faq-question').click(function () {
            var answer = $(this).find('.faq-answer');
            var toggle = $(this).find('.faq-toggle');
    
            answer.slideToggle();
    
            toggle.text(function (index, text) {
                return text === '[+]' ? '[-]' : '[+]';
            });
    
            // Cambia el color de fondo de la pregunta al hacer clic
            $(this).toggleClass('active');
        });
    });
    
})(jQuery);

