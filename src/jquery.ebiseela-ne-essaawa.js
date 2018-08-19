/*
 * Ebiseela ne essaawa
 * 
 * Copyright (c) 2018 mubtxs
 * Licensed under the MIT license.
 */

'use strict';

let $, funaAmazooba, funaEnzingu, funaAkagamboAkagata, funaEssaawa, funaEkigelo, funaEkigeloKyaEssaawaEkifunze, funaEkigeloKyaEssaawa, funaEkitunduKyaOlunaku, sengekaEbyokwelobozesaakoKuBiseela, sengekaEbyokwelobozesaakoKuSsaawa, funaEbyokwelobozesaakoEbisuubilwa, funaEndabikaKuBiseela, funaEndabikaKuBiseelaMuBufunze1, funaEndabikaKuBiseelaMuBufunze2, gyamuOkwelobozaKuOlunaku,
    slice = [].slice;

$ = window.jQuery || window.$;

$.ebiseelaNeEssaawa = {};

$.ebiseelaNeEssaawa.fn = {};

$.fn.ebiseelaNeEssaawa = () => {
    let args, method;
    method = arguments[0];
    args = arguments.length >= 2 ? slice.call(arguments, 1) : [];
    return $.ebiseelaNeEssaawa.fn[method].apply(this, args);
};

// endabika ezikirizibwa
const ENDABIKA = {
    // endabika za emyezi ne omwaka
    KALENDA: {
        // d -> olunaku lwa wiiki
        // w -> olunaku lwa omwezi
        // m -> omwezi
        // y -> owaka
        m: 'm', // d[m] w m[m], y 
        ms: 'ms', // d[ms] w m[ms], y 
        b: 'b', // d[b] w m[b], y 
        bs: 'bs', // d[bs] w m[bs], y 
        l: 'l', // d[l] w m[l], y 
        ls: 'ls', // d[ls] w m[ls], y 
        e: 'e', // d[e] w m[e], y 
        es: 'es', // d[es] w m[es], y 
        msd: 'msd', // d[ms] w m[m], y 
        msm: 'msm', // d[m] w m[ms], y 
        bsd: 'bsd', // d[bs] w m[b], y 
        bsm: 'bsm', // d[b] w m[bs], y 
        lsd: 'lsd', // d[ls] w m[l], y 
        lsm: 'lsm', // d[l] w m[ls], y 
        km: 'km', // w m[m] y 
        kl: 'kl', // w m[l] y 
        kb: 'kb', // w m[b] y
        kms: 'kms', // w-m[ms]-y 
        kls: 'kls', // w-m[ls]-y 
        kbs: 'kbs', // w-m[bs]-y
        /*********************************/
        //a: 'a' // olunnaku mu bujjuvu
        ma: 'ma', // d[m] w m[m], y 
        msa: 'msa', // d[ms] w m[ms], y 
        ba: 'ba', // d[b] w m[b], y 
        bsa: 'bsa', // d[bs] w m[bs], y 
        la: 'la', // d[l] w m[l], y 
        lsa: 'lsa', // d[ls] w m[ls], y 
        ea: 'ea', // d[e] w m[e], y 
        esa: 'esa', // d[es] w m[es], y 
        msda: 'msda', // d[ms] w m[m], y 
        msma: 'msma', // d[m] w m[ms], y 
        bsda: 'bsda', // d[bs] w m[b], y 
        bsma: 'bsma', // d[b] w m[bs], y 
        lsda: 'lsda', // d[ls] w m[l], y 
        lsma: 'lsma', // d[l] w m[ls], y 
        kma: 'kma', // w m[m] y 
        kla: 'kla', // w m[l] y 
        kba: 'kba', // w m[b] y
        kmsa: 'kmsa', // w-m[ms]-y 
        klsa: 'klsa', // w-m[ls]-y 
        kbsa: 'kbsa' // w-m[bs]-y
    },
    KATI: {
        // e -> essaawa
        // k -> ekigelo
        m: 'm', // e[m] 
        ms: 'ms', // e[ms]
        mk: 'mk', // e[m] k[k] 
        mks: 'mks', // e[ms] k[k] 
        mn: 'mn', // e[m] k[n] 
        mns: 'mns', // e[ms] k[n]
        mt: 'mt', // e[m] k[t] 
        mts: 'mts', // e[ms] k[t]
        b: 'b', // e[b] 
        bs: 'bs', // e[bs]
        bk: 'bk', // e[b] k[k] 
        bks: 'bks', // e[bs] k[k] 
        bn: 'bn', // e[b] k[n] 
        bns: 'bns', // e[bs] k[n]
        bt: 'bt', // e[b] k[t] 
        bts: 'bts', // e[bs] k[t]
        p: 'p', // es[p]
        ps: 'ps', // es[ps]
    },
    // endabika za emyezi
    OMWEZI: {
        m: 'm', // okusinziira ku mbala
        ms: 'ms', // okusinziira ku mbala mu bufunze
        b: 'b', // okusinziira ku bibeelawo
        bs: 'bs', // okusinziira ku bibeelawo mu bufunze
        l: 'l', // okusinziira ku lungereza
        ls: 'ls', // okusinziira ku lungereza mu bufunze
        e: 'e', // okusinziira ku lungereza
        es: 'es' // okusinziira ku lungereza mu bufunze
    },
    OLUNAKU: {
        m: 'm', // okusinziira ku mbala
        ms: 'ms', // okusinziira ku mbala mu bufunze
        b: 'b', // okusinziira ku bibeelawo
        bs: 'bs', // okusinziira ku bibeelawo mu bufunze
        l: 'l', // okusinziira ku lungereza
        ls: 'ls', // okusinziira ku lungereza mu bufunze
        e: 'e', // erinya edala
        es: 'es' // erinya edala mu bufunze
    },
    ESSAAWA: {
        m: 'm', // okusinziira ku mbala ya emisana ne ekiro
        ms: 'ms', // okusinziira ku mbala ya emisana ne ekiro mu bufunze
        b: 'b', // okusinziira ku bibeelawo
        bs: 'bs', // okusinziira ku bibeelawo mu bufunze
        p: 'p', // okusinziira ku mbala ya olunaku lwona
        ps: 'ps' // okusinziira ku mbala ya olunaku lwona mu bufunze
    },
    EKIGELO: {
        k: 'k', // okusinziira ku mbala ya olunaku lwona
        n: 'n', // okusinziira ku bibeelawo
        t: 't' // okusinziira ku mbala ya emisana ne ekiro
    }
};

