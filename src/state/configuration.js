import { _forEachName } from "gsap/gsap-core"

const Configuration = {

    system: {

        pages: [
            {_title: "ABOUT", _route: "about.html"},
            {_title: "LIBRARY", _route: "library.html"},
            {_title: "REPOSITORY", _route: "repository.html"},
            {_title: "CONTACTS", _route: "contacts.html"},    
        ],
    },

    contacts: {
        email: 'RDMTSTUDIOS@yandex.ru',
        location: 'Moscow, Russia',
    },

    library: {
        
        Header: [
            'ARCHIVE',
            'FOLIANTS',
        ],

        ARCHIVE: [ 
            {_title: 'ARCHIVE', _body: 'Public domain library containing the sacred knowledge of miracles and ethereal technologies of the origins of the last existence.', _data: 'MAY , 1986'},
            {_title: 'LIMBO', _body: 'DATA IN TRANSIT'},
            {_title: 'RMEDICS', _body: 'DATA IN TRANSIT'},
            {_title: 'THE DEER', _body: 'DATA IN TRANSIT', _data: 'AUGUST , 1986'},
            {_title: 'ETHER', _body: 'DATA IN TRANSIT', _data: 'AUGUST , 1986'},
            {_title: 'THE CORE', _body: 'DATA IN TRANSIT', _data: 'SEPTEMBER , 1986'},
            {_title: 'CLOUDBREAKER', _body: 'DATA IN TRANSIT', _data: 'OCTOBER , 1986'},
            {_title: 'DIALECT', _body: 'DATA IN TRANSIT'},
            {_title: 'FLOW', _body: 'DATA IN TRANSIT'},
            {_title: 'LABYRINTH', _body: 'DATA IN TRANSIT'},
            {_title: 'SONATAS OF THE DEAD ASTRONAUTS', _body: 'DATA IN TRANSIT'},
            {},
            {},
            {},
        ],

        FOLIANTS: [
            {_title: 'FOLIANTS', _body: 'Carriers of The Miracle Knowledge sources in various forms and representations available for use.<br><br>Data carrier status - development (status code: 122AAC)'},
            {},
            {},
            {},
        ],
    },

    repository: [
        {_id: 'THE KERNEL', _spec: 'ROOT RIGHTS REQUIRED - ACCESS DENIED'},
        {_id: 'VNDG', _spec: 'DA . . T A ___ H . . . D . ENNNNNNN ---15151521.521.76'},
        {_id: 'CLOUDBREAKER CONFIGURATION', _spec: `PUBLIC: 661.AA7-32XYRA++23.0-8<br><br>ETHER: ******************`},
        {_id: 'RMEDICS FLOW POINT ACCESS', _spec: '******************: ROOT RIGHTS REQUIRED'},
    ],

    about: [
        `text 1`,
        `text 2`,
        `text 3`,
    ],

};

export default Configuration;