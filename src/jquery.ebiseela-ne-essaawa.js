/*
 * Ebiseela ne essaawa
 * 
 * Copyright (c) 2018 mubtxs
 * Licensed under the MIT license.
 */

'use strict';

let $, funaOmwezi, funaEnzingu, funaEssaawa, funaEkigelo, funaEkigeloKyaEssaawaEkifunze, funaEkigeloKyaEssaawa, funaEkitunduKyaOlunaku, funaEbiseela, funaEbyokwelobozesaakoEbisuubilwa, funaEbyokwelobozesaakoEbyenjawulo, funaOmwakaMuBigambo, funaOlunaku, funaOmwaka, funaEssaawaMuBigambo, funaEssaawaObaEddakiikaObaMuBigambo, funaObutiktikiMuBigambo, mpaEssaawaMuBigambo, mpaEssaawaMuNnamba, funaEssaawaMuNnamba, gatakoZzeelo, funaMeka, funaOlunakuOlukulu,
    slice = [].slice;

$ = window.jQuery || window.$;

$.ebiseelaNeEssaawa = {};

$.ebiseelaNeEssaawa.fn = {};

/*$.fn.ebiseelaNeEssaawa = () => {
    var args, method;
    method = arguments[0];
    args = arguments.length >= 2 ? slice.call(arguments, 1) : [];
    return $.ebiseelaNeEssaawa.fn[method].apply(this, args);
};*/

$.fn.ebiseelaNeEssaawa = (...x) => {
    var args, method;
    method = x[0];
    args = x.length >= 2 ? slice.call(x, 1) : [];
    return $.ebiseelaNeEssaawa.fn[method].apply(this, args);
};

/**** Constants ****/

/** 
 * Endabika ezikirizibwa
 */ 
const ENDABIKA = {
    // endabika za emyezi ne omwaka
    KALENDA: {
        // d -> olunaku lwa wiiki
        // w -> olunaku lwa omwezi
        // m -> omwezi
        // y -> owaka 
        /* mu bujjuvu */
        m: 'm', // d[m] w m[m], y 
        ms: 'ms', // d[ms] w m[ms], y
        ma: 'ma', // d[m] w[b] m[m], y  
        mc: 'mc', // d[m] w[b] m[m], y[b]
        b: 'b', // d[b] w m[b], y 
        bs: 'bs', // d[bs] w m[bs], y
        ba: 'ba', // d[b] w[b] m[b], y
        bc: 'bc', // d[b] w[b] m[b], y[b]
        l: 'l', // d[l] w m[l], y 
        ls: 'ls', // d[ls] w m[ls], y 
        la: 'la', // d[l] w[b] m[l], y 
        lc: 'lc', // d[l] w[b] m[l], y[b]
        e: 'e', // d[e] w m[e], y 
        es: 'es', // d[es] w m[es], y
        ea: 'ea', // d[e] w[b] m[e], y 
        ec: 'ec', // d[e] w[b] m[e], y[b] 
        msd: 'msd', // d[ms] w m[m], y 
        msm: 'msm', // d[m] w m[ms], y 
        bsd: 'bsd', // d[bs] w m[b], y 
        bsm: 'bsm', // d[b] w m[bs], y 
        lsd: 'lsd', // d[ls] w m[l], y 
        lsm: 'lsm', // d[l] w m[ls], y 
        /* mu bufunze */
        km: 'km', // w m[m] y 
        kl: 'kl', // w m[l] y 
        kb: 'kb', // w m[b] y
        kmn: 'kmn', // w[l] m[m] y 
        kln: 'kln', // w[l] m[l] y 
        kbn: 'kbn', // w[l] m[b] y
        kms: 'kms', // w-m[ms]-y 
        kls: 'kls', // w-m[ls]-y 
        kbs: 'kbs', // w-m[bs]-y
        kmc: 'kmc', // w[b] m[m] y[b] 
        klc: 'klc', // w[b] m[l] y[b] 
        kbc: 'kbc', // w[b] m[b] y[b]         
        kmss: 'kmss', // w/m[ms]/y[s] 
        klss: 'klss', // w/m[ls]/y[s] 
        kbss: 'kbss' // w/m[bs]/y[s]
    },
    KATI: {
        // e -> essaawa
        // k -> ekigelo

        // essaawa mu nnamba
        m: 'm', // e[m] ess:edd:aka
        ms: 'ms', // e[ms] ess:edd
        mss: 'mss', // e[ms] ess
        mkss: 'mkss', // e[ms] ess
        mnss: 'mnss', // e[ms] ess
        mtss: 'mtss', // e[ms] ess
        // gatako zzeelo ku ssaawa
        mz: 'mz', // e[m] ess:edd:aka
        msz: 'msz', // e[ms] ess:edd
        mssz: 'mssz', // e[ms] ess

        // gatako zzeelo ku ssaawa
        pz: 'pz', // es[p] ess:edd:aka
        psz: 'psz', // es[ps] ess:edd
        pssz: 'pssz', // es[ps] ess

        // essaawa mu bigambo
        cmk: 'cmk', // e[m] k[k] ess:edd:aka
        cmks: 'cmks', // e[ms] k[k] ess:edd
        cmkss: 'cmkss', // e[ms] k[k] ess
        cmn: 'cmn', // e[m] k[n] 
        cmns: 'cmns', // e[ms] k[n]
        cmnss: 'cmnss', // e[ms] k[n]
        cmt: 'cmt', // e[m] k[t] 
        cmts: 'cmts', // e[ms] k[t]
        cmtss: 'cmtss', // e[ms] k[t]

        cb: 'cb', // e[b] ess:edd:aka
        cbs: 'cbs', // e[bs] ess:edd
        cbss: 'cbss', // e[bs] ess
        cbsm: 'cbsm' // e[bs] ess
    },
    // endabika za emyezi
    OMWEZI: {
        m: 'm', // okusinziila ku mbala
        ms: 'ms', // okusinziila ku mbala mu bufunze
        b: 'b', // okusinziila ku bibeelawo
        bs: 'bs', // okusinziila ku bibeelawo mu bufunze
        l: 'l', // okusinziila ku lungeleza
        ls: 'ls', // okusinziila ku lungeleza mu bufunze
        e: 'e', // okusinziila ku lungeleza
        es: 'es' // okusinziila ku lungeleza mu bufunze
    },
    ENZINGU: {
        m: 'm', // okusinziila ku mbala
        ms: 'ms', // okusinziila ku mbala mu bufunze
        b: 'b', // okusinziila ku bibeelawo
        bs: 'bs', // okusinziila ku bibeelawo mu bufunze
        l: 'l', // okusinziila ku lungeleza
        ls: 'ls', // okusinziila ku lungeleza mu bufunze
        e: 'e', // elinya edala
        es: 'es' // elinya edala mu bufunze
    },
    ESSAAWA: {
        m: 'm', // okusinziila ku mbala ya emisana ne ekilo
        ms: 'ms', // okusinziila ku mbala ya emisana ne ekilo mu bufunze
        b: 'b', // okusinziila ku bibeelawo
        bs: 'bs', // okusinziila ku bibeelawo mu bufunze
        p: 'p', // okusinziila ku mbala ya olunaku lwona
        ps: 'ps', // okusinziila ku mbala ya olunaku lwona mu bufunze

        msz: 'msz', // okusinziila ku mbala ya emisana ne ekilo ate ogateko zzeelo wekyetagisa
        psz: 'psz' // okusinziila ku mbala ya olunaku lwona mu bufunze ate ogateko zzeelo wekyetagisa
    },
    EKIGELO: {
        k: 'k', // okusinziila ku mbala ya olunaku lwona
        n: 'n', // okusinziila ku bibeelawo
        t: 't' // okusinziila ku mbala ya emisana ne ekilo
    },
    OMWAKA: {
        m: 'm', // okusinziila ku mbala ya ennamba
        ms: 'ms', // okusinziila ku mbala ya ennamba ezissembayo ebbili
        b: 'b', // okusinziila ku mbala ya ennamba mu bigambo
        bs: 'bs' // okusinziila ku mbala ya ennamba ezissembayo ebbili mu bigambo
    },
    OLUNAKU: {
        m: 'm', // okusinziila ku mbala ya ennamba
        z: 'z', // okusinziila ku mbala ya ennamba ela ogatte zzeelo ennamba bweba eka wansi wa 10
        b: 'b', // okusinziila ku mbala ya ennamba mu bigambo
    }
};

/** 
 * Ennaku za omwezi
 */ 
const ENNAKU_ZA_OMWEZI = [
    'lumu',
    'bbili',
    'ssatu',
    'nnya',
    'ttaano',
    'mukaaga',
    'musanvu',
    'munaana',
    'mwenda',
    'kkumi',
    'kkuminalumu',
    'kkuminabbili',
    'kkuminassatu',
    'kkuminannya',
    'kkuminattaano',
    'kumminamukaaga',
    'kumminamusanvu',
    'kumminamunaana',
    'kumminamwenda',
    'abili',
    'abilimulumu',
    'abilimubbili',
    'abilimussatu',
    'abilimunnya',
    'abilimutaano',
    'abilimumukaaga',
    'abilimumusanvu',
    'abilimumunaana',
    'abilimumwenda',
    'asatu',
    'asatumulumu'
];