// endabika mu bufunze
const E_KALE = ENDABIKA.KALENDA,
    E_KATI = ENDABIKA.KATI,
    E_MWEZ = ENDABIKA.OMWEZI,
    E_LUNA = ENDABIKA.OLUNAKU,
    E_SAWA = ENDABIKA.ESSAAWA,
    E_KIGE = ENDABIKA.EKIGELO;

/*
// ennaku za omwezi
const ENNAKU_ZA_OMWEZI = {
    LUMU: 'lumu',
    BBili:'bbili',
    SSATU:'ssatu',
    NNYA:'nnya',
    TTAANO:'ttaano',
    MUKAAGA:'mukaaga',
    MUSANVU:'musanvu',
    MUNAANA:'munaana',
    MWENDA:'mwenda',
    KKUMI:'kkumi',
    KKUMINALUMU:'kkuminalumu',
    KKUMINABBILI:'kkuminabbili',
    KKUMINASSATU:'kkuminassatu',
    KKUMINANNYA:'kkuminannya',
    KKUMINATTAANO:'kkuminataano',
    KKUMINAMUKAAGA:'kumminamukaaga',
    KKUMINAMUSANVU:'kumminamusanvu',
    KKUMINAMUNAANA:'kumminamunaana',
    KKUMINAMWENDA:'kumminamwenda',
    ABILI:'abili',
    ABILIMULUMU:'abilimulumu',
    ABILIMUBBILI:'abilimubbili',
    ABILIMUSSATU:'abilimussatu',
    ABILIMUNNYA:'abilimussatu',
    ABILIMUTTAANO:'abilimuttaano',
    ABILIMUMUKAAGA:'abilimumukaaga',
    ABILIMUMUSANVU:'abilimumusanvu',
    ABILIMUMUNAANA:'abilimumunaana',
    ABILIMUMWENDA:'abilimumwenda',
    ASATU:'asatu',
    ASATUMULUMU:'asatumulumu',
    ASATUMUBBILI:'asatumubbili'
};
*/

