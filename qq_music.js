require('./info');

// 在这里使用 demo2.js 中的代码

!function(e) {
    function t(t) {
        for (var a, n, f = t[0], i = t[1], d = t[2], l = 0, s = []; l < f.length; l++)
            n = f[l],
            Object.prototype.hasOwnProperty.call(o, n) && o[n] && s.push(o[n][0]),
            o[n] = 0;
        for (a in i)
            Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a]);
        for (u && u(t); s.length; )
            s.shift()();
        return c.push.apply(c, d || []),
        r()
    }
    function r() {
        for (var e, t = 0; t < c.length; t++) {
            for (var r = c[t], a = !0, n = 1; n < r.length; n++) {
                var i = r[n];
                0 !== o[i] && (a = !1)
            }
            a && (c.splice(t--, 1),
            e = f(f.s = r[0]))
        }
        return e
    }
    var a = {}
      , n = {
        20: 0
    }
      , o = {
        20: 0
    }
      , c = [];
    function f(t) {
        if (a[t])
            return a[t].exports;
        var r = a[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(r.exports, r, r.exports, f),
        r.l = !0,
        r.exports
    }
    f.e = function(e) {
        var t = [];
        n[e] ? t.push(n[e]) : 0 !== n[e] && {
            1: 1,
            3: 1,
            4: 1,
            5: 1,
            6: 1,
            7: 1,
            8: 1,
            9: 1,
            10: 1,
            11: 1,
            12: 1,
            13: 1,
            14: 1,
            15: 1,
            16: 1,
            17: 1,
            18: 1,
            19: 1,
            21: 1,
            22: 1,
            23: 1,
            24: 1,
            25: 1
        }[e] && t.push(n[e] = new Promise((function(t, r) {
            for (var a = "css/" + ({
                1: "common",
                3: "album",
                4: "albumDetail",
                5: "album_mall",
                6: "category",
                7: "cmtpage",
                8: "index",
                9: "msg_center",
                10: "mv",
                11: "mvList",
                12: "mv_toplist",
                13: "notfound",
                14: "player",
                15: "player_radio",
                16: "playlist",
                17: "playlist_edit",
                18: "profile",
                19: "radio",
                21: "search",
                22: "singer",
                23: "singer_list",
                24: "songDetail",
                25: "toplist"
            }[e] || e) + "." + {
                1: "9671851e017cc520b5ec",
                3: "5cf0d69eaf29bcab23d2",
                4: "798353db5b0eb05d5358",
                5: "df4c243f917604263e58",
                6: "20d532d798099a44bc88",
                7: "e3bedf2b5810f8db0684",
                8: "ea0adb959fef9011fc25",
                9: "020422608fe8bfb1719a",
                10: "8bdb1df6c5436b790baa",
                11: "47ce9300786df1b70584",
                12: "4aee33230ba2d6b81dce",
                13: "e6f63b0cf57dd029fbd6",
                14: "1d2dbefbea113438324a",
                15: "d893492de07ce97d8048",
                16: "9484fde660fe93d9f9f0",
                17: "67fb85e7f96455763c83",
                18: "5e8c651e74b13244f7cf",
                19: "3befd83c10b19893ec66",
                21: "b2d11f89ea6a512a2302",
                22: "c7a38353c5f4ebb47491",
                23: "df0961952a2d3f022894",
                24: "4c080567e394fd45608b",
                25: "8edb142553f97482e00f"
            }[e] + ".chunk.css?max_age=2592000", o = f.p + a, c = document.getElementsByTagName("link"), i = 0; i < c.length; i++) {
                var d = (u = c[i]).getAttribute("data-href") || u.getAttribute("href");
                if ("stylesheet" === u.rel && (d === a || d === o))
                    return t()
            }
            var l = document.getElementsByTagName("style");
            for (i = 0; i < l.length; i++) {
                var u;
                if ((d = (u = l[i]).getAttribute("data-href")) === a || d === o)
                    return t()
            }
            var s = document.createElement("link");
            s.rel = "stylesheet",
            s.type = "text/css",
            s.onload = t,
            s.onerror = function(t) {
                var a = t && t.target && t.target.src || o
                  , c = new Error("Loading CSS chunk " + e + " failed.\n(" + a + ")");
                c.code = "CSS_CHUNK_LOAD_FAILED",
                c.request = a,
                delete n[e],
                s.parentNode.removeChild(s),
                r(c)
            }
            ,
            s.href = o,
            0 !== s.href.indexOf(window.location.origin + "/") && (s.crossOrigin = "anonymous"),
            document.getElementsByTagName("head")[0].appendChild(s)
        }
        )).then((function() {
            n[e] = 0
        }
        )));
        var r = o[e];
        if (0 !== r)
            if (r)
                t.push(r[2]);
            else {
                var a = new Promise((function(t, a) {
                    r = o[e] = [t, a]
                }
                ));
                t.push(r[2] = a);
                var c, i = document.createElement("script");
                i.charset = "utf-8",
                i.timeout = 120,
                f.nc && i.setAttribute("nonce", f.nc),
                i.src = function(e) {
                    return f.p + "js/" + ({
                        1: "common",
                        3: "album",
                        4: "albumDetail",
                        5: "album_mall",
                        6: "category",
                        7: "cmtpage",
                        8: "index",
                        9: "msg_center",
                        10: "mv",
                        11: "mvList",
                        12: "mv_toplist",
                        13: "notfound",
                        14: "player",
                        15: "player_radio",
                        16: "playlist",
                        17: "playlist_edit",
                        18: "profile",
                        19: "radio",
                        21: "search",
                        22: "singer",
                        23: "singer_list",
                        24: "songDetail",
                        25: "toplist"
                    }[e] || e) + ".chunk." + {
                        1: "ebe7a149384615660c5b",
                        3: "57adeab72a3ec5a6940c",
                        4: "fb9a0df49aac1081fd8b",
                        5: "ce88bd122dac655490ca",
                        6: "61e9cda365918e62c56a",
                        7: "d1f5d3bb80ee8f19b2e1",
                        8: "f6087ccdc75b061ed139",
                        9: "2a7c708a45a64a5e16a6",
                        10: "ee53681d6f5f8e5d8085",
                        11: "c925c75c1a05b9bd0958",
                        12: "05c8cac12541d9e063bb",
                        13: "e8b9a6dad95b623cab82",
                        14: "8d908157e24f028f0e28",
                        15: "4bc220500f83ecf5d4c0",
                        16: "4e90681d2ce0ba4a2884",
                        17: "72dfb28846b85bcce963",
                        18: "75c0a2317c5f30583651",
                        19: "89e9600c87d40494d2a0",
                        21: "dac8e2e218f6e40164ee",
                        22: "f727873408f9d38f3265",
                        23: "1fa9992cf45f54603a69",
                        24: "4e38573b87120e0a3b0a",
                        25: "7730902602801ab48700"
                    }[e] + ".js?max_age=2592000"
                }(e),
                0 !== i.src.indexOf(window.location.origin + "/") && (i.crossOrigin = "anonymous");
                var d = new Error;
                c = function(t) {
                    i.onerror = i.onload = null,
                    clearTimeout(l);
                    var r = o[e];
                    if (0 !== r) {
                        if (r) {
                            var a = t && ("load" === t.type ? "missing" : t.type)
                              , n = t && t.target && t.target.src;
                            d.message = "Loading chunk " + e + " failed.\n(" + a + ": " + n + ")",
                            d.name = "ChunkLoadError",
                            d.type = a,
                            d.request = n,
                            r[1](d)
                        }
                        o[e] = void 0
                    }
                }
                ;
                var l = setTimeout((function() {
                    c({
                        type: "timeout",
                        target: i
                    })
                }
                ), 12e4);
                i.onerror = i.onload = c,
                document.head.appendChild(i)
            }
        return Promise.all(t)
    }
    ,
    f.m = e,
    f.c = a,
    f.d = function(e, t, r) {
        f.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }
    ,
    f.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    f.t = function(e, t) {
        if (1 & t && (e = f(e)),
        8 & t)
            return e;
        if (4 & t && "object" === typeof e && e && e.__esModule)
            return e;
        var r = Object.create(null);
        if (f.r(r),
        Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var a in e)
                f.d(r, a, function(t) {
                    return e[t]
                }
                .bind(null, a));
        return r
    }
    ,
    f.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return f.d(t, "a", t),
        t
    }
    ,
    f.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    f.p = "/ryqq/",
    f.oe = function(e) {
        throw e
    }
    ;
    var i = window.webpackJsonp = window.webpackJsonp || []
      , d = i.push.bind(i);
    i.push = t,
    i = i.slice();
    for (var l = 0; l < i.length; l++)
        t(i[l]);
    var u = d;
    r()
    zhencheng = f;
}([]);