/** 
 * Enyingo za omwaaka mu bigambo
 */
const ENNYINGO_EZA_OMWAKA = {
    essooka: [
        'lukumu',
        'nkumibbili',
        'nkumissatu',
        'nkuminnya',
        'nkumittaano',
        'kakaaga',
        'kasanvu',
        'kanaana',
        'kenda'
    ],
    eyokubili: [
        'kikumi',
        'bibili',
        'bisatu',
        'bina',
        'bitaano',
        'lukaaga',
        'lusanvu',
        'lunaana',
        'lwenda'
    ],
    eyokusatu: [
        'kkumi',
        'abili',
        'asatu',
        'ana',
        'ataano',
        'nkaaga',
        'nsanvu',
        'kinaana',
        'kyenda'
    ],
    eyokunna: [
        'gumu',
        'bbili',
        'ssatu',
        'nnya',
        'ttaano',
        'mukaaga',
        'musanvu',
        'munaana',
        'mwenda'
    ]
};

/** 
 * Emanya ga obutikitiki
 */
const EMBALA_EYA_OBUTIKITIKI = [
    'kamu',
    'bubili',
    'busatu',
    'buna',
    'butaano',
    'mukaaga',
    'musanvu',
    'munaana',
    'mwenda'
];

/** 
 * Akagambo akagata
 */ 
const NNALUGANDA = {
    MU: 'mu',
    EZA: 'eza',
    ZA: 'ez',
    EZ: 'ez', // ez'
    NE: 'ne',
    NA: 'na',
    N: 'n', // n'
    EYA: 'eya',
    YA: 'ya',
    EY: 'ey', // ey'
    Y: 'y' // y'
};

/** 
 * Endabika mu bufunze
 */
const E_KALE = ENDABIKA.KALENDA,
    E_KATI = ENDABIKA.KATI,
    E_MWEZ = ENDABIKA.OMWEZI,
    E_ENZI = ENDABIKA.ENZINGU,
    E_SAWA = ENDABIKA.ESSAAWA,
    E_LUNA = ENDABIKA.OLUNAKU,
    E_MWAK = ENDABIKA.OMWAKA,
    E_KIGE = ENDABIKA.EKIGELO;

/**** Data Methods ****/

/**
 * Funa amazooba/emyezi ga omwaka
 *
 * akakolelo akawa amazooba ga omwaka okusinziila ku nbabika
 * Endabika
 * - m: okusinziila ku mbala
 * - b: okusinziila ku bibeelawo
 * - l: okusinziila ku lungeleza
 * - 's': mu bufunze
 *
 * @param {number} enu ennamba ya omwezi
 * @param {string} emp endabika ya omwezi
 * 
 * @return {string} omwezi
 */
funaOmwezi = (enu = 0, emp = 'b') => {
    switch (enu) {
        case 0:
            switch (emp) {
                case E_MWEZ.b:
                    return 'gatonnya';
                case E_MWEZ.bs:
                    return 'gat';
                case E_MWEZ.m:
                case E_MWEZ.e:
                    return 'ogwolubelebelye';
                case E_MWEZ.ms:
                case E_MWEZ.es:
                    return 'ogw1';
                case E_MWEZ.l:

                    return 'janwaali';
                case E_MWEZ.ls:

                    return 'jan';
                default:
                    throw Error('endabika temanyiddwa');
            }

        case 1:
            switch (emp) {
                case E_MWEZ.b:
                    return 'mukutulansanja';
                case E_MWEZ.bs:
                    return 'muk';
                case E_MWEZ.m:
                case E_MWEZ.e:
                    return 'ogwokubili';
                case E_MWEZ.ms:
                case E_MWEZ.es:
                    return 'ogw2';
                case E_MWEZ.l:

                    return 'febwaali';
                case E_MWEZ.ls:

                    return 'feb';
                default:
                    throw Error('endabika temanyiddwa');
            }

        case 2:
            switch (emp) {
                case E_MWEZ.b:
                    return 'mugulansigo';
                case E_MWEZ.bs:
                    return 'mug';
                case E_MWEZ.m:
                case E_MWEZ.e:
                    return 'ogwokusatu';
                case E_MWEZ.ms:
                case E_MWEZ.es:
                    return 'ogw3';
                case E_MWEZ.l:

                    return 'maaci';
                case E_MWEZ.ls:

                    return 'maa';
                default:
                    throw Error('endabika temanyiddwa');
            }

        case 3:
            switch (emp) {
                case E_MWEZ.b:
                    return 'kafuumuulampawu';
                case E_MWEZ.bs:
                    return 'kaf';
                case E_MWEZ.m:
                case E_MWEZ.e:
                    return 'ogwokuna';
                case E_MWEZ.ms:
                case E_MWEZ.es:
                    return 'ogw4';
                case E_MWEZ.l:

                    return 'apuli';
                case E_MWEZ.ls:

                    return 'apu';
                default:
                    throw Error('endabika temanyiddwa');
            }

        case 4:
            switch (emp) {
                case E_MWEZ.b:
                    return 'muzigo';
                case E_MWEZ.bs:
                    return 'muz';
                case E_MWEZ.m:
                case E_MWEZ.e:
                    return 'ogwokutaano';
                case E_MWEZ.ms:
                case E_MWEZ.es:
                    return 'ogw5';
                case E_MWEZ.l:

                    return 'meeyi';
                case E_MWEZ.ls:

                    return 'mee';
                default:
                    throw Error('endabika temanyiddwa');
            }

        case 5:
            switch (emp) {
                case E_MWEZ.b:
                    return 'ssebaaseka';
                case E_MWEZ.bs:
                    return 'sseb';
                case E_MWEZ.m:
                case E_MWEZ.e:
                    return 'ogwomukaaga';
                case E_MWEZ.ms:
                case E_MWEZ.es:
                    return 'ogw6';
                case E_MWEZ.l:

                    return 'juuni';
                case E_MWEZ.ls:

                    return 'juu';
                default:
                    throw Error('endabika temanyiddwa');
            }

        case 6:
            switch (emp) {
                case E_MWEZ.b:
                    return 'kasambula';
                case E_MWEZ.bs:
                    return 'kas';
                case E_MWEZ.m:
                case E_MWEZ.e:
                    return 'ogwomusanvu';
                case E_MWEZ.ms:
                case E_MWEZ.es:
                    return 'ogw7';
                case E_MWEZ.l:

                    return 'julaayi';
                case E_MWEZ.ls:

                    return 'jul';
                default:
                    throw Error('endabika temanyiddwa');
            }

        case 7:
            switch (emp) {
                case E_MWEZ.b:
                    return 'muwakanya';
                case E_MWEZ.bs:
                    return 'muw';
                case E_MWEZ.m:
                case E_MWEZ.e:
                    return 'ogwomunaana';
                case E_MWEZ.ms:
                case E_MWEZ.es:
                    return 'ogw8';
                case E_MWEZ.l:
                    return 'agusito';
                case E_MWEZ.ls:
                    return 'agu';
                default:
                    throw Error('endabika temanyiddwa');
            }

        case 8:
            switch (emp) {
                case E_MWEZ.b:
                    return 'mutunda';
                case E_MWEZ.bs:
                    return 'mut';
                case E_MWEZ.m:
                case E_MWEZ.e:
                    return 'ogwomwenda';
                case E_MWEZ.ms:
                case E_MWEZ.es:
                    return 'ogw9';
                case E_MWEZ.l:

                    return 'ssebutemba';
                case E_MWEZ.ls:

                    return 'sseb';
                default:
                    throw Error('endabika temanyiddwa');
            }

        case 9:
            switch (emp) {
                case E_MWEZ.b:
                    return 'mukulukusabitungotungo';
                case E_MWEZ.bs:
                    return 'mukul';
                case E_MWEZ.m:
                case E_MWEZ.e:
                    return 'ogwekkumi';
                case E_MWEZ.ms:
                case E_MWEZ.es:
                    return 'ogw10';
                case E_MWEZ.l:

                    return 'okitobba';
                case E_MWEZ.ls:

                    return 'oki';
                default:
                    throw Error('endabika temanyiddwa');
            }

        case 10:
            switch (emp) {
                case E_MWEZ.b:
                    return 'museenene';
                case E_MWEZ.bs:
                    return 'mus';
                case E_MWEZ.m:
                case E_MWEZ.e:
                    return 'ogwekkuminoogumu';
                case E_MWEZ.ms:
                case E_MWEZ.es:
                    return 'ogw11';
                case E_MWEZ.l:

                    return 'noovemba';
                case E_MWEZ.ls:

                    return 'noo';
                default:
                    throw Error('endabika temanyiddwa');
            }

        case 11:
            switch (emp) {
                case E_MWEZ.b:
                    return 'ntenvu';
                case E_MWEZ.bs:
                    return 'nte';
                case E_MWEZ.m:
                case E_MWEZ.e:
                    return 'ogwekkumineebili';
                case E_MWEZ.ms:
                case E_MWEZ.es:
                    return 'ogw12';
                case E_MWEZ.l:

                    return 'deesemba';
                case E_MWEZ.ls:

                    return 'dee';
                default:
                    throw Error('endabika temanyiddwa');
            }

        default:
            throw Error('omwezi tegumanyiddwa');
    }
};