// ennaku za omwezi
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
    'kkuminataano',
    'kumminamukaaga',
    'kumminamusanvu',
    'kumminamunaana',
    'kumminamwenda',
    'abili',
    'abilimulumu',
    'abilimubbili',
    'abilimussatu',
    'abilimunnya',
    'abilimuttaano',
    'abilimumukaaga',
    'abilimumusanvu',
    'abilimumunaana',
    'abilimumwenda',
    'asatu',
    'asatumulumu'
];

/*
 * Funa amazooba/emyezi ga omwaka
 *
 * akakolero akawa amazooba ga omwaka okusinziira ku nbabika
 * Endabika 
 * - m: okusinziira ku mbala
 * - b: okusinziira ku bibeelawo
 * - l: okusinziira ku lungereza
 * - 's': mu bufunze
 *
 * @param {number} enu ennamba ya omwezi
 * @param {string} emp endabika ya omwezi
 * 
 * @return {string} omwezi
 */
funaAmazooba = (enu = 0, emp = 'b') => {
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

/*
 * Funa enzingu/ennaku zza ddimansi/wiiki
 *
 * akakolero akafuna enzingu/ennaku zza ddimansi/wiiki okusinziira ku nbabika
 * Endabika ezikilizibwa:
 * - m: okusinziira ku mbala
 * - b: okusinziira ku balubaale
 * - e: erinya edala
 * - l: okusinziira ku lungereza
 * - 's': mu bufunze
 *
 * @param {number} enu ennamba ya olunaku
 * @param {string} emp endabika ya olunaku
 * 
 * @return {string} omwezi
 */
funaEnzingu = (enu = 0, emp = 'b') => {
    switch (enu) {
        case 0:
            switch (emp) {
                case E_LUNA.bs:
                    return 'wam';
                case E_LUNA.b:
                    return 'wamunyi';
                case E_LUNA.es:
                    return 'bbal';
                case E_LUNA.e:
                    return 'bbalaza';
                case E_LUNA.ls:
                    return 'mman';
                case E_LUNA.l:
                    return 'mmande';
                case E_LUNA.ms:
                    return 'olw1';
                case E_LUNA.m:
                    return 'olwokusooka';
                default:
                    throw Error('endabika temanyiddwa');
            }

        case 1:
            switch (emp) {
                case E_LUNA.bs:
                    return 'kaz';
                case E_LUNA.b:
                    return 'kazooba';
                case E_LUNA.ms:
                case E_LUNA.es:
                case E_LUNA.ls:
                    return 'olw2';
                case E_LUNA.m:
                case E_LUNA.l:
                case E_LUNA.e:
                    return 'olwokubili';
                default:
                    throw Error('endabika temanyiddwa');
            }

        case 2:
            switch (emp) {
                case E_LUNA.bs:
                    return 'wal';
                case E_LUNA.b:
                    return 'walumbe';
                case E_LUNA.ms:
                case E_LUNA.es:
                case E_LUNA.ls:
                    return 'olw3';
                case E_LUNA.m:
                case E_LUNA.l:
                case E_LUNA.e:
                    return 'olwokusatu';
                default:
                    throw Error('endabika temanyiddwa');
            }

        case 3:
            switch (emp) {
                case E_LUNA.bs:
                    return 'muk';
                case E_LUNA.b:
                    return 'mukasa';
                case E_LUNA.ms:
                case E_LUNA.es:
                case E_LUNA.ls:
                    return 'olw4';
                case E_LUNA.m:
                case E_LUNA.l:
                case E_LUNA.e:
                    return 'olwokuna';
                default:
                    throw Error('endabika temanyiddwa');
            }

        case 4:
            switch (emp) {
                case E_LUNA.bs:
                    return 'kiw';
                case E_LUNA.b:
                    return 'kiwanuka';
                case E_LUNA.es:
                    return 'jum';
                case E_LUNA.e:
                    return 'juma';
                case E_LUNA.ms:
                case E_LUNA.ls:
                    return 'olw5';
                case E_LUNA.m:
                case E_LUNA.l:
                    return 'olwokutaano';
                default:
                    throw Error('endabika temanyiddwa');
            }

        case 5:
            switch (emp) {
                case E_LUNA.bs:
                    return 'nag';
                case E_LUNA.b:
                    return 'nagawonye';
                case E_LUNA.ms:
                case E_LUNA.es:
                case E_LUNA.ls:
                    return 'olw6';
                case E_LUNA.m:
                case E_LUNA.l:
                case E_LUNA.e:
                    return 'olwomukaaga';
                default:
                    throw Error('endabika temanyiddwa');
            }

        case 6:
            switch (emp) {
                case E_LUNA.bs:
                    return 'wan';
                case E_LUNA.b:
                    return 'wangu';
                case E_LUNA.ls:
                    return 'Ssan';
                case E_LUNA.l:
                    return 'Ssande';
                case E_LUNA.ms:
                case E_LUNA.es:
                    return 'olw7';
                case E_LUNA.m:
                case E_LUNA.e:
                    return 'olwomusanvu';
                default:
                    throw Error('endabika temanyiddwa');
            }

        default:
            throw Error('olunaku telumanyiddwa');
    }
};

/*
 * Funa essaawa
 *
 * akakolero akafuna essaawa okusinziira ku nbabika
 * Endabika ezikilizibwa:
 * - m: okusinziira ku mbala ya emisana ne ekiro
 * - p: okusinziira ku mbala ya olunaku lwona
 * - b: okusinziira ku bibeelawo
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
                    return 'kisisimukeekyokubiri';
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
                    throw new Error('endabika temanyiddwa');
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
                    throw new Error('endabika temanyiddwa');
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
                    throw new Error('endabika temanyiddwa');
            }

        case 3:
            switch (emp) {
                case E_SAWA.b:
                    return 'nkokeembereberye';
                case E_SAWA.bs:
                    return 'nko1';
                case E_SAWA.m:
                    return 'mwenda';
                case E_SAWA.ms:
                    return '9';
                case E_SAWA.p:
                    return 'satu';
                case E_SAWA.ps:
                    return '3';
                default:
                    throw new Error('endabika temanyiddwa');
            }

        case 4:
            switch (emp) {
                case E_SAWA.b:
                    return 'nkokeeyookubiri';
                case E_SAWA.bs:
                    return 'nko2';
                case E_SAWA.m:
                    return 'kkumi';
                case E_SAWA.ms:
                    return '10';
                case E_SAWA.p:
                    return 'satu';
                case E_SAWA.ps:
                    return '3';
                default:
                    throw new Error('endabika temanyiddwa');
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
                    throw new Error('endabika temanyiddwa');
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
                    throw new Error('endabika temanyiddwa');
            }

        case 7:
            switch (emp) {
                case E_SAWA.b:
                    return 'maliiri';
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
                    throw new Error('endabika temanyiddwa');
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
                    throw new Error('endabika temanyiddwa');
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
                    throw new Error('endabika temanyiddwa');
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
                    throw new Error('endabika temanyiddwa');
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
                    throw new Error('endabika temanyiddwa');
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
                    throw new Error('endabika temanyiddwa');
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
                    throw new Error('endabika temanyiddwa');
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
                    return '13';
                default:
                    throw new Error('endabika temanyiddwa');
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
                    throw new Error('endabika temanyiddwa');
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
                    throw new Error('endabika temanyiddwa');
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
                    throw new Error('endabika temanyiddwa');
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
                    throw new Error('endabika temanyiddwa');
            }

        case 19:
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
                    throw new Error('endabika temanyiddwa');
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
                    throw new Error('endabika temanyiddwa');
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
                    throw new Error('endabika temanyiddwa');
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
                    throw new Error('endabika temanyiddwa');
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
                    throw new Error('endabika temanyiddwa');
            }

        default:
            throw Error('essaawa temanyiddwa');
    }
};

/*
 * Funa akagambo akagata
 *
 * akakolero akagambo akagata essaawa okusinziira ku mbala ya essaawa
 * Endabika ezikilizibwa:
 * - k: okusinziira ku mbala ya emisana ne ekiro
 * - n: okusinziira ku mbala ya olunaku lwona
 * - b: okusinziira ku bibeelawo
 * 
 * @param {number} enu ennamba ya olunaku
 * @param {string} emp endabika ya olunaku
 * 
 * @return {string} akagambo
 */
funaAkagamboAkagata = (enu = 0, emp = 'b') => {
    if (emp === E_SAWA.b) {
        switch (enu) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                return 'mu';

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
            case 19:
            case 20:
            case 21:
            case 22:
            case 23:
                return 'eza';

            default:
                throw Error('essaawa temanyiddwa');
        }
    } else {
        return 'eza';
    }
};

