document.addEventListener("DOMContentLoaded", function() {


    // -----------  Burger animation --------------------

    const menu = document.querySelector('.burger-container');

    menu.addEventListener('click', () => {
        menu.classList.toggle('open');
    })

    // --------------  Toggle menu  -------------------

    const iconMenu = document.querySelector('.burger-container');
    const showMenu = document.querySelector('.nav');

    iconMenu.addEventListener('click', () => {
        showMenu.classList.toggle('show');
    });


    // ------------  Toggle search bar  ----------------

    const iconSearch = document.querySelector('.fa-search');
    const inputSearch = document.querySelector('.icons input');

    iconSearch.addEventListener('click', () => {
        inputSearch.classList.toggle('show');
    })




    // ------------------  team carousel --------------

    let slideIndex = 2;
    showMember();
    const buttonPlus = document.querySelector('.arrow-right');
    const buttonMinus = document.querySelector('.arrow-left');

    function nextMember() {
        showMember(slideIndex += 1);
    }

    function prevMember() {
        showMember(slideIndex -= 1);
    }

    function showMember(n) {

        const members = document.querySelectorAll('.member');
        const memberName = document.querySelectorAll('.member-details');

        if (n > members.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = members.length;
        }

        for (let i = 0; i < members.length; i++) {
            members[i].style.opacity = '0.6';
        }
        for (let i = 0; i < memberName.length; i++) {
            memberName[i].style.display = 'none';
        }

        members[slideIndex - 1].style.opacity = '1';
        memberName[slideIndex - 1].style.display = 'block';
    }

    buttonPlus.addEventListener('click', nextMember);
    buttonMinus.addEventListener('click', prevMember);

    // on click team details showing

    const teamMember1 = document.querySelector('.member-ter');
    const teamMember2 = document.querySelector('.member-sus');
    const teamMember3 = document.querySelector('.member-mel');

    function showMember1() {
        showMember(slideIndex = 1);
    }

    function showMember2() {
        showMember(slideIndex = 2);
    }

    function showMember3() {
        showMember(slideIndex = 3);
    }

    teamMember1.addEventListener('click', showMember1);
    teamMember2.addEventListener('click', showMember2);
    teamMember3.addEventListener('click', showMember3);






    // ------------------ loading client opinion ---------------


    let opinionIndex = 1;
    loadOpinion();


    function loadOpinion() {

        const opinionContainer = document.querySelectorAll('.opinion-container');
        const opinionLinks = document.querySelectorAll('.list__item');

        // hide all opinions
        for (let i = 0; i < opinionContainer.length; i++) {
            opinionContainer[i].style.display = 'none';
            opinionLinks[i].style.opacity = '0.5';
        }
        //default show opinion 1
        opinionContainer[opinionIndex - 1].style.display = 'block';
        opinionLinks[opinionIndex - 1].style.opacity = '1';
    }

    // bind slide to clicked item
    const opinion1 = document.querySelector('.list__item-jess');
    const opinion2 = document.querySelector('.list__item-melissa');
    const opinion3 = document.querySelector('.list__item-alissa');


    function showOpinion1() {
        loadOpinion(opinionIndex = 1);
    }

    function showOpinion2() {
        loadOpinion(opinionIndex = 2);
    }

    function showOpinion3() {
        loadOpinion(opinionIndex = 3);
    }

    opinion1.addEventListener('click', showOpinion1);
    opinion2.addEventListener('click', showOpinion2);
    opinion3.addEventListener('click', showOpinion3);


    // jquery plugin scrollTo

    $(function($) {

        $('#homeLink').click(function() {
            $.scrollTo($('.main-header'), 500);
        });
        $('#aboutLink').click(function() {
            $.scrollTo($('.aboutUs'), 800);
        });

        $('#servicesLink').click(function() {
            $.scrollTo($('.whatWeDo'), 1200);
        });
        $('#processLink').click(function() {
            $.scrollTo($('.work-style'), 1600);
        });
        $('#teamLink').click(function() {
            $.scrollTo($('.team'), 1200);
        });
        $('#clientsLink').click(function() {
            $.scrollTo($('.client-opinion'), 2000);
        })
        $('#contactLink').click(function() {
            $.scrollTo($('.contact'), 2000);
        })

    });



});