/**
 * Funa enzingu/ennaku zza ddimansi/wiiki
 *
 * akakolelo akafuna enzingu/ennaku zza ddimansi/wiiki okusinziila ku nbabika
 * Endabika ezikilizibwa:
 * - m: okusinziila ku mbala
 * - b: okusinziila ku balubaale
 * - e: elinya edala
 * - l: okusinziila ku lungeleza
 * - 's': mu bufunze
 *
 * @param {number} enu ennamba ya olunaku
 * @param {string} emp endabika ya olunaku
 * 
 * @return {string} omwezi
 */
funaEnzingu = (enu = 0, emp = 'b') => {

    switch (enu) {
        case 1:
            switch (emp) {
                case E_ENZI.bs:
                    return 'wam';
                case E_ENZI.b:
                    return 'wamunyi';
                case E_ENZI.es:
                case E_ENZI.ls:
                    return 'bbal';
                case E_ENZI.e:
                case E_ENZI.l:
                    return 'bbalaza';
                case E_ENZI.ms:
                    return 'olw1';
                case E_ENZI.m:
                    return 'olwokusooka';
                default:
                    throw Error('endabika temanyiddwa');
            }

        case 2:
            switch (emp) {
                case E_ENZI.bs:
                    return 'kaz';
                case E_ENZI.b:
                    return 'kazooba';
                case E_ENZI.ms:
                case E_ENZI.es:
                case E_ENZI.ls:
                    return 'olw2';
                case E_ENZI.m:
                case E_ENZI.l:
                case E_ENZI.e:
                    return 'olwokubili';
                default:
                    throw Error('endabika temanyiddwa');
            }

        case 3:
            switch (emp) {
                case E_ENZI.bs:
                    return 'wal';
                case E_ENZI.b:
                    return 'walumbe';
                case E_ENZI.ms:
                case E_ENZI.es:
                case E_ENZI.ls:
                    return 'olw3';
                case E_ENZI.m:
                case E_ENZI.l:
                case E_ENZI.e:
                    return 'olwokusatu';
                default:
                    throw Error('endabika temanyiddwa');
            }

        case 4:
            switch (emp) {
                case E_ENZI.bs:
                    return 'muk';
                case E_ENZI.b:
                    return 'mukasa';
                case E_ENZI.ms:
                case E_ENZI.es:
                case E_ENZI.ls:
                    return 'olw4';
                case E_ENZI.m:
                case E_ENZI.l:
                case E_ENZI.e:
                    return 'olwokuna';
                default:
                    throw Error('endabika temanyiddwa');
            }

        case 5:
            switch (emp) {
                case E_ENZI.bs:
                    return 'kiw';
                case E_ENZI.b:
                    return 'kiwanuka';
                case E_ENZI.es:
                    return 'jum';
                case E_ENZI.e:
                    return 'juma';
                case E_ENZI.ms:
                case E_ENZI.ls:
                    return 'olw5';
                case E_ENZI.m:
                case E_ENZI.l:
                    return 'olwokutaano';
                default:
                    throw Error('endabika temanyiddwa');
            }

        case 6:
            switch (emp) {
                case E_ENZI.bs:
                    return 'nag';
                case E_ENZI.b:
                    return 'nagawonye';
                case E_ENZI.ms:
                case E_ENZI.es:
                case E_ENZI.ls:
                    return 'olw6';
                case E_ENZI.m:
                case E_ENZI.l:
                case E_ENZI.e:
                    return 'olwomukaaga';
                default:
                    throw Error('endabika temanyiddwa');
            }

        case 0:
            switch (emp) {
                case E_ENZI.bs:
                    return 'wan';
                case E_ENZI.b:
                    return 'wangu';
                case E_ENZI.ls:
                    return 'Ssan';
                case E_ENZI.l:
                    return 'Ssande';
                case E_ENZI.ms:
                case E_ENZI.es:
                    return 'olw7';
                case E_ENZI.m:
                case E_ENZI.e:
                    return 'olwomusanvu';
                default:
                    throw Error('endabika temanyiddwa');
            }

        default:
            throw Error('olunaku telumanyiddwa');
    }
};

/**
 * Funa essaawa
 *
 * akakolelo akafuna essaawa okusinziila ku nbabika
 * Endabika ezikilizibwa:
 * - m: okusinziila ku mbala ya emisana ne ekilo
 * - p: okusinziila ku mbala ya olunaku lwona
 * - b: okusinziila ku bibeelawo
 * - 's': mu bufunze
 *
 * @param {number} enu ennamba ya olunaku
 * @param {string} emp endabika ya olunaku
 * 
 * @return {string} essaawa
 */