/*
 * Funa ekigelo kyaessaawa 
 *
 * akakolero akafuna ekigelo okusinziira ku nbabika
 * Endabika ezikilizibwa:
 * - k: okusinziira ku mbala ya emisana ne ekiro
 * - n: okusinziira ku mbala ya olunaku lwona
 * - b: okusinziira ku bibeelawo
 *
 * @param {number} enu ennamba ya olunaku
 * @param {string} emp endabika ya olunaku
 * 
 * @return {string} essaawa
 */
funaEkigelo = (enu = 0, emp = '') => {
    if (emp === E_KIGE.k) {
        return funaEkigeloKyaEssaawa(enu);
    } else if (emp === E_KIGE.n) {
        return funaEkigeloKyaEssaawaEkifunze(enu);
    } else if (emp === E_KIGE.t) {
        return funaEkitunduKyaOlunaku(enu);
    } else {
        return '';
    }
};

/*
 * Funa essaawa mu bibinja
 *
 * akakolero akafuna essaawa mu bibinja okusinziira ku nbabika
 * Endabika ezikilizibwa:
 * - k: okusinziira ku mbala ya emisana ne ekiro
 * - n: okusinziira ku mbala ya olunaku lwona
 * - b: okusinziira ku bibeelawo
 *
 * @param {number} enu ennamba ya olunaku
 * @param {string} emp endabika ya olunaku
 * 
 * @return {string} essaawa
 */