var F = {
    type: "GET",
    data: {},
    dataType: "json",
    beforeSend: null,
    success: null,
    error: null,
    complete: null,
    accepts: {
        script: "text/javascript, application/javascript, application/x-javascript",
        json: "application/json",
        xml: "application/xml, text/xml",
        html: "text/html",
        text: "text/plain"
    },
    crossDomain: !0,
    time: 0
}
b = function(e) {
    return "[object Object]" === Object.prototype.toString.call(e)
}
E = function(e) {
    return b(e) && null !== e && e !== e.window && Object.getPrototypeOf(e) === Object.prototype
}
k = function(e) {
    for (var t, n = !1, r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
        i[o - 1] = arguments[o];
    "boolean" === typeof e ? (n = e,
    t = i.shift()) : t = e;
    var a = function e(t, n, r) {
        Object.keys(n).forEach((function(i) {
            var o = n[i];
            r && E(o) || Array.isArray(o) ? (E(o) && !E(t[i]) && (t[i] = {}),
            Array.isArray(n[i]) && !Array.isArray(t[i]) && (t[i] = []),
            e(t[i], n[i], r)) : void 0 !== o && (t[i] = o)
        }
        ))
    };
    return i.forEach((function(e) {
        a(t, e, n)
    }
    )),
    t
}
A = function(e, t) {
    if (t = t || window.location.href,
    "object" !== typeof e && !e)
        return t;
    var n = e;
    return "object" === typeof e && (n = [],
    Object.keys(e).forEach((function(t) {
        n.push(encodeURIComponent(t) + "=" + encodeURIComponent(e[t]))
    }
    )),
    n = n.join("&")),
    t = /\?/.test(t) || /#/.test(t) ? /\?/.test(t) && !/#/.test(t) ? t + "&" + n : !/\?/.test(t) && /#/.test(t) ? t.replace("#", "?" + n + "#") : t.replace("?", "?" + n + "&") : t + "?" + n
}
function sign(g_tk, songmid, songid, albumMid, guid1, guid2) {
    var y = {
        "isBrowser": true,
        "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 Edg/114.0.1823.82",
        "version": 0,
        "client": "pc"
    }
    // json序列化
    var e= {
        "data": {
            "comm": {
                "cv": 4747474,
                "ct": 24,
                "format": "json",
                "inCharset": "utf-8",
                "outCharset": "utf-8",
                "notice": 0,
                "platform": "yqq.json",
                "needNewCode": 1,
                "uin": 0,
                "g_tk_new_20200303": parseInt(g_tk),
                "g_tk": parseInt(g_tk)
            },
            "req_1": {
                "module": "vkey.GetVkeyServer",
                "method": "CgiGetVkey",
                "param": {
                    "guid": guid1.toString(),
                    "songmid": [
                        songmid.toString()
                    ],
                    "songtype": [
                        0
                    ],
                    "uin": "0",
                    "loginflag": 1,
                    "platform": "20"
                }
            },
            "req_2": {
                "module": "music.musicasset.SongFavRead",
                "method": "IsSongFanByMid",
                "param": {
                    "v_songMid": [
                        songmid.toString()
                    ]
                }
            },
            "req_3": {
                "module": "music.musichallSong.PlayLyricInfo",
                "method": "GetPlayLyricInfo",
                "param": {
                    "songMID": songmid.toString(),
                    "songID": parseInt(songid)
                }
            },
            "req_4": {
                "method": "GetCommentCount",
                "module": "music.globalComment.GlobalCommentRead",
                "param": {
                    "request_list": [
                        {
                            "biz_type": 1,
                            "biz_id": songid.toString(),
                            "biz_sub_type": 0
                        }
                    ]
                }
            },
            "req_5": {
                "module": "music.musichallAlbum.AlbumInfoServer",
                "method": "GetAlbumDetail",
                "param": {
                    "albumMid": albumMid.toString()
                }
            },
            "req_6": {
                "module": "vkey.GetVkeyServer",
                "method": "CgiGetVkey",
                "param": {
                    "guid": guid2.toString(),
                    "songmid": [
                        songmid.toString()
                    ],
                    "songtype": [
                        0
                    ],
                    "uin": "0",
                    "loginflag": 1,
                    "platform": "20"
                }
            }
        },
        "time": 10000,
        "withCredentials": true,
        "cache": false,
        "url": "//u.y.qq.com/cgi-bin/musicu.fcg",
        "postType": true,
        "type": "POST",
        "needSign": true
    }
    var t = k(!0, {}, F, e)
          , r = t.dataType.toLowerCase();
        if (t.url = A({
            _: Date.now()
        }, t.url),
        "GET" === t.type.toUpperCase() ? (t.url = A(t.data, t.url),
        t.data = void 0) : "string" === typeof t.data || t.data instanceof FormData || (t.data = JSON.stringify(t.data)),
        t.needSign && -1 !== t.url.indexOf("cgi-bin/musicu.fcg") && y.isBrowser && (t.url = t.url.replace("cgi-bin/musicu.fcg", "cgi-bin/musics.fcg")),
        -1 !== t.url.indexOf("cgi-bin/musics.fcg")) {
            var i, o = zhencheng(350).default;
            i = "GET" === t.type.toUpperCase() ? o(t.data.data) : o(t.data);
            t.url = A({
                sign: i
            }, t.url)
        }
        return i
}
function get_guid(){
    var a = (new Date).getUTCMilliseconds(),
    a = String(Math.round(2147483647 * Math.random()) * a % 1e10)
    return a
}