funaEssaawa = (enu = 0, emp = 'b') => {
    switch (enu) {
        case 0:
            switch (emp) {
                case E_SAWA.b:
                    return 'kisisimukeekyokubili';
                case E_SAWA.bs:
                    return 'kis2';
                case E_SAWA.m:
                    return 'mukaaga';
                case E_SAWA.ms:
                    return '6';
                case E_SAWA.p:
                    return 'zzeelo';
                case E_SAWA.ps:
                    return '0';
                default:
                    throw new Error('endabika ya essaawa temanyiddwa');
            }

        case 1:
            switch (emp) {
                case E_SAWA.b:
                    return 'mattansejjere';
                case E_SAWA.bs:
                    return 'matt';
                case E_SAWA.m:
                    return 'musanvu';
                case E_SAWA.ms:
                    return '7';
                case E_SAWA.p:
                    return 'emu';
                case E_SAWA.ps:
                    return '1';
                default:
                    throw new Error('endabika ya essaawa temanyiddwa');
            }

        case 2:
            switch (emp) {
                case E_SAWA.b:
                    return 'matutuma';
                case E_SAWA.bs:
                    return 'matu';
                case E_SAWA.m:
                    return 'munaana';
                case E_SAWA.ms:
                    return '8';
                case E_SAWA.p:
                    return 'bbili';
                case E_SAWA.ps:
                    return '2';
                default:
                    throw new Error('endabika ya essaawa temanyiddwa');
            }

        case 3:
            switch (emp) {
                case E_SAWA.b:
                    return 'nkokeembelebelye';
                case E_SAWA.bs:
                    return 'nko1';
                case E_SAWA.m:
                    return 'mwenda';
                case E_SAWA.ms:
                    return '9';
                case E_SAWA.p:
                    return 'ssatu';
                case E_SAWA.ps:
                    return '3';
                default:
                    throw new Error('endabika ya essaawa temanyiddwa');
            }

        case 4:
            switch (emp) {
                case E_SAWA.b:
                    return 'nkokeeyookubili';
                case E_SAWA.bs:
                    return 'nko2';
                case E_SAWA.m:
                    return 'kkumi';
                case E_SAWA.ms:
                    return '10';
                case E_SAWA.p:
                    return 'nnya';
                case E_SAWA.ps:
                    return '4';
                default:
                    throw new Error('endabika ya essaawa temanyiddwa');
            }

        case 5:
            switch (emp) {
                case E_SAWA.b:
                    return 'kinywambogo';
                case E_SAWA.bs:
                    return 'kiny';
                case E_SAWA.m:
                    return 'kkuminemu';
                case E_SAWA.ms:
                    return '11';
                case E_SAWA.p:
                    return 'ttaano';
                case E_SAWA.ps:
                    return '5';
                default:
                    throw new Error('endabika ya essaawa temanyiddwa');
            }

        case 6:
            switch (emp) {
                case E_SAWA.b:
                    return 'mmambyesaze';
                case E_SAWA.bs:
                    return 'mmam';
                case E_SAWA.m:
                    return 'kkuminebbili';
                case E_SAWA.ms:
                    return '12';
                case E_SAWA.p:
                    return 'mukaaga';
                case E_SAWA.ps:
                    return '6';
                default:
                    throw new Error('endabika ya essaawa temanyiddwa');
            }

        case 7:
            switch (emp) {
                case E_SAWA.b:
                    return 'maliili';
                case E_SAWA.bs:
                    return 'mali';
                case E_SAWA.m:
                    return 'emu';
                case E_SAWA.ms:
                    return '1';
                case E_SAWA.p:
                    return 'musanvu';
                case E_SAWA.ps:
                    return '7';
                default:
                    throw new Error('endabika ya essaawa temanyiddwa');
            }

        case 8:
            switch (emp) {
                case E_SAWA.b:
                    return 'suuleesanja';
                case E_SAWA.bs:
                    return 'suul';
                case E_SAWA.m:
                    return 'bbili';
                case E_SAWA.ms:
                    return '2';
                case E_SAWA.p:
                    return 'munaana';
                case E_SAWA.ps:
                    return '8';
                default:
                    throw new Error('endabika ya essaawa temanyiddwa');
            }

        case 9:
            switch (emp) {
                case E_SAWA.b:
                    return 'manywataba';
                case E_SAWA.bs:
                    return 'many';
                case E_SAWA.m:
                    return 'satu';
                case E_SAWA.ms:
                    return '3';
                case E_SAWA.p:
                    return 'mwenda';
                case E_SAWA.ps:
                    return '9';
                default:
                    throw new Error('endabika ya essaawa temanyiddwa');
            }

        case 10:
            switch (emp) {
                case E_SAWA.b:
                    return 'kalasamayanzi';
                case E_SAWA.bs:
                    return 'kala';
                case E_SAWA.m:
                    return 'nnya';
                case E_SAWA.ms:
                    return '4';
                case E_SAWA.p:
                    return 'kkumi';
                case E_SAWA.ps:
                    return '10';
                default:
                    throw new Error('endabika ya essaawa temanyiddwa');
            }

        case 11:
            switch (emp) {
                case E_SAWA.b:
                    return 'makolakyamisana';
                case E_SAWA.bs:
                    return 'mako';
                case E_SAWA.m:
                    return 'ttaano';
                case E_SAWA.ms:
                    return '5';
                case E_SAWA.p:
                    return 'kkuminemu';
                case E_SAWA.ps:
                    return '11';
                default:
                    throw new Error('endabika ya essaawa temanyiddwa');
            }

        case 12:
            switch (emp) {
                case E_SAWA.b:
                    return 'ttuntu';
                case E_SAWA.bs:
                    return 'ttun';
                case E_SAWA.m:
                    return 'mukaaga';
                case E_SAWA.ms:
                    return '6';
                case E_SAWA.p:
                    return 'kkuminebbili';
                case E_SAWA.ps:
                    return '12';
                default:
                    throw new Error('endabika ya essaawa temanyiddwa');
            }

        case 13:
            switch (emp) {
                case E_SAWA.b:
                    return 'malyakyamisana';
                case E_SAWA.bs:
                    return 'kyam';
                case E_SAWA.m:
                    return 'musanvu';
                case E_SAWA.ms:
                    return '7';
                case E_SAWA.p:
                    return 'kkuminesatu';
                case E_SAWA.ps:
                    return '13';
                default:
                    throw new Error('endabika ya essaawa temanyiddwa');
            }

        case 14:
            switch (emp) {
                case E_SAWA.b:
                    return 'ggandaalo';
                case E_SAWA.bs:
                    return 'ggan';
                case E_SAWA.m:
                    return 'munaana';
                case E_SAWA.ms:
                    return '8';
                case E_SAWA.p:
                    return 'kkuminennya';
                case E_SAWA.ps:
                    return '14';
                default:
                    throw new Error('endabika ya essaawa temanyiddwa');
            }

        case 15:
            switch (emp) {
                case E_SAWA.b:
                    return 'makolakyaggulo';
                case E_SAWA.bs:
                    return 'mako';
                case E_SAWA.m:
                    return 'mwenda';
                case E_SAWA.ms:
                    return '9';
                case E_SAWA.p:
                    return 'kkuminettaano';
                case E_SAWA.ps:
                    return '15';
                default:
                    throw new Error('endabika ya essaawa temanyiddwa');
            }

        case 16:
            switch (emp) {
                case E_SAWA.b:
                    return 'mayimbulambuzi';
                case E_SAWA.bs:
                    return 'mayi';
                case E_SAWA.m:
                    return 'kkumi';
                case E_SAWA.ms:
                    return '10';
                case E_SAWA.p:
                    return 'kkuminomukaaga';
                case E_SAWA.ps:
                    return '16';
                default:
                    throw new Error('endabika ya essaawa temanyiddwa');
            }

        case 17:
            switch (emp) {
                case E_SAWA.b:
                    return 'mafumbakyaggulo';
                case E_SAWA.bs:
                    return 'mafu';
                case E_SAWA.m:
                    return 'kkuminemu';
                case E_SAWA.ms:
                    return '11';
                case E_SAWA.p:
                    return 'kkuminomusanvu';
                case E_SAWA.ps:
                    return '17';
                default:
                    throw new Error('endabika ya essaawa temanyiddwa');
            }

        case 18:
            switch (emp) {
                case E_SAWA.b:
                    return 'kasendabazaana';
                case E_SAWA.bs:
                    return 'kase';
                case E_SAWA.m:
                    return 'kkuminebbili';
                case E_SAWA.ms:
                    return '12';
                case E_SAWA.p:
                    return 'kkuminomunaana';
                case E_SAWA.ps:
                    return '18';
                default:
                    throw new Error('endabika ya essaawa temanyiddwa');
            }

        case 19:
            switch (emp) {
                case E_SAWA.b:
                    return 'Malyakyaggulo';
                case E_SAWA.bs:
                    return 'maly';
                case E_SAWA.m:
                    return 'emu';
                case E_SAWA.ms:
                    return '1';
                case E_SAWA.p:
                    return 'kkuminamwenda';
                case E_SAWA.ps:
                    return '19';
                default:
                    throw new Error('endabika ya essaawa temanyiddwa');
            }

        case 20:
            switch (emp) {
                case E_SAWA.b:
                    return 'kweggala';
                case E_SAWA.bs:
                    return 'kweg';
                case E_SAWA.m:
                    return 'bbili';
                case E_SAWA.ms:
                    return '2';
                case E_SAWA.p:
                    return 'abili';
                case E_SAWA.ps:
                    return '20';
                default:
                    throw new Error('endabika ya essaawa temanyiddwa');
            }

        case 21:
            switch (emp) {
                case E_SAWA.b:
                    return 'ggulolimu';
                case E_SAWA.bs:
                    return 'ggul';
                case E_SAWA.m:
                    return 'satu';
                case E_SAWA.ms:
                    return '3';
                case E_SAWA.p:
                    return 'abilimwemu';
                case E_SAWA.ps:
                    return '21';
                default:
                    throw new Error('endabika ya essaawa temanyiddwa');
            }

        case 22:
            switch (emp) {
                case E_SAWA.b:
                    return 'kawozamasiga';
                case E_SAWA.bs:
                    return 'kawo';
                case E_SAWA.m:
                    return 'nnya';
                case E_SAWA.ms:
                    return '4';
                case E_SAWA.p:
                    return 'abilimubbili';
                case E_SAWA.ps:
                    return '22';
                default:
                    throw new Error('endabika ya essaawa temanyiddwa');
            }

        case 23:
            switch (emp) {
                case E_SAWA.b:
                    return 'kisisimukeekisooka';
                case E_SAWA.bs:
                    return 'kis2';
                case E_SAWA.m:
                    return 'ttaano';
                case E_SAWA.ms:
                    return '5';
                case E_SAWA.p:
                    return 'abilimusatu';
                case E_SAWA.ps:
                    return '23';
                default:
                    throw new Error('endabika ya essaawa temanyiddwa');
            }

        default:
            throw Error('essaawa temanyiddwa');
    }
};

/**
 * Funa ekigelo kya essaawa
 *
 * akakolelo akafuna ekigelo okusinziila ku nbabika
 * Endabika ezikilizibwa:
 * - k: okusinziila ku mbala ya emisana ne ekilo
 * - n: okusinziila ku mbala ya olunaku lwona
 * - b: okusinziila ku bibeelawo
 *
 * @param {number} enu ennamba ya olunaku
 * @param {string} emp endabika ya olunaku
 * 
 * @return {string} ekigelo kya essaawa
 */
funaEkigelo = (enu = 0, emp = '') => {
    if (emp === E_KIGE.k) {
        return funaEkigeloKyaEssaawa(enu);
    } else if (emp === E_KIGE.n) {
        return funaEkigeloKyaEssaawaEkifunze(enu);
    } else if (emp === E_KIGE.t) {
        return funaEkitunduKyaOlunaku(enu);
    } else {
        throw new Error('endabika ya ekigelo temanyiddwa');
    }
};

/**
 * Funa essaawa mu bibinja
 * 
 * @param {number} enu ennamba ya olunaku
 * 
 * @return {string} ekigelo kya essaawa
 */
funaEkigeloKyaEssaawa = (enu) => {
    switch (enu) {
        case 0:
        case 1:
        case 2:
        case 3:
            return 'ettumbi';

        case 4:
        case 5:
        case 6:
            return 'amatulutulu';

        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
            return 'amakya';

        case 12:
        case 13:
        case 14:
            return 'ettuntu';

        case 15:
        case 16:
        case 17:
            return 'olweggulo';

        case 18:
        case 19:
            return 'akawungeezi';

        case 20:
        case 21:
        case 22:
        case 23:
            return 'ekilo';

        default:
            throw Error('ekigelo kya essaawa temanyiddwa');
    }
};

/** 
 * Funa essaawa mu bibinja okusinziila ku biseela bya olunaku
 * 
 * @param {number} enu ennamba ya olunaku
 * 
 * @return {string} ekigelo kya essaawa
 */
funaEkigeloKyaEssaawaEkifunze = (enu) => {
    switch (enu) {
        case 20:
        case 21:
        case 22:
        case 23:
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
            return 'ekilo';

        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
            return 'amakya';

        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
            return 'emisana';

        case 18:
        case 19:
            return 'akawungeezi';

        default:
            throw Error('ekigelo kya essaawa temanyiddwa');
    }
};

/** 
 * Funa essaawa mu bibinja okusinziila ku bitundu ebili ebya olunaku
 * 
 * @param {number} enu ennamba ya olunaku
 * 
 * @return {string} ekigelo kya essaawa
 */
funaEkitunduKyaOlunaku = (enu) => {
    switch (enu) {
        case 19:
        case 20:
        case 21:
        case 22:
        case 23:
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return 'ekilo';

        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
            return 'emisana';

        default:
            throw Error('ekitundu kya olunaku temanyiddwa');
    }
};