funaEkigeloKyaEssaawa = (enu) => {
    switch (enu) {
        case 0:
        case 1:
        case 2:
        case 3:
            return 'ttumbi';

        case 4:
        case 5:
        case 6:
            return 'matulutulu';

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
            return 'ekiro';

        default:
            throw Error('ekigelo kya essaawa temanyiddwa');
    }
};

// akakolero akafuna essaawa mu bibinja okusinziira ku biseera bya olunaku
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
            return 'ekiro';

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

// akakolero akafuna essaawa mu bibinja okusinziira ku bitundu ebubili ebya olunaku
funaEkitunduKyaOlunaku = (enu) => {
    switch (enu) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
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
        case 18:
        case 19:
        case 20:
        case 21:
        case 22:
        case 23:
            return 'emisana';

        default:
            throw Error('ekitundu kya olunaku temanyiddwa');
    }
};

// funa ebyokwelobozesaako ebisuubilwa
funaEbyokwelobozesaakoEbisuubilwa = (ebyokwelobozesaako) => {
    return $.extend({}, $.ebiseelaNeEssaawa.ebyokwelobozesaako, ebyokwelobozesaako);
};

/*
// funa ebyokwelobozesaako ebisuubilwa
funaEbyokwelobozesaakoEbisuubilwa = (ebyokwelobozesaako) => {
    let eby = $.extend({}, $.ebiseelaNeEssaawa.ebyokwelobozesaako, ebyokwelobozesaako);
    // zza endabika yonna mu nyukuta entono kubanga zezimanyiddwa
    eby.endabika = eby.endabika.toLowerCase();
    return eby;
};
*/

// funa endabika okusinziira ku ebyokwelobozesaako
funaEndabikaKuBiseela = (eby) => {
    if (eby.akagata === '') {
        return `${eby.enzingu} ${eby.olunaku} ${eby.omwezi}, ${eby.omwaka}`;
    } else {
        return `${eby.enzingu}${eby.akagata}${eby.olunaku} ${eby.omwezi}${eby.akagata}${eby.omwaka}`;
    }
}

// funa endabika okusinziira ku ebyokwelobozesaako
funaEndabikaKuBiseelaMuBufunze1 = (eby) => {
    if (eby.akagata === '') {
        return `${eby.olunaku} ${eby.omwezi} ${eby.omwaka}`;
    } else {
        return `${eby.olunaku}${eby.akagata}${eby.omwezi}${eby.akagata}${eby.omwaka}`;
    }
}

// funa endabika okusinziira ku ebyokwelobozesaako
funaEndabikaKuBiseelaMuBufunze2 = (eby) => {
    if (eby.akagata === '') {
        return `${eby.olunaku}-${eby.omwezi}-${eby.omwaka}`;
    } else {
        return `${eby.olunaku}${eby.akagata}${eby.omwezi}${eby.akagata}${eby.omwaka}`;
    }
}

