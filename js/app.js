/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/css/app.css":
/*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/css/editor-style.css":
/*!****************************************!*\
  !*** ./resources/css/editor-style.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ (() => {

jQuery(document).ready(function ($) {
  function initSwipers() {
    var swiperThumbs = new Swiper(".mySwiper", {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
      breakpoints: {
        0: {
          slidesPerView: 2
        },
        // Mobile: 2 slides
        768: {
          slidesPerView: 4
        } // Desktop/tablet: 4 slides
      }
    });
    var swiperMain = new Swiper(".mySwiper2", {
      spaceBetween: 10,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      thumbs: {
        swiper: swiperThumbs
      }
    });
  }

  // Inicializa os Swipers na primeira carga
  initSwipers();
  $("#toggle-buttons").on("click", function () {
    $("#floating-buttons").toggleClass("hidden");
    $(this).toggleClass('btn-active');
    $('#quoteBubble').addClass('hidden');
  });
  $(document).on("click", ".ram-card", function () {
    var model = $(this).data("model");

    // Exibe o loading
    Swal.fire({
      title: "Carregando...",
      text: "Aguarde enquanto carregamos o modelo.",
      allowOutsideClick: false,
      showConfirmButton: false,
      customClass: {
        popup: 'custom-swal',
        confirmButton: 'custom-button'
      },
      didOpen: function didOpen() {
        Swal.showLoading();
      }
    });

    // Atualiza a URL sem recarregar a página
    var newUrl = window.location.origin + window.location.pathname + "?model=" + model;
    window.history.pushState({
      path: newUrl
    }, "", newUrl);

    // Faz a requisição AJAX para carregar o modelo
    $.ajax({
      url: newUrl,
      method: "GET",
      success: function success(response) {
        $("#ram-content").html($(response).find("#ram-content").html());
        setTimeout(function () {
          $(".swiper").each(function () {
            var _this$swiper;
            (_this$swiper = this.swiper) === null || _this$swiper === void 0 || _this$swiper.destroy(true, true);
          });
          initSwipers();
        }, 100);
        getParameterByName();
        setTimeout(function () {
          activeCard();
        }, 100);

        // Fecha o loading e rola para o topo
        Swal.close();
        setTimeout(function () {
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        }, 300); // Pequeno delay para garantir que o Swal fechou antes da rolagem
      },
      error: function error() {
        Swal.fire({
          icon: "error",
          title: "Erro!",
          text: "Erro ao carregar o modelo da RAM."
        });
      }
    });
  });
  $(document).on('click', '.openModal', function () {
    $("#customModal").fadeIn(300).css("display", "flex");
    $('#wppLead').css('display', 'none');
    $("#lpRam").css("display", "block");
    $('#formName').val('LP Ofertas Ram');
  });
  $(document).on('click', '.openWpp', function () {
    $("#customModal").fadeIn(300).css("display", "flex");
    $('#lpRam').css('display', 'none');
    $("#wppLead").css("display", "block");
    $('#formName').val('Whatsapp Lead');
  });
  $("#closeModal, #customModal").click(function (e) {
    if (e.target.id === "customModal" || e.target.id === "closeModal") {
      $("#customModal").fadeOut(300);
    }
  });
  function getParameterByName() {
    var urlParams = new URLSearchParams(window.location.search);
    var model = urlParams.get('model') || "rampage";
    var validModels = ["rampage", "1500", "2500", "3500"];
    if (!validModels.includes(model)) {
      model = "rampage";
    }
    $("#floating_model").val(model);
  }
  getParameterByName();
  $("#floating_cpf").mask("000.000.000-00");
  $("#floating_telefone").mask("(00) 00000-0000");
  $("#wpp_telefone").mask("(00) 00000-0000");
  $(document).on("click", "#registerLead", function (event) {
    event.preventDefault(); // Evita comportamento padrão do botão

    // Lista de campos obrigatórios e seus nomes corretos para o backend
    var campos = [{
      id: "floating_name",
      name: "nome",
      mensagem: "O campo Nome é obrigatório."
    }, {
      id: "floating_cpf",
      name: "cpf",
      mensagem: "O campo CPF é obrigatório."
    }, {
      id: "floating_email",
      name: "email",
      mensagem: "O campo Email é obrigatório."
    }, {
      id: "floating_telefone",
      name: "telefone",
      mensagem: "O campo Telefone é obrigatório."
    }, {
      id: "floating_model",
      name: "modelo",
      mensagem: "O campo Modelo é obrigatório."
    }, {
      id: "formName",
      name: "form_name",
      mensagem: "O campo Hidden é obrigatório."
    }];

    // Verifica se algum campo está vazio
    for (var _i = 0, _campos = campos; _i < _campos.length; _i++) {
      var campo = _campos[_i];
      if (!$("#".concat(campo.id)).val().trim()) {
        Swal.close();
        return Swal.fire("Erro!", campo.mensagem, "error");
      }
    }
    Swal.fire({
      title: "Aguarde...",
      text: "Estamos processando seu cadastro.",
      allowOutsideClick: false,
      didOpen: function didOpen() {
        Swal.showLoading();
      }
    });

    // Monta os dados do formulário com os names corretos para o backend
    var formData = campos.reduce(function (dados, campo) {
      dados[campo.name] = $("#".concat(campo.id)).val().trim();
      return dados;
    }, {});

    // Envia os dados via AJAX
    $.ajax({
      url: "https://crm.wave.pro.br/wp-json/crm-wave/v1/create-lead/lp-ram",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify(formData),
      success: function success(response) {
        Swal.close();
        Swal.fire("Sucesso!", response.message || "Cadastro realizado com sucesso!", "success");
        campos.forEach(function (campo) {
          return $("#".concat(campo.id)).val("");
        });
      },
      error: function error() {
        Swal.fire("Erro!", "Ocorreu um erro ao enviar os dados. Tente novamente.", "error");
      }
    });
  });
  $(document).on("click", "#registerLeadWpp", function (event) {
    event.preventDefault(); // Evita comportamento padrão do botão

    // Lista de campos obrigatórios e seus nomes corretos para o backend
    var campos = [{
      id: "wpp_name",
      name: "nome",
      mensagem: "O campo Nome é obrigatório."
    }, {
      id: "wpp_email",
      name: "email",
      mensagem: "O campo Email é obrigatório."
    }, {
      id: "wpp_telefone",
      name: "telefone",
      mensagem: "O campo Telefone é obrigatório."
    }, {
      id: "formName",
      name: "form_name",
      mensagem: "O campo Hidden é obrigatório."
    }];

    // Verifica se algum campo está vazio
    for (var _i2 = 0, _campos2 = campos; _i2 < _campos2.length; _i2++) {
      var campo = _campos2[_i2];
      if (!$("#".concat(campo.id)).val().trim()) {
        return Swal.fire("Erro!", campo.mensagem, "error");
      }
    }

    // Monta os dados do formulário com os names corretos para o backend
    var formData = campos.reduce(function (dados, campo) {
      dados[campo.name] = $("#".concat(campo.id)).val().trim();
      return dados;
    }, {});

    // Exibe o loading antes da requisição
    Swal.fire({
      title: "Aguarde...",
      text: "Estamos processando seu cadastro.",
      allowOutsideClick: false,
      didOpen: function didOpen() {
        Swal.showLoading();
      }
    });

    // Envia os dados via AJAX
    $.ajax({
      url: "https://crm.wave.pro.br/wp-json/crm-wave/v1/create-lead/lp-ram",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify(formData),
      success: function success(response) {
        Swal.fire({
          title: "Sucesso!",
          text: response.message || "Cadastro realizado com sucesso!",
          icon: "success",
          confirmButtonText: "OK"
        }).then(function (result) {
          if (result.isConfirmed) {
            campos.forEach(function (campo) {
              return $("#".concat(campo.id)).val("");
            });
            var linkWpp = "https://wa.me/5541992580720";
            window.location.href = linkWpp;
          }
        });
      },
      error: function error() {
        Swal.fire("Erro!", "Ocorreu um erro ao enviar os dados. Tente novamente.", "error");
      }
    });
  });
  $(document).on("click", ".newsletter-btn", function (event) {
    event.preventDefault(); // Evita comportamento padrão do botão

    // Lista de campos obrigatórios e seus nomes corretos para o backend
    var campos = [{
      id: "newsletter_email",
      name: "email",
      mensagem: "O campo Email é obrigatório."
    }];

    // Verifica se algum campo está vazio
    for (var _i3 = 0, _campos3 = campos; _i3 < _campos3.length; _i3++) {
      var campo = _campos3[_i3];
      if (!$("input[name=\"".concat(campo.id, "\"]")).val().trim()) {
        return Swal.fire("Erro!", campo.mensagem, "error");
      }
    }
    Swal.fire({
      title: "Aguarde...",
      text: "Estamos processando seu cadastro.",
      allowOutsideClick: false,
      didOpen: function didOpen() {
        Swal.showLoading();
      }
    });

    // Monta os dados do formulário com os names corretos para o backend
    var formData = campos.reduce(function (dados, campo) {
      dados[campo.name] = $("input[name=\"".concat(campo.id, "\"]")).val().trim();
      return dados;
    }, {});

    // Envia os dados via AJAX
    $.ajax({
      url: "https://crm.wave.pro.br/wp-json/crm-wave/v1/create-lead/lp-ram-newsletter",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify(formData),
      success: function success(response) {
        Swal.close();
        Swal.fire("Sucesso!", response.message || "Cadastro realizado com sucesso!", "success");
        campos.forEach(function (campo) {
          return $("input[name=\"".concat(campo.id, "\"]")).val("");
        });
      },
      error: function error() {
        Swal.fire("Erro!", "Ocorreu um erro ao enviar os dados. Tente novamente.", "error");
      }
    });
  });
  setTimeout(function () {
    $('#quoteBubble').removeClass('-right-60');
    $('#quoteBubble').removeClass('opacity-0');
    $('#quoteBubble').addClass('right-12');
    $('#quoteBubble').addClass('opacity-100');
  }, 3000);
  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    var target = $($.attr(this, 'href'));
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 800); // Tempo da animação em milissegundos
    }
  });
  var $toggleButton = $('#toggle-buttons');
  var $quoteBubble = $('#quoteBubble');
  var $window = $(window);
  function checkScroll() {
    var scrollTop = $window.scrollTop();
    var windowHeight = $window.height();
    var documentHeight = $(document).height();

    // Verifica se chegou ao final da página
    if (scrollTop + windowHeight >= documentHeight - 10) {
      // Se o bubble estiver visível, oculta-o junto com o botão
      if ($quoteBubble.is(':visible')) {
        $quoteBubble.fadeOut(500);
      }
      $toggleButton.fadeOut(500);
    } else {
      // Se o botão e o bubble estiverem visíveis, deve apenas aparecer se o bubble estiver visível
      if ($quoteBubble.is(':visible')) {
        $quoteBubble.fadeIn(500);
      }
      $toggleButton.fadeIn(500);
    }
  }

  // Verifica o scroll ao rolar a página
  $window.on('scroll', checkScroll);

  // Oculta o bubble se o botão for clicado
  $toggleButton.on('click', function () {
    $quoteBubble.fadeOut(500);
  });
  var $cards = $(".ram-card");
  function activeCard() {
    var $cards = $(".ram-card"); // Atualiza os cards
    var $defaultActive = null;

    // Percorre os cards para encontrar aquele que contém um filho com .active-ram
    $cards.each(function () {
      if ($(this).find(".active-ram").length) {
        $defaultActive = $(this);
        return false;
      }
    });
    console.log($defaultActive);
    setActiveCard($defaultActive);
    $cards.hover(function () {
      setActiveCard($(this));
    }, function () {
      setActiveCard($defaultActive);
    });
  }
  function setActiveCard($card) {
    $(".ram-card .bg-black").css("opacity", "0.6"); // Escurece todos
    $(".overlay-infos").removeClass('bg-black-70');
    if ($card) {
      $card.find(".bg-black").css("opacity", "0");
      $card.find(".infos-content .overlay-infos").addClass("bg-black-70");
    }
  }
  activeCard();
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/app": 0,
/******/ 			"css/editor-style": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktailpress"] = self["webpackChunktailpress"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/app","css/editor-style"], () => (__webpack_require__("./resources/js/app.js")))
/******/ 	__webpack_require__.O(undefined, ["css/app","css/editor-style"], () => (__webpack_require__("./resources/css/app.css")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app","css/editor-style"], () => (__webpack_require__("./resources/css/editor-style.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;