/**
 * Ezimu ku nnaku enkulu mu mwaka
 * 
 * @param {number} mwe omwezi
 * @param {number} lun olunaku 
 * 
 * @return {string} elinya lya olunaku olukulu
 */
funaOlunakuOlukulu = (mwe = 0, lun = 0) => {
    let lunaku = `${mwe}-${lun}`;

    switch (lunaku) {
        case '0-1':
            return 'olusooka omwaka';

        case '2-3':
            return 'olwabakazi';

        case '4-1':
            return 'olwabakozi';

        case '5-3':
            return 'olwabajulizi';

        case '9-9':
            return 'olwameefuga';

        case '11-25':
            return 'sekukkulu';

        case '11-26':
            return 'oluddilila sekukkulu';

        default:
            //throw new Error(`olunaku olukulu ${lun} mu mwezi ${mwe} tegumanyiddwa`);
            return '';
    }
};

/**** non-data methods ****/

/**
 * Funa endabika ya olunaku
 */
funaOlunaku = (olu = 0, end = 'm') => {
    if (end === 'm') {
        return `${olu}`;
    } else if (end === 'z') {
        if (olu < 10) {
            return `0${olu}`;
        } else {
            return `${olu}`;
        }
    } else if (end === 'b') {
        return ENNAKU_ZA_OMWEZI[olu - 1];
    }
};

/** 
 * Omwaka mu bigambo
 */
funaOmwakaMuBigambo = (omw = '0', emp = 'v') => {

    let obuwanvu = omw.length,
        kkumi, makumi, bikumi, nkumi,
        kkumimu, makumimu, bikumimu,
        kkuminnal, makuminnal;

    if (emp === 'v') {
        switch (obuwanvu) {
            case 1:
                kkumi = parseInt(omw, 10);
                return `${ENNYINGO_EZA_OMWAKA.eyokunna[kkumi-1]}`;

            case 2:
                makumi = parseInt(omw.charAt(0), 10);

                kkumi = parseInt(omw.charAt(1), 10);
                kkuminnal = kkumi == 0 ? '' : `${makumi == 1 ? NNALUGANDA.NA : NNALUGANDA.MU}`;
                kkumimu = kkumi == 0 ? '' : `${kkuminnal}${ENNYINGO_EZA_OMWAKA.eyokunna[kkumi-1]}`;

                return `${ENNYINGO_EZA_OMWAKA.eyokusatu[makumi-1]}${kkumimu}`.trim();

            case 3:
                bikumi = parseInt(omw.charAt(0), 10);

                makumi = parseInt(omw.charAt(1), 10);
                makumimu = makumi == 0 ? '' : `${ENNYINGO_EZA_OMWAKA.eyokusatu[makumi-1]}`;

                kkumi = parseInt(omw.charAt(2), 10);
                kkumimu = kkumi == 0 ? '' : `${ENNYINGO_EZA_OMWAKA.eyokunna[kkumi-1]}`;

                kkuminnal = kkumi == 0 || makumi == 0 ? '' : `${makumi == 1 ? NNALUGANDA.NA : NNALUGANDA.MU}`;

                makuminnal = kkumi == 0 && makumi == 0 ? '' : ' ';

                return `${ENNYINGO_EZA_OMWAKA.eyokubili[bikumi-1]}${makuminnal}${makumimu}${kkuminnal}${kkumimu}`.trim();

            case 4:
                nkumi = parseInt(omw.charAt(0), 10);

                bikumi = parseInt(omw.charAt(1), 10);
                bikumimu = bikumi == 0 ? '' : ` ${NNALUGANDA.MU} ${ENNYINGO_EZA_OMWAKA.eyokubili[bikumi-1]}`;

                makumi = parseInt(omw.charAt(2), 10);
                makumimu = makumi == 0 ? '' : `${ENNYINGO_EZA_OMWAKA.eyokusatu[makumi-1]}`;

                kkumi = parseInt(omw.charAt(3), 10);
                kkumimu = kkumi == 0 ? '' : `${ENNYINGO_EZA_OMWAKA.eyokunna[kkumi-1]}`;

                kkuminnal = kkumi == 0 || makumi == 0 ? '' : `${makumi == 1 ? NNALUGANDA.NA : NNALUGANDA.MU}`;
                makuminnal = kkumi == 0 && makumi == 0 ? '' : ' ';

                return `${ENNYINGO_EZA_OMWAKA.essooka[nkumi-1]}${bikumimu}${makuminnal}${makumimu}${kkuminnal}${kkumimu}`.trim();

            default:
                throw new Error(`omwaka ${omw} tegukkilizibwa`);
        }
    } else if (emp === 'z') {
        if (obuwanvu === 4) {
            makumi = parseInt(omw.charAt(2), 10);

            kkumi = parseInt(omw.charAt(3), 10);
            kkuminnal = kkumi == 0 ? '' : makumi == 1 ? NNALUGANDA.NA : NNALUGANDA.MU;
            kkumimu = kkumi == 0 ? '' : `${kkuminnal}${ENNYINGO_EZA_OMWAKA.eyokunna[kkumi-1]}`;

            return `${ENNYINGO_EZA_OMWAKA.eyokusatu[makumi-1]}${kkumimu}`;
        } else {
            throw new Error(`emyaka ${omw} mitono nnyo okufunzibwa mu bigambo`);
        }
    } else {
        throw new Error('endabikka ya omwaka mu bigambo temanyiddwa');
    }
};

/** 
 * Funa omwaka mu bufunze
 */
funaOmwaka = (omw = 0, emp = 'm') => {

    // obuwanvu bwa omwaka
    // v: bujjuvu
    // z: bufunze

    if (omw <= 0) {
        throw new Error('omwaka gulina okusukka ku 0');
    } else if (omw > 9999) {
        throw new Error('omwaka tegulina kusukka ku 9999');
    } else {
        switch (emp) {
            case E_MWAK.b:
                return funaOmwakaMuBigambo(`${omw}`, 'v');

            case E_MWAK.bs:
                return funaOmwakaMuBigambo(`${omw}`, 'z');

            case E_MWAK.m:
                return `${omw}`;

            case E_MWAK.ms:
                if (omw >= 1000) {
                    return `${omw}`.substr(2, 2);
                } else {
                    return `${omw}`;
                }

            default:
                throw new Error('endabika ya omwaka temanyiddwa');
        }
    }
};

/** 
 * Funa esengaka ya ebiseela
 */