// gyamu okwelobozesa ku lunaku
gyamuOkwelobozaKuOlunaku = (eky) => {
    switch (eky) {
        case E_KALE.ma:
        case E_KALE.msa:
        case E_KALE.ba:
        case E_KALE.bsa:
        case E_KALE.la:
        case E_KALE.lsa:
        case E_KALE.ea:
        case E_KALE.esa:
        case E_KALE.msda:
        case E_KALE.msma:
        case E_KALE.bsda:
        case E_KALE.bsma:
        case E_KALE.lsda:
        case E_KALE.lsma:
        case E_KALE.kma:
        case E_KALE.kla:
        case E_KALE.kba:
        case E_KALE.kmsa:
        case E_KALE.klsa:
        case E_KALE.kbsa:
            return {
                endabika: eky.replace('a', ''),
                ennakuMuBigambo: true
            };
        default:
            return {
                endabika: eky,
                ennakuMuBigambo: false
            };
    }
}

// sengeka endabika okusinziira ebyokwelobozesaako
sengekaEbyokwelobozesaakoKuBiseela = (obu, eky) => {
console.log(obu, eky);
    if (!(eky.endabika in ENDABIKA.KALENDA)) {
        throw new Error('endabika ya ebiseela temanyiddwa');
    } else {

        // gyamu okweloboza ku lunaku
        let ekyEmpya = gyamuOkwelobozaKuOlunaku(eky.endabika);
        console.log(ekyEmpya);
        let enzingu,
            ezooba,
            akagata = eky.akagata,
            // funa oluna mu bigambo
            olunaku = ekyEmpya.ennakuMuBigambo ? ENNAKU_ZA_OMWEZI[obu.olunaku-1] : obu.olunaku ;

        switch (ekyEmpya.endabika) {
            case E_KALE.m:
            case E_KALE.ms:
            case E_KALE.b:
            case E_KALE.bs:
            case E_KALE.l:
            case E_KALE.ls:
            case E_KALE.e:
            case E_KALE.es:
                enzingu = funaEnzingu(obu.enzingu, ekyEmpya.endabika);
                ezooba = funaAmazooba(obu.omwezi, ekyEmpya.endabika);

                return funaEndabikaKuBiseela({
                    omwaka: obu.omwaka,
                    omwezi: ezooba,
                    olunaku: olunaku,
                    enzingu: enzingu,
                    akagata: akagata
                });

            case E_KALE.msd:
                enzingu = funaEnzingu(obu.enzingu, E_LUNA.ms);
                ezooba = funaAmazooba(obu.omwezi, E_MWEZ.m);

                return funaEndabikaKuBiseela({
                    omwaka: obu.omwaka,
                    omwezi: ezooba,
                    olunaku: olunaku,
                    enzingu: enzingu,
                    akagata: akagata
                });

            case E_KALE.msm:
                enzingu = funaEnzingu(obu.enzingu, E_LUNA.m);
                ezooba = funaAmazooba(obu.omwezi, E_MWEZ.ms);

                return funaEndabikaKuBiseela({
                    omwaka: obu.omwaka,
                    omwezi: ezooba,
                    olunaku: olunaku,
                    enzingu: enzingu,
                    akagata: akagata
                });

            case E_KALE.bsd:
                enzingu = funaEnzingu(obu.enzingu, E_LUNA.bs);
                ezooba = funaAmazooba(obu.omwezi, E_MWEZ.b);

                return funaEndabikaKuBiseela({
                    omwaka: obu.omwaka,
                    omwezi: ezooba,
                    olunaku: olunaku,
                    enzingu: enzingu,
                    akagata: akagata
                });

            case E_KALE.bsm:
                enzingu = funaEnzingu(obu.enzingu, E_LUNA.b);
                ezooba = funaAmazooba(obu.omwezi, E_MWEZ.bs);

                return funaEndabikaKuBiseela({
                    omwaka: obu.omwaka,
                    omwezi: ezooba,
                    olunaku: olunaku,
                    enzingu: enzingu,
                    akagata: akagata
                });

            case E_KALE.lsd:
                enzingu = funaEnzingu(obu.enzingu, E_LUNA.ls);
                ezooba = funaAmazooba(obu.omwezi, E_MWEZ.l);

                return funaEndabikaKuBiseela({
                    omwaka: obu.omwaka,
                    omwezi: ezooba,
                    olunaku: olunaku,
                    enzingu: enzingu,
                    akagata: akagata
                });

            case E_KALE.lsm:
                enzingu = funaEnzingu(obu.enzingu, E_LUNA.l);
                ezooba = funaAmazooba(obu.omwezi, E_MWEZ.ls);

                return funaEndabikaKuBiseela({
                    omwaka: obu.omwaka,
                    omwezi: ezooba,
                    olunaku: olunaku,
                    enzingu: enzingu,
                    akagata: akagata
                });

            case E_KALE.km:
                ezooba = funaAmazooba(obu.omwezi, E_MWEZ.m);

                return funaEndabikaKuBiseelaMuBufunze1({
                    omwaka: obu.omwaka,
                    omwezi: ezooba,
                    olunaku: olunaku,
                    akagata: akagata
                });

            case E_KALE.kl:
                ezooba = funaAmazooba(obu.omwezi, E_MWEZ.l);

                return funaEndabikaKuBiseelaMuBufunze1({
                    omwaka: obu.omwaka,
                    omwezi: ezooba,
                    olunaku: olunaku,
                    akagata: akagata
                });

            case E_KALE.kb:
                ezooba = funaAmazooba(obu.omwezi, E_MWEZ.b);

                return funaEndabikaKuBiseelaMuBufunze1({
                    omwaka: obu.omwaka,
                    omwezi: ezooba,
                    olunaku: olunaku,
                    akagata: akagata
                });

            case E_KALE.kms:
                ezooba = funaAmazooba(obu.omwezi, E_MWEZ.ms);

                return funaEndabikaKuBiseelaMuBufunze2({
                    omwaka: obu.omwaka,
                    omwezi: ezooba,
                    olunaku: olunaku,
                    akagata: akagata
                });

            case E_KALE.kls:
                ezooba = funaAmazooba(obu.omwezi, E_MWEZ.ls);

                return funaEndabikaKuBiseelaMuBufunze2({
                    omwaka: obu.omwaka,
                    omwezi: ezooba,
                    olunaku: olunaku,
                    akagata: akagata
                });

            case E_KALE.kbs:
                ezooba = funaAmazooba(obu.omwezi, E_MWEZ.bs);

                return funaEndabikaKuBiseelaMuBufunze2({
                    omwaka: obu.omwaka,
                    omwezi: ezooba,
                    olunaku: olunaku,
                    akagata: akagata
                });

            default:
                throw new Error('endabika temanyidwa');
        }
    }
};

// sengeka endabika okusinziira ebyokwelobozesaako
sengekaEbyokwelobozesaakoKuSsaawa = (ess, eky) => {

    if ((eky.endabika in ENDABIKA.ESSAAWA) === false) {
        throw new Error('endabika ya essaawa temanyiddwa');
    } else {

        let sawayange = funaEssaawa(ess.essaawa, eky.endabika),
            akagambo = eky.akagambo === '' ? funaAkagamboAkagata(sawayange, eky.endabika) : eky.akagambo,
            endab = '';

        if (eky.obufunze === 'e') {
            // funa essaawa, eddakiika byokka  
            sawayange = `${sawayange}:${ess.eddakiika}`;
        } else if (eky.obufunze === 'ee') {
            // funa essaawa zokka
            sawayange = `${sawayange}`;
        } else {
            // funa essaawa, eddakiika ne akatikitiki
            sawayange = `${sawayange}:${ess.eddakiika}:${ess.akatikitiki}`;
        }

        switch (eky.endabika) {
            case E_KATI.m:
            case E_KATI.ms:
            case E_KATI.b:
            case E_KATI.bs:
            case E_KATI.p:
            case E_KATI.ps:
                return sawayange;

            case E_KATI.mk:
            case E_KATI.mks:
            case E_KATI.bk:
            case E_KATI.bks:
                endab = funaEkigelo(sawayange, E_KIGE.k);
                return `${sawayange}${akagambo}${endab}`;

            case E_KATI.mn:
            case E_KATI.mns:
            case E_KATI.bn:
            case E_KATI.bns:
                endab = funaEkigelo(sawayange, E_KIGE.n);
                return `${sawayange}${akagambo}${endab}`;

            case E_KATI.mt:
            case E_KATI.mts:
            case E_KATI.bt:
            case E_KATI.bts:
                endab = funaEkigelo(sawayange, E_KIGE.t);
                return `${sawayange}${akagambo}${endab}`;

            default:
                throw new Error('endabika ya essaawa temanyiddwa');
        }
    }
};