funaEbyokwelobozesaakoEbyenjawulo = (end = 'm') => {
    let endabikaZange = {
        enzingu: E_ENZI.m,
        olunaku: E_LUNA.m,
        omwezi: E_ENZI.m,
        omwaka: E_MWAK.m,
        nnyimpi: false,
        // b: '" "' akabanga
        // z: '-'   akasaze
        // t: '/'   akasittale
        // k: ','   akasukkize
        enjawula: 'b'
    };

    switch (end) {
        case E_KALE.m:
        case E_KALE.ms:
        case E_KALE.b:
        case E_KALE.bs:
        case E_KALE.l:
        case E_KALE.ls:
        case E_KALE.e:
        case E_KALE.es:
            endabikaZange.enzingu = end;
            endabikaZange.omwezi = end;
            break;

        case E_KALE.ma:
            endabikaZange.enzingu = E_ENZI.m;
            endabikaZange.omwezi = E_MWEZ.m;
            endabikaZange.olunaku = E_LUNA.b;
            break;

        case E_KALE.ba:
            endabikaZange.enzingu = E_ENZI.b;
            endabikaZange.omwezi = E_MWEZ.b;
            endabikaZange.olunaku = E_LUNA.b;
            break;

        case E_KALE.la:
            endabikaZange.enzingu = E_ENZI.l;
            endabikaZange.omwezi = E_MWEZ.l;
            endabikaZange.olunaku = E_LUNA.b;
            break;

        case E_KALE.ea:
            endabikaZange.enzingu = E_ENZI.e;
            endabikaZange.omwezi = E_MWEZ.e;
            endabikaZange.olunaku = E_LUNA.b;
            break;

        case E_KALE.mc:
            endabikaZange.enzingu = E_ENZI.m;
            endabikaZange.omwezi = E_MWEZ.m;
            endabikaZange.omwaka = E_MWAK.b;
            endabikaZange.olunaku = E_LUNA.b;
            break;

        case E_KALE.bc:
            endabikaZange.enzingu = E_ENZI.b;
            endabikaZange.omwezi = E_MWEZ.b;
            endabikaZange.omwaka = E_MWAK.b;
            endabikaZange.olunaku = E_LUNA.b;
            break;

        case E_KALE.lc:
            endabikaZange.enzingu = E_ENZI.l;
            endabikaZange.omwezi = E_MWEZ.l;
            endabikaZange.omwaka = E_MWAK.b;
            endabikaZange.olunaku = E_LUNA.b;
            break;

        case E_KALE.ec:
            endabikaZange.enzingu = E_ENZI.e;
            endabikaZange.omwezi = E_MWEZ.e;
            endabikaZange.omwaka = E_MWAK.b;
            endabikaZange.olunaku = E_LUNA.b;
            break;

        case E_KALE.msd:
            endabikaZange.enzingu = E_ENZI.ms;
            endabikaZange.omwezi = E_MWEZ.m;
            break;

        case E_KALE.msm:
            endabikaZange.enzingu = E_ENZI.m;
            endabikaZange.omwezi = E_MWEZ.ms;
            break;

        case E_KALE.bsd:
            endabikaZange.enzingu = E_ENZI.bs;
            endabikaZange.omwezi = E_MWEZ.b;
            break;

        case E_KALE.bsm:
            endabikaZange.enzingu = E_ENZI.b;
            endabikaZange.omwezi = E_MWEZ.bs;
            break;

        case E_KALE.lsd:
            endabikaZange.enzingu = E_ENZI.ls;
            endabikaZange.omwezi = E_MWEZ.l;
            break;

        case E_KALE.lsm:
            endabikaZange.enzingu = E_ENZI.l;
            endabikaZange.omwezi = E_MWEZ.ls;
            break;

        case E_KALE.km:
            endabikaZange.omwezi = E_MWEZ.m;
            endabikaZange.nnyimpi = true;
            break;

        case E_KALE.kl:
            endabikaZange.omwezi = E_MWEZ.l;
            endabikaZange.nnyimpi = true;
            break;

        case E_KALE.kb:
            endabikaZange.omwezi = E_MWEZ.b;
            endabikaZange.nnyimpi = true;
            break;

        case E_KALE.kmn:
            endabikaZange.omwezi = E_MWEZ.m;
            endabikaZange.olunaku = E_LUNA.z;
            endabikaZange.nnyimpi = true;
            break;

        case E_KALE.kln:
            endabikaZange.omwezi = E_MWEZ.l;
            endabikaZange.olunaku = E_LUNA.z;
            endabikaZange.nnyimpi = true;
            break;

        case E_KALE.kbn:
            endabikaZange.omwezi = E_MWEZ.b;
            endabikaZange.olunaku = E_LUNA.z;
            endabikaZange.nnyimpi = true;
            break;

        case E_KALE.kms:
            endabikaZange.omwezi = E_MWEZ.ms;
            endabikaZange.nnyimpi = true;
            endabikaZange.enjawula = 'z';
            break;

        case E_KALE.kls:
            endabikaZange.omwezi = E_MWEZ.ls;
            endabikaZange.nnyimpi = true;
            endabikaZange.enjawula = 'z';
            break;

        case E_KALE.kbs:
            endabikaZange.omwezi = E_MWEZ.bs;
            endabikaZange.nnyimpi = true;
            endabikaZange.enjawula = 'z';
            break;

        case E_KALE.kmc:
            endabikaZange.omwezi = E_MWEZ.m;
            endabikaZange.olunaku = E_LUNA.b;
            endabikaZange.omwaka = E_MWAK.b;
            endabikaZange.enjawula = 'k';
            endabikaZange.nnyimpi = true;
            break;

        case E_KALE.klc:
            endabikaZange.omwezi = E_MWEZ.l;
            endabikaZange.olunaku = E_LUNA.b;
            endabikaZange.omwaka = E_MWAK.b;
            endabikaZange.enjawula = 'k';
            endabikaZange.nnyimpi = true;
            break;

        case E_KALE.kbc:
            endabikaZange.omwezi = E_MWEZ.b;
            endabikaZange.olunaku = E_LUNA.b;
            endabikaZange.omwaka = E_MWAK.b;
            endabikaZange.enjawula = 'k';
            endabikaZange.nnyimpi = true;
            break;

        case E_KALE.kmss:
            endabikaZange.omwezi = E_MWEZ.ms;
            endabikaZange.olunaku = E_LUNA.m;
            endabikaZange.omwaka = E_MWAK.ms;
            endabikaZange.enjawula = 't';
            endabikaZange.nnyimpi = true;
            break;

        case E_KALE.klss:
            endabikaZange.omwezi = E_MWEZ.ls;
            endabikaZange.olunaku = E_LUNA.m;
            endabikaZange.omwaka = E_MWAK.ms;
            endabikaZange.enjawula = 't';
            endabikaZange.nnyimpi = true;
            break;

        case E_KALE.kbss:
            endabikaZange.omwezi = E_MWEZ.bs;
            endabikaZange.olunaku = E_LUNA.m;
            endabikaZange.omwaka = E_MWAK.ms;
            endabikaZange.enjawula = 't';
            endabikaZange.nnyimpi = true;
            break;

        default:
            throw new Error('endabika temanyiddwa');
    }

    return endabikaZange;
};

/** 
 * Sengeka endabika okusinziila ku ebyokwelobozesaako
 */
funaEbiseela = (obu, eky) => {

    if (!(eky.endabika in ENDABIKA.KALENDA)) {
        throw new Error('endabika ya ebiseela temanyiddwa');
    } else {

        // gyamu okweloboza ku lunaku
        let end = funaEbyokwelobozesaakoEbyenjawulo(eky.endabika);

        let enzingu = funaEnzingu(obu.enzingu, end.enzingu),
            olunaku = funaOlunaku(obu.olunaku, end.olunaku),
            omwezi = funaOmwezi(obu.omwezi, end.omwezi),
            omwaka = funaOmwaka(obu.omwaka, end.omwaka),
            akawula;

        if (!end.nnyimpi) {
            if (eky.akagata === '') {
                if (end.olunaku === E_LUNA.b || end.omwaka === E_MWAK.b || end.omwaka === E_MWAK.bs) {
                    return `${enzingu}, ${olunaku}, ${omwezi}, ${omwaka}`;
                } else {
                    return `${enzingu} ${olunaku} ${omwezi}, ${omwaka}`;
                }
            } else {
                return `${enzingu}${eky.akagata}${olunaku} ${omwezi}${eky.akagata}${omwaka}`;
            }
        } else {
            if (eky.akagata === '') {
                akawula = end.enjawula === 't' ? '/' : end.enjawula === 'z' ? '-' : end.enjawula === 'k' ? ', ' : ' ';
                return `${olunaku}${akawula}${omwezi}${akawula}${omwaka}`;
            } else {
                return `${olunaku}${eky.akagata}${omwezi}${eky.akagata}${omwaka}`;
            }
        }
    }
};

/** 
 * Funa eddakiika mu bigambo
 */
funaEssaawaObaEddakiikaObaMuBigambo = (nnam = 0) => {
    let makumi, kkumi;
    if (nnam == 0) {
        return '';
    } else if (nnam == 1) {
        return 'emu';
    } else if (nnam < 10) {
        return `${ENNYINGO_EZA_OMWAKA.eyokunna[nnam-1]}`;
    } else if (nnam < 60) {
        makumi = parseInt(`${nnam}`.charAt(0), 10);
        kkumi = parseInt(`${nnam}`.charAt(1), 10);
        return `${ENNYINGO_EZA_OMWAKA.eyokusatu[makumi-1]}${makumi == 1 ? NNALUGANDA.NA : NNALUGANDA.MU}${ENNYINGO_EZA_OMWAKA.eyokunna[kkumi-1]}`;
    } else {
        throw new Error('eddakiika oba obutikitiki tebilina kusukka 60');
    }
};

/** 
 * Funa obutikitiki mu bigambo
 */
funaObutiktikiMuBigambo = (nnam = 0) => {
    let makumi, kkumi;
    if (nnam === 0) {
        return '';
    } else if (nnam < 10) {
        return `${EMBALA_EYA_OBUTIKITIKI[nnam-1]}`;
    } else if (nnam < 60) {
        makumi = parseInt(`${nnam}`.charAt(0), 10);
        kkumi = parseInt(`${nnam}`.charAt(1), 10);
        return `${ENNYINGO_EZA_OMWAKA.eyokusatu[makumi-1]}${makumi == 1 ? NNALUGANDA.NA : NNALUGANDA.MU}${EMBALA_EYA_OBUTIKITIKI[kkumi-1]}`;
    } else {
        throw new Error('eddakiika oba obutikitiki tebilina kusukka 60');
    }
};

/** 
 * Funa essaawa mu bigambo okusinziila kundbika
 */
mpaEssaawaMuBigambo = (ess, end) => {

    let eddakiika, akatikitiki, sekonda, dakiika, katikit,
        essaawa = funaEssaawa(ess.essaawa, end.endsawa),
        ekigelo = end.endkige === '' ? '' : ` ${NNALUGANDA.EZA} ${funaEkigelo(ess.essaawa, end.endkige)}`,
        sawa = end.endsawa === E_SAWA.b ? `essaawa ${end.endsawa === E_SAWA.b ? NNALUGANDA.YA : NNALUGANDA.ZA} ` : 'essaawa ';

    if (end.endbuwa === 'sss') {
        if (end.eddakiika == 30) {
            return `${essaawa} kitundu`;
        } else {
            eddakiika = funaEssaawaObaEddakiikaObaMuBigambo(ess.eddakiika);
            return `${essaawa} ${eddakiika}`.trim();
        }
    } else if (end.endbuwa === 'ss') {
        return `${sawa}${essaawa}${ekigelo}`;
    } else if (end.endbuwa === 's') {
        dakiika = ess.eddakiika == 0 ? '' : ess.eddakiika == 30 ? ` ${NNALUGANDA.NE} ekitundu` : ` ${NNALUGANDA.NE} eddakiika ${funaEssaawaObaEddakiikaObaMuBigambo(ess.eddakiika)}`;
        return `${sawa}${essaawa}${ekigelo}${dakiika}`.trim();
    } else {
        akatikitiki = funaObutiktikiMuBigambo(ess.akatikitiki);
        sekonda = ess.akatikitiki == 1 ? 'akatikitiki' : 'obutikitiki';
        dakiika = ess.eddakiika == 0 ? '' : ess.eddakiika == 30 ? ` ${NNALUGANDA.NE} ekitundu` : ` ${NNALUGANDA.NE} eddakiika ${funaEssaawaObaEddakiikaObaMuBigambo(ess.eddakiika)}`;
        katikit = akatikitiki === '' ? '' : ` ${NNALUGANDA.NE} ${sekonda} ${akatikitiki}`;
        return `${sawa}${essaawa}${ekigelo}${dakiika}${katikit}`;
    }
};