$.ebiseelaNeEssaawa.leero = (ebyokwelobozesaako) => {

    let obudde = new Date(),
        olunakuLwaWiiki = obudde.getDay(),
        olunakuLwaOmwezi = obudde.getDate(),
        omwezi = obudde.getMonth(),
        omwaka = obudde.getFullYear();

    ebyokwelobozesaako = funaEbyokwelobozesaakoEbisuubilwa(ebyokwelobozesaako);

    return sengekaEbyokwelobozesaakoKuBiseela({
        enzingu: olunakuLwaWiiki,
        olunaku: olunakuLwaOmwezi,
        omwezi: omwezi,
        omwaka: omwaka
    }, ebyokwelobozesaako);
};

$.ebiseelaNeEssaawa.kaati = (ebyokwelobozesaako) => {

    ebyokwelobozesaako = funaEbyokwelobozesaakoEbisuubilwa(ebyokwelobozesaako);

    let sawa = new Date(),
        sawayange = sawa.getHours(),
        eddakiika = sawa.getMinutes(),
        akatikitiki = sawa.getSeconds();

    ebyokwelobozesaako.obufunze = '';
    if (ebyokwelobozesaako.endabika.endsWith('e')) {
        if (ebyokwelobozesaako.endabika.endsWith('ee')) {
            // funa essaawa zokka
            ebyokwelobozesaako.obufunze = 'ee';
        } else {
            // funa essaawa, eddakiika byokka  
            ebyokwelobozesaako.obufunze = 'e'
        }
    }

    // sosolamu 'e' zzonna okuva mundabika
    ebyokwelobozesaako.endabika = ebyokwelobozesaako.endabika.replace('e', '');

    return sengekaEbyokwelobozesaakoKuSsaawa({
        essaawa: sawayange,
        eddakiika: eddakiika,
        akatikitiki: akatikitiki
    }, ebyokwelobozesaako);
};

$.ebiseelaNeEssaawa.ekiseela = (omwaka, omwezi, olunaku, ebyokwelobozesaako) => {

    ebyokwelobozesaako = funaEbyokwelobozesaakoEbisuubilwa(ebyokwelobozesaako);

    let obudde = new Date(omwaka, omwezi, olunaku),
        olunakuLwaWiiki = obudde.getDay() - 1; // ttoolako olunaku lumu kubanga tutandikira kubalira to zzeelo

    return sengekaEbyokwelobozesaakoKuBiseela({
        enzingu: olunakuLwaWiiki,
        olunaku: olunaku,
        omwezi: omwezi,
        omwaka: omwaka
    }, ebyokwelobozesaako);
};

$.ebiseelaNeEssaawa.omwezi = (nnam, ebyokwelobozesaako) => {
    ebyokwelobozesaako = funaEbyokwelobozesaakoEbisuubilwa(ebyokwelobozesaako);
    return funaAmazooba(nnam, ebyokwelobozesaako.endabika);
};

$.ebiseelaNeEssaawa.olunaku = (nnam, ebyokwelobozesaako) => {
    ebyokwelobozesaako = funaEbyokwelobozesaakoEbisuubilwa(ebyokwelobozesaako);
    return funaEnzingu(nnam, ebyokwelobozesaako.endabika);
};

$.ebiseelaNeEssaawa.essaawa = (nnam, ebyokwelobozesaako) => {
    ebyokwelobozesaako = funaEbyokwelobozesaakoEbisuubilwa(ebyokwelobozesaako);
    return funaEssaawa(nnam, ebyokwelobozesaako.endabika);
};

$.ebiseelaNeEssaawa.ekigelo = (nnam, ebyokwelobozesaako) => {
    ebyokwelobozesaako = funaEbyokwelobozesaakoEbisuubilwa(ebyokwelobozesaako);

    if ((ebyokwelobozesaako.endabika in ENDABIKA.EKIGELO) === false) {
        throw new Error('endabika ya ekigelo temanyiddwa');
    } else {
        return funaEkigelo(nnam, ebyokwelobozesaako.endabika);
    }
};

$.ebiseelaNeEssaawa.ebyokwelobozesaako = {
    endabika: 'm',
    akagata: '',
    akagambo: ''
};