/** 
 * Funa essaawa mu bigambo
 */
funaEssaawaMuBigambo = (ess, end = 'cmk') => {
    // obuwanvu
    // '': SW:DKK:KTKTK
    // 's': SW:DKK
    // 'ss': SW

    switch (end) {
        case E_KATI.cmk:
            return mpaEssaawaMuBigambo(ess, {
                endsawa: E_SAWA.m,
                endkige: E_KIGE.k,
                endbuwa: ''
            });
        case E_KATI.cmks:
            return mpaEssaawaMuBigambo(ess, {
                endsawa: E_SAWA.m,
                endkige: E_KIGE.k,
                endbuwa: 's'
            });
        case E_KATI.cmkss:
            return mpaEssaawaMuBigambo(ess, {
                endsawa: E_SAWA.m,
                endkige: E_KIGE.k,
                endbuwa: 'ss'
            });
        case E_KATI.cmn:
            return mpaEssaawaMuBigambo(ess, {
                endsawa: E_SAWA.m,
                endkige: E_KIGE.n,
                endbuwa: ''
            });
        case E_KATI.cmns:
            return mpaEssaawaMuBigambo(ess, {
                endsawa: E_SAWA.m,
                endkige: E_KIGE.n,
                endbuwa: 's'
            });
        case E_KATI.cmnss:
            return mpaEssaawaMuBigambo(ess, {
                endsawa: E_SAWA.m,
                endkige: E_KIGE.n,
                endbuwa: 'ss'
            });
        case E_KATI.cmt:
            return mpaEssaawaMuBigambo(ess, {
                endsawa: E_SAWA.m,
                endkige: E_KIGE.t,
                endbuwa: ''
            });
        case E_KATI.cmts:
            return mpaEssaawaMuBigambo(ess, {
                endsawa: E_SAWA.m,
                endkige: E_KIGE.t,
                endbuwa: 's'
            });
        case E_KATI.cmtss:
            return mpaEssaawaMuBigambo(ess, {
                endsawa: E_SAWA.m,
                endkige: E_KIGE.t,
                endbuwa: 'ss'
            });

        case E_KATI.cb:
            return mpaEssaawaMuBigambo(ess, {
                endsawa: E_SAWA.b,
                endkige: '',
                endbuwa: ''
            });
        case E_KATI.cbs:
            return mpaEssaawaMuBigambo(ess, {
                endsawa: E_SAWA.b,
                endkige: '',
                endbuwa: 's'
            });
        case E_KATI.cbss:
            return mpaEssaawaMuBigambo(ess, {
                endsawa: E_SAWA.b,
                endkige: '',
                endbuwa: 'ss'
            });
        case E_KATI.cbsm:
            return mpaEssaawaMuBigambo(ess, {
                endsawa: E_SAWA.b,
                endkige: '',
                endbuwa: 'sss'
            });

        default:
            throw new Error('endabika temanyiddwa oba tekilizibwa');
    }
};

/** 
 * Gatako zzeelo
 */
gatakoZzeelo = (nnam) => {
    if (typeof nnam === 'string') {
        return nnam.length === 1 ? `0${nnam}` : nnam;
    } else if (typeof nnam === 'number' && nnam >= 0 && nnam < 100) {
        return nnam < 10 ? `0${nnam}` : `${nnam}`;
    } else {
        return nnam;
    }
};

/** 
 * Funa essaawa mu nnamba okusinziila kundbika
 */
mpaEssaawaMuNnamba = (ess, end) => {

    let eddakiika, akatikitiki, ekigelo,
        essaawa = funaEssaawa(ess.essaawa, end.endsawa);

    essaawa = !end.endgtzl ? essaawa : gatakoZzeelo(essaawa);

    if (end.endbuwa === 'sss') {
        ekigelo = funaEkigelo(ess.essaawa, end.endkige);
        return `${essaawa} ${NNALUGANDA.EZ}${ekigelo}`;
    } else if (end.endbuwa === 'ss') {
        return `${essaawa}`;
    } else if (end.endbuwa === 's') {
        eddakiika = !end.endgtzl ? `${ess.eddakiika}` : gatakoZzeelo(ess.eddakiika);
        return `${essaawa}:${eddakiika}`;
    } else {
        eddakiika = !end.endgtzl ? `${ess.eddakiika}` : gatakoZzeelo(ess.eddakiika);
        akatikitiki = !end.endgtzl ? `${ess.akatikitiki}` : gatakoZzeelo(ess.akatikitiki);
        return `${essaawa}:${eddakiika}:${akatikitiki}`;
    }
};

/** 
 * Funa essaawa mu nnamba
 */
funaEssaawaMuNnamba = (ess, end = 'm') => {
    // obuwanvu
    // '': SW:DKK:KTKTK
    // 's': SW:DKK
    // 'ss': SW
    // 'sss': SW KGL

    switch (end) {

        case E_KATI.m:
            return mpaEssaawaMuNnamba(ess, {
                endsawa: E_SAWA.ms,
                endkige: '',
                endbuwa: '',
                endgtzl: false
            });

        case E_KATI.ms:
            return mpaEssaawaMuNnamba(ess, {
                endsawa: E_SAWA.ms,
                endkige: '',
                endbuwa: 's',
                endgtzl: false
            });

        case E_KATI.mss:
            return mpaEssaawaMuNnamba(ess, {
                endsawa: E_SAWA.ms,
                endkige: '',
                endbuwa: 'ss',
                endgtzl: false
            });

        case E_KATI.mkss:
            return mpaEssaawaMuNnamba(ess, {
                endsawa: E_SAWA.ms,
                endkige: E_KIGE.k,
                endbuwa: 'sss',
                endgtzl: false
            });

        case E_KATI.mnss:
            return mpaEssaawaMuNnamba(ess, {
                endsawa: E_SAWA.ms,
                endkige: E_KIGE.n,
                endbuwa: 'sss',
                endgtzl: false
            });

        case E_KATI.mtss:
            return mpaEssaawaMuNnamba(ess, {
                endsawa: E_SAWA.ms,
                endkige: E_KIGE.t,
                endbuwa: 'sss',
                endgtzl: false
            });

        case E_KATI.mz:
            return mpaEssaawaMuNnamba(ess, {
                endsawa: E_SAWA.ms,
                endkige: '',
                endbuwa: '',
                endgtzl: true
            });

        case E_KATI.msz:
            return mpaEssaawaMuNnamba(ess, {
                endsawa: E_SAWA.ms,
                endkige: '',
                endbuwa: 's',
                endgtzl: true
            });

        case E_KATI.mssz:
            return mpaEssaawaMuNnamba(ess, {
                endsawa: E_SAWA.ms,
                endkige: '',
                endbuwa: 'ss',
                endgtzl: true
            });

        case E_KATI.pz:
            return mpaEssaawaMuNnamba(ess, {
                endsawa: E_SAWA.ps,
                endkige: '',
                endbuwa: '',
                endgtzl: true
            });

        case E_KATI.psz:
            return mpaEssaawaMuNnamba(ess, {
                endsawa: E_SAWA.ps,
                endkige: '',
                endbuwa: 's',
                endgtzl: true
            });

        case E_KATI.pssz:
            return mpaEssaawaMuNnamba(ess, {
                endsawa: E_SAWA.ps,
                endkige: '',
                endbuwa: 'ss',
                endgtzl: true
            });

        default:
            throw new Error('endabika temanyiddwa oba tekilizibwa');
    }
};

/** 
 * Funa kati
 */
funaMeka = (ess, eky) => {
    if (ess.essaawa > 23 || ess.essaawa < 0) {
        throw new Error('essaawa ezikilizibwa zilina okuva ku 0 paka 23');
    } else if (ess.eddakiika > 60 || ess.eddakiika < 0) {
        throw new Error('eddakiika ezikilizibwa zilina okuva ku 0 paka 59');
    } else if (ess.akatikitiki > 60 || ess.akatikitiki < 0) {
        throw new Error('obutikitiki obukilizibwa bulina okuva ku 0 paka 59');
    } else if (!(eky.endabika in ENDABIKA.KATI)) {
        throw new Error('endabika ya essaawa temanyiddwa');
    } else {
        if (eky.endabika.charAt(0) === 'c') {
            return funaEssaawaMuBigambo(ess, eky.endabika);
        } else {
            return funaEssaawaMuNnamba(ess, eky.endabika);
        }
    }
};

/** 
 * Funa ebyokwelobozesaako ebisuubilwa
 */
funaEbyokwelobozesaakoEbisuubilwa = (ebyokwelobozesaako) => {
    return $.extend({}, $.ebiseelaNeEssaawa.ebyokwelobozesaako, ebyokwelobozesaako);
};

/**
 * ebyokwelobozesaako ebikilizibwa
 */
$.ebiseelaNeEssaawa.ebyokwelobozesaako = {
    endabika: 'm',
    akagata: ''
};

        /*
 ****************** 
 * PLUGIN METHODS *
 ******************
        */

/**** Ebiseela ****/

/**
 * funa ennaku za omwezi leelo mundabika eza enjawulo okusinziila ku ebyokwelobozesaako
 * date today
 * @param {object} ebyokwelobozesaako ebyokwelobozesaako
 * @return {string} ennaku za omwezi
 */
$.ebiseelaNeEssaawa.olwaleelo = (ebyokwelobozesaako) => {

    let obudde = new Date(),
        enzing = obudde.getDay(),
        olunak = obudde.getDate(),
        omwezi = obudde.getMonth(),
        omwaka = obudde.getFullYear();

    ebyokwelobozesaako = funaEbyokwelobozesaakoEbisuubilwa(ebyokwelobozesaako);

    return funaEbiseela({
        enzingu: enzing,
        olunaku: olunak,
        omwezi: omwezi,
        omwaka: omwaka
    }, ebyokwelobozesaako);
};

/**
 * funa enzingu, olunaku, omwezi ne omwaka mundabika eza enjawulo okusinziila ku ebyokwelobozesaako
 * day of the week, day of the month, month, year
 * @param {object} budde enzingu, olunaku, omwezi ne omwaka
 * @return {object} enzingu, olunaku, omwezi, omwaka
 */
$.ebiseelaNeEssaawa.obudde = (budde) => {

    // funa enzingu okuva mu biseela ebilala bweba teweleddwa
    let enzingua = (!budde.enzingu || !budde.enzingu.a ? (new Date(budde.omwaka.a, budde.omwezi.a, budde.olunaku.a)).getDay() : budde.enzingu.a),
        enzingub = !budde.enzingu || !budde.enzingu.b ? E_KALE.m : budde.enzingu.b;

    return {
        enzingu: funaEnzingu(enzingua, enzingub),
        olunaku: funaOlunaku(budde.olunaku.a, budde.olunaku.b),
        omwezi: funaOmwezi(budde.omwezi.a, budde.omwezi.b),
        omwaka: funaOmwaka(budde.omwaka.a, budde.omwaka.b)
    };
};

/**
 * funa ennaku za omwezi mundabika eza enjawulo okusinziila ku ebyokwelobozesaako
 * date
 * @param {object} kiseela enzingu, olunaku, omwezi ne omwaka
 * @param {object} ebyokwelobozesaako ebyokwelobozesaako
 * @return {string} ennaku za omwezi
 */
$.ebiseelaNeEssaawa.ekiseela = (kiseela, ebyokwelobozesaako) => {

    ebyokwelobozesaako = funaEbyokwelobozesaakoEbisuubilwa(ebyokwelobozesaako);

    return funaEbiseela({
        enzingu: (!kiseela.enzingu ? (new Date(kiseela.omwaka, kiseela.omwezi, kiseela.olunaku)).getDay() : kiseela.enzingu),
        olunaku: kiseela.olunaku,
        omwezi: kiseela.omwezi,
        omwaka: kiseela.omwaka
    }, ebyokwelobozesaako);
};

/**
 * funa enzingu okusinziila ku ebyokwelobozesaako
 * day of the week
 * @param {number} nzingu olunaku lwa wiiki. kuntandikila ku 0
 * @param {object} ebyokwelobozesaako ebyokwelobozesaako
 * @return {string} enzingu
 */
$.ebiseelaNeEssaawa.enzingu = (nzingu, ebyokwelobozesaako) => {
    ebyokwelobozesaako = funaEbyokwelobozesaakoEbisuubilwa(ebyokwelobozesaako);
    return funaEnzingu(nzingu, ebyokwelobozesaako.endabika);
};

/**
 * funa olunaku lwa omwezi okusinziila ku ebyokwelobozesaako
 * day of the month
 * @param {number} lunaku olunaku lwa omwezi
 * @param {object} ebyokwelobozesaako ebyokwelobozesaako
 * @return {string} olunaku
 */
$.ebiseelaNeEssaawa.olunaku = (lunaku, ebyokwelobozesaako) => {
    ebyokwelobozesaako = funaEbyokwelobozesaakoEbisuubilwa(ebyokwelobozesaako);
    return funaOlunaku(lunaku, ebyokwelobozesaako.endabika);
};

/**
 * funa omwezi okusinziila ku ebyokwelobozesaako
 * month
 * @param {number} mwezi omwezi. kutandikila ku 0
 * @param {objct} ebyokwelobozesaako  ebyokwelobozesaako
 * @return {string} omwezi
 */
$.ebiseelaNeEssaawa.omwezi = (mwezi, ebyokwelobozesaako) => {
    ebyokwelobozesaako = funaEbyokwelobozesaakoEbisuubilwa(ebyokwelobozesaako);
    return funaOmwezi(mwezi, ebyokwelobozesaako.endabika);
};

/**
 * funa olunaku olukulu mu mwaka
 * public holiday
 * @param {number} mwezi omwezi. kuntandikila ku 0
 * @param {number} lunaku olunaku lwa omwezi
 * @return {string} elinya lya olunaku
 */
$.ebiseelaNeEssaawa.olukulu = (mwezi, lunaku) => {
    return funaOlunakuOlukulu(mwezi, lunaku);
};

/**
 * funa omwaka okusinziila ku ebyokwelobozesaako
 * year
 * @param {number} mwaka omwaka
 * @param {object} ebyokwelobozesaako ebyokwelobozesaako 
 * @return {string} omwaka
 */
$.ebiseelaNeEssaawa.omwaka = (mwaka, ebyokwelobozesaako) => {
    ebyokwelobozesaako = funaEbyokwelobozesaakoEbisuubilwa(ebyokwelobozesaako);
    return funaOmwaka(mwaka, ebyokwelobozesaako.endabika);
};

/**** Essaawa ****/

/**
 * funa essaawa meka kati okusinziila ku ebyokwelobozesaako
 * current time
 * @param {object} ebyokwelobozesaako ebyokwelobozesaako
 * @return {string} essaawa meka
 */
$.ebiseelaNeEssaawa.kati = (ebyokwelobozesaako) => {

    ebyokwelobozesaako = funaEbyokwelobozesaakoEbisuubilwa(ebyokwelobozesaako);

    let sawa = new Date(),
        sawayange = sawa.getHours(),
        eddakiika = sawa.getMinutes(),
        akatikitiki = sawa.getSeconds();

    return funaMeka({
        essaawa: sawayange,
        eddakiika: eddakiika,
        akatikitiki: akatikitiki
    }, ebyokwelobozesaako);
};

/**
 * funa essaawa meka okusinziila ku ebyokwelobozesaako
 * time
 * @param {object} saawa essaawa, eddakiika, akatikitiki 
 * @param {object} ebyokwelobozesaako ebyokwelobozesaako
 * @return {string} essaawa meka
 */
$.ebiseelaNeEssaawa.meka = (saawa, ebyokwelobozesaako) => {

    ebyokwelobozesaako = funaEbyokwelobozesaakoEbisuubilwa(ebyokwelobozesaako);

    return funaMeka({
        essaawa: saawa.essaawa,
        eddakiika: saawa.eddakiika,
        akatikitiki: saawa.akatikitiki
    }, ebyokwelobozesaako);
};

/**
 * funa essaawa zokka
 * hour
 * @param {number} saawa essaawa. 0-23
 * @param {object} ebyokwelobozesaako ebyokwelobozesaako
 * @return {string} essaawa
 */
$.ebiseelaNeEssaawa.essaawa = (saawa, ebyokwelobozesaako) => {
    ebyokwelobozesaako = funaEbyokwelobozesaakoEbisuubilwa(ebyokwelobozesaako);
    if (ebyokwelobozesaako.endabika === E_SAWA.msz) {
        return gatakoZzeelo(funaEssaawa(saawa, E_SAWA.ms));
    } else if (ebyokwelobozesaako.endabika === E_SAWA.psz) {
        return gatakoZzeelo(funaEssaawa(saawa, E_SAWA.ps));
    } else {
        return funaEssaawa(saawa, ebyokwelobozesaako.endabika);
    }
};

/**
 * funa ekigelo kya essaawa
 * period of the day
 * @param {number} saawa essaawa. 0-23
 * @param {object} ebyokwelobozesaako ebyokwelobozesaako 
 * @return {string} ekigelo
 */
$.ebiseelaNeEssaawa.ekigelo = (saawa, ebyokwelobozesaako) => {
    ebyokwelobozesaako = funaEbyokwelobozesaakoEbisuubilwa(ebyokwelobozesaako);
    return funaEkigelo(saawa, ebyokwelobozesaako.endabika);
};